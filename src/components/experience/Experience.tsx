import React, { useState } from 'react';
import { SectionTitle } from '../common/Common';
import { FaChevronDown, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { GitHubCalendar } from '../calendar/Calendar';

interface ExpLink {
  url: string;
}

interface ExpItemProps {
  company: string;
  role: string;
  dates: string;
  status: 'present' | 'past' | 'future';
  logoUrl?: string;
  links?: ExpLink[];
  description: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpCard: React.FC<ExpItemProps> = ({
  company,
  role,
  dates,
  status,
  logoUrl,
  links,
  description,
  isExpanded,
  onToggle,
}) => {
  const dotClass =
    status === 'past'
      ? 'exp-timeline-dot past'
      : status === 'future'
      ? 'exp-timeline-dot future'
      : 'exp-timeline-dot present';

  const hasBullets = description && description.length > 0;

  return (
    <div className="exp-timeline-item">
      <div className={dotClass} />
      <div className="exp-card">
        <div className="exp-header">
          <div className="exp-header-left">
            <div className="exp-logo" style={{ background: '#ffffff', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={`${company} logo`}
                  className="exp-logo-img"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <FaBriefcase size={14} color="#71767b" />
              )}
            </div>
            <div className="exp-company-info">
              <div className="exp-company-row">
                <span className="exp-company-name">{company}</span>
                <div className="exp-company-icons">
                  {links &&
                    links.map((u, i) => (
                      <a
                        key={i}
                        href={u.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-company-link"
                        aria-label={`${company} official website`}
                      >
                        <FaExternalLinkAlt size={10} />
                      </a>
                    ))}
                  <span className={`exp-status-badge ${status}`}>
                    <span className={`exp-status-dot ${status}`}>●</span>{' '}
                    {status === 'past' ? 'Done' : status === 'future' ? 'Upcoming' : 'Active'}
                  </span>
                </div>
              </div>
              <div className="exp-role-text">{role}</div>
            </div>
          </div>

          <div className="exp-header-right">
            <div className="exp-meta">
              <span>{dates}</span>
            </div>
            {hasBullets && (
              <button
                className="exp-expand-btn"
                onClick={onToggle}
                aria-label="Toggle details"
              >
                <FaChevronDown
                  className={`exp-expand-icon ${isExpanded ? 'open' : ''}`}
                />
              </button>
            )}
          </div>
        </div>

        {hasBullets && (
          <div className={`exp-details ${isExpanded ? 'expanded' : ''}`}>
            <ul className="exp-bullets">
              {description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div>
      <section className="experience-section">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="exp-timeline-container">
          <div className="exp-timeline-line" />

          {/* Experience 1: EduSync Solutions */}
          <ExpCard
            company="EduSync Solutions"
            role="AI Engineer"
            dates="Jan 2026 - Present"
            status="present"
            logoUrl="/edusync.jpg"
            links={[{ url: 'https://edusync.in' }]}
            description={[
              'Conducting rigorous validation and stress-testing of AI-integrated ERP modules, specifically LLM-powered workflows, identifying critical edge cases and reducing pre-release defects.',
              'Partnering with cross-functional product and engineering teams to document technical requirements, verify AI feature behavior, and accelerate intelligent workflow automation deployment.',
              'Engineered an internal AI support-ticket triage prototype using Python, FastAPI, pgvector, and LLM APIs to automate categorization and reduce manual triage time.',
            ]}
            isExpanded={expandedId === 1}
            onToggle={() => setExpandedId(expandedId === 1 ? null : 1)}
          />

          {/* Experience 2: AiROBOSOFT Products and Services LLP */}
          <ExpCard
            company="AiROBOSOFT Products & Services"
            role="AI & ML Intern"
            dates="Feb 2025 - May 2025"
            status="past"
            logoUrl="/airobosoft.jpg"
            links={[{ url: 'https://airobosoft.com' }]}
            description={[
              'Built a Python-based conversational chatbot using NLP preprocessing techniques for real-time user interactions.',
              'Designed chatbot dialogue flows and response handling logic, managing structured JSON-based inputs and outputs for conversational state.',
            ]}
            isExpanded={expandedId === 2}
            onToggle={() => setExpandedId(expandedId === 2 ? null : 2)}
          />
        </div>

        {/* GitHub Contributions Heatmap */}
        <GitHubCalendar username="tilakchow" />
      </section>
    </div>
  );
};
