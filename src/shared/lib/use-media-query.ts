import { useCallback, useEffect, useState } from 'react';
import config from 'tailwindcss/defaultConfig';

const breakpoints = config.screens;
type BreakpointKey = keyof typeof breakpoints;

export const useMediaQuery = (size: BreakpointKey) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      `(min-width: ${config.theme.screens[String(size)]})`
    );
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, size]);

  return matches;
};
