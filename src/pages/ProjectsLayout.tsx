import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/Common';
import { Footer } from '../components/footer/Footer';
import { ProjectCard } from '../components/projects/ProjectCard';
import { allProjects } from '../data/projects';
import { FaArrowLeft } from 'react-icons/fa';

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

export default ProjectsLayout;
