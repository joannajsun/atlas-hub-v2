# Iteration Notes
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

A living log of direction changes, revised decisions, and things I learned that changed how I'm thinking about the product. The goal is to record these as they happen, not reconstruct them later.

---

## Pre-Launch

**Shifted primary persona from VP to dispatch lead** (May 2026)
Original concept centered on the executive reporting layer — David's cross-market FACR dashboard and SLA scorecards. Shifted to Maria after early conversations made it clear that (1) VPs don't champion new tools, dispatch leads do, (2) the acute daily pain is in dispatch, not executive reporting, and (3) you can't build a compelling executive dashboard without first collecting the operational data that only Maria generates. I almost built David's dashboard first because it's easier to demo. The shift to Maria was a conscious correction.

**Added tradeoffs log as a first-class artifact** (May 2026)
A PM artifact suite that only documents what was built misses the thinking that shaped the product. The tradeoffs log is where the reasoning is most visible — it's the document that shows "this person made decisions under uncertainty" rather than "this person executed a spec."

**Descoped native mobile from v1** (May 2026)
Early thinking included iOS/Android as part of v1. Cut to Phase 3. Core workflows are achievable on mobile web with enough UX investment. The native shell should wrap validated workflows, not precede them.

**Decided not to build ML prediction in v1** (May 2026)
Prediction requires training data. Building a model without it produces low-confidence output that erodes trust faster than it builds it. "This address had elevator access issues twice in the last 6 months" is almost as actionable for Maria as a probabilistic failure score. The data collection layer has to come first.

---

## Post-Alpha (placeholder)

*Entries to be added after Weeks 5–8. Tracking in advance so I document learning as it happens:*

- Exception reason code taxonomy: is the initial set of 9 codes right, or is "other" > 20%?
- Morning Brief: which sections does Maria actually use vs. ignore at 6am?
- Driver exception logging: is 60 seconds achievable on web mobile, or does this force native app sooner?
- Beta pricing: does nominal beta fee ($200/month) convert, or does it create resistance?
