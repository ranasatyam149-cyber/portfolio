// Active Nav Link
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting me, Satyam will respond soon!");
    this.reset();
});

// Typing Effect
const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "B.Tech CSE (Data Science) Student"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
});

// Animate Skill Bars
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fill").forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            bar.style.width = bar.getAttribute("style").replace("width:", "").trim();
        }
    });
});

const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

