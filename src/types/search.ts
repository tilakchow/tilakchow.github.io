export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  stats?: string;
}

export type SearchCategory = 'projects' | 'navigation' | 'skills' | 'uses';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  tags?: string[];
  url?: string;
  external?: boolean;
  icon?: string;
}

export interface SearchResult {
  item: SearchItem;
  score: number;
  matchedField: 'title' | 'description' | 'tags' | 'category';
}
