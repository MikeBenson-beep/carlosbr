const header = document.getElementById("header");
const menuButton = document.querySelector(".menu-toggle");

document.getElementById("year").textContent = String(new Date().getFullYear());

menuButton.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll("#nav a").forEach((link) => link.addEventListener("click", () => {
  header.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
