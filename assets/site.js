const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
}

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('#navigation a')];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
