import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../common/Common';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link-active' : ''}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'navbar-link-active' : ''}`
            }
          >
            Resume
          </NavLink>
        </nav>

        <div className="navbar-right-actions">
          {/* Search Trigger */}
          <Tooltip text="Search portfolio (Ctrl+K)" position="bottom">
            <button
              type="button"
              className="navbar-search-btn"
              onClick={onOpenSearch}
              aria-label="Search"
            >
              <FaSearch size={12} />
              <span>Search</span>
              <span className="navbar-kbd">⌘K</span>
            </button>
          </Tooltip>

          {/* Star Button */}
          <Tooltip text="Give A Star Please" position="bottom">
            <a
              href="https://github.com/tilakchow"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-star"
              aria-label="Star this portfolio on GitHub"
            >
              <img
                src="/images/star.png"
                alt=""
                className="navbar-star-icon"
                style={{ width: '16px', height: '16px', objectFit: 'contain' }}
              />
              <span>Open-source</span>
            </a>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};
