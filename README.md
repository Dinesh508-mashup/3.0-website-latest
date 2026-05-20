# 3.0 Labs — Production Website

Modern Vite + React 19 build of the 3.0 Labs site. **Identical visuals** to the original
static prototype — same CSS, same fonts, same animations, same section order — rebuilt on a
production-grade foundation with routing, code splitting, linting, and formatting.

## Stack

- **React 19** — functional components, native document metadata, `lazy` + `Suspense`
- **Vite 6** — dev server, HMR, production bundling, code splitting
- **React Router 7** — client-side routing, `Link` / `NavLink`
- **ESLint 9** (flat config) + **Prettier 3** — code quality
- **Vanilla CSS** — original `styles.css` + `pages.css` copied verbatim into `src/styles/`

## Folder structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                # static imports (icons, images)
│   ├── components/            # reusable atoms (Arrow, Eyebrow, NodeBadge, PixelGradient, ImgPlaceholder)
│   │   └── index.js           # barrel export
│   ├── hooks/
│   │   └── useReveal.js       # IntersectionObserver fade-up reveals
│   ├── pages/                 # one component per route — lazy-loaded
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── TeamPage.jsx
│   │   └── ContactPage.jsx
│   ├── sections/              # landing-page sections (Hero, Approach, Services, …)
│   ├── shell/                 # shared page chrome (PageNavbar, PageHero, PageFooter, PageCTA)
│   ├── styles/
│   │   ├── styles.css         # landing tokens + atomic styles (untouched)
│   │   └── pages.css          # sub-page styles (untouched)
│   ├── utils/
│   │   └── ScrollToTop.jsx    # resets scroll on route change
│   ├── App.jsx                # router + Suspense boundary
│   └── main.jsx               # createRoot + StrictMode
├── index.html                 # single Vite entry; preconnects + Google Fonts
├── vite.config.js
├── eslint.config.js
├── .prettierrc.json
├── vercel.json
└── package.json
```

## Routes

| Path         | Page              | Notes                                   |
| ------------ | ----------------- | --------------------------------------- |
| `/`          | `HomePage`        | Hero · ProductsShipped · Services · Case Studies · CTA |
| `/services`  | `ServicesPage`    | Sticky service nav + three blocks       |
| `/portfolio` | `PortfolioPage`   | Seven case studies with sticky index    |
| `/team`      | `TeamPage`        | Directors + Management/Developers/Design |
| `/contact`   | `ContactPage`     | Brief form + offices                    |
| `*`          | redirect to `/`   |                                         |

## Commands

```bash
# Install (Node 20+ recommended)
npm install

# Develop with HMR — http://localhost:5173
npm run dev

# Production build to ./dist
npm run build

# Preview the production build locally
npm run preview

# Lint + format
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Contact form (EmailJS)

The Contact page form sends submissions directly to your inbox via
[EmailJS](https://www.emailjs.com/) — no backend, no serverless function.

### Setup

1. **Create a free EmailJS account** at [emailjs.com](https://www.emailjs.com).
2. **Connect a sender** under *Email Services* (Gmail, Outlook, custom SMTP — anything works). Note the **Service ID** (`service_xxxxxxx`).
3. **Create a template** under *Email Templates*. Paste this body (or design your own):

   ```text
   New brief from {{from_name}} ({{from_email}})

   Company:    {{company}}
   Role:       {{role}}
   Ideal start: {{start}}

   Brief:
   {{brief}}
   ```

   In the template settings:
   - **To Email:** `{{to_email}}`
   - **Reply To:** `{{reply_to}}`

   Note the **Template ID** (`template_xxxxxxx`).
4. **Account → General → Public Key** — copy it.
5. **Copy `.env.example` → `.env`** and paste your IDs:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   VITE_CONTACT_EMAIL_TO=nithin@threepointolabs.com
   ```

6. **Restart `npm run dev`** — Vite only picks up env vars on boot.

### Deploying to Vercel

Add the same four `VITE_*` variables under **Project Settings → Environment Variables** before redeploying. They get baked into the build, so changing them requires a new deploy.

### Notes

- `VITE_CONTACT_EMAIL_TO` is the destination address. If you skip it, the form falls back to `nithin@threepointolabs.com`.
- All `VITE_*` vars are exposed to the client by design — EmailJS's public key is *meant* to be public; it only allows sending against your template, not arbitrary access to your account.
- Free tier: 200 emails/month. Bump to a paid plan if you outgrow it.

## Deploy to Vercel

The repo ships with a `vercel.json` that already configures:

- `framework: vite` — Vercel detects the Vite preset
- `outputDirectory: dist`
- a **SPA rewrite** so every path falls back to `index.html` (so direct `/portfolio` loads work)
- 1-year immutable cache on `/assets/*` (Vite hashes those filenames)

### One-time setup

```bash
# 1. Install the Vercel CLI (optional, web flow works too)
npm i -g vercel

# 2. From the project root:
vercel

# Follow prompts. Vercel will detect Vite automatically.
```

### Continuous deploys

1. Push the repo to a Git host (GitHub / GitLab / Bitbucket).
2. On Vercel, **New Project → Import** the repo.
3. Leave Build / Output as auto-detected (Vite preset).
4. Click Deploy.

## What changed technically

| Concern                       | Before                                            | After                                                 |
| ----------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **React delivery**            | UMD via `unpkg.com/react@18.3.1`                  | npm `react@19`, bundled by Vite                       |
| **JSX transpile**             | `@babel/standalone` in the browser (slow)         | Vite + SWC build-time transform                       |
| **Module system**             | Globals on `window` (`Object.assign(window, …)`)  | ES modules with named exports + a `@/` path alias     |
| **Routing**                   | Multiple `.html` files, full page reloads         | React Router 7 SPA, code-split per-route              |
| **Code splitting**            | None — all JSX shipped together                   | `React.lazy` per page + manual `react` / `router` chunks |
| **SEO meta**                  | Static `<title>` in HTML only                     | Per-page React 19 native `<title>` + `<meta>` tags    |
| **Build pipeline**            | None                                              | `npm run build` → minified, hashed, tree-shaken `dist/` |
| **Lint / format**             | None                                              | ESLint 9 flat config + Prettier                       |
| **Type-safety nets**          | `/* global */` comments                           | Explicit imports — no implicit globals                |

### What did **not** change

- Every CSS class name (verified)
- Every animation, keyframe, transition, hover behavior
- Every section's content, copy, layout, and order
- Every breakpoint and responsive rule
- Fonts: Space Grotesk, Inter Tight, JetBrains Mono, Instrument Serif
- All inline `<style>` blocks inside page components (Services nav, Services blocks, Team page,
  Portfolio page) — kept verbatim
- All SVG visuals, the PixelGradient hero composition, the case-study mocks

### Why this structure

- **`sections/` vs `shell/` vs `components/`** — keeps landing-only chrome (`Navbar`, `Hero`,
  etc.) apart from the shared chrome (`PageNavbar`, `PageFooter`, `PageCTA`) used by the four
  sub-pages. Tiny reusable atoms (`Arrow`, `Eyebrow`, `NodeBadge`, `ImgPlaceholder`,
  `PixelGradient`) live in `components/` with a barrel export so imports stay terse.
- **Pages own their inline styles** — the original prototype put a few large
  `<style>{`...`}</style>` blocks inside `services-page`, `team-page`, and `portfolio-page`. We
  preserved them in place instead of trying to factor them into the global stylesheet —
  this guarantees zero visual drift while still leaving the door open to extract them later.
- **Lazy routes** — each page is a separate chunk (`HomePage-[hash].js`, …) so the initial
  paint only ships the landing bundle.
- **No CSS-in-JS, no Tailwind** — explicitly out of scope; original `styles.css` and
  `pages.css` are imported once in `main.jsx` and untouched.

## Visual parity confirmation

The migration is a **lift-and-shift of behavior, not a redesign**:

1. CSS files were copied byte-for-byte (`styles.css`, `pages.css`).
2. Class names, `data-screen-label` markers, inline `style` props, and ARIA attributes
   were preserved exactly as written.
3. The `useReveal` hook (IntersectionObserver fade-ups) keeps the same threshold, rootMargin,
   and 1.2 s fallback as the original.
4. Each section component is a 1:1 port of its source — only the imports changed.

To verify after a build: run `npm run preview` and diff against the original `*.html` pages
opened directly in a browser.
