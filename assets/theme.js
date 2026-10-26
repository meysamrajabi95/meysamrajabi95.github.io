try {
  const savedTheme = localStorage.getItem('meysam-site-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') document.documentElement.dataset.theme = savedTheme;
} catch { /* Use the default light theme when storage is unavailable. */ }
