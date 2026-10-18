import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import './Search.css';

interface SearchBarProps {
  onOpen: () => void;
  className?: string;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onOpen,
  className = '',
  placeholder = 'Search projects, skills, tools...',
}) => {
  const isMac = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  return (
    <button
      type="button"
      className={`search-trigger-btn ${className}`}
      onClick={onOpen}
      aria-label="Open search dialog"
      id="search-trigger"
    >
      <SearchIcon size={14} className="search-input-icon" />
      <span>{placeholder}</span>
      <span className="search-trigger-badge">
        {isMac ? '⌘K' : 'Ctrl+K'}
      </span>
    </button>
  );
};
