import React, { useEffect, useRef, useState } from 'react';
import {
  Search as SearchIcon,
  X,
  FolderGit2,
  Compass,
  Code2,
  Wrench,
  ArrowRight,
  ExternalLink,
  CornerDownLeft,
} from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchCategory, SearchItem } from '../../types/search';
import './Search.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (item: SearchItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [activeTab, setActiveTab] = useState<SearchCategory | 'all'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const {
    query,
    setQuery,
    results,
    groupedResults,
    selectedIndex,
    setSelectedIndex,
    handleNext,
    handlePrev,
  } = useSearch({
    categoryFilter: activeTab,
    limit: 30,
  });

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, setQuery, setSelectedIndex]);

  // Keep selected element in view
  useEffect(() => {
    const container = resultsContainerRef.current;
    if (!container) return;
    const selectedEl = container.querySelector('.search-result-item.selected') as HTMLElement;
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  // Handle keyboard events inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleItemClick(results[selectedIndex].item);
      }
    }
  };

  const handleItemClick = (item: SearchItem) => {
    if (onSelect) {
      onSelect(item);
    }
    if (item.url) {
      if (item.external) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
        const target = document.querySelector(item.url);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = item.url;
        }
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  const renderIcon = (category: SearchCategory) => {
    switch (category) {
      case 'projects':
        return <FolderGit2 size={16} />;
      case 'navigation':
        return <Compass size={16} />;
      case 'skills':
        return <Code2 size={16} />;
      case 'uses':
        return <Wrench size={16} />;
    }
  };

  // Build flattened list of items for index matching
  let runningIndex = 0;

  return (
    <div
      className="search-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Universal Search and Command Palette"
    >
      <div className="search-modal-container" onKeyDown={handleKeyDown}>
        {/* Input Bar */}
        <div className="search-input-wrapper">
          <SearchIcon size={18} className="search-input-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input-field"
            placeholder="Type a command or search (projects, skills, pages)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            id="search-palette-input"
          />
          {query && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              aria-label="Clear query"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="search-category-tabs">
          {(['all', 'projects', 'navigation', 'skills', 'uses'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              className={`search-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                setSelectedIndex(0);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="search-results-list" ref={resultsContainerRef}>
          {results.length === 0 ? (
            <div className="search-empty-state">
              <SearchIcon size={32} className="search-empty-icon" />
              <div className="search-empty-title">No results found for "{query}"</div>
              <p>Try searching for project names, technologies like "React" or "Python", or gear.</p>
            </div>
          ) : (
            (['projects', 'navigation', 'skills', 'uses'] as SearchCategory[]).map((cat) => {
              const catResults = groupedResults[cat];
              if (!catResults || catResults.length === 0) return null;

              return (
                <div key={cat} className="search-category-group">
                  <div className="search-group-header">
                    {cat.toUpperCase()} ({catResults.length})
                  </div>
                  {catResults.map((res) => {
                    const currentIndex = runningIndex++;
                    const isSelected = currentIndex === selectedIndex;

                    return (
                      <div
                        key={res.item.id}
                        className={`search-result-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleItemClick(res.item)}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                      >
                        <div className="search-item-left">
                          <div className="search-item-icon-box">
                            {renderIcon(res.item.category)}
                          </div>
                          <div className="search-item-info">
                            <div className="search-item-title-row">
                              <span className="search-item-title">{res.item.title}</span>
                              {res.item.external && (
                                <ExternalLink size={12} className="search-input-icon" />
                              )}
                            </div>
                            <span className="search-item-desc">{res.item.description}</span>
                          </div>
                        </div>

                        <div className="search-item-right">
                          {res.item.tags && res.item.tags.length > 0 && (
                            <span className="search-item-tag">{res.item.tags[0]}</span>
                          )}
                          {isSelected ? (
                            <CornerDownLeft size={14} className="search-input-icon" />
                          ) : (
                            <ArrowRight size={14} style={{ opacity: 0.2 }} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="search-modal-footer">
          <div className="search-footer-shortcuts">
            <span className="search-shortcut-badge">
              <span className="kbd">↑</span>
              <span className="kbd">↓</span>
              <span>Navigate</span>
            </span>
            <span className="search-shortcut-badge">
              <span className="kbd">↵</span>
              <span>Select</span>
            </span>
            <span className="search-shortcut-badge">
              <span className="kbd">Esc</span>
              <span>Close</span>
            </span>
          </div>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
};
