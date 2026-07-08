import { MainSection, AboutTab } from '../../types';
import { AboutSection } from '../sections/About/AboutSection';
import { SideProjects } from '../sections/SideProjects/SideProjects';
import { Contact } from '../sections/Contact/Contact';
import { Support } from '../sections/Support/Support';
import styles from './ContentPanel.module.css';

interface ContentPanelProps {
  activeSection: MainSection;
  activeAboutTab: AboutTab;
}

export const ContentPanel = ({ activeSection, activeAboutTab }: ContentPanelProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'about':       return <AboutSection activeTab={activeAboutTab} />;
      case 'sideProjects': return <SideProjects />;
      case 'contact':     return <Contact />;
      case 'support':     return <Support />;
    }
  };

  return (
    <div className={styles.panel}>
      {/* key forces re-animation when section changes */}
      <div key={activeSection} className={styles.content}>
        {renderSection()}
      </div>
    </div>
  );
};
