const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  menuButton.hidden = false;
  document.querySelector('.site-header').classList.add('enhanced');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
}

const themeButton = document.querySelector('.theme-toggle');
if (themeButton) {
  themeButton.hidden = false;
  const syncThemeButton = () => themeButton.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  syncThemeButton();
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('meysam-site-theme', theme); } catch { /* Storage may be disabled. */ }
    syncThemeButton();
  });
}

// Native details remain usable without JavaScript.
document.querySelectorAll('.publication').forEach((publication, publicationIndex) => {
  const panels = publication.querySelector('.publication-panels');
  if (!panels) return;
  publication.querySelectorAll('.pub-disclosure').forEach((details, detailIndex) => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.disclosure-content');
    if (!summary || !content) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = summary.className;
    button.textContent = summary.textContent;
    button.setAttribute('aria-expanded', 'false');
    content.id = 'publication-' + (publicationIndex + 1) + '-panel-' + (detailIndex + 1);
    content.hidden = true;
    button.setAttribute('aria-controls', content.id);
    panels.append(content);
    details.replaceWith(button);
    button.addEventListener('click', () => {
      content.hidden = !content.hidden;
      button.setAttribute('aria-expanded', String(!content.hidden));
    });
    const code = content.querySelector('code');
    if (code) {
      content.classList.add('bibtex-panel');
      const copy = document.createElement('button');
      copy.type = 'button';
      copy.className = 'copy-citation';
      copy.textContent = 'Copy BibTeX';
      copy.setAttribute('aria-live', 'polite');
      copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          copy.textContent = 'Copied';
        } catch {
          copy.textContent = 'Select and copy the citation above';
        }
      });
      content.append(copy);
    }
  });
});

// Preserve links to the sections in the first published version.
const legacyRoutes = {research:'research/',publications:'publications/','wake-manuscripts':'publications/#wake-manuscripts',teaching:'teaching/',news:'news/'};
if (document.body.dataset.page === 'home' && legacyRoutes[location.hash.slice(1)]) {
  location.replace(legacyRoutes[location.hash.slice(1)]);
}
