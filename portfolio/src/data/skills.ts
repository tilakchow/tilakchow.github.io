export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; color: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React', level: 'Advanced', color: '#61dafb' },
      { name: 'TypeScript', level: 'Advanced', color: '#3178c6' },
      { name: 'Vite', level: 'Advanced', color: '#646cff' },
      { name: 'Next.js', level: 'Proficient', color: '#ffffff' },
      { name: 'Vanilla CSS / Design Systems', level: 'Advanced', color: '#38bdf8' },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Node.js', level: 'Advanced', color: '#339933' },
      { name: 'Python', level: 'Advanced', color: '#3776ab' },
      { name: 'Go', level: 'Intermediate', color: '#00add8' },
      { name: 'Kotlin / Android', level: 'Advanced', color: '#7f52ff' },
      { name: 'FastAPI', level: 'Advanced', color: '#05998b' },
    ],
  },
  {
    category: 'DevOps & Storage',
    skills: [
      { name: 'Docker', level: 'Proficient', color: '#2496ed' },
      { name: 'Redis', level: 'Proficient', color: '#dc382d' },
      { name: 'PostgreSQL', level: 'Proficient', color: '#4169e1' },
      { name: 'Git & GitHub Actions', level: 'Advanced', color: '#f05032' },
      { name: 'Reverse Engineering / Static Analysis', level: 'Advanced', color: '#a855f7' },
    ],
  },
];
