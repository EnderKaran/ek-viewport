import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { BreakpointKey } from '../utils/constants';

interface ShowProps {
    above: BreakpointKey;
    children: React.ReactNode;
}

export const Show = ({ above, children }: ShowProps) => {
  const isAbove = useBreakpoint(above);

  // Eğer koşul sağlanıyorsa children'ı render et, yoksa null dön (DOM'a basma)
  return isAbove ? <>{children}</> : null;
};