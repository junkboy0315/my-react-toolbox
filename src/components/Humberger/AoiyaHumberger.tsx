import React from 'react';
import { usePrevious } from 'react-use';
import styles from './AoiyaHumberger.module.css';

export type Props = {
  borderColor?: string;
  durationMs?: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isActive: boolean;
};

const Humberger: React.FC<Props> = ({
  borderColor = 'black',
  durationMs = 750,
  isActive,
  onClick,
}) => {
  const prevState = usePrevious(isActive);

  const barCommonStyle = {
    backgroundColor: borderColor, // line color
  };

  let bar01Style = {};
  let bar02Style = {};
  let bar03Style = {};

  // Avoid animation on first render
  if (prevState !== undefined) {
    if (isActive) {
      bar01Style = {
        animation: `${styles.AnimBar01Activate} ${durationMs}ms both`,
      };
      bar02Style = {
        opacity: 0,
        transition: `opacity ${durationMs / 3}ms ${durationMs / 3}ms`,
      };
      bar03Style = {
        animation: `${styles.AnimBar03Activate} ${durationMs}ms both`,
      };
    } else {
      bar01Style = {
        animation: `${styles.AnimBar01Deactivate} ${durationMs}ms both`,
      };
      bar02Style = {
        opacity: 1,
        transition: `opacity ${durationMs / 3}ms ${durationMs / 3}ms`,
      };
      bar03Style = {
        animation: `${styles.AnimBar03Deactivate} ${durationMs}ms both`,
      };
    }
  }

  return (
    <div className={styles.container} onClick={onClick}>
      <span
        className={styles.bar}
        style={{ ...barCommonStyle, ...bar01Style }}
      />
      <span
        className={styles.bar}
        style={{ ...barCommonStyle, ...bar02Style }}
      />
      <span
        className={styles.bar}
        style={{ ...barCommonStyle, ...bar03Style }}
      />
    </div>
  );
};

export default Humberger;
