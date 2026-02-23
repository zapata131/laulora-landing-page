/**
 * Laura Navarro Lora - Core Interactivity Engine
 * Handles themes, mobile navigation, and animations.
 */

/* --- Theme Management --- */
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

// Initialize theme from storage or system preference
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || "light";

html.setAttribute("data-theme", initialTheme);
updateThemeIcon(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "dark") {
        themeIcon.className = "fa-solid fa-sun";
    } else if (theme === "kawaii") {
        themeIcon.className = "fa-solid fa-cat";
    } else {
        themeIcon.className = "fa-solid fa-moon";
    }
}

/* --- Kawaii Mode Easter Egg --- */
const easterEgg = document.getElementById("easter-egg");
let eggClicks = 0;
let eggTimeout;

if (easterEgg) {
    easterEgg.addEventListener("click", () => {
        eggClicks++;
        clearTimeout(eggTimeout);

        if (eggClicks === 3) {
            const currentTheme = html.getAttribute("data-theme");
            const newTheme = currentTheme === "kawaii" ? (localStorage.getItem("theme") || "light") : "kawaii";

            html.setAttribute("data-theme", newTheme);
            updateThemeIcon(newTheme);
            eggClicks = 0;
        } else {
            eggTimeout = setTimeout(() => eggClicks = 0, 500);
        }
    });
}

// Sparkle trail effect for Kawaii mode
let lastSparkle = 0;
document.addEventListener("mousemove", (e) => {
    if (html.getAttribute("data-theme") !== "kawaii") return;

    // Throttle for performance
    const now = Date.now();
    if (now - lastSparkle < 50) return;
    lastSparkle = now;

    const sparkle = document.createElement("span");
    const symbols = ["✨", "🌸"];
    sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    Object.assign(sparkle.style, {
        position: "fixed",
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        pointerEvents: "none",
        fontSize: `${Math.random() * 20 + 10}px`,
        zIndex: "9999",
        transition: "all 1s ease-out"
    });

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
        sparkle.style.opacity = "0";
        sparkle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(0)`;
    });

    setTimeout(() => sparkle.remove(), 1000);
});

/* --- Navigation Management --- */

// Toggle mobile main navigation
function toggleMenu() {
    const elements = [".nav-links", ".hamburger"];
    elements.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.toggle("open");
    });
}

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const elements = [".nav-links", ".hamburger"];
        elements.forEach(selector => {
            const el = document.querySelector(selector);
            if (el) el.classList.remove("open");
        });
    });
});

// Mobile Guide Nav dropdown toggle
document.addEventListener("click", (e) => {
    const guideNav = document.querySelector(".guide-nav");
    const activeLink = document.querySelector(".guide-nav-link.active");

    if (guideNav && activeLink && window.innerWidth < 768) {
        if (activeLink.contains(e.target)) {
            e.preventDefault();
            guideNav.classList.toggle("open");
        } else if (!guideNav.contains(e.target)) {
            guideNav.classList.remove("open");
        }
    }
});

/* --- UI Enhancements --- */

// Intersection Observer for fade-in animations
const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            animObserver.unobserve(entry.target); // Animate only once
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".tip-card, .experience-item, .hostel-section").forEach(el => {
    el.classList.add("reveal-on-scroll");
    animObserver.observe(el);
});

