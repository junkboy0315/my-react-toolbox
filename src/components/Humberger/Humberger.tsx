import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './Humberger.module.css';

console.log('############', styles);

export type Props = {
  isActive: boolean;
  duration?: number;
};

const Humberger: React.FC<Props> = ({ isActive, duration = 150 }) => {
  const fadeTargetRef = useRef(null);

  return (
    <Transition in={isActive} timeout={duration} nodeRef={fadeTargetRef}>
      {(state) => (
        <div className={styles.container} ref={fadeTargetRef}>
          <div className={styles.box}>
            <div className={styles.inner}></div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Humberger;
