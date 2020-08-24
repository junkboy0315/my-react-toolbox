import { useCallback, useEffect, useMemo, useState } from 'react';

export type Options = {
  lazy?: boolean;
};

type Results = {
  detected: boolean;
  check: () => Promise<void>;
};

const useAdBlockDetector = (options: Options = {}): Results => {
  const [adBlockDetected, setAdBlockDetected] = useState<boolean>(false);

  const checkAdBlocker = useCallback(async () => {
    const isOnline = typeof navigator !== 'undefined' && navigator.onLine;
    if (!isOnline) {
      return;
    }

    try {
      await fetch(
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        {
          method: 'HEAD',
          mode: 'no-cors',
        },
      );
      setAdBlockDetected(false);
    } catch (e) {
      // Failed, maybe because of an AdBlocker
      setAdBlockDetected(true);
    }
  }, []);

  useEffect(() => {
    if (options.lazy) {
      return;
    }
    checkAdBlocker();
  }, [checkAdBlocker, options.lazy]);

  const payload = useMemo(
    () => ({ detected: adBlockDetected, check: checkAdBlocker }),
    [adBlockDetected, checkAdBlocker],
  );

  return payload;
};

export default useAdBlockDetector;
