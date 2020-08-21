import React from 'react';
import useIsSeen from '../../hooks/useIsSeen/useIsSeen';
import { Fade } from '../Fade/Fade';

export interface IProps {
  children: React.ReactElement;
  className: string;
  delay: number;
  duration?: number;
  offsetY?: number;
}

const SeenFade: React.FC<IProps> = ({
  children,
  className,
  offsetY = 0,
  ...rest
}) => {
  const { isSeen, ref } = useIsSeen({ offsetY });

  return (
    <div className={className} ref={ref}>
      <Fade {...rest} in={isSeen}>
        {children}
      </Fade>
    </div>
  );
};

export default SeenFade;
