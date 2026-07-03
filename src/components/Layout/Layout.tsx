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
  return (
    <BorderFrame>
      <div className={styles.layout}>
        <Sidebar
          activeSection={activeSection}
          onSectionChange={onSectionChange}
          activeAboutTab={activeAboutTab}
          onAboutTabChange={onAboutTabChange}
        />

        <div className={styles.mainArea}>
          <header className={styles.topBar}>
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
