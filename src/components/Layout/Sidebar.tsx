import { MainSection, AboutTab } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { P5Text } from '../UI/P5Text';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeSection: MainSection;
  onSectionChange: (section: MainSection) => void;
  activeAboutTab: AboutTab;
  onAboutTabChange: (tab: AboutTab) => void;
}

const ABOUT_TABS: AboutTab[] = ['index', 'experience', 'skills', 'projects'];
const OTHER_SECTIONS: Exclude<MainSection, 'about'>[] = [
  'sideProjects',
  'contact',
  'hobbies',
  'support',
];

export const Sidebar = ({
  activeSection,
  onSectionChange,
  activeAboutTab,
  onAboutTabChange,
}: SidebarProps) => {
  const { t } = useLanguage();

  return (
    <aside className={styles.sidebar}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerTag}>Phantom Thief</span>
        <span className={styles.headerInitials}>S.A.C.</span>
        <div className={styles.headerLine} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {/* About with accordion sub-nav */}
        <button
          className={`${styles.navItem} ${activeSection === 'about' ? styles.navItemActive : ''}`}
          onClick={() => onSectionChange('about')}
        >
          <span className={styles.bullet}>✦</span>
          <P5Text text={t.nav.about} />
        </button>

        {activeSection === 'about' && (
          <div className={styles.subNav}>
            {ABOUT_TABS.map((tab) => (
              <button
                key={tab}
                className={`${styles.subNavItem} ${activeAboutTab === tab ? styles.subNavItemActive : ''}`}
                onClick={() => onAboutTabChange(tab)}
              >
                <span className={styles.subArrow}>→</span>
                <P5Text text={t.about.tabs[tab]} />
              </button>
            ))}
          </div>
        )}

        {OTHER_SECTIONS.map((section) => (
          <button
            key={section}
            className={`${styles.navItem} ${activeSection === section ? styles.navItemActive : ''}`}
            onClick={() => onSectionChange(section)}
          >
            <span className={styles.bullet}>✦</span>
            <P5Text text={t.nav[section]} />
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.footerText}>PORTFOLIO v1.0</span>
      </div>
    </aside>
  );
};
