# Bodywise assessment concept

Independent case-study prototype by Pankhuri Srivastava. Not an official Bodywise service.

## Current experience

- Landing page with interactive example summaries, a seven-area concern explorer, three-step explanation, doctor-advice section and FAQs.
- Adaptive 6–9-question adult assessment. Multiple concerns, context, details and preferences are supported; mutually exclusive facts remain single-select.
- Six questions for sun and care-navigation routes, seven for body/dry-frizzy hair, seven or eight for face, eight for wellness, and nine for hair/scalp symptoms. Urgent adult paths end after four questions; under-18 users exit after one.
- Editable review and a report using only the questions actually asked. Context restrictions apply globally across multiple selected concerns.
- Catalogue of 125 sourced listings, including packs/fragrances/kits; 78 current Shop All listings meet catalogue checks for matching. Unverified, unavailable and inconsistent entries remain references.
- One small starting routine, optional unchecked companions and expandable alternatives/variants. Secondary concerns inform comparison choices without stacking overlapping actives or duplicate families.
- Doctor-advice links on review-led reports and discussion-only cards. The landing advice section is optional access, not a recommendation that every visitor needs care. See [Doctor-routing audit](DOCTOR-ROUTING.md) for all scenarios and placements.
- Products navigation and a plain text assessment action. PM case-study files remain saved and updated, outside customer navigation.

## Files and hosting

GitHub Pages publishes the main branch from repository root.

- `index.html`, `app.js`: entry, landing interactions, quiz and report.
- `model.js`: questions, exclusive selections, normalisation and routing.
- `products.js`, `catalogue-data.js`: sourced snapshot and matching.
- `products.html`: searchable/filterable catalogue.
- `styles.css`, `landing.css`: assessment, report and landing presentation.
- `case-study.md`, `case-study.html`: current PM model, experiments, measurement contract and backlog.
- `DOCTOR-ROUTING.md`: doctor-link placements, every answer/category trigger and exceptions.
- `PRODUCT-RESEARCH.md`: source scope and matching limits.

## Validation and limits

Automated routing and matching tests run in the local source checkout before deployment. Browser verification covers multi-selection, shorter branches, report matching, external doctor-advice destination and landing interactions before deployment.

Answers exist only in this tab's memory and clear on refresh or restart. Use fictional answers. No diagnosis, AI/photo analysis, lab testing, actual clinician review, appointment booking, checkout, backend submission or live analytics occurs here. Bodywise may require sign-in for its own services. Product prices/availability are dated snapshots. Clinical eligibility and full ingredient/medicine interaction checks require clinical approval before production.

The 80% completion and 20% seven-day attributed-purchase targets remain hypotheses, not observed results. The source PDF, credentials, original hosting identity and private local files are excluded from GitHub uploads.
