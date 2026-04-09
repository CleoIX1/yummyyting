// ── Custom Cursor (desktop only) ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

const isTouchDevice = window.matchMedia('(hover: none)').matches;

if (isTouchDevice) {
  cursor.style.display = 'none';
  ring.style.display = 'none';
  document.body.style.cursor = 'auto';
} else {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
}

// ── Hamburger / Side Drawer ──
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-links a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ── Scroll Fade-Up Animation ──
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── Masonry Grid Stagger Reveal ──
const gridObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.grid-item').forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
  gridObserver.observe(item);
});
