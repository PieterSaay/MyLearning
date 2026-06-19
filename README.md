# Oak & Ord — Atelier Furniture App

A polished single-page furniture store built with React, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Features

- **Product catalogue** — 8 handcrafted furniture pieces across Living Room, Bedroom, Dining, and Office categories
- **Category filtering & search** — instant client-side filtering with animated transitions
- **Shopping cart** — slide-out drawer with quantity controls, line totals, and free-delivery threshold
- **Wishlist** — per-product heart toggle (visible on hover)
- **Responsive** — mobile-first layout, works from 320 px up

## Stack

| Tool | Version |
|---|---|
| React | 19 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| Lucide React | latest |
| Vite | 8 |

## Getting Started

```bash
npm install
npm run dev
```

To use the furniture app as your entry point, swap `App.jsx` for `atelier-furniture-app.jsx` in `src/main.jsx`:

```jsx
import AtelierFurnitureApp from '../atelier-furniture-app.jsx'
// ...
root.render(<AtelierFurnitureApp />)
```

## Project Structure

```
atelier-furniture-app.jsx   # Self-contained furniture store component
src/                        # WonderLearn learning app (original)
```
