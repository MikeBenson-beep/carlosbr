const header = document.getElementById("site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll("nav a");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

const syncHeader = () => header?.classList.toggle("scrolled", window.scrollY > 40);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

navLinks.forEach((link) => link.addEventListener("click", () => {
  header?.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const location = document.getElementById("location").value;
  const need = document.getElementById("need").value.trim();
  const message = `Hola Konstruck Zion, soy ${name} y estoy en ${location}. Necesito: ${need}`;
  window.open(`https://wa.me/593967894452?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
