import { AboutTab } from '../../../types';
import { AboutIndex } from './AboutIndex';
import { Experience } from './Experience';
import { Skills } from './Skills';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  activeTab: AboutTab;
}

export const AboutSection = ({ activeTab }: AboutSectionProps) => {
  const renderTab = () => {
    switch (activeTab) {
      case 'index':      return <AboutIndex />;
      case 'experience': return <Experience />;
      case 'skills':     return <Skills />;
    }
  };

  return (
    <div className={styles.section}>
      <div key={activeTab} className={styles.tabContent}>
        {renderTab()}
      </div>
    </div>
  );
};
