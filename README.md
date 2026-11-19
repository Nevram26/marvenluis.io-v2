# Marven Luis portfolio

Personal portfolio of Marven Luis, full-stack developer: https://marvenluis.vercel.app/.

## Stack

- React 18 and Vite, with React Router for navigation and the legacy Esca URL redirect.
- Dark MySpace profile layout with sage styling and the local taste kit under `public/assets`.
- Anime.js for pointer-responsive TV static, portrait branches and scene effects.
- An embedded Spotify playlist.
- The home page is prerendered at build time (`src/entry-server.jsx`, `scripts/prerender.js`) and hydrated on the client.
- Vercel hosting, Analytics and Speed Insights.

## Editing content

Profile details, work, skills, projects, current builds, interests and external links live in `src/content/site.js`. Keep it in sync with the resume and the project repositories; do not add claims they do not support. The home layout is `src/pages/Home.jsx` and its styling is `src/styles/page.css`. The public resume is `public/Marven-Luis-resume.pdf`.

Spotify handles playback through its official iframe.

## Development

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Vite serves development on port 5173 and writes production files to `dist/`. Vercel deploys the `master` branch; `vercel.json` preserves SPA routing.

Sharing metadata lives in `index.html`; the Open Graph/Twitter preview image is `public/og-image.png`. TV grain uses a cached texture with transform-only movement to avoid rebuilding SVG filters while hovering.
