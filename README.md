# Grace Collamat Portfolio

A portfolio site built with Next.js 15, the App Router, TypeScript, and Tailwind CSS. It is configured for static export and deployment to GitHub Pages.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create and serve a production build with:

```bash
npm run build
npm start
```

## Routes

- `app/page.tsx` - About
- `app/projects/page.tsx` - Projects
- `app/support/page.tsx` - Support
- `app/contact/page.tsx` - Contact

Shared layout and navigation live in `components/PortfolioLayout.tsx`. Public images and documents are served from `public/assets/`.

The production build exports to `out/`. The GitHub Actions workflow deploys that directory to GitHub Pages; `lib/site-config.ts` and `next.config.ts` configure the `/GraceCol` project-site base path for production.
