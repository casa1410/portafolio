import { useLanguage } from '../../../context/LanguageContext';
import styles from './Hobbies.module.css';

export const Hobbies = () => {
  const { t } = useLanguage();
  const info = t.hobbies;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{info.title}</h2>
      <p className={styles.description}>{info.description}</p>

      <div className={styles.tags}>
        {info.items.map((item) => (
          <span className={styles.tag} key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};
