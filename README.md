# Laura Navarro Lora - Personal Portfolio & Munich Local Guide

[![FTP Deploy](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=Leaflet&logoColor=white)

A high-performance, responsive personal website and travel guide. This project reflects professional standards in web design, modular CSS architecture, and performant vanilla JavaScript.

[**Explore the Live Site 🚀**](https://laulora.com)


---

## 🚀 Overview

This repository contains the source code for [laulora.com](https://laulora.com). It is designed to be lightweight, fast-loading, and easy to maintain without the overhead of modern JavaScript frameworks.

### Key Sections
-   **About / Hero**: Introduction and high-level professional summary.
-   **Resume**: Interactive professional timeline and skills overview.
-   **Munich Insider Guide**: A comprehensive, multi-page guide for travelers and locals.

---

## 🛠️ Tech Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Custom styles using CSS Variables for theme management.
-   **JavaScript (Vanilla)**: Theme toggling, interactive animations, and easter eggs.
-   **Leaflet.js**: Powering interactive, high-performance maps with custom markers.
-   **Font Awesome**: Integrated via CDN for high-quality iconography.
-   **Google Fonts**: Inter, Playfair Display, and Quicksand.

---

## ✨ Features

### 🌈 Advanced Theme Engine & UI
The site supports three high-fidelity visual modes with persistent state:
1.  **Light Mode**: Ultra-clean, professional design focusing on readability.
2.  **Dark Mode**: A premium emerald and gold aesthetic with carefully tuned contrast.
3.  **Kawaii Mode**: A playful, animated easter egg theme featuring Sakura petals and sparkle trails.

-   **Modular Design System**: Built with modern CSS Variables (custom properties) and a robust grid/flex-based layout.
-   **Performance-Optimized Animations**: Uses `IntersectionObserver` and `requestAnimationFrame` for smooth, low-overhead visual effects.
-   **Interactive Maps**: Custom Leaflet implementations with geo-aware markers, auto-zoom, and smooth-scroll deep links.
-   **Sticky Utility Banner**: A persistent, semi-transparent disclaimer banner that remains accessible during long scrolls.
-   **Mobile-First Jump Menu**: A responsive navigation system optimized for one-handed reach on travel-heavy devices.


### 🕵️ Easter Eggs
-   **Kawaii Toggle**: Triple-click the star icon next to the location in the Hero section to toggle Kawaii mode.
-   **Sparkle Trail**: Mouse movements in Kawaii mode generate interactive 🌸 and ✨ particles.

---

## 📦 Directory Structure

```text
.
├── .agent/             # AI Agent rules and workflows
├── .github/            # GitHub Actions (Automated Deployment)
├── img/                # Global image assets
│   └── munich/         # Munich-specific photography
├── munich/             # Munich Guide sub-pages (Modular)
│   ├── day-trips.html
│   ├── eat-and-drink.html
│   ├── essentials.html
│   ├── getting-around.html
│   ├── index.html
│   ├── local-secrets.html
│   ├── museums.html
│   └── shopping-and-groceries.html
├── index.html          # Main landing page
├── resume.html         # Professional resume page
├── style.css           # Global design system & theme variables
└── scrips.js           # Core interactivity engine
```

---

## 🚢 Deployment

Automated deployment is handled via **GitHub Actions**.

-   **Workflow**: `.github/workflows/deploy.yml`
-   **Mechanism**: Every `push` to the `master` branch triggers an FTP sync to the production server.
-   **Requirements**: Requires repository secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
-   **Status**: [![FTP Deploy](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml)

---

## 🤖 AI Agent Integration

This repository is "Agent-Ready." Persistent rules and workflows are stored in the [`.agent/`](file:///.agent/) directory. 

-   **Rules**: See [rules.md](file:///.agent/rules.md) for contribution guidelines.
-   **Workflows**: Standardized processes for common tasks like feature commits.

---

## 🛠️ Local Development

1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  (Recommended) Use a local development server like **Live Server** (VS Code) or `npx serve .` to handle relative pathing and live reloading.

---

*Built with ❤️ in Munich.*
