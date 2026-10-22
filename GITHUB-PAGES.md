# GitHub Pages deployment

Updated 22 October 2026. Repository: [pankhuri813/bodywise-assessment](https://github.com/pankhuri813/bodywise-assessment). Site: [Bodywise assessment](https://pankhuri813.github.io/bodywise-assessment/).

## Actual publishing configuration

GitHub Pages uses Deploy from a branch: main, / (root). The repository root contains the contents of local `dist/`, a repository-specific README and `.nojekyll`. The prepared `.github/workflows/pages.yml` is not the active publishing method. Do not switch the source to GitHub Actions merely because that optional file exists locally.

## Updating the existing site

1. Edit source in local `dist/`. Regenerate `products.html` with `node render-products.cjs` when catalogue markup changes, and `case-study.html` with `node render-case.mjs` after PM Markdown changes. Preserve local photo paths, original image URLs and the provenance manifest when refreshing catalogue data.
2. Run `node --test model.test.cjs product.test.cjs kit.test.cjs review.test.cjs` from the local source checkout and relevant browser checks. Check phone-width layouts for presentation changes; this is not a substitute for a direct iPhone Safari check.
3. Upload changed public files to the repository root, preserving filenames. Include any referenced product photos before or in the same commit as the new catalogue/page source. Retain the root-specific README; it uses repository-root paths rather than the local `dist/` layout.
4. Commit to main. GitHub's built-in pages build and deployment runs automatically. A saved commit or uploaded artifact does not by itself establish that the public release is live.
5. Wait for the matching source commit's deployment to succeed, then verify the changed public UI/assets. A hosted-runner queue is a GitHub publishing delay, not evidence of a code failure. Record pending and successful states accurately in `GITHUB-DEPLOYMENT.md`.

Use a local HTTP server rooted at `dist/` for preview. All customer-facing asset links support the `/bodywise-assessment/` repository subpath.

## Published and excluded content

The user authorised a public repository/site. Products is in customer navigation; PM case-study files remain accessible separately but are not linked from the landing, report or product-library navigation. No actual checkout, consultation service, database, analytics or purchase-attribution backend is implemented.

Publish the web source, image assets, public provenance and relevant documentation. Exclude the original reference PDF, credentials, Sites identity, local Git data, research caches, test-only preview fixtures (including `.mobile-*`), screenshot artifacts and runtime state.
