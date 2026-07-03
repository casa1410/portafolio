import { useLanguage } from '../../../context/LanguageContext';
import styles from './Contact.module.css';

export const Contact = () => {
  const { t } = useLanguage();
  const info = t.contact;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{info.title}</h2>
      <p className={styles.description}>{info.description}</p>

      <div className={styles.infoList}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Email</span>
          <a className={styles.infoValue} href={`mailto:${info.email}`}>{info.email}</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Tel</span>
          <a className={styles.infoValue} href={`tel:${info.phone.replace(/\s/g, '')}`}>{info.phone}</a>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Loc</span>
          <span className={styles.infoValue}>{info.location}</span>
        </div>
      </div>

      <div className={styles.links}>
        {info.links.map((link) => (
          <a
            key={link.label}
            className={styles.linkBtn}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
