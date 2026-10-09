# AleDev Portfolio

Personal portfolio of Manuel Alejandro Naranjo Rey, Frontend Developer. A fully static, bilingual (Spanish/English) single-page site built with [Astro](https://astro.build).

**Live site:** <https://ale-dev-portfolio.vercel.app/> · [English version](https://ale-dev-portfolio.vercel.app/en/)


## Stack

- **[Astro 4](https://astro.build)** — static site generation, zero JS by default
- **[astro-i18next](https://github.com/yassinedoghri/astro-i18next)** — locale routing (`/` for Spanish, `/en` for English) and server-side translations
- **[Tailwind CSS 3](https://tailwindcss.com)** — styling, `media` dark mode strategy
- **Fira Mono** — self-hosted via Fontsource (latin subset, weights 400/500/700)

## Getting started

```sh
git clone https://github.com/MANR1996/AleDevPortfolio.git
cd AleDevPortfolio
npm install
```

Create a `.env` file in the project root (see `.env.example`):

```dotenv
PUBLIC_MAIL=your@email.com
PUBLIC_PHONE=+00 000 000 000
```

The build fails fast with a clear error if these variables are missing.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Type-check (`astro check`) and build to `dist/` |
| `npm run preview` | Preview the production build locally        |

## Project structure

```text
/
├── public/
│   ├── locales/            # Translation files (es, en)
│   └── *.webp              # Project screenshots
├── src/
│   ├── components/         # UI components + icons/
│   ├── config/site.ts       # Site data: profile links, status, nav
│   ├── layouts/Layout.astro
│   ├── pages/               # index.astro (es), en/index.astro, 404.astro
│   ├── types.ts             # Shared types (Tag, Project)
│   └── utils/date.ts        # Career duration helpers
└── astro-i18next.config.ts  # Locale definitions
```

## Internationalization

- Locales are defined in `astro-i18next.config.ts` (`es` default, `en`).
- Translations live in `public/locales/{es,en}/translation.json`. Both files must be kept in sync; `astro check` will not catch missing keys.
- Locale-independent facts (e.g. ISO dates of the experience timeline) live in the components, not in the translation files.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) via its documented AJAX/JSON endpoint, with:

- A honeypot field (`_honey`) and `_template: table` for cleaner emails
- A no-JS fallback to a regular `POST` (progressive enhancement)
- `role="status"` live-region notifications for success and error

## Deployment

The site is deployed on Vercel at <https://ale-dev-portfolio.vercel.app/> (`site` in `astro.config.mjs` drives canonical URLs, `hreflang` alternates, `og:image` and the auto-generated `sitemap-index.xml` — see `public/robots.txt`). Set the `PUBLIC_MAIL` and `PUBLIC_PHONE` environment variables in the host's dashboard before building.

## License

The code in this repository is licensed under the [MIT License](./LICENSE).
