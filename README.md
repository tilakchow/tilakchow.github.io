# Tilak Chowdary — AI Engineer Portfolio

Personal portfolio and interactive engineering showcase of **Tilak Chowdary**, an AI Engineer specializing in autonomous multi-agent workflows, self-correcting RAG architectures, and high-performance full-stack applications.

- **Live Website**: [https://tilakchow.github.io/](https://tilakchow.github.io/)
- **GitHub**: [@tilakchow](https://github.com/tilakchow)

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 6
- **Routing**: React Router 7 (Single Page Application architecture with 404 fallback)
- **Styling**: Pure vanilla CSS design system
- **Icons & Effects**: `lucide-react`, `react-icons`, `canvas-confetti`
- **Hosting**: GitHub Pages via GitHub Actions

---

## 📂 Project Architecture

```text
tilakchowdary/
├── public/                     # Static assets served at root
│   ├── favicon.ico             # Portfolio favicon
│   ├── robots.txt              # Search engine crawler permissions
│   ├── resume.pdf              # Downloadable resume
│   ├── audio/                  # Interactive sound assets
│   │   └── click.mp3
│   └── images/                 # Categorized image assets
│       ├── branding/           # Brand icons & stars
│       ├── companies/          # Experience company logos
│       ├── profile/            # Profile avatars
│       └── projects/           # Project screenshots & diagrams
│
├── src/                        # React source application
│   ├── components/             # Reusable UI & section components
│   │   ├── calendar/           # GitHub activity contribution heatmap
│   │   ├── common/             # Reusable UI primitives (ClickSpark, Tooltips)
│   │   ├── contactMe/          # Interactive contact cards
│   │   ├── experience/         # Vertical timeline work experience cards
│   │   ├── footer/             # Site footer
│   │   ├── heroSection/        # Hero section, bio, status, avatar & QR toggle
│   │   ├── navbar/             # Navigation header & quick actions
│   │   ├── projects/           # Featured & additional project showcase cards
│   │   ├── search/             # Universal Cmd+K search modal & palette
│   │   └── skillSection/       # Smooth infinite marquee skill pills
│   ├── data/                   # Structured data models & static content
│   │   ├── images.ts
│   │   ├── projects.ts
│   │   ├── searchIndex.ts
│   │   ├── skills.ts
│   │   └── socialLinks.tsx
│   ├── hooks/                  # Custom React hooks (keyboard shortcuts, search)
│   ├── pages/                  # Routed page layouts (ProjectsLayout, ResumeLayout)
│   ├── types/                  # TypeScript interface definitions
│   ├── App.css
│   ├── App.tsx                 # Root application component & client routing
│   ├── index.css               # Global typography, CSS variables, & reset
│   ├── main.tsx                # React DOM entry point
│   └── vite-env.d.ts
│
├── docs/                       # Technical architecture & design documentation
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── CONTENT_SCHEMA.md
│   └── DESIGN.md
│
├── AGENTS.md                   # Authoritative agent instructions
├── index.html                  # HTML5 entry shell
├── 404.html                    # GitHub Pages SPA redirect fallback
├── .nojekyll                   # Bypasses Jekyll processing on GitHub Pages
├── .gitignore
├── LICENSE
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Installation
```bash
npm install
```

### Development
Start the local development server with hot module replacement:
```bash
npm run dev
```

### Production Build
Type-check with TypeScript and build the optimized production bundle:
```bash
npm run build
```

---

## 🌐 Deployment

This site is automatically deployed to **GitHub Pages** via the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) upon pushing to the `main` branch.
