import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/Common';
import { featuredProjects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

export const Projects: React.FC = () => {
  return (
    <section className="project-section" id="projects">
      <SectionTitle>My Projects</SectionTitle>

      {featuredProjects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}

      <div className="view-all-projects right-side">
        <Link to="/projects" className="view-all-btn" aria-label="More Projects">
          <span>More Projects</span>
          <FaArrowRight className="arrow-icon" size={11} style={{ marginLeft: '4px' }} />
        </Link>
      </div>
    </section>
  );
};
