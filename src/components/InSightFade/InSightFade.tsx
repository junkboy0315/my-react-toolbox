import React from 'react';
import { useIsInSight } from '../../hooks/useIsInSight';
import { Fade } from '../Fade/Fade';

interface IProps {
  children: React.ReactElement;
  delay: number;
  duration?: number;
  offsetY?: number;
}

export const InSightFade: React.FC<IProps> = ({
  children,
  offsetY = 0,
  ...rest
}) => {
  const { isInSight, ref } = useIsInSight({ offsetY });

  return (
    <div ref={ref}>
      <Fade {...rest} in={isInSight}>
        {children}
      </Fade>
    </div>
  );
};
