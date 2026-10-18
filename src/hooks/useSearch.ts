import { useState, useMemo } from 'react';
import { SearchResult, SearchCategory } from '../types/search';
import { buildSearchIndex } from '../data/searchIndex';

export interface UseSearchOptions {
  categoryFilter?: SearchCategory | 'all';
  limit?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const { categoryFilter = 'all', limit = 20 } = options;
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const results: SearchResult[] = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    // Filter by category first if specified
    const pool = categoryFilter === 'all' 
      ? searchIndex 
      : searchIndex.filter((item) => item.category === categoryFilter);

    if (!trimmed) {
      // Empty query: return all pool items (or top items) with neutral score
      return pool.slice(0, limit).map((item) => ({
        item,
        score: 0,
        matchedField: 'title' as const,
      }));
    }

    const tokens = trimmed.split(/\s+/).filter(Boolean);
    const scoredList: SearchResult[] = [];

    for (const item of pool) {
      let score = 0;
      let matchedField: 'title' | 'description' | 'tags' | 'category' = 'title';

      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const tagsJoined = (item.tags || []).join(' ').toLowerCase();
      const catLower = item.category.toLowerCase();

      // Check if all tokens match anywhere in the item
      const allTokensMatch = tokens.every(
        (tok) =>
          titleLower.includes(tok) ||
          descLower.includes(tok) ||
          tagsJoined.includes(tok) ||
          catLower.includes(tok)
      );

      if (!allTokensMatch) continue;

      // Scoring criteria
      if (titleLower === trimmed) {
        score += 150;
        matchedField = 'title';
      } else if (titleLower.startsWith(trimmed)) {
        score += 100;
        matchedField = 'title';
      } else if (titleLower.includes(trimmed)) {
        score += 80;
        matchedField = 'title';
      } else if (tagsJoined.includes(trimmed)) {
        score += 60;
        matchedField = 'tags';
      } else if (descLower.includes(trimmed)) {
        score += 40;
        matchedField = 'description';
      } else {
        score += 20;
        matchedField = 'category';
      }

      // Bonus points for individual token positions
      tokens.forEach((tok) => {
        if (titleLower.includes(tok)) score += 15;
        if (tagsJoined.includes(tok)) score += 10;
      });

      scoredList.push({ item, score, matchedField });
    }

    // Sort descending by score
    scoredList.sort((a, b) => b.score - a.score);

    return scoredList.slice(0, limit);
  }, [query, categoryFilter, limit, searchIndex]);

  // Grouped results for categorized display
  const groupedResults = useMemo(() => {
    const groups: Record<SearchCategory, SearchResult[]> = {
      projects: [],
      navigation: [],
      skills: [],
      uses: [],
    };

    results.forEach((res) => {
      groups[res.item.category].push(res);
    });

    return groups;
  }, [results]);

  const handleNext = () => {
    if (results.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % results.length);
  };

  const handlePrev = () => {
    if (results.length === 0) return;
    setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return {
    query,
    setQuery,
    results,
    groupedResults,
    selectedIndex,
    setSelectedIndex,
    handleNext,
    handlePrev,
    totalItems: searchIndex.length,
  };
}
