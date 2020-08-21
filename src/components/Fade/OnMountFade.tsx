import React, { useEffect, useState } from 'react';
import Fade from './Fade';

export interface IProps {
  children: React.ReactElement;
  duration?: number;
  delay?: number;
}

const OnMountFade: React.FC<IProps> = ({ children, delay = 0, ...rest }) => {
  const [visible, setVisible] = useState(false);

  let canceled = false;

  useEffect(() => {
    setTimeout(() => {
      if (!canceled) {
        setVisible(true);
      }
    }, delay);
    return () => {
      // eslint-disable-next-line
      canceled = true;
    };
  }, []);

  return (
    <Fade {...rest} visible={visible}>
      {children}
    </Fade>
  );
};

export default OnMountFade;
