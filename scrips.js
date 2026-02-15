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
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
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
