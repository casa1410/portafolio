import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageToggle.module.css';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className={styles.toggle} onClick={toggleLanguage} aria-label="Toggle language">
      <span className={language === 'es' ? styles.active : styles.inactive}>ES</span>
      <span className={styles.divider}>|</span>
      <span className={language === 'en' ? styles.active : styles.inactive}>EN</span>
    </button>
  );
};
