import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/heroSection/HeroSection';
import { SkillSection } from './components/skillSection/SkillSection';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { UsesTeaser } from './components/uses/UsesTeaser';
import { ContactMeSection } from './components/contactMe/ContactMe';
import { Footer } from './components/footer/Footer';
import { SearchModal } from './components/search/SearchModal';
import { ClickSpark } from './components/common/ClickSpark';
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut';
import './App.css';

// Lazy-loaded routes matching Manish's architecture
const ProjectsLayout = lazy(() => import('./pages/ProjectsLayout'));
const ResumeLayout = lazy(() => import('./pages/ResumeLayout'));
const UsesLayout = lazy(() => import('./pages/UsesLayout'));

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects />
      <UsesTeaser />
      <ContactMeSection />
      <Footer />
    </div>
  );
};

export const AppContent: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global hotkeys: Ctrl+K or Cmd+K
  useKeyboardShortcut({
    key: 'k',
    ctrlOrMeta: true,
    onTrigger: () => setIsSearchOpen((prev) => !prev),
  });

  // Global hotkey: '/'
  useKeyboardShortcut({
    key: '/',
    onTrigger: () => setIsSearchOpen(true),
  });

  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={12}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Universal Search Palette Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectsLayout />} />
          <Route path="/resume" element={<ResumeLayout />} />
          <Route path="/uses" element={<UsesLayout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </ClickSpark>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
