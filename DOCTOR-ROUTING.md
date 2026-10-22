# Doctor-advice routing audit

Checked against the implemented model, product matcher and interface on 22 October 2026. These are conservative prototype rules, not validated medical triage or clinical eligibility.

## Where the links appear

1. Landing page: the “When a conversation comes first” section offers an optional link to Bodywise's expert page. This is general access, not a finding that every visitor needs a doctor.
2. A report requiring review: the first section contains a consultation card and “Get advice from a Bodywise doctor” button. The final next-step section repeats the button.
3. Every report product card marked “Discuss first”, including expandable alternatives: an adjacent “Check suitability with a Bodywise doctor” link.
4. The product library: discussion-only listings carry the same suitability link. Browsing a catalogue item does not establish a diagnosis or indicate that the visitor needs treatment.

All use https://bebodywise.com/schedule-appointment. This was verified to redirect to https://bebodywise.com/booking-listing, with expert profiles and sign-in-to-chat controls. The visitor chooses an appropriate specialist. Availability, eligibility and charges are controlled by Bodywise. No assessment answers or identifiers are sent in these URLs. No appointment is automatically booked.

## Global answer triggers

Any selected restriction applies to the complete assessment, including when another selected concern seems suitable for everyday care.

| Answer | Result |
|---|---|
| Pregnant / trying to conceive | Individual review; automatic products held |
| Breastfeeding / postpartum | Individual review; automatic products held |
| Regular medicines / managing a condition | Individual review; automatic products held |
| Prefer not to say about context | Individual review; automatic products held |
| Known ingredient allergy / active irritation | Individual review; automatic products held |
| Current exfoliating acids, retinoids or prescribed treatments | Individual review; automatic products held |
| Something caused irritation | Individual review; automatic products held |
| Safety answer “Not sure” | Individual review; automatic products held |
| Impact “Severe / disruptive” where impact is asked | Individual review; automatic products held |
| “Speak to an expert” preference | Individual review; otherwise eligible products become discussion-only |
| Body detail “Active itching / irritation” or “Fragrance sensitivity” | Individual review; automatic products held |
| Hair detail “Scalp discomfort” | Individual review; automatic products held |
| Body detail “Painful / deep spots” | Individual review; otherwise matching options are discussion-only |

“None of these” and private/uncertain exclusive choices cannot be combined with contradictory positive answers through the UI. Duration alone does not automatically trigger doctor advice.

## Category-specific triggers

| Area | When doctor advice is recommended |
|---|---|
| Hair & scalp | Any selection of hair shedding, visible thinning, or dandruff/flaky scalp. Uncomplicated dry/frizzy hair can remain routine care. Adding a clinical concern to dry/frizzy hair makes the whole result review-led. |
| Face | Sensitive/easily irritated or uncertain skin type holds product matching. Mild occasional breakouts can receive a skin-type-based routine. Moderate/recurring breakouts produce discussion-only matches; severe/disruptive impact holds products. Brow/lash serum is discussion-only even though its model route can otherwise be routine. |
| Body | Global restrictions, painful/deep acne spots, irritation or fragrance sensitivity. Higher-strength/treatment alternatives carry individual discussion labels even when the starting routine remains routine care. |
| Sun protection | Global suitability restrictions or a request for expert advice. Choosing the sensitive-skin sunscreen format alone does not diagnose sensitivity or automatically require a doctor. |
| Health & fitness | Sleep, low energy, nutrition support, or bone/joint nutrition always lead to review. Uncomplicated muscle-recovery lotion can remain routine care; oral supplement options remain discussion-only. |
| Periods/hormonal | Every concern: irregular periods, period discomfort, previously diagnosed PCOS, or symptoms to discuss. No hormonal diagnosis or automatic hormone-balancing product. |
| Intimate comfort | Every concern: external chafing/discomfort, urinary symptoms, itching/irritation, or private advice. No automatic infection treatment. |

## Discussion-only product classes

Hair-growth treatments and biotin options; dandruff treatments, including ketoconazole and ZPTO; oral supplements such as magnesium, multivitamins, calcium and collagen; brow/lash serum; 20% urea body lotion, 30% urea foot products and benzoyl-peroxide treatments; and kits flagged as treatment/review options by the catalogue model. Actual recommendations additionally require current catalogue eligibility, no out-of-stock flag, resolved metadata and valid matching answers.

An alternative can be marked “Discuss first” while the primary routine remains everyday care. Its own doctor link makes that distinction actionable. A library entry that is unverified or unavailable does not become an eligible recommendation because a consultation link is shown.

## Exceptions and safety priority

- Under 18: one-question exit. Advises a trusted adult and appropriate healthcare professional. No adult product list or automatic Bodywise booking referral, since suitability of the service for minors has not been established.
- Urgent symptoms on an adult path: immediate medical-help wording at the safety question and a shortened four-question route. The report prioritises prompt local/emergency care. It does not substitute Bodywise's booking page for urgent care and has no product upsell.
- Everyday-care paths: general advice to stop a product that causes a reaction and seek care if symptoms persist or worsen. This is conditional follow-up guidance, not a finding that every routine-care user needs a consultation.

## Known implementation limits

This is a question-based prototype. It has no clinical validation, examination, full ingredient/medicine interaction engine, clinician-reviewed plan, photo analysis, diagnostic tests, appointment integration or live service availability. A production clinical owner must approve rules and escalation copy. The assessment-start and purchase targets do not override these rules.

## Care-kit step

Shopping kits are available only after a complete, valid routine-care assessment with eligible nonclinical individual products. Review-led, discussion-only, urgent, under-18 and uncertain-suitability paths cannot create kits. This feature adds no clinical routing triggers or doctor-link placements.
