import { useLanguage } from '../../../context/LanguageContext';
import styles from './Experience.module.css';

export const Experience = () => {
  const { t } = useLanguage();
  const { title, jobs } = t.about.experience;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {jobs.map((job) => (
        <div className={styles.job} key={job.company}>
          <div className={styles.jobHeader}>
            <span className={styles.company}>{job.company}</span>
            <span className={styles.period}>{job.period}</span>
          </div>

          <div className={styles.roleRow}>
            <span className={styles.roleBadge}>{job.role}</span>
            <span className={styles.location}>{job.location}</span>
          </div>

          <ul className={styles.bullets}>
            {job.bullets.map((bullet, i) => (
              <li className={styles.bullet} key={i}>
                <span className={styles.bulletMark}>▸</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
