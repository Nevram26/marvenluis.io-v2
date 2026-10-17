<h2 align="center">
  Portfolio Website<br/>
  <a href="https://marvenluis.io/" target="_blank">marvenluis.io</a>
</h2>

## Built With

This is my self-coded personal portfolio website, <a href="https://marvenluis.io/" target="_blank">marvenluis.io</a>, showcasing my GitHub projects, resume, and technical skills.

This project was built using the following technologies:

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS and shadcn/ui
- Vitest and Testing Library
- Vercel

## Structure

- `src/app`: statically generated homepage, project routes, metadata, sitemap, and robots.
- `src/lib/portfolio.ts`: verified project descriptions, profile links, and skills.
- `src/components`: homepage sections and accessible UI primitives.
- `public/Marven_Luis_Resume.pdf`: downloadable résumé.

Project routes are generated from the central project data. Adding a project creates its case-study route and sitemap entry. Professional project logos are intentionally used when screenshots are unavailable. No GitHub activity API is used.

## Validation

`npm ci`, `npm test`, `npm run typecheck`, and `npm run build` validate dependencies, behavior, types, and production output. `npm run dev` starts local development; `npm start` serves the production build.

## Features

**📖 Multi-Page Layout**

**🎨 Styled with CSS and easily customizable design**

**📱 Fully Responsive**
