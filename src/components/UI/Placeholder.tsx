import { useLanguage } from '../../context/LanguageContext';
import styles from './Placeholder.module.css';

interface PlaceholderProps {
  title: string;
  description?: string;
}

export const Placeholder = ({ title, description }: PlaceholderProps) => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
      <div className={styles.badge}>{t.placeholder.comingSoon}</div>
    </div>
  );
};
