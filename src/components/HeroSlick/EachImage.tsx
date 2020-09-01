import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styles from './EachImage.module.css';

export type Props = {
  src: string;
  in: boolean;
};

const EachImage: React.FC<Props> = ({ src = null, in: inProp = false }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // inPropがtrueだった場合に、マウント時にアニメーションが効かない問題が発生したため、
  // Transitionの`in`に一旦falseを渡す
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(inProp);
  }, [inProp]);

  const appearingStyle = {
    opacity: 1,
    transform: 'scale(1.0)',
    transition: 'opacity 1s linear, transform 7s linear',
  };

  const disappearedStyle = {
    opacity: 0,
    transform: 'scale(1.1)',
  };

  const anim: { [key in TransitionStatus]: any } = {
    entering: appearingStyle,
    entered: appearingStyle,
    exiting: appearingStyle,
    exited: disappearedStyle,
    unmounted: disappearedStyle,
  };

  return (
    <Transition in={visible} timeout={1000} nodeRef={imageContainerRef}>
      {(state) => {
        return (
          <div
            className={styles.imageContainer}
            ref={imageContainerRef}
            style={{
              zIndex: visible ? 'auto' : -1,
            }}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${src})`,
                ...anim[state],
              }}
            ></div>
          </div>
        );
      }}
    </Transition>
  );
};

export default EachImage;
