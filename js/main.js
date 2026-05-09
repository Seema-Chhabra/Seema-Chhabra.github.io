/* ── Navigation ────────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Mark active link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Thumbnail switcher (works pages) ──────────────────────── */
document.querySelectorAll('.artwork-item__thumbs img').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const main = thumb.closest('.artwork-item__images').querySelector('.artwork-item__main');
    const oldSrc = main.src;
    main.src = thumb.src;
    thumb.src = oldSrc;
  });
});

/* ── Simple contact form feedback ──────────────────────────── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.borderColor = '#3a7a6e';
    btn.style.color = '#3a7a6e';
  });
}
