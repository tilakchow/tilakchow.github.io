import React from 'react';
import { SectionTitle } from '../common/Common';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  cgpa: string;
}

const educationList: EducationEntry[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Presidency University, Bangalore',
    years: '2023 – 2025',
    cgpa: '7.85 / 10',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: "St. Joseph's Degree & PG College",
    years: '2020 – 2023',
    cgpa: '7.6 / 10',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section className="education-section standard-container" id="education">
      <SectionTitle>Education</SectionTitle>

      <div className="education-list">
        {educationList.map((edu) => (
          <div key={edu.institution} className="education-card">
            <div className="education-card-left">
              <div className="education-icon-box">
                <FaGraduationCap size={16} color="#b3b3b3" />
              </div>
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-inst">{edu.institution}</div>
              </div>
            </div>

            <div className="education-card-right">
              <span className="education-cgpa">CGPA: {edu.cgpa}</span>
              <span className="education-years">{edu.years}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
