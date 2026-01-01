# Resume Website

Personal resume website for **Stephen Matheny**, built to present experience, projects, and skills in a clean, accessible, and performance-focused way.

This site is intentionally simple: fast to load, easy to scan, and designed to highlight real-world engineering experience without visual noise.

---

## Goals

- Present professional experience and projects clearly
- Maintain a high signal-to-noise ratio
- Demonstrate frontend judgment through subtle polish (not gimmicks)
- Be fully responsive, accessible, and performant
- Keep the codebase maintainable and easy to reason about

---

## Tech Stack

- **React** – component-based UI
- **Vite** – fast development and build tooling
- **CSS** – custom, centralized styles (no CSS-in-JS)
- **JavaScript (ES6+)**

---

## Features

- Responsive layout for desktop, tablet, and mobile
- Clean, scannable sections (About, Skills, Experience, Projects)
- Subtle micro-interactions for improved UX
- Accessible focus states and keyboard navigation
- Scroll progress indicator
- Copy-to-clipboard email action with visual feedback
- Print-friendly styles for resume export

---

## Project Structure

```text
src/
├── components/        # Reusable UI components
├── data/              # Profile and resume content
├── App.jsx            # App composition
├── index.css          # Global styles
└── main.jsx           # App entry point
Content is driven primarily from structured data in src/data/profile.js, making updates straightforward and consistent.

Development
Install dependencies
npm install
Run locally
npm run dev
Build for production
npm run build
Preview production build
npm run preview
Design Principles
Restraint over flash – polish should support content, not distract from it

Accessibility first – visible focus states and reduced-motion support

Performance matters – no heavy libraries or unnecessary animation

Maintainability – clear separation of data, layout, and styling

License
This project is for personal use.
Feel free to reference the structure or patterns, but please do not reuse the content.

Contact
GitHub: https://github.com/stephenmatheny

LinkedIn: https://www.linkedin.com/in/stephenmatheny
