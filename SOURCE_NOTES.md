# Content sources and migration notes

Source reviewed: October 26, 2026. These notes support future editing; they are not displayed in the website navigation.

## Public source pages

- [Home](https://sites.google.com/view/meysamrajabi/home): biography, portrait, education, methods, academic service, and contact/profile links.
- [Research](https://sites.google.com/view/meysamrajabi/research), [wake dynamics](https://sites.google.com/view/meysamrajabi/research/wd), [VIV](https://sites.google.com/view/meysamrajabi/research/viv), and [flow sensing](https://sites.google.com/view/meysamrajabi/research/fs): research descriptions, figures, and manuscript abstracts.
- [Publications](https://sites.google.com/view/meysamrajabi/publications): five published journal articles, three manuscripts in progress, and three conference contributions with original article/PDF links.
- [Teaching](https://sites.google.com/view/meysamrajabi/teaching) and [physics laboratory](https://sites.google.com/view/meysamrajabi/teaching/physics-lab): teaching roles and documented course semesters.
- [News](https://sites.google.com/view/meysamrajabi/news): August 2024 teaching appointment, November 2023 APS meeting, and October 2023 SOEST Open House.

## Decisions preserved in this version

- The restyled homepage preserves the Google homepage's biography, profile/contact details, education, interests, full methods descriptions, and academic service. The live Google homepage was checked again on October 26, 2026, and matched the initial source snapshot.
- Research, publications, teaching, and news now have separate static pages. Wake dynamics leads the research page, followed by vortex-induced vibration and flow sensing.
- The public source identifies Meysam Rajabi as a PhD student, not a graduate or faculty member.
- The three wake manuscripts retain the source labels “Under submission” or “Under review.” Their full abstracts remain available in expandable sections.
- The source publication list gives “Ersegun Deniz” for the final author of the 2023 INTNAM entry. This was preserved rather than silently changing the bibliographic record; check the proceedings before correcting it.
- The footer's incorrect `mailto:raajjabi@gmail.com` was replaced by the matching address `mailto:rajabimcr@gmail.com`, which is confirmed by the source homepage's contact block.
- The LinkedIn tracking query was removed; the profile path was preserved.
- Empty Projects and Fluid Mechanics pages were omitted. Fluid mechanics is listed as a teaching interest, not an established taught course.
- The source lists PHYS 170L for Fall 2024 and Spring 2025 and PHYS 151L for Fall 2024. This version does not invent later semester assignments.
- The B.Sc. source specifies Civil Engineering, Shiraz, Iran (2017), but no university name; this version leaves it unspecified.
- Original images remain unmodified. The portrait is displayed using a responsive crop; the scientific flow image is displayed in full.

## Images used on the site

- `assets/images/meysam-rajabi.jpg`: original portrait from the homepage.
- `assets/images/wake-overview.png`: original cylinder/wall/ridge flow visualization from the wake dynamics page.
- `assets/images/news-aps-group.jpg`: original FSINLD group photograph from the News page.

Other downloaded source images are retained locally in `.scratch/source-images/` for future edits. Only the images referenced by the site are published.

## Research and News enrichment

The Research page now includes the original `wake-ridges.png`, `wake-recovery.png`, `wake-successive.png`, `research-sensing.jpg`, and `viv-cylinder.gif` from the public Google site. Scientific figures remain uncropped and link to their original full-size files. The VIV animation is illustrative and is not presented as a result of the flexible-cylinder paper; visitors can hide it, and it starts hidden when reduced motion is requested.

Wake-study descriptions follow the three manuscript abstracts and retain their status labels. The sensing description is supported by the published article https://doi.org/10.1016/j.oceaneng.2026.127988, including the Re = 200 configuration, inverse-model comparison, sparse sensor test, and limits of extrapolation. No effectiveness claim was added for piezoelectric control beyond the established scope of that paper.

The News page includes all four original source photographs: `news-teaching.jpg`, `news-aps.jpg`, `news-aps-group.jpg`, and `news-open-house.jpg`. Each image accompanies its matching event, retains its original proportions, and links to the full-size file.

## Style revision

The user requested a style similar to https://b-fg.github.io/publications. The new styles use Inter typography, a light neutral header, cyan accents, compact numbered publication lists, and colored publication controls. The implementation is original; no reference-site scientific content, branding, or citation metrics were copied. The homepage content remains from Meysam's Google site.

Inter is hosted locally from Google Fonts with its SIL Open Font License in `assets/fonts/OFL.txt`. The site has no remote font or script dependency. The three images above are used on the home, research, and news pages respectively.
