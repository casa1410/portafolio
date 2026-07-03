import { ReactNode } from 'react';
import styles from './BorderFrame.module.css';

interface BorderFrameProps {
  children: ReactNode;
}

/** Pixel-art brick border framing the whole viewport, like an 8-bit RPG HUD window. */
export const BorderFrame = ({ children }: BorderFrameProps) => {
  return (
    <div className={styles.frame}>
      <div className={`${styles.band} ${styles.top}`} />
      <div className={`${styles.band} ${styles.bottom}`} />
      <div className={`${styles.band} ${styles.left}`} />
      <div className={`${styles.band} ${styles.right}`} />
      <div className={styles.screen}>{children}</div>
    </div>
  );
};
