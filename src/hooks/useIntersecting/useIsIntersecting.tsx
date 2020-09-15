import { useCallback, useState } from 'react';

export type Options = {
  offset?: number;
  once?: boolean;
};

type Result = {
  isIntersecting: boolean;
  onTargetChange: (instance: HTMLDivElement | null) => void;
};

const useIsIntersecting = ({ offset = 0, once = false } = {}): Result => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onTargetChange = useCallback(
    (element: any) => {
      if (!element) return;

      const options = {
        rootMargin: `${offset}px`,
        threshold: 0,
      };
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(element);
          }
        } else {
          setIsIntersecting(false);
        }
      }, options);
      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    },
    [offset, once],
  );

  return { isIntersecting, onTargetChange: onTargetChange };
};

export default useIsIntersecting;
