import { useState, useEffect } from 'react';
import { defaultBreakpoints, BreakpointKey } from '../utils/constants';

export const useBreakpoint = (breakpoint: BreakpointKey) => {
    const [matches , setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        //medya sorgusunu oluştur
        const query = `(min-width: ${defaultBreakpoints[breakpoint]}px)`;
        const media = window.matchMedia(query);

        // Değişiklik olduğunda state'i güncellenecek
        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

        setMatches(media.matches);

        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    } , [breakpoint]);

    return matches;
};