// Tailwind standartlarını baz alındı

export const defaultBreakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

export const getCurrentBreakpoint = (width: number): string => {
    if (width >= defaultBreakpoints['2xl']) return '2xl';
    if (width >= defaultBreakpoints.xl) return 'xl';
    if (width >= defaultBreakpoints.lg) return 'lg';
    if (width >= defaultBreakpoints.md) return 'md';
    if (width >= defaultBreakpoints.sm) return 'sm';
    return 'xs'; // 640px altı için
  };

export type BreakpointKey = keyof typeof defaultBreakpoints;