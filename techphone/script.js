const header = document.getElementById("site-header");
const menu = document.querySelector(".menu-toggle");
document.getElementById("year").textContent = new Date().getFullYear();
const syncHeader = () => header.classList.toggle("scrolled", window.scrollY > 36);
syncHeader(); window.addEventListener("scroll", syncHeader, { passive: true });
menu?.addEventListener("click", () => { const open = header.classList.toggle("menu-open"); menu.setAttribute("aria-expanded", String(open)); menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú"); });
document.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => { header.classList.remove("menu-open"); menu?.setAttribute("aria-expanded", "false"); }));
document.querySelectorAll("[data-service]").forEach((link) => link.addEventListener("click", () => { const field = document.getElementById("need"); if (field) field.value = `Quiero consultar por ${link.dataset.service}.`; }));
document.getElementById("quote-form")?.addEventListener("submit", (event) => { event.preventDefault(); const name = document.getElementById("name").value.trim(); const model = document.getElementById("model").value.trim(); const need = document.getElementById("need").value.trim(); const message = `Hola TechPhone, soy ${name}. Mi equipo es ${model}. Necesito: ${need}`; window.open(`https://wa.me/593967619625?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); });
