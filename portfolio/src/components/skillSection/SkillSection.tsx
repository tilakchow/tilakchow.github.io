import React from 'react';
import { SectionTitle } from '../common/Common';
import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiLangchain,
  SiPytorch,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPandas,
  SiNumpy,
  SiLinux,
  SiTypescript,
  SiReact,
} from 'react-icons/si';
import { FaBrain, FaRobot, FaDatabase, FaServer, FaCode } from 'react-icons/fa';
import { RiOpenaiFill } from 'react-icons/ri';

const skillsRow1 = [
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'LangChain', icon: <SiLangchain />, color: '#1c3c3c' },
  { name: 'LangGraph', icon: <FaBrain />, color: '#a855f7' },
  { name: 'FastAPI', icon: <SiFastapi />, color: '#05998b' },
  { name: 'Advanced RAG', icon: <FaDatabase />, color: '#38bdf8' },
  { name: 'AI Agents', icon: <FaRobot />, color: '#f59e0b' },
  { name: 'OpenAI API', icon: <RiOpenaiFill />, color: '#ffffff' },
  { name: 'PyTorch', icon: <SiPytorch />, color: '#ee4c2c' },
  { name: 'React', icon: <SiReact />, color: '#61dafb' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
];

const skillsRow2 = [
  { name: 'FAISS', icon: <FaServer />, color: '#3b82f6' },
  { name: 'ChromaDB', icon: <FaDatabase />, color: '#ff6f61' },
  { name: 'pgvector', icon: <SiPostgresql />, color: '#4169e1' },
  { name: 'LangSmith', icon: <FaCode />, color: '#10b981' },
  { name: 'RAGAS', icon: <FaBrain />, color: '#ec4899' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
  { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
  { name: 'Git', icon: <SiGit />, color: '#f05032' },
  { name: 'Linux', icon: <SiLinux />, color: '#fcc624' },
];

export const SkillSection: React.FC = () => {
  return (
    <section className="skill-section">
      <SectionTitle>My Skills</SectionTitle>

      <div className="marquee-container">
        <div className="marquee">
          {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((s, idx) => (
            <div key={`r1-${idx}`} className="skill-chip">
              <span className="skill-chip-icon" style={{ color: s.color }}>
                {s.icon}
              </span>
              <span className="skill-chip-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-container" style={{ marginTop: '12px' }}>
        <div className="marquee marquee-reverse">
          {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((s, idx) => (
            <div key={`r2-${idx}`} className="skill-chip">
              <span className="skill-chip-icon" style={{ color: s.color }}>
                {s.icon}
              </span>
              <span className="skill-chip-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
