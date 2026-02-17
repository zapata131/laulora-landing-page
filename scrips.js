// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

// Set initial theme from storage or system preference
const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const initialTheme = savedTheme || "light"; // Default to light as requested

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
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else if (theme === "kawaii") {
        themeIcon.className = "fa-solid fa-cat";
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

// Kawaii Easter Egg
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

            if (newTheme === "kawaii") {
                console.log("🌸 Kawaii Mode Activated! 🌸");
            }
        } else {
            eggTimeout = setTimeout(() => {
                eggClicks = 0;
            }, 500); // Reset if not clicked within 500ms
        }
    });
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
    if (document.querySelector(".hamburger")) {
        document.querySelector(".hamburger").classList.remove("open");
    }
}));

// Simple scroll animation for cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll(".tip-card, .experience-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Hamburger Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    if (navLinks) navLinks.classList.toggle("open");
    if (hamburger) hamburger.classList.toggle("open");
}

// Sparkle Trail for Kawaii Mode
document.addEventListener("mousemove", (e) => {
    if (document.documentElement.getAttribute("data-theme") !== "kawaii") return;

    const sparkle = document.createElement("span");
    const symbols = ["✨", "🌸"];
    sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = Math.random() * 20 + 10 + "px";
    sparkle.style.zIndex = "9999";
    sparkle.style.transition = "all 1s ease-out";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.opacity = "0";
        sparkle.style.transform = `translateY(${(Math.random() - 0.5) * 100}px) translateX(${(Math.random() - 0.5) * 100}px) scale(0)`;
    }, 10);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Guide Nav Toggle (Mobile)
document.addEventListener("click", (e) => {
    const guideNav = document.querySelector(".guide-nav");
    const activeLink = document.querySelector(".guide-nav-link.active");

    if (guideNav && activeLink && window.innerWidth < 768) {
        // Only toggle if we clicked the active link itself or a child of it
        if (activeLink.contains(e.target)) {
            e.preventDefault(); // Prevent page reload/jump
            guideNav.classList.toggle("open");
        } else if (guideNav.classList.contains("open") && !guideNav.contains(e.target)) {
            // Close if clicking outside when open
            guideNav.classList.remove("open");
        }
    }
});
