# Param Dave — Portfolio

Personal portfolio site, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) v4 and deployed to GitHub Pages.

Live site: https://paramdave.fyi/

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # produces ./dist
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes to GitHub Pages. Make sure the repo's Pages settings have **Source: GitHub Actions**.

## Structure

```
src/
  layouts/Layout.astro     # base shell + dark-mode bootstrap
  components/Nav.astro     # top nav + theme toggle
  components/Footer.astro
  pages/                   # one .astro file per route
  styles/global.css        # Tailwind v4 entrypoint
public/                    # static assets (favicon, images)
_archive/                  # previous HTML5 UP version, kept for history
```
