import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/Common';
import { FaArrowRight } from 'react-icons/fa';

export const UsesTeaser: React.FC = () => {
  return (
    <section className="project-section">
      <SectionTitle>/uses</SectionTitle>
      <div className="uses-section-content">
        <span>Curious about my setup? Check out the tools, gear, and software I use daily.</span>
        <Link to="/uses" className="uses-section-link">
          <span>See my setup</span>
          <FaArrowRight className="arrow-icon" size={11} style={{ marginLeft: '4px' }} />
        </Link>
      </div>
    </section>
  );
};
