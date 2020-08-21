import { useCallback, useRef, useState } from 'react';

const useIsSeen = ({ offsetY = 0 } = {}) => {
  const scrollHandler = useRef<(this: Window, ev: Event) => any>(() => {});
  const [isSeen, setIsSeen] = useState(false);

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
          setIsSeen(true);
        } else {
          setIsSeen(false);
        }
      };
      window.addEventListener('scroll', scrollHandler.current);
    },
    [offsetY],
  );

  return { ref: onElementRefUpdated, isSeen };
};

export default useIsSeen;
