# Santosh Kumar Shah - Developer Portfolio 🚀

> **Bridging the gap between imagination and reality through code.**

A high-performance, visually stunning portfolio built with **React, Vite, and TypeScript**. This project features a unique **Dual-Layout Architecture** that delivers two completely distinct experiences based on the user's device.

## 🌟 Key Features

### 🖥️ Desktop Experience (The Powerhouse)
Designed for high-end displays and powerful GPUs.
*   **Immersive Visuals**: Heavy use of WebGL, Particle Systems (`tsparticles`), and 3D elements.
*   **Advanced Animations**: Complex `Framer Motion` sequences and GSAP interactions.
*   **Awwwards Style**: Focus on "Wow" factor with cursor effects, magnetic buttons, and fluid transitions.

### 📱 Mobile Experience (The App)
Designed for touch, psychology, and battery life.
*   **Logic-Based Switcher**: Custom `useIsMobile` hook instantly switches the entire render tree.
*   **Touch-First**: Drag-and-drop physics, swipeable cards, and haptic-style feedback.
*   **Performance Optimized**: 0% WebGL load on mobile. Uses CSS hardware acceleration and lightweight SVG animations to ensure 60fps scrolling.
*   **App-Like UI**: Bottom floating navigation dock and "Instagram Stories" style content consumption.

## 🛠️ Tech Stack

*   **Core**: React 18, TypeScript, Vite
*   **Styling**: Tailwind CSS (Custom Design System)
*   **Animation**: Framer Motion, GSAP
*   **Effects**: TSParticles, OGL (WebGL), Lucide React

## 📂 Project Structure

```bash
src/
├── components/
│   └── ui/              # High-end visual effects (Sparkles, Vortex, etc.)
├── layouts/
│   ├── DesktopLayout.tsx # The heavy, immersive desktop site
│   └── MobileLayout.tsx  # The lightweight, interactive mobile app
├── sections/
│   ├── mobile/          # Specific mobile-only components
│   └── ...              # Desktop sections
├── hooks/
│   └── useIsMobile.ts   # The brain behind the device switching
└── data/
    └── portfolio.ts     # Centralized content management
```

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

---
*Created by [Santosh Kumar Shah](https://github.com/SANTOSH-KUMAR-SHAH)*
