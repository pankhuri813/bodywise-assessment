# GitHub deployment record

## Current status — documentation audit, 22 October 2026

- Kit release #10 and customer-review release #11 subsequently succeeded. Earlier pending notes below are historical observations.
- Photo prerequisite release #12 succeeded.
- Mobile source commit: c0d6a9f14cf844401c65ac56aaeeab90f3d3f754. Its Pages run #13 is https://github.com/pankhuri813/bodywise-assessment/actions/runs/39799498923 ; it succeeded. Public verification confirmed v11 styles/SVG marks, a loaded site-hosted hero photo and the first three site-hosted library photos. Direct iPhone Safari verification is still outstanding.
- Source and local 390px layout checks are complete; no direct iPhone Safari verification or conversion measurement is claimed.
- The records below are a chronological release history. Earlier counts, optional-checkbox behaviour and pending statuses are not descriptions of the current source.

## Publishing configuration

Repository: https://github.com/pankhuri813/bodywise-assessment

Publishing source: main branch, repository root, using GitHub's built-in Pages build/deployment.

The repository contains the public web files and product-photo assets from local dist/ at its root, a repository-specific README.md, and .nojekyll. It does not use the optional .github/workflows/pages.yml file prepared earlier. For future updates, upload changed local dist/ files to the GitHub repository root, preserving their names. Changes committed to main trigger Pages deployment.

Initial source commit: 287462a8786b89043b350e09e9c7562f0996d10e
Initial deployment run: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39752211908

The site and source are public, as authorised by the user. The original reference PDF, credentials, local Git history, and Sites identity were excluded. Product recommendations were added in the update recorded below.

Verified live URL: https://pankhuri813.github.io/bodywise-assessment/

The initial deployment succeeded; its browser verification covered the then-nine-question body flow. Current adaptive body flow is seven questions. Historical release descriptions below retain the behaviour and test counts at that time.


## Product recommendation update

Source commit: 95369a7f5891ae96fcb3484ca1a77d20d2591cc9
Deployment: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39757440279
Status: succeeded; live body-care report verified with Urea Lotion and optional body sunscreen, including correct starting pack-price estimate.

Adds 17 sourced products, an allergy/active-treatment suitability question, face skin-type question, product matching, direct official product links, discussion-only options and a filterable product library. Thirteen routing and recommendation tests pass. Local browser verification covered affordable oily-skin matching, optional total updates and 390px layout. Prices are a dated snapshot.

## Optional recommendation visibility

Commit: 4b160890aebf7e8c5855963ee9ab4c96755fc444
Deployment: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39759061654 (succeeded)
Relevant optional products remain visible for simple and affordable preferences, labelled Optional recommendation. They are excluded from the initial estimate and selected only through an unchecked opt-in checkbox. Verified live for affordable dry-body-skin path: 549 INR initial, 1098 INR when optional SPF selected, 549 INR after deselection. All 13 tests pass.
# Full catalogue recommendation update — 22 October 2026

Commit: 5a3f8c1de5bed750d5721069eacad490c02e19bc

Deployment: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39781306014 (succeeded)

Integrates 125 official product-page listings into the library and 78 current Shop All listings that pass metadata/availability checks into concern-based matching. Reports show starting and optional products, grouped pack/fragrance links and expandable alternatives. Kits are alternatives, not additions to the estimate. Clinical/supplement discussion labels and consultation-first hormonal/intimate routes are preserved. Fourteen automated routing/recommendation tests pass. Browser checks verified the dry-body-skin estimate and optional selection locally, catalogue search, and a completed live underarm report with three eligible variant links and three alternative families. Snapshot pricing and availability remain dated, not live.

# Adaptive multi-select update — 22 October 2026

Commit: 6228f6d76f0b6c9bae3a51206b35dd2ee1bf1879

Deployment: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39786403022 (succeeded)

Replaces fixed adult question counts with focused paths of 6–9 questions. Concerns, safety, combined health/product context, relevant details and preferences support multiple selections; age, category, skin type, duration and impact stay single-select. Exclusive none/private values clear contradictory selections. Multi-concern matching adds secondary concerns to alternatives without duplicate families or stacked starting actives. Products replaces PM navigation, and case-study links are removed from the home, report and product-library journey. The files remain saved. Review reports link to the official Bodywise schedule-appointment route, verified to redirect to booking-listing with expert profiles and sign-in-to-chat controls. No quiz answers are sent in the URL.

Nineteen automated tests passed. Local browser checks covered 6-question sun, 7-question body and 9-question hair paths. Live checks verified zero case-study links on home/report, multiple selected hormonal concerns in the report, the doctor-advice link and two simultaneous selected hair concerns. Screenshot: adaptive-multiselect-live.png.

# Landing redesign and doctor-routing audit — 22 October 2026

Commit: 3918ceefc7cad55395a4931820f0a44e863112de

Verified live landing: https://pankhuri813.github.io/bodywise-assessment/

The landing uses an interactive example-summary phone, sourced product imagery, a seven-area concern explorer, journey explanation, optional doctor-advice access and FAQs. The navbar assessment action has no outline box. Links beside all discussion-only report alternatives and library entries now lead to the official Bodywise consultation destination. Existing clinical routing rules are preserved. README and both PM case-study formats are synchronised to the implemented 6–9-question multi-select flow. DOCTOR-ROUTING.md records every scenario and link placement. The removed product-library notice remains absent.

Nineteen existing routing/matching tests passed. Browser verification covered hero example switching, area exploration, a completed routine report with four discussion-only alternative doctor links and no top consultation card, 51 library discussion links, the live landing and published README/PM content. Live screenshot: landing-redesign-live.png.


# Personalised care kits — 22 October 2026

Source commit: 1a6880eacff38bb1a607b69b9574b77631a036c7

Adds explicit starter/optional-pair selection after eligible routine reports, product roles, label-based routine steps, pack-price totals and official merchant handoff. No default choice, fabricated discounts, subscription or included clinical service. Builder handoff is manual, not a prefilled cart. README, PM documents, product research and routing audit updated.

All 25 routing, recommendation and kit checks pass. Local browser verification covered unselected initial options, disabled continuation, 549 INR starter, 1098 INR optional pair, changing selection, arrow-key selection and merchant destinations. Screenshot: personalised-kit-preview.png.

GitHub accepted the source commit. At verification, no new Pages build was listed and the public site still served the previous version. Publication remains unverified; do not claim this feature is live until a new build and public kit flow are confirmed.

Subsequent status: Pages run #10 is queued at https://github.com/pankhuri813/bodywise-assessment/actions/runs/39793585399 . Public verification remains pending GitHub runner availability. Local preview retained for review.

# Customer product reviews — 22 October 2026

Earlier kit deployment #10 subsequently completed successfully (39793585399).

Adds selected customer product-review excerpts to eligible kit selection and kit review, with exact product ID, displayed author/date/individual rating and official source link. No kit rating, invented customers or verified-purchase badge. Unsupported product IDs have no replacement review. Reviews do not change clinical routing. README, PM documents and research notes updated. Twenty-seven routing, recommendation, kit and source-integrity checks passed. Local dry-body pair and review layout verified; screenshot: customer-reviews-preview.png. GitHub review-update publication is being verified.

Review source commit: cff7b27976600156ccb1acd666b8fc80acb15e84. Pages run #11: https://github.com/pankhuri813/bodywise-assessment/actions/runs/39796016372 . At final check it remains queued; customer-review publication is not yet confirmed. Local preview is available and retained.

# iPhone presentation and product-photo fix — 22 October 2026

Addresses the user's iPhone screenshots: option/filter controls now explicitly set text colours, decorative arrows/brand/care glyphs are SVG, and the emoji product fallback is replaced with a compact text label. All 125 official product photos (3.34 MB total) are served from this site. Original image URLs are retained in imageSource and product-image-sources.json. No recommendation or consultation logic changes.

Twenty-seven checks pass, including local image bytes/source/path integrity and existing recommendation, kit and review-source checks. The 390px layout was visually checked with real CSS in isolated preview frames, including the user's body-detail question and first product card. This is not a direct iPhone Safari test. Screenshot: mobile-fixes-preview.png. Preview harness files are excluded from publication.

Photo-only prerequisite commit: cc63637d08f6aafe32ee50ccf0b75b2ddd8d329b. Remaining assets and UI changes are being uploaded separately so source changes do not point to missing assets.


## Documentation audit

All eight project Markdown files were reviewed, including the two identical doctor-routing copies and the dated output catalogue. Corrected the obsolete GitHub Actions setup guide, incomplete test command/file index, unbuilt-SKU wording, old optional-checkbox/estimate language, external-photo wording and inconsistent kit/review experiment outcome definitions. PM Markdown and HTML are regenerated together. Current source, proposed production integrations and historical release observations remain distinct. The output product inventory retains its original research rows; this audit did not refresh prices, availability or clinical evidence.

Mobile source publication verified: run #13 succeeded. The documentation audit is a subsequent documentation-only change and does not alter the published mobile UI.
