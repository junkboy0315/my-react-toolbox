import { useCallback, useEffect, useState } from 'react';

interface Dimension {
  width: number | null;
  height: number | null;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Dimension>({
    width: null,
    height: null,
  });

  const isClient = typeof window === 'object';

  const getSize = useCallback((): Dimension => {
    return {
      width: isClient ? document.documentElement.clientWidth : null,
      height: isClient ? document.documentElement.clientHeight : null,
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowSize(getSize());
    };

    // must be run manually the first time
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]);

  return windowSize;
};

export default useWindowSize;
