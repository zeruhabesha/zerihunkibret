# Copilot instructions for this repository

This file gives concise, actionable guidance for AI coding agents working on the Zerihun Kibret portfolio site (Next.js + Tailwind + TypeScript).

- Project type: Next.js 13 (app router) with TypeScript. Main source is the `app/` directory. Components live under `components/`.
- Entry points: `app/layout.tsx` (RootLayout + metadata), `app/page.tsx` (home page), and `pages/_app.js` (legacy Next pages support).
- Styling: Global Tailwind CSS in `app/globals.css` + `styles/globals.css`. Avoid editing both unless necessary; prefer `app/globals.css` for app-router pages.
- Theme: Theme provider is implemented in `components/theme-provider.tsx` and wrapped in `components/providers.tsx`. Use `next-themes` patterns (attribute="class") when adding dark/light logic.
- Analytics: Vercel Analytics is included in `app/layout.tsx` via `@vercel/analytics/next`. Keep analytics component inside `Providers`.

Important scripts (from `package.json`):
- `npm run dev` — local dev server (Next.js)
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — runs `next lint`

Conventions and patterns to preserve:
- Use `"use client"` at top of components that rely on hooks or browser APIs (examples: `app/page.tsx`, `components/Nav.js`, `components/providers.tsx`).
- Keep heavy UI code lazily loaded using `next/dynamic`. `app/page.tsx` uses `dynamic()` for `animated-about` and `tabs` — follow this approach for large components.
- Prefer React functional components and client components for interactive UI. Server components are acceptable for static content.
- Icon usage: icon components are stored directly as React components in arrays instead of instantiated elements (see `skills` in `app/page.tsx`) to avoid SSR issues.
- Images: static images are served from `public/images`. Preload critical images in `useEffect` where needed (see `app/page.tsx`).

Files to inspect for context when making changes:
- `app/layout.tsx` — root layout, metadata, Analytics placement
- `app/page.tsx` — home page: many examples of dynamic imports, client hooks, and Tailwind usage
- `components/Nav.js` — mobile menu patterns, scroll and section detection
- `components/theme-provider.tsx` and `components/providers.tsx` — theme and provider wrappers
- `public/images/` — image assets used across the site

Testing & verification:
- Run `npm run dev` and open http://localhost:3000 to validate visual and runtime behavior. Many components rely on browser APIs; prefer manual UI checks for scroll-linked behavior and mobile menu.
- There are no automated tests in the repo. Lint via `npm run lint`.

What NOT to change without confirmation:
- Global layout and metadata in `app/layout.tsx` — changing metadataBase or Analytics placement may break production analytics.
- Theme provider attribute (class) or defaultTheme without coordinating CSS classes in Tailwind.
- Renaming `public/images` assets referenced by paths in `app/page.tsx`.

Examples to follow when adding features:
- Add client-only interactive UI by creating a file with `"use client"` and wrapping the app with `Providers` as in `app/layout.tsx`.
- Lazy-load heavy visual components with:
  const Heavy = dynamic(() => import("./heavy"), { loading: () => <div className="animate-pulse ..." /> })

If you need more context or to extend these instructions (tests, CI, or deployment notes), ask the repo owner for desired CI provider and environment variables (notably `NEXT_PUBLIC_SITE_URL`).
