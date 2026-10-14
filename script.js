/* Maison Élise Studio — lightweight interactions */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.service-card, .proof-item, .gallery-grid figure, .testimonial-card, .values > div, .price-row');
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(index % 3) * 70}ms`;
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => observer.observe(el));
  }

  const track = document.querySelector('[data-testimonial-track]');
  const prev = document.querySelector('[data-testimonial-prev]');
  const next = document.querySelector('[data-testimonial-next]');
  const scrollCards = direction => {
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 300) + 18), behavior: reducedMotion ? 'auto' : 'smooth' });
  };
  prev?.addEventListener('click', () => scrollCards(-1));
  next?.addEventListener('click', () => scrollCards(1));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-booking-link]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href') || '';
      if (href.includes('example.com/booking')) {
        event.preventDefault();
        window.alert('Template setup: replace https://example.com/booking with your live booking URL (e.g. Fresha, Calendly, or your own scheduler).');
      }
    });
  });
})();
