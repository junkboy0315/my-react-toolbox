import { RefObject, useEffect, useRef, useState } from 'react';

export type Options = {
  offset?: number;
  once?: boolean;
};

type Result = {
  isIntersecting: boolean;
  ref: RefObject<HTMLDivElement>;
};

const useIsIntersecting = ({ offset = 0, once = false } = {}): Result => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
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
  }, [offset, once]);

  return { isIntersecting, ref };
};

export default useIsIntersecting;
