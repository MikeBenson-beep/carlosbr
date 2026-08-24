const header = document.getElementById("header");
const menuButton = document.querySelector(".menu-toggle");
const form = document.getElementById("booking-form");
const note = document.getElementById("form-note");

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

document.querySelectorAll("[data-service]").forEach((link) => link.addEventListener("click", () => {
  const origin = document.getElementById("origin");
  if (!origin.value) origin.value = link.dataset.service;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const rawDate = String(data.get("date"));
  const travelDate = rawDate ? new Intl.DateTimeFormat("es-MX", { dateStyle: "long", timeStyle: "short" }).format(new Date(rawDate)) : "por confirmar";
  const message = [
    "Hola, quiero solicitar un traslado en Puerto Vallarta.",
    `Nombre: ${data.get("name")}`,
    `Origen: ${data.get("origin")}`,
    `Destino: ${data.get("destination")}`,
    `Fecha: ${travelDate}`,
    `Pasajeros: ${data.get("passengers")}`,
    "¿Me confirmas disponibilidad y tarifa?"
  ].join("\n");
  note.textContent = "Solicitud lista. Abriendo WhatsApp para compartirla…";
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
