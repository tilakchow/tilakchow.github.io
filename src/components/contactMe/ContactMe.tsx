import React from 'react';
import { socialLinks } from '../../data/socialLinks';

export const ContactMeSection: React.FC = () => {
  return (
    <section className="contact-me-section">
      <div className="contact-me-card">
        <h3 className="contact-me-title">Let's Connect</h3>
        <p className="contact-me-description">
          Feel free to reach out through any of these platforms
        </p>
        <div className="contact-links">
          {socialLinks.map((a, t) => (
            <a
              key={t}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-btn"
            >
              <span className="contact-link-icon">{a.icon}</span>
              {a.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
