import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/Common';
import { Footer } from '../components/footer/Footer';
import { ProjectCard } from '../components/projects/ProjectCard';
import { allProjects } from '../data/projects';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';

export const ProjectsLayout: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container" style={{ marginTop: '30px' }}>
      <section className="project-section">
        <SectionTitle>My Projects</SectionTitle>

        {allProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}

        <div
          className="view-all-projects"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '32px',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <Link to="/" className="view-all-btn" aria-label="back to home">
            <FaArrowLeft className="arrow-icon" style={{ marginRight: '6px' }} size={12} />
            <span>Back to Home</span>
          </Link>

          <a
            href="https://github.com/tilakchow?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
            aria-label="View on GitHub"
          >
            <FaGithub className="arrow-icon" style={{ marginRight: '6px' }} size={13} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsLayout;
