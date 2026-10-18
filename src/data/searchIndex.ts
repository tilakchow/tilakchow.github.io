import { SearchItem } from '../types/search';
import { allProjects } from './projects';
import { skillsData } from './skills';
import { usesData } from './uses';

export const navigationItems: SearchItem[] = [
  {
    id: 'nav-home',
    title: 'Home',
    description: 'Jump to top of portfolio, hero introduction, and summary',
    category: 'navigation',
    url: '#home',
    tags: ['intro', 'about', 'start', 'main'],
  },
  {
    id: 'nav-projects',
    title: 'Projects Directory',
    description: 'Explore full catalog of applications, tools, and repositories',
    category: 'navigation',
    url: '#projects',
    tags: ['works', 'code', 'repos', 'apps', 'portfolio'],
  },
  {
    id: 'nav-skills',
    title: 'Technical Skills & Stack',
    description: 'Overview of frontend, backend, languages, and system architecture skills',
    category: 'navigation',
    url: '#skills',
    tags: ['languages', 'technologies', 'expertise', 'stack'],
  },
  {
    id: 'nav-uses',
    title: 'Uses & Gear',
    description: 'Hardware setup, software tools, shell environment, and editor config',
    category: 'navigation',
    url: '#uses',
    tags: ['setup', 'hardware', 'software', 'tools', 'specs'],
  },
  {
    id: 'nav-resume',
    title: 'AI Engineer Resume',
    description: 'View or download official PDF resume for Tilak Chowdary',
    category: 'navigation',
    url: '/resume.pdf',
    external: true,
    tags: ['cv', 'resume', 'pdf', 'experience', 'credentials'],
  },
  {
    id: 'nav-contact',
    title: 'Contact & Collaboration',
    description: 'Reach out via Email (tilakchowdary18@gmail.com), GitHub, or LinkedIn',
    category: 'navigation',
    url: 'mailto:tilakchowdary18@gmail.com',
    tags: ['email', 'hire', 'message', 'social'],
  },
];

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [...navigationItems];

  // Index projects
  allProjects.forEach((proj, idx) => {
    items.push({
      id: `project-${idx}`,
      title: proj.name,
      description: proj.desc,
      category: 'projects',
      tags: proj.tech,
      url: proj.github,
      external: true,
    });
  });

  // Index skills
  skillsData.forEach((cat) => {
    cat.skills.forEach((skill) => {
      items.push({
        id: `skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: skill.name,
        description: `${cat.category} • Proficiency: ${skill.level}`,
        category: 'skills',
        tags: [cat.category, skill.level, 'tech', 'skill'],
        url: '#skills',
      });
    });
  });

  // Index uses
  usesData.forEach((cat) => {
    cat.items.forEach((item, idx) => {
      items.push({
        id: `uses-${idx}-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: item.name,
        description: `${item.label} (${cat.category})${item.desc ? ` - ${item.desc}` : ''}`,
        category: 'uses',
        tags: [item.label, cat.category, 'tool', 'hardware', 'setup'],
        url: item.link || '#uses',
        external: Boolean(item.link),
      });
    });
  });

  return items;
}
