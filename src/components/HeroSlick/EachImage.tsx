import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styles from './EachImage.module.css';

export type Props = {
  active: boolean;
  intervalMs?: number;
  src: string;
  transitionDurationMs?: number;
};

const EachImage: React.FC<Props> = ({
  active = false,
  intervalMs = 5000,
  src = null,
  transitionDurationMs = 1500,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>();

  // アニメーションの仕込み
  useEffect(() => {
    timeline.current = gsap
      .timeline({ defaults: { ease: 'linear' } })
      .fromTo(
        imageRef.current,
        transitionDurationMs / 1000,
        { opacity: 0 },
        { opacity: 1 },
      )
      .fromTo(
        imageRef.current,
        intervalMs / 1000 + transitionDurationMs / 1000,
        { transform: 'scale(1.1)' },
        { transform: 'scale(1.0)' },
        '<',
      )
      .set(imageRef.current, { opacity: 0 })
      .pause();
  }, [intervalMs, transitionDurationMs]);

  // アクティブになった瞬間にアニメーションを開始する
  useEffect(() => {
    if (!timeline.current) return;
    if (active) {
      timeline.current.restart();
    }
  }, [active]);

  return (
    <div
      className={styles.imageContainer}
      style={{
        zIndex: active ? 'auto' : -1,
      }}
    >
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${src})`,
        }}
        ref={imageRef}
      ></div>
    </div>
  );
};

export default EachImage;
