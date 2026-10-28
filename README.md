# FurSphere showcase

This `pages-showcase` branch contains a static adaptation of [JasonKeyiL/fursphere-mbti-offical](https://github.com/JasonKeyiL/fursphere-mbti-offical/tree/main) for GitHub Pages. The current upstream baseline is commit [`06ab0f9c972dd0e8edaddc1166724d54a521357f`](https://github.com/JasonKeyiL/fursphere-mbti-offical/commit/06ab0f9c972dd0e8edaddc1166724d54a521357f). This fork's `main` mirrors that upstream version; `pages-showcase` contains the GitHub Pages adaptations.

The showcase includes the product homepage, pet details flow, and twelve interactive behavior questions. Completing the flow shows an explicit demo completion screen. It does not generate personality results, send email, create accounts, or contact the original APIs. Optional photos are previewed locally in memory and never uploaded.

The Pages adaptations retain the upstream mobile layout and social links, add the project subpath to public assets, and replace server-dependent screens with a local questionnaire flow. Upstream account, upload, report, and download code remains available on `main`. Server routes, credentials, and Vercel Analytics are not used by the published showcase.

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
