// ═══════════════════════════════════════════
//   Karang Seva — Main JS
// ═══════════════════════════════════════════

// ── Navbar scroll effect ──────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Pricing tier toggle ───────────────────
const tierBtns     = document.querySelectorAll('.tier-btn');
const localPrices  = document.querySelectorAll('.price-local');
const premPrices   = document.querySelectorAll('.price-premium');

tierBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tierBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tier = btn.dataset.tier;
    localPrices.forEach(el => el.style.display = tier === 'local'   ? '' : 'none');
    premPrices.forEach(el  => el.style.display = tier === 'premium' ? '' : 'none');
  });
});

// ── Scroll reveal ─────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Smooth scroll for nav links ───────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Mobile hamburger ──────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});
