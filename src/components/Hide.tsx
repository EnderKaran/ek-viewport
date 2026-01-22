import React from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { BreakpointKey } from '../utils/constants';

interface HideProps {
  above: BreakpointKey;
  children: React.ReactNode;
}

export const Hide = ({ above, children }: HideProps) => {
  const isAbove = useBreakpoint(above);

  // Show'un tam tersi mantık: Eğer above durumu sağlanıyorsa GİZLE (null), değilse GÖSTER
  return isAbove ? null : <>{children}</>;
};