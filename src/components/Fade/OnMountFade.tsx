import React, { useEffect, useState } from 'react';
import Fade, { Props as FadeProps } from './Fade';

export type Props = Omit<FadeProps, 'visible'>;

const OnMountFade: React.FC<Props> = ({ children, ...rest }) => {
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
