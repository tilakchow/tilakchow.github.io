import React from 'react';
import { SectionTitle } from '../common/Common';
import { usesData } from '../../data/uses';
import './UsesSection.css';

export const UsesSection: React.FC = () => {
  return (
    <section className="uses-section standard-container" id="uses">
      <SectionTitle>Stack & Hardware</SectionTitle>

      <div className="uses-categories">
        {usesData.map((category) => (
          <div key={category.category} className="uses-category-block">
            <h3 className="uses-category-heading">{category.category}</h3>
            <div className="uses-items-list">
              {category.items.map((item) => (
                <div key={item.name} className="uses-item-card">
                  <div className="uses-item-label">{item.label}</div>
                  <div className="uses-item-name">{item.name}</div>
                  {item.desc && <div className="uses-item-desc">{item.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
