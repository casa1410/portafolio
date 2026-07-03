import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './AudioPlayer.module.css';

export const AudioPlayer = () => {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = new Audio('/audio/music.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audio.addEventListener('error', () => setHasError(true));
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ''; };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
    }
  };

  return (
    <div className={styles.player}>
      <span className={styles.icon}>♪</span>
      <button
        className={`${styles.btn} ${hasError ? styles.disabled : ''}`}
        onClick={togglePlay}
        title={isPlaying ? t.audio.pauseLabel : t.audio.playLabel}
        disabled={hasError}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
    </div>
  );
};
