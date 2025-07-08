import React, { useEffect, useRef, useState } from 'react';
import styles from './video.module.css';

interface VideoEmbedProps {
  /** ID do vídeo do YouTube (após `watch?v=`) */
  videoId: string;
  /** Título opcional para o iframe */
  title?: string;
}

const Video: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<any>(null);
  const intervalRef = useRef<number>();
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if ((window as any).YT) {
      onYouTubeIframeAPIReady();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (ytPlayerRef.current && ytPlayerRef.current.destroy) {
        ytPlayerRef.current.destroy();
      }
    };
  }, []);

  const onYouTubeIframeAPIReady = () => {
    if (!playerRef.current) return;

    ytPlayerRef.current = new (window as any).YT.Player(playerRef.current, {
      videoId,
      width: '100%',
      height: '100%',
      playerVars: {
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        controls: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event: any) => {
    const player = event.target;
    const totalSeconds = player.getDuration();
    setDuration(totalSeconds);

    intervalRef.current = window.setInterval(() => {
      if (player && player.getCurrentTime) {
        const currentSec = player.getCurrentTime();
        const pct = totalSeconds
          ? Math.min(100, (currentSec / totalSeconds) * 100)
          : 0;
        setProgress(pct);
      }
    }, 500);
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.ENDED) {
      setProgress(100);
    }
  };

  return (
    <div className={styles.card}>
      {/* Container responsivo 16:9 */}
      <div className={styles.videoWrapper} ref={playerRef}></div>

      {/* Barra de progresso */}
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={styles.progressText}>
        {Math.floor(progress)}% assistido
      </p>
    </div>
  );
};

export default Video;
