import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/Common';
import { Footer } from '../components/footer/Footer';
import { usesData } from '../data/uses';
import { FaArrowLeft } from 'react-icons/fa';
import '../components/uses/UsesSection.css';

export const UsesLayout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container" style={{ marginTop: '30px' }}>
      <section className="uses-section standard-container">
        <SectionTitle>/uses</SectionTitle>
        <p className="resume-description" style={{ marginBottom: '24px' }}>
          Curious about my setup? Here are the tools, hardware, and engineering gear I use daily.
        </p>

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

        <div className="view-all-projects" style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '32px', marginBottom: '24px' }}>
          <Link to="/" className="view-all-btn" aria-label="back to home">
            <FaArrowLeft className="arrow-icon" style={{ marginRight: '6px' }} size={12} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UsesLayout;
