import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

export interface IProps {
  children: React.ReactElement;
  delay?: number;
  duration?: number;
  in: boolean; // to handle visibility by manual
}

export const Fade: React.FC<IProps> = ({
  children,
  delay = 0,
  duration = 160,
  in: inProp,
}) => {
  const fadeTargetRef = useRef(null);

  const defaultStyle = {
    transition: `all ${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: 'none' },
    entered: { opacity: 1, transform: 'none' },
    exiting: { opacity: 0, transform: 'translateY(100px)' },
    exited: { opacity: 0, transform: 'translateY(100px)' },
    unmounted: {},
  };

  return (
    <Transition in={inProp} timeout={duration} nodeRef={fadeTargetRef}>
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
