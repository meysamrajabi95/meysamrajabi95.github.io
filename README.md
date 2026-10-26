# Meysam Rajabi — academic website

A static academic website based on the public content at [sites.google.com/view/meysamrajabi](https://sites.google.com/view/meysamrajabi), imported on October 26, 2026.

Website: **https://meysamrajabi95.github.io/**

## Edit the site

- `index.html` contains the biography, research, publications, teaching, education, news, and contact information. Section comments and descriptive IDs make content easy to find.
- `assets/style.css` controls colors, type, spacing, and responsive layouts.
- `assets/site.js` adds the mobile navigation and active section indicator. All core content, links, and expandable abstracts work without JavaScript.
- `assets/images/` contains images copied from the original public Google site.
- `SOURCE_NOTES.md` records the source pages and content decisions for future revisions.

This site requires no package installation or build step. It uses system fonts and serves its images locally.

## Local preview

From this directory, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000/. Press Ctrl+C to stop the server. Opening `index.html` directly also works for reviewing the site.

## GitHub Pages

Publish from the `main` branch and the repository root: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**. The `.nojekyll` file lets GitHub serve the static files directly.

To update the live website, commit changes to `main`. GitHub Pages republishes the site after its deployment completes.

## Content maintenance

Keep published articles separate from manuscripts in progress. Change a manuscript's status only when confirmed. The first version preserves the source site's status labels and documented teaching semesters; it does not infer acceptance or later course assignments.

The initial migration omits the empty “Projects” and “Fluid Mechanics” placeholder pages. These can become full sections when content is ready. No CV download was added because the source site did not provide a CV file.
