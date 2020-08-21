import React, { useEffect, useState } from 'react';
import Fade, { Props as FadeProps } from './Fade';

export type Props = Omit<FadeProps, 'visible'>;

const OnMountFade: React.FC<Props> = ({ children, ...rest }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // animation doesn't work without this
    setTimeout(() => setVisible(true), 0);
  }, []);

  return (
    <Fade {...rest} visible={visible}>
      {children}
    </Fade>
  );
};

export default OnMountFade;
