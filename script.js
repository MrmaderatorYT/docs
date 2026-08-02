(() => {
  const root = document.documentElement;
  const html = document.documentElement;

  let currentLang = localStorage.getItem('lang') || 'uk';
  let currentTheme = localStorage.getItem('theme') || 'light';
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const langLabel = document.getElementById('langLabel');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    html.lang = lang;
    langLabel.textContent = lang === 'uk' ? 'EN' : 'UA';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.innerHTML = i18n[lang][key];
      }
    });
  }

  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'uk' ? 'en' : 'uk');
  });

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  applyLang(currentLang);
  applyTheme(currentTheme);
})();
