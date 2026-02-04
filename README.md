# ek-viewport

Lightweight, type-safe, and SSR-friendly responsive utilities for React. Focuses on performance and developer experience.

[![npm version](https://img.shields.io/npm/v/ek-viewport.svg)](https://www.npmjs.com/package/ek-viewport)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ek-viewport** solves the "Hydration Mismatch" problem in Next.js/SSR apps while providing a declarative API for handling responsive logic.

---

## ✨ Features

- **SSR Safe:** Works perfectly with Next.js & Remix (no hydration errors)
- **Customizable:** Use your own breakpoint values via ViewportProvider
- **Sensors:** Track scroll direction, orientation, and window size
- **Debug Tool:** Built-in overlay to see active breakpoints in real-time
- **Zero Dependencies:** Keeps your bundle size minimal
- **Type Safe:** Full TypeScript support for all hooks and components

---

## 📦 Installation

```bash
npm install ek-viewport
# or
yarn add ek-viewport
# or
pnpm add ek-viewport
```

---

## 🚀 Setup (Optional Custom Config)

By default, **ek-viewport** uses standard Tailwind CSS breakpoints. You can customize them using the `ViewportProvider`.

```tsx
import { ViewportProvider } from 'ek-viewport';

const customBreakpoints = {
  md: 800,
  lg: 1100
};

const App = () => (
  <ViewportProvider breakpoints={customBreakpoints}>
    <YourContent />
  </ViewportProvider>
);
```

---

## 💡 Usage

### 1. Basic Hook: `useBreakpoint`

Returns `true` if the viewport is above the specified breakpoint.

```tsx
import { useBreakpoint } from 'ek-viewport';

const MyComponent = () => {
  const isDesktop = useBreakpoint('lg'); 

  return <div>{isDesktop ? "Desktop View" : "Mobile View"}</div>;
};
```

### 2. Declarative Components: `Show` & `Hide`

Manage layouts without complex ternary operators.

```tsx
import { Show, Hide } from 'ek-viewport';

const Navbar = () => (
  <nav>
    <Logo />
    <Show above="md">
      <DesktopMenu />
    </Show>
    <Hide above="md">
      <MobileMenu />
    </Hide>
  </nav>
);
```

### 3. Sensors & Utilities

#### `useScrollDirection`

Detects if the user is scrolling `'up'` or `'down'`.

```tsx
import { useScrollDirection } from 'ek-viewport';

const Header = () => {
  const direction = useScrollDirection();
  return (
    <header className={direction === 'down' ? 'hidden' : 'visible'}>
      ...
    </header>
  );
};
```

#### `useWindowSize`

Track exact pixel dimensions.

```tsx
import { useWindowSize } from 'ek-viewport';

const MyComponent = () => {
  const { width, height } = useWindowSize();
  
  return <div>Window: {width} x {height}</div>;
};
```

#### `useOrientation`

Detect landscape or portrait mode.

```tsx
import { useOrientation } from 'ek-viewport';

const MyComponent = () => {
  const { isLandscape } = useOrientation();
  
  return <div>{isLandscape ? 'Landscape' : 'Portrait'}</div>;
};
```

---

## 🐛 Developer Experience (Debug Tool)

Stop guessing which breakpoint is active. Drop the `DebugOverlay` at the root of your app during development.

```tsx
import { DebugOverlay } from 'ek-viewport';

const App = () => (
  <>
    <DebugOverlay />
    <YourContent />
  </>
);
```

---

## 📐 Default Breakpoints

| Key  | Min-Width |
|------|-----------|
| sm   | 640px     |
| md   | 768px     |
| lg   | 1024px    |
| xl   | 1280px    |
| 2xl  | 1536px    |

---

## 📄 License

MIT © [Your Name/Organization]

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
