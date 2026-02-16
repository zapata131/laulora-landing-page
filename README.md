# Laura Navarro Lora - Personal Website & Munich Guide

A modern, responsive personal website and travel guide built with a "vanilla" tech stack. This project showcases professional experience in Sales Operations and provides a deep-dive local guide for exploring Munich, Germany.

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
-   **Font Awesome**: Integrated via CDN for high-quality iconography.
-   **Google Fonts**: Inter, Playfair Display, and Quicksand.

---

## ✨ Features

### 🌈 Advanced Theme Engine
The site supports three distinct visual modes:
1.  **Light Mode**: Clean, professional, and high-readability.
2.  **Dark Mode**: A deep emerald and gold palette for low-light environments.
3.  **Kawaii Mode**: A secret, playful theme featuring pastel colors, cat icons, and a magical sparkle trail effect.

### 🚇 Munich Insider Guide
A dedicated section for Munich travel tips, including:
-   **Transportation**: 2026 pricing, Deutschlandticket guides, and regional travel warnings.
-   **Eat & Drink**: Local recommendations beyond the tourist traps.
-   **Must-Sees**: Interactive maps and curated sightseeing lists.
-   **No Affiliates**: A pure resource with a clear support disclaimer banner.

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
├── munich/             # Munich Guide sub-pages
│   ├── eat.html
│   ├── index.html
│   ├── must-sees.html
│   ├── secrets.html
│   ├── shopping.html
│   └── transport.html
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

---

## 🤖 AI Agent Integration

This repository is "Agent-Ready." Persistent rules and workflows are stored in the [`.agent/`](file:///.agent/) directory. 

-   **Rules**: See [rules.md](file:///.agent/rules.md) for contribution guidelines (e.g., "Always commit after every feature").
-   **Workflows**: Standardized processes for common tasks like feature commits.

---

## 🛠️ Local Development

1.  Clone the repository.
2.  Open `index.html` in your browser.
3.  (Recommended) Use a local development server like **Live Server** (VS Code) or `npx serve .` to handle relative pathing and live reloading.

---

*Built with ❤️ in Munich.*
