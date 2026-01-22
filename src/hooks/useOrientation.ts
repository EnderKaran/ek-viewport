import { useMediaQuery } from './useMediaQuery';

interface OrientationResult {
  mode: 'portrait' | 'landscape';
  isPortrait: boolean;
  isLandscape: boolean;
}

export const useOrientation = (): OrientationResult => {
 
  const isPortrait = useMediaQuery('(orientation: portrait)');
  
  const isLandscape = !isPortrait;

  return {
    mode: isPortrait ? 'portrait' : 'landscape',
    isPortrait,
    isLandscape,
  };
};