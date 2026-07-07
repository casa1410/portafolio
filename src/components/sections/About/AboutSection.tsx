import { AboutTab } from '../../../types';
import { AboutIndex } from './AboutIndex';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { BattleSim } from './BattleSim';
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
      <div className={styles.pageRow}>
        <div key={activeTab} className={styles.tabContent}>{renderTab()}</div>

        {/* Prototype: RPG battle simulator widget, shown on every About tab for now.
            Kept outside the per-tab remount so the same match persists across tabs. */}
        <div className={styles.sideColumn}>
          <BattleSim />
        </div>
      </div>
    </div>
  );
};
