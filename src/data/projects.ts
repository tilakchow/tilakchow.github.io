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
    live: 'https://github.com/tilakchow/agentic-customer-support-rag',
    bannerFit: 'contain',
    bannerBg: '#090d16',
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
    name: 'Enterprise RAG Chatbot',
    desc: 'RAG retrieval system implementing hybrid search (FAISS dense vector embeddings combined with BM25 sparse keyword matching) and TF-IDF reranking, featuring SSE streaming tokens, source metadata citations, and LangSmith telemetry.',
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'BM25', 'Groq', 'LangSmith', 'RAGAS'],
    github: 'https://github.com/tilakchow',
    banner: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    stats: 'Hybrid Search',
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
