import React, { useEffect, useState } from 'react';
import styles from './ContentsPlaceholder.module.scss';

export type Props = {
  delayMs?: number;
};

const ContentsPlaceholder: React.FC<Props> = ({ delayMs = 500 }) => {
  const [visibility, setVisible] = useState<'hidden' | 'visible'>('hidden');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible('visible');
    }, delayMs);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return (
    <div
      className={styles.container}
      style={{ opacity: visibility === 'visible' ? 1 : 0 }}
    >
      <div className={`${styles.barTitle} ${styles.animate}`}></div>
      <div className={`${styles.bar1} ${styles.animate}`}></div>
      <div className={`${styles.bar2} ${styles.animate}`}></div>
      <div className={`${styles.bar3} ${styles.animate}`}></div>
      <div className={`${styles.bar1} ${styles.animate}`}></div>
      <div className={`${styles.bar2} ${styles.animate}`}></div>
      <div className={`${styles.bar3} ${styles.animate}`}></div>
    </div>
  );
};

export default ContentsPlaceholder;
