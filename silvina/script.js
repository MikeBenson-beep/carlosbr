const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const navigation = document.getElementById('navegacion');
const year = document.getElementById('anio');
const primaryCta = document.querySelector('[data-primary-cta]');
const floatingWhatsapp = document.querySelector('.whatsapp-float');
const contactSection = document.getElementById('contacto');

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeMenu = () => {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation?.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', open);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

if (primaryCta && floatingWhatsapp && contactSection && 'IntersectionObserver' in window) {
  let primaryCtaVisible = true;
  let contactVisible = false;
  const updateFloatingCta = () => {
    floatingWhatsapp.classList.toggle('is-active', !primaryCtaVisible && !contactVisible);
  };
  const floatingCtaObserver = new IntersectionObserver(([entry]) => {
    primaryCtaVisible = entry.isIntersecting;
    updateFloatingCta();
  }, { threshold: 0, rootMargin: `-${header?.offsetHeight || 76}px 0px 0px` });
  const contactObserver = new IntersectionObserver(([entry]) => {
    contactVisible = entry.isIntersecting;
    updateFloatingCta();
  }, { threshold: 0.05 });
  floatingCtaObserver.observe(primaryCta);
  contactObserver.observe(contactSection);
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01, rootMargin: '80px 0px' });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}
