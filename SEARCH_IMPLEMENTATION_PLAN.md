# SEARCH_IMPLEMENTATION_PLAN.md: Universal Search & Command Palette Implementation Plan

## 1. Context & Objectives
Based on the findings in [SEARCH_REVERSE_ENGINEERING.md](file:///t:/projects/tilakchowdary/SEARCH_REVERSE_ENGINEERING.md), the reference project `manixh` provides a complete specification for a developer portfolio (Vite + React + TypeScript + Vanilla CSS).
The user requested implementing the search feature in the open project `tilakchowdary`.

We will implement a high-performance, accessible, keyboard-driven Search & Command Palette (`Cmd+K` / `Ctrl+K`) adhering strictly to the design system in `DESIGN.md` and component patterns in `COMPONENTS.md`.

---

## 2. Architecture & File Structure

### Project Setup
Initialize a modern Vite + React + TypeScript web application directly in `t:\projects\tilakchowdary`:
```text
t:\projects\tilakchowdary/
├── src/
│   ├── components/
│   │   ├── search/
│   │   │   ├── SearchModal.tsx        # Command palette modal dialog & backdrop
│   │   │   ├── SearchBar.tsx          # Standalone inline search bar / trigger in Navbar & Projects
│   │   │   └── Search.css             # Glassmorphism, animations, dark mode tokens
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx             # Navigation header with search trigger button
│   │   │   └── Navbar.css
│   │   ├── projects/
│   │   │   ├── Projects.tsx           # Featured projects with search & tag filtering
│   │   │   ├── ProjectCard.tsx        # Project card component conforming to spec
│   │   │   └── Projects.css
│   │   └── common/
│   │       ├── SectionTitle.tsx
│   │       └── Tooltip.tsx
│   ├── data/
│   │   ├── projects.ts                # Typed projects data (ProjectData[])
│   │   ├── skills.ts                  # Technologies and tools data
│   │   ├── uses.ts                    # Uses items and categories
│   │   └── searchIndex.ts             # Unified searchable dataset & index generator
│   ├── hooks/
│   │   ├── useSearch.ts               # Core search hook with debounce, ranking, and keyboard navigation
│   │   └── useKeyboardShortcut.ts     # Global hotkey listener (Ctrl/Cmd + K, Escape)
│   ├── types/
│   │   ├── project.ts
│   │   └── search.ts
│   ├── App.tsx                        # Main portfolio layout with modal orchestration
│   ├── App.css                        # Design tokens, variables from DESIGN.md
│   ├── index.css                      # CSS reset
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Search Algorithm & Data Flow

### Data Flow
1. **Unified Search Index (`src/data/searchIndex.ts`)**:
   - Indexes:
     - **Projects**: name, description, tags, URLs
     - **Pages/Routes**: Home, Projects, Uses, Resume, Analytics, Contact
     - **Skills & Tech**: Frontend, Backend, Tools
     - **Uses**: Hardware, Software, Dev Setup
2. **Search Logic (`src/hooks/useSearch.ts`)**:
   - Multi-token case-insensitive substring and prefix matching.
   - Relevance ranking:
     - Exact title match -> score 100
     - Title prefix match -> score 80
     - Title word contains -> score 60
     - Tag exact match -> score 50
     - Description match -> score 30
   - Categorized result grouping (e.g., "Projects", "Navigation", "Skills").
   - Highlight match extraction.
3. **Keyboard Controls**:
   - `Cmd+K` or `Ctrl+K`: Toggle search modal.
   - `/`: Focus search input when not inside form field.
   - `ArrowDown` / `ArrowUp`: Move active selection through results with auto-scroll.
   - `Enter`: Navigate / execute active selection.
   - `Escape`: Close search modal and restore focus.

---

## 4. Edge Cases & Error Handling
- **Empty Query**: Displays quick-action links and popular project categories.
- **No Matching Results**: Displays friendly empty state with query echo and suggestions.
- **Special Characters**: Safely handles regex characters without crashing or throwing syntax errors.
- **Scroll Lock**: Body scroll is locked when modal is open to prevent background page jumping.
- **Mobile Responsiveness**: Touch-friendly result items and responsive bottom/top sheet modal sizing.

---

## 5. Verification Plan
1. **Type Checking**: `npm run typecheck` (`tsc --noEmit`).
2. **Build Validation**: `npm run build` (`vite build`).
3. **Behavioral Testing**:
   - Normal query (e.g., "react", "blog").
   - Partial query (e.g., "proj", "typ").
   - Case-insensitive test ("REACT", "ReAcT").
   - Empty input state.
   - No results state ("xyz123").
   - Keyboard navigation (`ArrowDown`, `ArrowUp`, `Enter`, `Escape`, `Ctrl+K`).
   - Browser rendering test via dev server.
