import React from 'react';
import { ProjectData } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard: React.FC<ProjectData> = ({
  banner,
  name,
  desc,
  tech,
  github,
  live,
  stats,
  bannerFit,
  bannerBg,
}) => {
  return (
    <div className="project-card">
      <div
        className="banner"
        style={bannerBg ? { background: bannerBg, borderRadius: '4px' } : undefined}
      >
        <img
          src={banner}
          alt={name}
          loading="lazy"
          decoding="async"
          style={bannerFit ? { objectFit: bannerFit } : undefined}
        />
        {stats && (
          <div className="stats-badge">
            <span className="stats-text">{stats}</span>
          </div>
        )}
      </div>

      <div className="project-details">
        <div className="project-header-row">
          <div className="project-name">{name}</div>
          <div className="project-link-icons">
            {live && (
              <a
                className="project-pill"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt style={{ marginRight: '4px' }} size={11} />
                Live
              </a>
            )}
            <a
              className="project-pill"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: '4px' }} size={13} />
              GitHub
            </a>
          </div>
        </div>

        <div className="project-desc">{desc}</div>

        <span className="project-tech-label">Technologies Used:</span>
        <div className="project-tech">
          {tech.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
