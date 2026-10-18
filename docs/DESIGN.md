# Design System Reference

> Reverse-engineered from the actual codebase. Every value below is real — no invented tokens.

## Table of Contents

- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Border Radius](#border-radius)
- [Shadows & Elevation](#shadows--elevation)
- [Component Visual Patterns](#component-visual-patterns)
- [Animation & Motion](#animation--motion)
- [Dark/Light Mode](#darklight-mode)
- [Iconography](#iconography)
- [Copy-Pasteable Design Tokens](#design-tokens)

---

## Color Palette

### Core Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0b0d0e` | Body/page background |
| `bg-surface` | `#1a1b1c` | Cards, buttons, badges, navbar star, tooltips, code blocks |
| `bg-surface-elevated` | `#232326` | Terminal/code headers, pill backgrounds |
| `bg-surface-subtle` | `#151515` | Experience logo backgrounds |
| `bg-loading` | `#0a0a0a` | Loading screen overlay |
| `bg-avatar-border` | `#0a0a0b` | Avatar border color |
| `bg-skeleton` | `#18181b` | Banner/image placeholders, terminal backgrounds |
| `bg-gradient-start` | `#1a1a1a` | Stats/sponsor badge gradient start |
| `bg-gradient-end` | `#0d0d0d` | Stats/sponsor badge gradient end |
| `bg-tweet` | `#1F1F23` | Avatar fallback background |

### Text Colors

| Token | Hex/Value | Usage |
|-------|-----------|-------|
| `text-primary` | `#ffffff` | Headings, names, active states, buttons |
| `text-secondary` | `#b3b3b3` | Body text, descriptions, meta info, navbar links |
| `text-tertiary` | `#b4b4b4` | Username, meta rows |
| `text-muted` | `#999` | Bullet points |
| `text-faint` | `#71767b` | Twitter handle |
| `text-dim` | `#666` | Link icons, footer bottom, expand buttons |
| `text-faintest` | `#555` | Separator dashes, timeline dashed line |
| `text-ghost` | `#333` | Loading trace background, separator text |

### Border Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `border-default` | `#444` | Cards, sections, code blocks, dividers, timeline containers |
| `border-hover` | `#888` | Hover state for dashed/solid borders |
| `border-subtle` | `rgba(255,255,255,0.1)` | Scrollbar thumb, subtle dividers |
| `border-inset` | `#ffffff14` | Inset ring on buttons/pills |
| `border-inset-highlight` | `#ffffff33` | Inset top highlight on buttons/pills |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-blue` | `#3b82f6` | Blog links, author borders |
| `accent-blue-hover` | `#60a5fa` | Blog link hover |
| `accent-amber` | `#f59e0b` | Download icons, star icon |
| `accent-green` | `#1ef801` | Terminal "green" text |
| `accent-green-surface` | `#22c55e` | Success states, blog tips, terminal dots |
| `accent-red` | `#ef4444` | Error states, blog don't-do, terminal dots |
| `accent-yellow` | `#fbbf24` | Warning states, blog warnings, terminal dots |
| `accent-discord` | `#5865f2` | Discord join button |
| `accent-discord-hover` | `#4752c4` | Discord join button hover |
| `accent-discord-green` | `#23a559` | Discord online dot |

### Status Colors (Experience)

| Token | Hex | Usage |
|-------|-----|-------|
| `status-active` | `#02ff67ff` | Active timeline dot, status text |
| `status-active-bg` | `#091d11` | Active status badge background |
| `status-active-glow` | `rgba(2,255,103,0.5)` | Active dot glow |
| `status-past` | `#ff3333` | Past timeline dot |
| `status-past-bg` | `#1d0909` | Past status badge background |
| `status-past-glow` | `rgba(255,51,51,0.5)` | Past dot glow |
| `status-future` | `#ffaa00` | Future timeline dot |
| `status-future-bg` | `#1d1509` | Future status badge background |
| `status-future-glow` | `rgba(255,170,0,0.5)` | Future dot glow |
| `status-role` | `#4ade80` | Role name color |

### Blog Component Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `blog-tag-bg` | `#18181b` | Tag background |
| `blog-tip-border` | `#22c55e` | Tip alert border |
| `blog-tip-bg` | `rgba(34,197,94,0.05)` | Tip alert background |
| `blog-tip-text` | `#86efac` | Tip alert text |
| `blog-warn-border` | `#fbbf24` | Warning alert border |
| `blog-warn-bg` | `rgba(251,191,36,0.05)` | Warning alert background |
| `blog-warn-text` | `#fde047` | Warning alert text |
| `blog-dont-border` | `#ef4444` | Don't-do alert border |
| `blog-dont-bg` | `rgba(239,68,68,0.05)` | Don't-do alert background |
| `blog-dont-text` | `#fca5a5` | Don't-do alert text |
| `blog-highlight-white` | `rgba(255,255,255,0.15)` | White bold highlight bg |
| `blog-highlight-normal` | `rgba(255,255,255,0.08)` | Normal highlight bg |
| `blog-text-line-bg` | `rgba(255,255,255,0.03)` | Text line background |

### Heart/Decoration

| Token | Hex | Usage |
|-------|-----|-------|
| `heart-color` | `red` (via `BsFillArrowThroughHeartFill`) | Heart icon |
| `heart-hover` | `rgb(190,29,29)` | Heart hover color |
| `heart-glow` | `#e63946aa` | Heart hover drop-shadow |

### Overlay/Shadow Colors

| Token | Value | Usage |
|-------|-------|-------|
| `overlay-dark` | `#0006`, `#0004`, `#0003` | Composite box-shadow layers |
| `overlay-hover` | `#0008` | Hover state shadow layers |
| `selection-bg` | `rgba(180,180,180,0.3)` | Text selection background |
| `scrollbar-track` | `rgba(255,255,255,0.02)` | Scrollbar track |

### Calendar Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `cal-level-0` | `#383838` | No contributions |
| `cal-level-1` | `#606060` | Low contributions |
| `cal-level-2` | `#8C8C8C` | Medium contributions |
| `cal-level-3` | `#BABABA` | High contributions |
| `cal-level-4` | `#EBEBEB` | Max contributions |

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `font-body` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif` | Body default |
| `font-ui` | `'Figtree', sans-serif` | Navbar, buttons, cards, headings, sections, tooltips — **primary UI font** |
| `font-mono` | `'JetBrains Mono', 'Courier New', monospace` | Code blocks, terminal |
| `font-mono-alt` | `'JetBrains Mono', 'JetBrains Mono Fallback', sans-serif` | Username, meta rows, footer |

### Font Size Scale

| Token | Value | Usage |
|-------|-------|-------|
| `text-xs` | `0.6rem` | Tiny labels (mobile meta) |
| `text-sm` | `0.7rem` | Small pills, handles, mobile text |
| `text-base-sm` | `0.75rem` | Tags, descriptions, tech pills |
| `text-base` | `0.85rem` | Navbar links, star button, company links, usernames |
| `text-md` | `0.9rem` | Body content (blog), status text |
| `text-body` | `0.95rem` | Alert text, description text |
| `text-body-lg` | `1rem` | Descriptions, quotes |
| `text-lg` | `1.1rem` | Category titles, project names |
| `text-xl` | `1.3rem` | Contact title, skill icons |
| `text-2xl` | `1.5rem` | Hero name, contact title, blog titles |
| `text-3xl` | `2rem` | Blog title default |
| `text-4xl` | `2.5rem` | Error heading |
| `text-hero` | `8rem` → `6rem` → `4rem` → `3.5rem` | Error code (responsive) |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `weight-regular` | `400` | Links, buttons, status badges |
| `weight-medium` | `500` | Navbar links, pills, body text, roles |
| `weight-semibold` | `600` | Category titles, project names, headings, author names |
| `weight-bold` | `700` | Hero name, error code, follow buttons, bio highlights |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `leading-none` | `1` | Error code, company names |
| `leading-tight` | `1.3` | Blog titles, headers, descriptions |
| `leading-snug` | `1.4` | Blog headers, post titles |
| `leading-normal` | `1.5` | Alerts, descriptions, status text |
| `leading-relaxed` | `1.6` | Descriptions, body text, code, lists |
| `leading-loose` | `1.7` | Uses content, about bio, article body |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `tracking-tight` | `-0.02em` | Error code |
| `tracking-tight-sm` | `-0.01em` | Error heading |
| `tracking-wide` | `0.01em` | Action buttons |
| `tracking-wider` | `0.3px` | Stats/sponsor text |
| `tracking-widest` | `0.5px` | Skill names |

---

## Spacing & Layout

### Container

| Token | Value | Usage |
|-------|-------|-------|
| `container-max` | `700px` | All section containers (max-width) |
| `container-padding` | `18px` | Default horizontal padding |
| `container-padding-md` | `25px` | Tablet padding (≤700px) |
| `container-padding-sm` | `20px` | Mobile padding (≤400px) |

### Spacing Scale (most-used values)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `2px` | Micro gaps |
| `space-2` | `4px` | Small gaps, icon margins |
| `space-3` | `6px` | Button gaps, meta gaps |
| `space-4` | `8px` | Standard gaps (navbar, links, icons) |
| `space-5` | `10px` | Medium gaps |
| `space-6` | `12px` | Larger gaps, category margins |
| `space-8` | `16px` | Section content gaps, margins |
| `space-10` | `20px` | Section margins, card padding |
| `space-12` | `24px` | Section spacing, divider margins |
| `space-16` | `32px` | Card margins, category spacing |
| `space-20` | `40px` | Large section spacing |
| `space-24` | `48px` | Extra large spacing |

### Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `bp-md` | `700px` | Primary tablet breakpoint |
| `bp-sm` | `420px` | Small tablet |
| `bp-xs` | `400px` | Mobile |
| `bp-xxs` | `360px` | Small mobile |
| `bp-xxx` | `354px` | Ultra-small mobile |
| `bp-tiny` | `340px` | Navbar micro |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `2px` | Card titles, section corners, small buttons |
| `radius-md` | `3px` | Tech pills, Discord button |
| `radius-lg` | `4px` | Tags, badges, contact links, navbar links |
| `radius-xl` | `6px` | Tooltips, blog buttons, action buttons |
| `radius-2xl` | `8px` | Banner images (mobile) |
| `radius-3xl` | `10px` | Scrollbar, Twitter/Discord card avatars |
| `radius-pill` | `999px` | Skill pills, navbar star button |
| `radius-full` | `50%` | Dots, avatars, terminal dots |
| `radius-round` | `50px` | QR toggle button |

---

## Shadows & Elevation

### Standard Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0px 4px 16px rgba(0,0,0,0.1)` | Buttons, view-all links, blog buttons |
| `shadow-md` | `0 6px 16px rgba(0,0,0,0.25)` | Tooltips |
| `shadow-lg` | `0 8px 32px rgba(0,0,0,0.1)` | Error containers |
| `shadow-card` | `0 2px 8px -4px #0006` | Banners, images, pills |

### Composite Shadows (Buttons/Pills)

```css
/* Default state */
box-shadow:
  0px 32px 64px -16px #0006,
  0px 16px 32px -8px  #0006,
  0px 8px 16px -4px   #0004,
  0px 4px 8px -2px    #0004,
  0px -8px 16px -1px  #0003,
  0px 2px 4px -1px    #0004,
  0px 0px 0px 1px     #000,
  inset 0px 0px 0px 1px #ffffff14,
  inset 0px 1px 0px    #ffffff33;

/* Hover state */
box-shadow:
  0px 40px 80px -16px #0008,
  0px 20px 40px -8px  #0008,
  0px 12px 20px -4px  #0006,
  0px 6px 12px -2px   #0006,
  0px -12px 20px -1px #0004,
  0px 4px 8px -1px    #0006,
  0px 0px 0px 1px     #000,
  inset 0px 0px 0px 1px #ffffff20,
  inset 0px 1px 0px    #ffffff40;
```

---

## Component Visual Patterns

### Buttons

**Primary (Email Me, Action):**
- Background: `#1a1b1c`
- Color: `#fff`
- Border: `1px solid #444`
- Border-radius: `4px` (action) / `6px` (blog)
- Padding: `4px 8px` (small) / `8px 16px` (blog) / `16px 32px` (action)
- Transition: `all 0.3s ease` / `background 0.2s, color 0.2s`
- Hover: background `#1a1b1cc7`, border `#888`

**Secondary (View All, Uses Link):**
- Background: `#1a1b1c`
- Border: `1px solid #444`
- Border-radius: `2px`
- Padding: `3px 8px` (uses) / `6px 14px` (view all)
- Hover: border `#888`
- Arrow icon: transforms right on hover

**Pill (Skill, Navbar Star):**
- Background: `#1a1b1c` (star) / transparent (skill)
- Border-radius: `999px`
- Padding: `6px 12px` (star) / `4px 10px` (skill)
- Transition: `all 0.2s ease`

### Cards

**Project Card:**
- Background: transparent (no bg)
- Border: `1px solid #444`
- Border-radius: none on card (banner images get `4px`)
- Hover: border `#888`
- Banner: `max-width: 300px`, `border-radius: 4px`, shadow `0 2px 8px -4px #0006`

**Experience Card:**
- Background: transparent
- Border: `1px solid #444`
- Timeline: `1px dashed #555` left border
- Dot: `10px` circle with glow

**Contact Card:**
- Background: transparent
- Border: `1px solid #444`
- Border-radius: none
- Hover: border `#888`

### Navbar

- Sticky top, z-index: 1000
- Background: `rgba(11,13,14,0.6)` with `backdrop-filter: blur(12px)`
- Max-width: `700px`, centered
- Links: left-aligned, star button right-aligned
- Padding: `14px 0` (desktop) / `12px 0` (mobile)

### Section Pattern

Every section follows:
```
<section className="[section-name]-section">
  <SectionTitle>Title</SectionTitle>
  {/* Content */}
</section>
```
- Section max-width: `700px`, centered
- Section scroll-margin: `50px`

---

## Animation & Motion

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `0.2s` | Color transitions, hover effects |
| `duration-normal` | `0.25s` | Tooltip appearance |
| `duration-slow` | `0.3s` | Transforms, border colors, general transitions |
| `duration-slower` | `0.6s` | Marquee scroll |
| `duration-page` | `0.8s` | Page entrance animations |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-default` | `ease` | General transitions |
| `ease-out` | `ease-out` | Exit/entrance animations, marquee |
| `ease-in-out` | `ease-in-out` | Ambient animations (drift, float, glow) |
| `ease-material` | `cubic-bezier(0.4, 0, 0.2, 1)` | Scrollbar, action buttons |
| `ease-spring` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Tooltips (bouncy) |
| `ease-loading` | `cubic-bezier(0.5, 0, 0.9, 1)` | Loading trace flow |
| `ease-linear` | `linear` | Marquee infinite scroll |

### Named Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| `marquee` | `60s` | `linear infinite` | Skill/tool row scrolling |
| `heart-beat` | `2s` | `infinite` | Heart icon pulse |
| `pulse-dot` | `1.2s` | `infinite` | Experience status dot |
| `drift` | `20s` | `ease-in-out infinite` | 404 page background |
| `slideUp` | `0.8s` | `ease-out` | Error container entrance |
| `fadeIn` | `0.8s` | `ease-out` with delays (0.2s, 0.4s, 0.6s, 0.8s) | Staggered error content |
| `glow` | `3s` | `ease-in-out infinite alternate` | Error code glow |
| `float` | `8s` | `ease-in-out infinite` | Floating element |
| `loading-flow` | `3s` | `cubic-bezier(0.5, 0, 0.9, 1) infinite` | SVG trace animation |
| `sponsorGlow` | keyframes defined | — | Badge glow on hover |

### Transition Patterns

| Pattern | Value | Used On |
|---------|-------|---------|
| Color only | `color 0.2s ease` | Navbar links, blog links |
| Transform only | `transform 0.3s ease` | Arrow icons, heart |
| Background + color | `background 0.2s, color 0.2s` | Contact buttons, pills, tags |
| All | `all 0.3s ease` | Buttons, links, cards |
| All (spring) | `all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Tooltip bubble |
| Grid | `grid-template-rows 0.3s ease` | Experience expand/collapse |

---

## Dark/Light Mode

This project is **dark-mode only**. There is no theme switching mechanism, no CSS custom properties for theming, and no `prefers-color-scheme` media query. The entire color system is hardcoded for dark backgrounds.

---

## Iconography

### Library: `react-icons` v5.5.0

### Icon Sets Used

| Set | Import Prefix | Icons |
|-----|---------------|-------|
| Font Awesome | `fa`, `fa6` | Twitter, GitHub, LinkedIn, Instagram, Medium, Envelope, Star, Github, ExternalLink, etc. |
| Heroicons | `hi`, `hi2` | ArrowRight, ArrowLeft, Download, ExternalLink, QrCode, User, DocumentDownload |
| React Icons | `ri` | VerifiedBadgeFill, ShareBoxFill, SupabaseFill, NotionFill, GitRepositoryPrivateLine |
| Lucide | `lu` | Timer, Construction |
| Bootstrap | `bs` | FillArrowThroughHeartFill |
| Devicons | `di` | Mysql |
| Simple Icons | `si` | Express, Javascript, Typescript, MongoDB, Springboot, etc. |
| Vscode Icons | `vsc` | Vscode |
| Circum Icons | `cg` | Vercel |
| Feather | `fi` | Copy, Check, Terminal, ExternalLink |
| Google Material | `gr` | Java, Location |
| IcoMoon | `io5` | LogoFirebase |

### Icon Sizing Conventions

| Context | Size |
|---------|------|
| Navbar star | `1em` (scales with font) |
| Hero section icons | `1.2rem` (location, timer) |
| Heart icon | `18px` (base) / `14px` (mobile) |
| Skill icon | `1.3em` → `1em` → `0.9em` → `0.8em` → `0.7em` (responsive) |
| Button icons | `12px` → `16px` (responsive) |
| Blog alert icons | `1.2rem` |
| QR toggle | `16px` |

---

## Design Tokens

```css
:root {
  /* === BACKGROUNDS === */
  --bg-primary: #0b0d0e;
  --bg-surface: #1a1b1c;
  --bg-surface-elevated: #232326;
  --bg-surface-subtle: #151515;
  --bg-loading: #0a0a0a;

  /* === TEXT === */
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --text-tertiary: #b4b4b4;
  --text-muted: #999999;
  --text-faint: #71767b;
  --text-dim: #666666;
  --text-ghost: #333333;

  /* === BORDERS === */
  --border-default: #444444;
  --border-hover: #888888;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-inset: #ffffff14;
  --border-inset-highlight: #ffffff33;

  /* === ACCENTS === */
  --accent-blue: #3b82f6;
  --accent-amber: #f59e0b;
  --accent-green: #22c55e;
  --accent-red: #ef4444;
  --accent-yellow: #fbbf24;

  /* === STATUS === */
  --status-active: #02ff67ff;
  --status-past: #ff3333;
  --status-future: #ffaa00;

  /* === TYPOGRAPHY === */
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-ui: 'Figtree', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* === SPACING === */
  --container-max: 700px;
  --container-padding: 18px;
  --container-padding-md: 25px;
  --container-padding-sm: 20px;

  /* === BREAKPOINTS === */
  /* --bp-md: 700px */
  /* --bp-sm: 420px */
  /* --bp-xs: 400px */
  /* --bp-xxs: 360px */
  /* --bp-xxx: 354px */

  /* === RADIUS === */
  --radius-sm: 2px;
  --radius-md: 3px;
  --radius-lg: 4px;
  --radius-xl: 6px;
  --radius-2xl: 8px;
  --radius-3xl: 10px;
  --radius-pill: 999px;
  --radius-full: 50%;

  /* === ANIMATION === */
  --duration-fast: 0.2s;
  --duration-normal: 0.25s;
  --duration-slow: 0.3s;
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-material: cubic-bezier(0.4, 0, 0.2, 1);
}
```
