# Bodywise assessment concept

Independent PM case-study prototype by Pankhuri Srivastava. Not an official Bodywise service.

## Experience

- Responsive landing page and seven concern categories.
- Adaptive 6–9 question adult assessment with multiple concern/context/preference selections, editable review and personalised care summary.
- Separate paths for routine exploration, clinician review, urgent symptoms and under-18 users.
- PM case study covering report/plan logic, conversion hypotheses, experiments and RICE backlog.

## Hosting

This repository is a buildless static site. GitHub Pages publishes the main branch from its root. All links are relative. Open index.html locally or serve this directory with a static HTTP server.

## Files

- index.html: site entry
- app.js: assessment and report interface
- model.js: concern configuration and illustrative routing
- catalogue-data.js: sourced product catalogue snapshot
- products.js: concern and suitability matching logic
- products.html: filterable product library
- PRODUCT-RESEARCH.md: product sources and matching rules
- styles.css: responsive and print layouts
- case-study.html and case-study.md: PM case study

## Prototype limits

No diagnosis, real clinician review, payment processing, appointment booking, analytics or backend. Use fictional answers. Answers exist only in tab memory and clear on refresh or restart. Eligible reports now show matched products from a researched 125-listing catalogue (78 eligible Shop All listings), direct official product links, pack prices, reasons and optional-price estimates. Hair/scalp treatment and supplements are discussion-only; restricted or uncertain suitability holds suggestions. Prices are a dated snapshot, not live. Conversion targets are assumptions, not measured results. Medical content and eligibility rules need clinical approval before production.

The reference PDF, credentials, Git history and original hosting identity are not included.

Customer navigation links to Products. Case-study documents remain saved but are not linked from the customer journey. Review routes link to Bodywise’s official consultation page, with no quiz answers included in the URL.
