import React from 'react';
import { skillsData } from '../data/skills';
import { usesData } from '../data/uses';
import './Sections.css';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="content-section">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">Core languages, cloud platforms, and architecture proficiencies.</p>
      </div>

      <div className="skills-categories-grid">
        {skillsData.map((cat) => (
          <div key={cat.category} className="skills-category-card">
            <h3 className="category-title">{cat.category}</h3>
            <div className="skills-pill-list">
              {cat.skills.map((s) => (
                <div key={s.name} className="skill-pill">
                  <span className="skill-dot" style={{ backgroundColor: s.color }} />
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-level">{s.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const UsesSection: React.FC = () => {
  return (
    <section id="uses" className="content-section">
      <div className="section-header">
        <h2 className="section-title">Gear & Tooling</h2>
        <p className="section-subtitle">Hardware and software used daily for development and research.</p>
      </div>

      <div className="uses-grid">
        {usesData.map((cat) => (
          <div key={cat.category} className="uses-category-card">
            <h3 className="category-title">{cat.category}</h3>
            <div className="uses-items-list">
              {cat.items.map((item) => (
                <div key={item.name} className="uses-item-row">
                  <div className="uses-item-label">{item.label}</div>
                  <div className="uses-item-body">
                    <span className="uses-item-name">{item.name}</span>
                    {item.desc && <span className="uses-item-desc">{item.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
