import React from 'react';
import useIsSeen from '../../hooks/useIsSeen/useIsSeen';
import Fade, { Props as FadeProps } from './Fade';

export type Props = {
  className?: string;
  offsetY?: number;
} & Omit<FadeProps, 'visible'>;

const SeenFade: React.FC<Props> = ({
  children,
  className,
  offsetY = 0,
  ...rest
}) => {
  const { isSeen, ref } = useIsSeen({ offsetY });

  return (
    <div className={className} ref={ref}>
      <Fade {...rest} visible={isSeen}>
        {children}
      </Fade>
    </div>
  );
};

export default SeenFade;
