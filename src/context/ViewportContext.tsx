import React, { createContext, useContext, ReactNode } from 'react';
import { defaultBreakpoints, BreakpointKey } from '../utils/constants';

type CustomBreakpoints = Partial<Record<BreakpointKey, number>>;

const ViewportContext = createContext<Record<BreakpointKey, number>>(defaultBreakpoints);

export const ViewportProvider = ({ 
  children, 
  breakpoints 
}: { 
  children: ReactNode; 
  breakpoints?: CustomBreakpoints 
}) => {
  const value = { ...defaultBreakpoints, ...breakpoints };
  
  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewportConfig = () => useContext(ViewportContext);