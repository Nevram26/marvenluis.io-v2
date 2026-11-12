# marvenluis.io

Personal portfolio of Marven Luis, full-stack developer: https://marvenluis.io/.

## Stack

- React 18 and Vite, with React Router for navigation and the legacy Esca URL redirect.
- Dark MySpace profile layout with sage styling and the local taste kit under `public/assets`.
- Anime.js for pointer-responsive TV static, portrait branches and scene effects.
- Live GitHub contribution calendar and an embedded Spotify playlist.
- Vercel hosting, Analytics and Speed Insights.

## Editing content

Profile details, work, projects and external links live in `src/content/site.js`. The home layout is `src/pages/Home.jsx` and its styling is `src/styles/page.css`. The public resume is `public/Marven-Luis-resume.pdf`.

The GitHub calendar loads public contribution data for `Nevram26`; it provides a fallback link if the service is unavailable. Spotify handles playback through its official iframe.

## Development

```bash
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Vite serves development on port 5173 and writes production files to `dist/`. Vercel deploys the `master` branch; `vercel.json` preserves SPA routing.
