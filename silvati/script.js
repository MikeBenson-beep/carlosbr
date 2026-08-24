const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  header?.classList.remove("menu-open");
  document.body.classList.remove("nav-locked");
};

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  header?.classList.toggle("menu-open", !open);
  document.body.classList.toggle("nav-locked", !open);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

document.querySelectorAll(".kit-item > button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".kit-item");
    const panel = item?.querySelector(".kit-panel");
    const icon = item?.querySelector(".kit-toggle");
    const expanded = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".kit-item").forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector("button")?.setAttribute("aria-expanded", "false");
      const otherPanel = other.querySelector(".kit-panel");
      if (otherPanel) otherPanel.hidden = true;
      const otherIcon = other.querySelector(".kit-toggle");
      if (otherIcon) otherIcon.textContent = "+";
    });

    if (!expanded && item && panel) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      if (icon) icon.textContent = "−";
    }
  });
});

document.querySelectorAll(".faq details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  if (formStatus) {
    formStatus.textContent = "Tu solicitud está lista. El envío se habilitará cuando SILVATI confirme su WhatsApp o correo comercial.";
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
