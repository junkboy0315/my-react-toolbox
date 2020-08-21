import React, { useMemo, useRef } from 'react';
import { Transition } from 'react-transition-group';

export type Props = {
  children: React.ReactElement;
  delay?: number;
  direction?: 'upward' | 'none';
  duration?: number;
  visible: boolean; // to handle visibility by manual
};

const Fade: React.FC<Props> = ({
  children,
  delay = 0,
  direction = 'none',
  duration = 160,
  visible,
}) => {
  const fadeTargetRef = useRef(null);

  const defaultStyle = {
    transition: `all ${duration}ms ease ${delay}ms`,
  };

  const transitionStyles = useMemo(() => {
    switch (direction) {
      case 'none': {
        return {
          entering: { opacity: 1 },
          entered: { opacity: 1 },
          exiting: { opacity: 0 },
          exited: { opacity: 0 },
          unmounted: {},
        };
      }
      case 'upward': {
        return {
          entering: { opacity: 1, transform: 'none' },
          entered: { opacity: 1, transform: 'none' },
          exiting: { opacity: 0, transform: 'translateY(100px)' },
          exited: { opacity: 0, transform: 'translateY(100px)' },
          unmounted: {},
        };
      }
    }
  }, [direction]);

  return (
    <Transition in={visible} timeout={duration} nodeRef={fadeTargetRef}>
      {(state) => (
        <div
          ref={fadeTargetRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
