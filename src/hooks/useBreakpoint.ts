import { useMediaQuery } from './useMediaQuery';
import { BreakpointKey } from '../utils/constants';
import { useViewportConfig } from '../context/ViewportContext';

export const useBreakpoint = (breakpoint: BreakpointKey) => {
  const config = useViewportConfig(); 
  
  return useMediaQuery(`(min-width: ${config[breakpoint]}px)`);
};