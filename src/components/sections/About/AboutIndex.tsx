import { useLanguage } from '../../../context/LanguageContext';
import profilePhoto from '../../../assets/profile.jpg';
import styles from './AboutIndex.module.css';

export const AboutIndex = () => {
  const { t } = useLanguage();
  const info = t.about.index;

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>

        {/* Photo with pixel corner markers */}
        <div className={styles.photoWrapper}>
          <div className={styles.photo}>
            <img className={styles.photoImg} src={profilePhoto} alt={info.name} />
          </div>
          <div className={styles.photoOffset} />
          {/* Corner bracket markers */}
          <span className={`${styles.corner} ${styles.tl}`} />
          <span className={`${styles.corner} ${styles.tr}`} />
          <span className={`${styles.corner} ${styles.bl}`} />
          <span className={`${styles.corner} ${styles.br}`} />
        </div>

        {/* Info block */}
        <div className={styles.infoBlock}>
          <span className={styles.tag}>{info.tag}</span>
          <h1 className={styles.name}>{info.name}</h1>

          <div className={styles.roleBadge}>
            <span className={styles.roleText}>{info.role}</span>
          </div>

          <div className={styles.divider} />
          <p className={styles.university}>{info.university}</p>
        </div>
      </div>

      {/* Bio */}
      <div className={styles.bioBlock}>
        <span className={styles.bioLabel}>// BIO</span>
        <p className={styles.bio}>{info.bio}</p>
      </div>
    </div>
  );
};
