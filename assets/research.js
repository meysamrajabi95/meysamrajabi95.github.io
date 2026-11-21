// Keep the original animation hidden initially for visitors who prefer reduced motion.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hideAnimations = () => {
  if (reducedMotion.matches) document.querySelectorAll('.research-animation').forEach(panel => { panel.open = false; });
};
hideAnimations();
reducedMotion.addEventListener('change', hideAnimations);

// Bookmarks from the original single-page layout open the same topic.
if (document.querySelector('.topic-gallery')) {
  const oldSections = new Map([
    ['#wake-dynamics', 'wake-dynamics/'],
    ['#wake-title', 'wake-dynamics/'],
    ['#viv', 'viv/'],
    ['#viv-title', 'viv/'],
    ['#flow-sensing', 'flow-sensing/'],
    ['#sensing-title', 'flow-sensing/'],
    ['#research-methods-title', 'wake-dynamics/#research-methods-title'],
  ]);
  function openBookmarkedTopic() {
    const destination = oldSections.get(location.hash);
    if (destination) location.replace(destination);
  }
  openBookmarkedTopic();
  window.addEventListener('hashchange', openBookmarkedTopic);
}
