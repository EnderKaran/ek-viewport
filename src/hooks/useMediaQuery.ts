import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  // Varsayılan değer false
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // SSR kontrolü
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);

    // Listener fonksiyonu
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(media.matches);

    // Dinleyiciyi ekle
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};