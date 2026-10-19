import { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tilakchow',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tilakchowdary05',
    icon: <FaLinkedin />,
    color: '#0a66c2',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/tilakchow_',
    icon: <FaXTwitter />,
    color: '#1da1f2',
  },
  {
    name: 'Resume',
    url: '/resume.pdf',
    icon: <FaFilePdf />,
    color: '#f59e0b',
  },
  {
    name: 'Email',
    url: 'mailto:tilakchowdary18@gmail.com',
    icon: <FaEnvelope />,
    color: '#ea4335',
  },
];
