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

  // Projects filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-status]');
  const projectsEmpty = document.getElementById('projectsEmpty');

  function updateProjectCounts() {
    const counts = {
      all: projectCards.length,
      released: 0,
      beta: 0,
      dev: 0
    };
    projectCards.forEach(card => {
      const status = card.getAttribute('data-status');
      if (counts[status] !== undefined) {
        counts[status]++;
      }
    });

    const countAll = document.getElementById('count-all');
    const countReleased = document.getElementById('count-released');
    const countBeta = document.getElementById('count-beta');
    const countDev = document.getElementById('count-dev');

    if (countAll) countAll.textContent = counts.all;
    if (countReleased) countReleased.textContent = counts.released;
    if (countBeta) countBeta.textContent = counts.beta;
    if (countDev) countDev.textContent = counts.dev;
  }

  function filterProjects(status) {
    let visibleCount = 0;
    projectCards.forEach(card => {
      const cardStatus = card.getAttribute('data-status');
      if (status === 'all' || cardStatus === status) {
        card.classList.remove('is-hidden');
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
      }
    });

    if (projectsEmpty) {
      projectsEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        filterProjects(filter);
      });
    });
    updateProjectCounts();
  }

  applyLang(currentLang);
  applyTheme(currentTheme);
})();
