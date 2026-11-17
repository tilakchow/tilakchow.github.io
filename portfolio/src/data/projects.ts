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
    name: 'Refund Agent – Agentic Evals with DeepEval',
    desc: 'Autonomous tool-calling refund agent (Gemini 3.5 Flash Lite, LangChain, InMemorySaver checkpointer) orchestrating purchase history, 30-day refund eligibility verification, and automated ticket issuance. Rigorously evaluated with DeepEval across 7 trace-level and single-turn metrics, boosting pass rate from 57% to 100%.',
    tech: ['Python', 'LangChain', 'Gemini API', 'DeepEval', 'Agentic Workflows', 'Tool Calling'],
    github: 'https://github.com/tilakchow/RefundAgent',
    banner: '/images/projects/refund_agent_flow.jpg',
    stats: 'DeepEval (100% Pass)',
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
];

export const allProjects: ProjectData[] = [...featuredProjects, ...additionalProjects];
