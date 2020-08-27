import React from 'react';
import { Portal } from 'react-portal';
import styles from './RollerShutter.module.css';

export type Props = {
  children: React.ReactChild;
  delayMs?: number;
  durationMs?: number;
  visible: boolean;
};

const RollerShutter: React.FC<Props> = ({
  children,
  delayMs = 0,
  durationMs = 150,
  visible = true,
}) => {
  let containerStyle = {};
  if (visible) {
    containerStyle = {
      transform: 'translateY(0)',
      opacity: 1,
      transition: `all ${durationMs}ms ${delayMs}ms`,
    };
  } else {
    containerStyle = {
      transform: 'translateY(-100%)',
      opacity: 0,
      transition: `all ${durationMs}ms ${delayMs}ms`,
    };
  }

  return (
    <Portal>
      <div className={styles.rootContainer} style={containerStyle}>
        {children}
      </div>
    </Portal>
  );
};

export default RollerShutter;
