# ek-viewport 

> Lightweight, type-safe, and SSR-friendly responsive utilities for React.  
> **Part of Ender's Starter Kit.**

[![npm version](https://img.shields.io/npm/v/ek-viewport.svg)](https://www.npmjs.com/package/ek-viewport)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ek-viewport** solves the "Hydration Mismatch" problem in Next.js/SSR apps while providing an easy-to-use API for handling responsive logic.

---

##  Features

-  **Zero Dependencies:** Tiny bundle size.
-  **SSR Safe:** Works perfectly with Next.js & Remix (no hydration errors).
-  **Type Safe:** Written in TypeScript with full type definitions.
-  **Tailwind Compatible:** Uses standard Tailwind CSS breakpoints.

---

##  Installation

```bash
npm install ek-viewport
# or
yarn add ek-viewport
# or
pnpm add ek-viewport
```

---

##  Usage

### 1. The Hook: `useBreakpoint`

Perfect for logic-based responsiveness.

```tsx
import { useBreakpoint } from 'ek-viewport';

const MyComponent = () => {
  // Returns true if screen width is >= 768px
  const isMd = useBreakpoint('md'); 

  return (
    <div>
      {isMd ? "Desktop View" : "Mobile View"}
    </div>
  );
};
```

### 2. The Components: `Show` & `Hide`

Perfect for clean JSX without cluttering your code with ternary operators.

```tsx
import { Show, Hide } from 'ek-viewport';

const Header = () => {
  return (
    <nav>
      <Logo />
      
      {/* Only render on Large screens (1024px and up) */}
      <Show above="lg">
        <DesktopMenu />
      </Show>

      {/* Hide on Large screens (Show only on mobile/tablet) */}
      <Hide above="lg">
        <HamburgerIcon />
      </Hide>
    </nav>
  );
};
```

---

##  Breakpoints

Based on standard Tailwind CSS values:

| Key  | Min-Width |
|------|-----------|
| `sm` | 640px     |
| `md` | 768px     |
| `lg` | 1024px    |
| `xl` | 1280px    |
| `2xl`| 1536px    |

---

## 📄 License

MIT © Ender
