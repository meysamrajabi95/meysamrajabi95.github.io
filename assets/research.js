// Keep the original animation hidden initially for visitors who prefer reduced motion.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hideAnimations = () => {
  if (reducedMotion.matches) document.querySelectorAll('.research-animation').forEach(panel => { panel.open = false; });
};
hideAnimations();
reducedMotion.addEventListener('change', hideAnimations);
