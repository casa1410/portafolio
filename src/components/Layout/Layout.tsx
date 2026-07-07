import { useState } from 'react';
import { MainSection, AboutTab } from '../../types';
import { Sidebar } from './Sidebar';
import { ContentPanel } from './ContentPanel';
import { BorderFrame } from './BorderFrame';
import { AudioPlayer } from '../UI/AudioPlayer';
import { LanguageToggle } from '../UI/LanguageToggle';
import styles from './Layout.module.css';

interface LayoutProps {
  activeSection: MainSection;
  onSectionChange: (section: MainSection) => void;
  activeAboutTab: AboutTab;
  onAboutTabChange: (tab: AboutTab) => void;
}

export const Layout = ({
  activeSection,
  onSectionChange,
  activeAboutTab,
  onAboutTabChange,
}: LayoutProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BorderFrame>
      <div className={styles.layout}>
        <Sidebar
          open={navOpen}
          activeSection={activeSection}
          onSectionChange={(section) => { onSectionChange(section); setNavOpen(false); }}
          activeAboutTab={activeAboutTab}
          onAboutTabChange={(tab) => { onAboutTabChange(tab); setNavOpen(false); }}
        />

        {navOpen && <div className={styles.navBackdrop} onClick={() => setNavOpen(false)} />}

        <div className={styles.mainArea}>
          <header className={styles.topBar}>
            <button
              className={styles.menuButton}
              aria-label="Menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
            <LanguageToggle />
            <span className={styles.topBarTitle}>PORTFOLIO</span>
            <AudioPlayer />
          </header>
          <ContentPanel
            activeSection={activeSection}
            activeAboutTab={activeAboutTab}
          />
        </div>
      </div>
    </BorderFrame>
  );
};
