// Hooks
export { useBreakpoint } from './hooks/useBreakpoint';
export { useMediaQuery } from './hooks/useMediaQuery';
export { useOrientation } from './hooks/useOrientation';
export { useWindowSize } from './hooks/useWindowSize';
export { useScrollDirection } from './hooks/useScrollDirection';

// Components & Provider
export { Show } from './components/Show';
export { Hide } from './components/Hide';
export { DebugOverlay } from './components/DebugOverlay';
export { ViewportProvider, useViewportConfig } from './context/ViewportContext';

// Types
export type { BreakpointKey } from './utils/constants';