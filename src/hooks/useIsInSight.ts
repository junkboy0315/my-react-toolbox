import { useCallback, useRef, useState } from 'react';

export const useIsInSight = ({ offsetY = 0 }) => {
  const scrollHandler = useRef<(this: Window, ev: Event) => any>(() => {});
  const [isInSight, setIsInSight] = useState(false);

  const onElementRefUpdated = useCallback(
    (node: HTMLDivElement) => {
      // when unmount
      if (!node) {
        window.removeEventListener('scroll', scrollHandler.current);
        return;
      }

      scrollHandler.current = () => {
        const { top: myTop } = node.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (myTop + offsetY < windowHeight) {
          setIsInSight(true);
        } else {
          setIsInSight(false);
        }
      };
      window.addEventListener('scroll', scrollHandler.current);
    },
    [offsetY],
  );

  return { ref: onElementRefUpdated, isInSight };
};
