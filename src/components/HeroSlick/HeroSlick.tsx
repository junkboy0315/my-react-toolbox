import React, { useEffect, useState } from 'react';
import EachImage from './EachImage';
import styles from './HeroSlick.module.css';

export type Props = {
  srcs: Array<string>;
  intervalMs?: number;
};

const HeroSlick: React.FC<Props> = ({ intervalMs = 5000, srcs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageCount = srcs.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % imageCount);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [imageCount, intervalMs]);

  const imageElements = srcs.map((src, index) => {
    return (
      <EachImage
        active={index === currentIndex}
        intervalMs={intervalMs}
        key={src}
        src={src}
      />
    );
  });

  return <div className={styles.rootContainer}>{imageElements}</div>;
};

export default HeroSlick;
