import { describe, it, expect } from 'vitest';
import { useBreakpoint, Show, Hide } from '../src';

describe('ek-viewport Entry Point', () => {
  it('should export useBreakpoint hook', () => {
    expect(useBreakpoint).toBeDefined();
    expect(typeof useBreakpoint).toBe('function');
  });

  it('should export Show component', () => {
    expect(Show).toBeDefined();
  });

  it('should export Hide component', () => {
    expect(Hide).toBeDefined();
  });
});