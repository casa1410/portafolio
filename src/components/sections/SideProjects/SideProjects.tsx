import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import chestClosedSprite from './project-assets/chest-closed.svg';
import chestOpenSprite from './project-assets/chest-open.svg';
import obramaxScreenshot from './project-assets/obramax.png';
import styles from './SideProjects.module.css';

const PROJECT_IMAGES: Partial<Record<string, string>> = {
  'project-1': obramaxScreenshot,
};

export const SideProjects = () => {
  const { t } = useLanguage();
  const info = t.sideProjects;
  const [openId, setOpenId] = useState<string | null>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openProject = info.projects.find((p) => p.id === openId) ?? null;

  const handleChestClick = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setOpenId(id);
  };

  // Make the modal "pop" out from the chest that was clicked, instead of just fading in centered.
  useLayoutEffect(() => {
    if (!openProject || !origin || !modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    modalRef.current.style.setProperty('--dx', `${origin.x - centerX}px`);
    modalRef.current.style.setProperty('--dy', `${origin.y - centerY}px`);
  }, [openProject, origin]);

  useEffect(() => {
    if (!openProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openProject]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{info.title}</h2>

      <div className={styles.grid}>
        {info.projects.map((p) => (
          <button key={p.id} className={styles.chestButton} onClick={(e) => handleChestClick(p.id, e)}>
            <img
              src={openId === p.id ? chestOpenSprite : chestClosedSprite}
              alt={p.name}
              className={styles.chestSprite}
            />
            <span className={styles.chestName}>{p.name}</span>
          </button>
        ))}
      </div>

      {openProject && (
        <div className={styles.overlay} onClick={() => setOpenId(null)}>
          <div ref={modalRef} className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setOpenId(null)} aria-label={info.closeLabel}>
              ✕
            </button>

            <h3 className={styles.modalTitle}>{openProject.name}</h3>

            {PROJECT_IMAGES[openProject.id] ? (
              <img className={styles.projectImage} src={PROJECT_IMAGES[openProject.id]} alt={openProject.name} />
            ) : (
              <div className={styles.imagePlaceholder}>{info.imagePlaceholder}</div>
            )}

            <p className={styles.modalDesc}>{openProject.description}</p>

            <div className={styles.modalSection}>
              <span className={styles.sectionLabel}>{info.featuresLabel}</span>
              <ul className={styles.features}>
                {openProject.features.map((feature, i) => (
                  <li className={styles.feature} key={i}>
                    <span className={styles.featureMark}>▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <span className={styles.sectionLabel}>{info.techLabel}</span>
              <div className={styles.tags}>
                {openProject.tech.map((tech) => (
                  <span className={styles.tag} key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.modalSection}>
              <span className={styles.sectionLabel}>{info.linksLabel}</span>
              <div className={styles.links}>
                {openProject.links.map((link) => (
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
          </div>
        </div>
      )}
    </div>
  );
};
