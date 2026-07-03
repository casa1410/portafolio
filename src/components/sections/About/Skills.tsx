import { useLanguage } from '../../../context/LanguageContext';
import styles from './Skills.module.css';

export const Skills = () => {
  const { t } = useLanguage();
  const { title, categories } = t.about.skills;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {categories.map((category) => (
        <div className={styles.category} key={category.label}>
          <span className={styles.categoryLabel}>{category.label}</span>
          <div className={styles.tags}>
            {category.items.map((item) => (
              <span className={styles.tag} key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
