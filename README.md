# kovaserve-docs

Documentation site for **KovaServe** — the Agentic Execution Cloud for neoclouds and private AI environments.

Live: [docs.kovaserve.com](https://docs.kovaserve.com)

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [Fumadocs](https://fumadocs.dev) (MDX-based docs framework)
- [Tailwind CSS 4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Authoring

Docs live in `content/docs/` as MDX files. Edits push to `main` and auto-deploy.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run types:check
```

## Layout

```
app/                # Next.js routes (home, docs, og, llms.txt)
content/docs/       # MDX docs content
components/         # Shared UI (mdx components)
lib/                # Source loader, layout config, branding
```

## Scope

These docs are the canonical specification for KovaServe — control plane, SDK, console, and public API. Other surfaces:

- Marketing site → `kovaserve-web/` (kovaserve.com)
- Console (planned) → `kovaserve-app/` (app.kovaserve.com)
- Implementation → `kova-v1/`
