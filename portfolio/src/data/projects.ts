import { IconType } from 'react-icons';

export interface ProjectData {
  banner: string;
  name: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  demoWarning?: boolean;
  isUnderDevelopment?: boolean;
  isPrivate?: boolean;
  sponsor?: { icon: IconType };
  stats?: string;
  bannerFit?: 'cover' | 'contain';
  bannerBg?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    name: 'Agentic Customer Support RAG',
    desc: 'Autonomous, self-correcting RAG customer support system built with LangGraph multi-agent loops, Pinecone hybrid retrieval, automated LLM evidence grading, Tavily web search fallback, and real-time streaming citations.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Pinecone', 'Groq', 'Tavily', 'Docker'],
    github: 'https://github.com/tilakchow/agentic-customer-support-rag',
    banner: '/images/projects/agentic_rag_flow.jpg',
    stats: 'Self-Correcting RAG',
    live: 'https://frontend-tilak-team.vercel.app',
    bannerFit: 'contain',
    bannerBg: '#090d16',
  },
  {
    name: 'Enterprise RAG Chatbot',
    desc: 'RAG retrieval system implementing hybrid search (FAISS dense vector embeddings combined with BM25 sparse keyword matching) and TF-IDF reranking, featuring SSE streaming tokens, source metadata citations, and LangSmith telemetry.',
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'BM25', 'Groq', 'LangSmith', 'RAGAS'],
    github: 'https://github.com/tilakchow/rag-chatbot-fastapi',
    banner: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    stats: 'Hybrid Search',
  },
  {
    name: 'ChimtuDrop',
    desc: 'High-performance privacy-first mobile media downloader built with React Native (Expo) and FastAPI. Uses an isolated yt-dlp/FFmpeg extraction pipeline with SSRF protection, resolution selection, and local gallery storage without ads or trackers.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Python', 'FastAPI', 'yt-dlp', 'FFmpeg', 'Docker'],
    github: 'https://github.com/tilakchow/ChimtuDrop',
    banner: '/images/projects/chimtudrop.png',
    stats: 'React Native + FastAPI',
    live: 'https://github.com/tilakchow/ChimtuDrop',
    bannerFit: 'contain',
    bannerBg: '#f8f9fe',
  },
  {
    name: 'AI Support Ticket Triage Agent',
    desc: 'Intelligent support ticket categorization engine utilizing LLM structured outputs (Pydantic), pgvector semantic similarity search over historical resolution logs, and confidence-calibrated human escalation guardrails.',
    tech: ['Python', 'FastAPI', 'pgvector', 'OpenAI API', 'RAGAS', 'PostgreSQL'],
    github: 'https://github.com/tilakchow',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    stats: 'Semantic Triage',
  },
];

export const additionalProjects: ProjectData[] = [
  {
    name: 'Mana Songs (తెలుగు మాస్ Jukebox)',
    desc: 'Interactive Telugu music streaming web player and realtime jukebox powered by a Supabase cloud backend. Features live listener metrics, responsive audio controls, persistent song catalogue, and continuous playback.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Supabase', 'Realtime Audio', 'Vercel'],
    github: 'https://github.com/tilakchow/Mana-Songs',
    live: 'https://mana-songs-roan.vercel.app',
    banner: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    stats: 'Supabase Realtime',
  },
  {
    name: 'AI/ML Engineering Journey',
    desc: 'Comprehensive structured curriculum and open-source implementation repository documenting deep progression in Machine Learning, Deep Learning, Generative AI, DSA, and mathematical foundations.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'GenAI', 'DSA', 'Mathematics'],
    github: 'https://github.com/tilakchow/ai-ml-engineering-journey',
    banner: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    stats: 'Curriculum & Code',
  },
  {
    name: 'Personal Developer Portfolio',
    desc: 'Personal portfolio website built with React 19, TypeScript, and Vite. Features a custom GitHub contributions heatmap with multi-year support, interactive experience timeline, and project showcase directory.',
    tech: ['React 19', 'TypeScript', 'Vite', 'CSS3', 'GitHub API'],
    github: 'https://github.com/tilakchow/tilakchow.github.io',
    live: 'https://tilakchow.github.io',
    banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    stats: 'React 19 + Vite',
  },
  {
    name: 'IoT-Based Driver Alertness System',
    desc: 'Published and presented at the ICISAS 2025 Conference in Dubai. Real-time vision-based fatigue detection system monitoring ocular closure and head pose to trigger automated safety alerts.',
    tech: ['Python', 'OpenCV', 'Deep Learning', 'IoT', 'Embedded Systems'],
    github: 'https://github.com/tilakchow',
    banner: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    stats: 'ICISAS 2025 Dubai',
  },
  {
    name: 'Android Compose Architecture Suite',
    desc: 'Native Android application built with Kotlin, Jetpack Compose, Coroutines, and MVVM clean architecture, featuring local SQLite database caching with Room and asynchronous background processing.',
    tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room', 'Android SDK'],
    github: 'https://github.com/tilakchow',
    banner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    stats: 'Native Android',
  },
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
