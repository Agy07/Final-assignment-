// Menu Toggle for Mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Smooth Scroll Effect for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in Animation on Scroll
function animateOnScroll() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("DOMContentLoaded", animateOnScroll);

// Slide-in Animation for Product Cards on Hover
const productCards = document.querySelectorAll(".product-card");
productCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("slideIn");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("slideIn");
  });
});
