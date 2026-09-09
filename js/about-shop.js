// Animate elements into view as the user scrolls
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.photo-card, .charity-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Apply visible state
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.photo-card, .charity-card, .stat-item').forEach(el => {
    el.addEventListener('transitionend', () => {}, { once: true });
  });
});

// Re-use the visible class to trigger CSS transitions
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);
