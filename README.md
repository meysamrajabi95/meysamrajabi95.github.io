# Meysam Rajabi — academic website

Website: **https://meysamrajabi95.github.io/**

The homepage preserves the information and biography from [the Google homepage](https://sites.google.com/view/meysamrajabi/home), checked on October 26, 2026. The compact typography, cyan accents, navigation, and publication layout follow the style requested from [b-fg.github.io/publications](https://b-fg.github.io/publications).

## Edit the site

- `index.html`: biography, portrait and profile links, education, interests, tools and methods, academic service, and office/contact information.
- `research/index.html`: wake dynamics, vortex-induced vibration, and flow sensing.
- `publications/index.html`: all 11 publications/manuscripts, DOI/PDF links, three source abstracts, and BibTeX citations.
- `teaching/index.html`: teaching experience and academic service.
- `news/index.html`: teaching, conference, and outreach updates.
- `assets/style.css`: shared typography, colors, light/dark themes, and responsive layouts.
- `assets/site.js`: mobile navigation, theme switching, expandable publication panels, and copying BibTeX.
- `assets/theme.js`: restores the selected theme before the page renders.
- `assets/images/`: original images from the Google site.
- `assets/fonts/`: self-hosted Inter fonts and their SIL Open Font License.
- `SOURCE_NOTES.md`: source pages and content decisions.

The HTML files are directly editable. No package installation or build step is needed. The header and footer are repeated in the five pages; update all five when changing shared navigation. Publication details and navigation remain available when JavaScript is disabled. Original homepage section links to research, publications, teaching, and news redirect to their new pages when JavaScript is enabled.

## Local preview

From this directory, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Press Ctrl+C to stop the server.

## GitHub Pages

Publish from the `main` branch and repository root: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**. The `.nojekyll` file lets GitHub serve the static files directly.

Commit updates to `main`; GitHub Pages republishes after its deployment completes.

## Content maintenance

Keep published articles separate from manuscripts in progress. Update a manuscript's status only when confirmed. BibTeX entries use the metadata already supplied on the original site; missing volumes/pages are not guessed. Manuscripts use `@unpublished`, with status and intended journal in the note.

The source's documented teaching semesters are preserved. Empty Projects and Fluid Mechanics pages were omitted. No CV download was added because the source did not supply a CV file.
