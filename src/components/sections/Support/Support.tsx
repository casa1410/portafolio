import { useLanguage } from '../../../context/LanguageContext';
import styles from './Support.module.css';

export const Support = () => {
  const { t } = useLanguage();
  const info = t.support;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{info.title}</h2>
      <p className={styles.description}>{info.description}</p>
      <a
        href={info.kofiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.kofiBtn}
      >
        <span className={styles.kofiIcon}>☕</span>
        {info.button}
      </a>
    </div>
  );
};
