# Smart Things Home Manager — promo site

React 18 + TypeScript + Vite 6 + Tailwind CSS 4 + React Router 7. Deployed to GitHub Pages by GitHub Actions.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:5173/
pnpm build    # → dist/
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`: install, build, copy `index.html` to `404.html` (so deep links load the app), publish `dist/` to Pages.
In the repo settings, **Pages → Source** must be **GitHub Actions**.

### `base` and the custom domain

- Now: custom domain `smartthingsremote.site` — `base: "/"` in `vite.config.ts` and `public/CNAME` with the bare domain. Both must change together.
- If the domain is removed: set `base: "/SmartTHv2/"` and delete `public/CNAME` in the same commit; the site then lives at `https://norin-web.github.io/SmartTHv2/`. A wrong `base` gives a blank white page.

All image paths go through `img()` (`src/app/utils/img.ts`), so they follow `base` automatically.

## Where the content lives

- `src/app/content/site.ts` — brand, operator, email, App Store ID and link, nav, features, devices, FAQ. Values marked `PLACEHOLDER` still need the owner's data.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use. Paste the owner's texts **verbatim** into `body` (only `## ` headings and `- ` lists as markup).
- `public/images/` — app screens in an iPhone frame (`phone-*.webp`), app icon.

## Reveal animations

Hidden-until-revealed styles apply only under the `.js` class set in `src/main.tsx`, and `useReveal` falls back to the resting state when the page is hidden, so content never stays invisible.
