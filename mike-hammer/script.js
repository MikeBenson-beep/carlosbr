const year = document.getElementById("year");
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.getElementById("site-nav");
const heroTitle = document.getElementById("hero-title");

if (heroTitle) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => heroTitle.classList.add("hero-title-ready"));
  });
}

if (year) year.textContent = String(new Date().getFullYear());

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  navigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menú");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  navigation?.classList.toggle("is-open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
  document.body.classList.toggle("menu-open", willOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const navigationLinks = [...(navigation?.querySelectorAll("a") || [])];
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && navigationSections.length) {
  const navigationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60%", threshold: 0 });
  navigationSections.forEach((section) => navigationObserver.observe(section));
}

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
