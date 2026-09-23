# Jeeva Matrix — Personal Brand Website

A React (Create React App) + vanilla CSS site for Jeeva Matrix (Jeevanandh R).
No backend — the enquiry form opens a pre-filled email via `mailto:`.

## Run it locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Build for deployment

```bash
npm run build
```

This creates a static `build/` folder you can deploy to any static host
(Vercel, Netlify, GitHub Pages, etc.) and point `jeevamatrix.me` at it.

## Where to edit things

- **All copy for services, projects, process steps, VLSI projects, contact
  info** — `src/data/content.js`. This is the single place to update text
  without touching component code.
- **Colors, fonts, spacing** — `src/styles/variables.css`.
- **Profile photo** — `src/assets/jeeva-profile.jpg` (swap the file, keep the
  same name, or update the import in `src/components/About.jsx`).
- **WhatsApp number** — `contactInfo.whatsapp` in `src/data/content.js`
  currently uses a placeholder number (`910000000000`). Replace it with your
  real WhatsApp number in international format, no `+` or spaces, e.g.
  `https://wa.me/91XXXXXXXXXX`.
- **Email** — `contactInfo.email` in the same file.

## Structure

```
src/
  components/    one .jsx + matching .css per section
  data/content.js  all editable text/content
  styles/        global CSS + design tokens (variables.css)
  assets/        profile photo
```

## Notes

- The contact form validates on the client and opens the visitor's email
  app with the enquiry pre-filled — there's no server, so nothing is stored
  or sent automatically. If you outgrow this, wiring it to a form service
  (e.g. Formspree) or a small backend is a natural next step.
- Project stats, testimonials and client counts were intentionally left out
  since none were provided — add real ones as they become available.
- **Fonts** — Clash Display (headlines) + Satoshi (body), loaded from
  Fontshare in `public/index.html`; IBM Plex Mono is kept only for genuine
  technical labels (tags, code-like data). If Fontshare is ever blocked on
  your network, swap the `<link>` for a Google Fonts pairing in the same
  file.
- **Real screenshots** — Learnlia, Inivayal and StockScope now show actual
  product screenshots (`src/assets/project-*.png`) inside a browser-chrome
  frame, plus two engineering visuals (`eng-floorplan.png`,
  `eng-waveform.png`) in the Engineering section. Swap any of these files
  (same filename) to update the image without touching code.
- **"StockScope"** is a placeholder name for the AI stock-analysis project
  shown in the screenshot you sent — I don't have its real name or a live
  URL, so it's listed as a "Personal project" with no live-site button.
  Update the name and add a `url` for it in `src/data/content.js` once you
  have one.
- **Budget field** — replaced the fixed price-range dropdown with a short
  optional text field ("no fixed packages — happy to discuss"), since a
  guessed bracket can put off a client before you've even talked. Easy to
  swap back to a dropdown in `Contact.jsx` if you'd rather qualify budget
  upfront.
