import { MainSection, AboutTab } from '../../types';
import { Sidebar } from './Sidebar';
import { ContentPanel } from './ContentPanel';
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
  return (
    <div className={styles.layout}>
      {/* Red diagonal fill — sits BEHIND everything */}
      <div className={styles.redStrip} />
      {/* Thin white accent line along the diagonal edge */}
      <div className={styles.diagonalAccent} />

      <Sidebar
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        activeAboutTab={activeAboutTab}
        onAboutTabChange={onAboutTabChange}
      />

      <div className={styles.mainArea}>
        <header className={styles.topBar}>
          <LanguageToggle />
          <AudioPlayer />
        </header>
        <ContentPanel
          activeSection={activeSection}
          activeAboutTab={activeAboutTab}
        />
      </div>
    </div>
  );
};
