# FurSphere showcase

This `pages-showcase` branch contains a static version of the original FurSphere website for GitHub Pages. The original application is preserved on `main`.

The showcase includes the product homepage, pet details flow, and twelve interactive behavior questions. Completing the flow shows an explicit demo completion screen. It does not generate personality results, send email, create accounts, or contact the original APIs. Optional photos are previewed locally in memory and never uploaded.

## Run and build

```sh
npm ci
npm run dev
npm run build
```

The configured base path is `/fursphere-mbti-offical`. The production build exports static files to `out/`, including `/mbti/index.html` for direct navigation. No environment variables or credentials are needed.

## Deployment

GitHub Pages publishes the compiled contents of `out/` from the root of the `gh-pages` branch. Keep the `.nojekyll` marker when publishing. Source changes belong on `pages-showcase`; rebuild and publish the resulting files to update the site.

Public URL: https://chrischrischristianyijin.github.io/fursphere-mbti-offical/

Restoring the full application is separate work: the original Next.js server routes, Python services, queue, database, email delivery, and AI integration require running backend infrastructure.
