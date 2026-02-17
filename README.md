# Laura Navarro Lora - Personal Website & Munich Guide

[![FTP Deploy](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/zapata131/laura-page/actions/workflows/deploy.yml)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=Leaflet&logoColor=white)

A modern, responsive personal website and travel guide built with a "vanilla" tech stack. This project showcases professional experience in Sales Operations and provides a deep-dive local guide for exploring Munich, Germany.

[**Visit Live Site 🚀**](https://laulora.com)

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

### 🌈 Advanced Theme Engine
The site supports three distinct visual modes:
1.  **Light Mode**: Clean, professional, and high-readability.
2.  **Dark Mode**: A deep emerald and gold palette for low-light environments.
3.  **Kawaii Mode**: A secret, playful theme featuring pastel colors, cat icons, and a magical sparkle trail effect (Triple-click the star to toggle).

-   **Interactive Maps**: Custom Leaflet implementations for all guide sections with auto-zoom and quick-links.
-   **Mobile-First Navigation**: A smooth "Jump Menu" (Vertical Toggle) that replaces messy horizontal scrolls on mobile.
-   **No Affiliates**: A pure resource with a clear support disclaimer (mentioning Wombat's reception).
-   **De-AI-fied Content**: A strict project standard to maintain a personal, human-toned voice throughout.

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
├── munich/             # Munich Guide sub-pages (Modular & De-AI-fied)
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
