document.getElementById('year').textContent = String(new Date().getFullYear());
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const need = document.getElementById('need').value;
  const idea = document.getElementById('idea').value.trim();
  const message = `Hola Ecuadorian Stuff, soy ${name}. Me interesa ${need}. Mi idea es: ${idea}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
