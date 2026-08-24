const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
const scrollProgress = document.querySelector(".scroll-progress");
const productStage = document.querySelector(".product-stage");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js");

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

let scrollTicking = false;

const updateScrollEffects = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
  scrollProgress?.style.setProperty("--scroll-progress", String(progress));

  if (!reduceMotion && productStage && window.scrollY < window.innerHeight * 1.2) {
    productStage.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.035, 28)}px`);
  }

  scrollTicking = false;
};

window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateScrollEffects);
    scrollTicking = true;
  }
}, { passive: true });

updateScrollEffects();

const revealGroups = [
  ".context",
  ".product-heading",
  ".benefit-grid",
  ".kit-intro",
  ".kit-list",
  ".sos-heading",
  ".use ol",
  ".corporate-copy",
  ".corporate ul",
  ".about",
  ".guide-heading",
  ".guide-cards",
  ".faq-list",
  ".contact",
  "footer"
];

revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      child.classList.add("reveal");
      child.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
    });
  });
});

document.querySelectorAll(".kit-photo, .whistle-photo, .use-photo, .safety-note").forEach((element) => {
  element.classList.add("reveal-image");
});

document.querySelectorAll(".sos-group").forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${index * 120}ms`);
});

if (reduceMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal, .reveal-image").forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

  document.querySelectorAll(".reveal, .reveal-image").forEach((element) => revealObserver.observe(element));
}

const sectionLinks = new Map(
  Array.from(nav?.querySelectorAll("a[href^='#']") ?? []).map((link) => [link.getAttribute("href")?.slice(1), link])
);

if ("IntersectionObserver" in window && sectionLinks.size) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    sectionLinks.forEach((link, id) => {
      link.classList.toggle("is-current", id === visible.target.id);
    });
  }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.4] });

  sectionLinks.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

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
      if (!reduceMotion) {
        panel.animate(
          [
            { opacity: 0, transform: "translateY(-8px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 280, easing: "cubic-bezier(.2,.75,.25,1)" }
        );
      }
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
    formStatus.textContent = "Tu solicitud está preparada. Revisa los datos antes de continuar.";
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
