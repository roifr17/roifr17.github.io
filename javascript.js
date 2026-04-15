/* ── Menú hamburguesa: abre y cierra el menú móvil ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Abre el modal correspondiente (ss = Servicio Social, pp = Prácticas Profesionales) ── */
function openModal(type) {
  document.getElementById(type === 'ss' ? 'modalSS' : 'modalPP').classList.add('open');
  document.body.style.overflow = 'hidden'; /* Bloquea el scroll de fondo */
}

/* ── Cierra el modal si se hace clic sobre el fondo oscuro (overlay) ── */
function closeModal(e, id) {
  if (e.target.classList.contains('modal-overlay')) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = ''; /* Restaura el scroll */
  }
}

/* ── Restaura el scroll al cerrar con el botón (✕) ── */
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.style.overflow = '';
  });
});

/* ── Animación fade-up: activa la clase 'visible' al entrar al viewport ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
    document.body.style.overflow = '';
  }
});