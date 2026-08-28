const header = document.querySelector('[data-header]');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const menuLabel = document.querySelector('.menu-label');

const closeMenu = () => {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  if (menuLabel) menuLabel.textContent = 'Menú';
};

toggle?.addEventListener('click', () => {
  const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(willOpen));
  nav?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
  if (menuLabel) menuLabel.textContent = willOpen ? 'Cerrar' : 'Menú';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-item button[aria-expanded="true"]').forEach((openButton) => {
      if (openButton !== button) openButton.setAttribute('aria-expanded', 'false');
    });
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

const config = window.SITE_CONFIG || {};
const contact = config.contact || {};
const normalizePhone = (value = '') => value.replace(/[^+\d]/g, '');
const normalizeWhatsapp = (value = '') => value.replace(/\D/g, '');
const channels = {
  whatsapp: contact.whatsapp ? `https://wa.me/${normalizeWhatsapp(contact.whatsapp)}?text=${encodeURIComponent(config.defaultMessage || 'Hola, quisiera información sobre sus servicios.')}` : '',
  phone: contact.phone ? `tel:${normalizePhone(contact.phone)}` : '',
  email: contact.email ? `mailto:${contact.email}` : '',
  map: contact.mapUrl || ''
};
const labels = { whatsapp: contact.whatsapp || '', phone: contact.phone || '', email: contact.email || '', address: contact.address || 'Abrir mapa' };

let activeChannels = 0;
Object.entries(channels).forEach(([channel, href]) => {
  if (!href) return;
  const link = document.querySelector(`[data-contact-link="${channel}"]`);
  if (!link) return;
  link.href = href;
  if (channel === 'map' || channel === 'whatsapp') { link.target = '_blank'; link.rel = 'noopener'; }
  link.hidden = false;
  activeChannels += 1;
});

Object.entries(labels).forEach(([label, value]) => {
  const target = document.querySelector(`[data-contact-label="${label}"]`);
  if (target && value) target.textContent = value;
});

const pending = document.querySelector('[data-contact-pending]');
if (pending && activeChannels > 0) pending.hidden = true;

if (Array.isArray(contact.hours) && contact.hours.length) {
  const hours = document.querySelector('[data-hours]');
  const hoursValue = document.querySelector('[data-hours-value]');
  if (hours && hoursValue) { hoursValue.textContent = contact.hours.join('\n'); hours.hidden = false; }
}

const socialLinks = config.social || {};
let activeSocials = 0;
Object.entries(socialLinks).forEach(([network, href]) => {
  if (!href) return;
  const link = document.querySelector(`[data-social="${network}"]`);
  if (!link) return;
  link.href = href;
  link.hidden = false;
  activeSocials += 1;
});

const socials = document.querySelector('[data-socials]');
if (socials && activeSocials > 0) socials.hidden = false;
document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = String(new Date().getFullYear()); });
