# Bodywise recommendation catalogue

Snapshot checked 22 October 2026. The 125 reachable official listings include sizes, fragrances, kits and URL aliases. Of 81 Shop All listings, 78 pass metadata/availability checks. Others remain browsable references, not cleared matches. Historical unavailable pages are excluded.

Sources: https://bebodywise.com/shop/all and https://bebodywise.com/sitemap-products.xml. Individual sources are retained in dist/catalogue-data.js and displayed in the library. Research notes explicitly flag the conflicting Urea 200ml and Triple Milk XP descriptions and the incorrectly labelled hardness test.

Matching uses selected concern, facial skin type, broad health/suitability gates and preferences. Missing or sensitive context, urgent symptoms, under-18, severe/disruptive symptoms, reported irritation, allergy or current active treatments suppress the shortlist. Hormonal and intimate concerns lead to clinician assessment. No automatic hormone-balancing product or deficiency diagnosis is generated.

Hair/scalp treatments, supplements, higher-strength urea and benzoyl-peroxide treatments remain discussion-only. Fragrance and pack sizes share a family; only eligible variants are shown in result cards. Cheaper preferences rank displayed pack prices within a family, not cost per ml or treatment strength.

A report shows one starting product, a relevant optional companion where applicable, and expandable alternatives. Kits replace individual choices and are not added to the estimate. Variant links do not change the displayed-pack estimate. Optional companions are chosen in a separate care-kit step with no preselection. The review shows each product’s role, label-based routine and summed pack prices. Alternatives and discussion-only products are excluded from these kits. The selection is not a monthly plan or checkout cart; the official merchant kit builder must be populated manually.

Update catalogue-research snapshots and rerun build_site_catalogue.py and render-products.cjs to refresh. Clinical rules need review before a real commercial launch.

## Adaptive multi-select flow

Adult paths now contain 6–9 questions, with one age question for under-18 and an early urgent exit after safety screening. Concerns, safety selections, combined health/product context, relevant symptom details and preferences support multiple selections. Mutually exclusive facts remain single-select. None/private choices exclude contradictory selections. The first matched concern supplies the starting routine. Other concerns inform alternatives without stacking overlapping actives or duplicate families. Any selected health/product restriction still applies globally.

Clinician-review reports link to https://bebodywise.com/schedule-appointment, verified to redirect to Bodywise’s booking-listing page with its experts and sign-in-to-chat controls. No assessment answers are sent in the URL. The case-study files remain saved but are not linked from the customer journey.
