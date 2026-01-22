import { useMediaQuery } from './useMediaQuery';
import { defaultBreakpoints, BreakpointKey } from '../utils/constants';

export const useBreakpoint = (breakpoint: BreakpointKey) => {
  
  return useMediaQuery(`(min-width: ${defaultBreakpoints[breakpoint]}px)`);
};