import { useLanguage } from '../../../context/LanguageContext';
import profilePhoto from '../../../assets/profile.jpg';
import { getLevelProgress } from '../../../utils/level';
import styles from './AboutIndex.module.css';

export const AboutIndex = () => {
  const { t } = useLanguage();
  const info = t.about.index;
  const { level, daysRemaining: xpRemaining, percent } = getLevelProgress();

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>

        {/* Photo with pixel corner markers */}
        <div className={styles.photoWrapper}>
          <div className={styles.photo}>
            <img className={styles.photoImg} src={profilePhoto} alt={info.fullName} />
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
          <h1 className={styles.name}>{info.fullName}</h1>

          <div className={styles.roleBadge}>
            <span className={styles.roleText}>{info.role}</span>
          </div>

          <div className={styles.divider} />
          <p className={styles.university}>{info.university}</p>
        </div>
      </div>

      {/* Level / XP bar */}
      <div className={styles.levelBlock}>
        <div className={styles.levelHeader}>
          <span className={styles.levelBadge}>{info.level.prefix} {level}</span>
          <span className={styles.levelMeta}>{xpRemaining} {info.level.xpToNext}</span>
        </div>
        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${percent}%` }} />
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
