/**
 * Food Security through Aquaculture - CSP Project
 * Vanilla JavaScript for page navigation and dark mode
 */

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });

  // Show selected page
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }

  // Show / hide navigation and footer
  var nav = document.getElementById('main-nav');
  var footer = document.getElementById('main-footer');

  if (pageId === 'welcome') {
    nav.classList.add('hidden');
    footer.classList.add('hidden');
  } else {
    nav.classList.remove('hidden');
    footer.classList.remove('hidden');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  var btn = document.getElementById('themeToggle');
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️ Light';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.textContent = '🌙 Dark';
    localStorage.setItem('theme', 'light');
  }
}

// Restore theme preference on load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = '☀️ Light';
  }
})();

// Start on welcome page
document.addEventListener('DOMContentLoaded', function () {
  showPage('welcome');
});
