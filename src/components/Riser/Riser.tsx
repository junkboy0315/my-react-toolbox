import React from 'react';
import styles from './Riser.module.css';

export type Props = {
  children: React.ReactChild;
  delayMs?: number;
  durationMs?: number;
  visible: boolean;
};

const Riser: React.FC<Props> = ({
  children,
  delayMs = 0,
  durationMs = 150,
  visible = true,
}) => {
  let riserStyle = {};
  if (visible) {
    riserStyle = {
      transform: 'translateY(0)',
      transition: `transform ${durationMs}ms ${delayMs}ms`,
    };
  } else {
    riserStyle = {
      transform: 'translateY(100%)',
      transition: `transform ${durationMs}ms ${delayMs}ms`,
    };
  }

  return (
    <div className={styles.rootContainer}>
      <div style={riserStyle}>{children}</div>
    </div>
  );
};

export default Riser;
