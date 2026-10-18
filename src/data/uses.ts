export interface UsesItem {
  label: string;
  name: string;
  link?: string;
  desc?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'AI & Engineering Stack',
    items: [
      { label: 'LLM Frameworks', name: 'LangChain & LangGraph', desc: 'Stateful multi-agent workflows and cyclical graph evaluation' },
      { label: 'Vector Stores', name: 'FAISS, ChromaDB & pgvector', desc: 'Hybrid dense and sparse semantic retrieval' },
      { label: 'Evaluation & Tracing', name: 'LangSmith & RAGAS', desc: 'Latency observability, hallucination metrics, and LLM-as-judge benchmarks' },
      { label: 'Backend Runtime', name: 'Python, FastAPI & Uvicorn', desc: 'High-throughput async endpoints and SSE streaming responses' },
    ],
  },
  {
    category: 'Hardware & Workstation',
    items: [
      { label: 'Development Machine', name: 'High-Performance Windows 11 PC', desc: 'Ryzen 9, RTX 4080 (16GB VRAM for local Ollama / Hugging Face models)' },
      { label: 'Editor & IDE', name: 'VS Code & Antigravity IDE', desc: 'Custom dark setup with JetBrains Mono font' },
      { label: 'Terminal', name: 'PowerShell 7 & Windows Terminal', desc: 'Fast local scripting and git automation' },
      { label: 'Containerization', name: 'Docker Desktop', desc: 'Local pgvector, Redis, and API container services' },
    ],
  },
];
