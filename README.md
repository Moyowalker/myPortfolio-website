# Moyosore.me Portfolio

Portfolio source for [moyosore.me](https://moyosore.me), built to present Moyosore Ajayi's work across enterprise workflow systems, finance automation, logistics infrastructure, and trust-driven digital products.

## Live Site

- Production: [https://moyosore.me](https://moyosore.me)
- Contact: [dev@moyosore.me](mailto:dev@moyosore.me)

## What This Site Includes

- A redesigned React/Vite portfolio with a sharper product-and-systems narrative
- Featured work across Dangote Canteen, Spectranet EACP, Xero to Odoo sync, AgriSwitch, Craeftmann, and Emocom
- MDX-backed case studies loaded dynamically from `content/case-studies`
- An AI Q&A endpoint under `api/ask.js` backed by a small knowledge base plus optional Claude/OpenAI calls
- Domain-aware SEO metadata, robots, sitemap, and social preview assets for `moyosore.me`

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- MDX
- Vercel serverless functions

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run the launch verification checks:

```bash
npm run verify:launch
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

The AI concierge works without external APIs by falling back to the local knowledge base, but you can enable live model responses with either of these variables:

```bash
CLAUDE_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

## Content Structure

- `src/constants/index.js`: site copy, navigation, projects, contact data, and strategic messaging
- `content/case-studies/*.mdx`: deep-dive case studies shown in the portfolio modal
- `data/knowledge-base.json`: fallback answers for the AI Q&A experience
- `public/og-cover.svg`: social share image
- `index.html`: canonical, Open Graph, Twitter, and schema metadata

## Deployment Notes

- Vercel output directory is `dist`
- `vercel.json` includes API rewrites and base security headers
- `public/robots.txt` and `public/sitemap.xml` target the production domain
- `npm run verify:launch` checks the production domain, robots, sitemap, favicon, OG asset, and key deployment metadata before cutover
- See `LAUNCH-CHECKLIST.md` for the final DNS, Vercel, and smoke-test sequence

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE).
