# Tradeoffs Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Purpose

This document records significant product decisions where we chose one direction over a reasonable alternative. For each tradeoff, the goal is to capture: what we chose, what we didn't, and — critically — why. A good tradeoffs log shows hiring managers and collaborators that the product was shaped by deliberate decisions, not defaults.

> "The decisions you don't make are as revealing as the ones you do." — PM axiom

---

## T-001: Web-first mobile over native app in v1

**Decision**: Build a mobile-responsive web app for drivers rather than a native iOS/Android app.

**What we chose**: Progressive web app (mobile-responsive web) for the driver exception logging flow in v1.

**What we didn't choose**: Native iOS/Android app (React Native or Swift/Kotlin) from the start.

**Why**:
- Faster iteration: web deploys are instant; native app updates go through App Store review (1–7 day lag)
- No installation barrier: drivers can use it on any phone by bookmarking a URL — no app store friction
- Validates the workflow before committing to native build cost
- The core UX questions (how many taps? what fields? what reason codes?) are cheaper to answer in web

**What we gave up**:
- Push notifications are degraded on mobile web (especially iOS Safari)
- Offline logging requires Service Worker complexity on web vs. native-native simplicity
- Camera integration for exception photos is more reliable in native
- "App store presence" as a trust signal for enterprise buyers

**Trigger to revisit**: If driver exception logging time is consistently > 3 minutes on web mobile, or if < 50% of drivers log exceptions (vs. calling dispatch), move native app to v1 Must-Have.

**When we'll build native**: Phase 3 (Q1 2027), after web mobile workflows are validated.

---

## T-002: Exception intelligence over route optimization

**Decision**: Build exception analytics as the core differentiator instead of route optimization.

**What we chose**: Exception pattern recognition, FACR analytics, crew performance dashboard — the "why are deliveries failing" layer.

**What we didn't choose**: Building a first-party route optimization engine (solve "which order to visit stops?").

**Why**:
- Route optimization is a solved problem: Routific, OptimoRoute, and Google Maps all do it well. Building parity is expensive and doesn't differentiate.
- Exception intelligence is an unsolved problem: no competitor has built it for white-glove delivery. First mover advantage exists.
- Route optimization improves efficiency; exception intelligence improves completion rate. Completion rate is what retailers measure carriers on.
- We use a third-party routing API in v1 to maintain the feature without the build cost.

**What we gave up**:
- Customers who want "everything in one tool" (route + exception) may choose OptimoRoute + Onfleet stack over Atlas
- First-party routing data would enrich the intelligence layer (route complexity → failure prediction)
- Routing is a higher-frequency user interaction than exception logging, which means more daily engagement

**Trigger to revisit**: If > 30% of lost deals cite "needs built-in route optimization" as the reason, move routing up the roadmap.

**When we'll build it**: Phase 3 (Q1 2027), as "exception-aware routing" that uses our data to improve stop sequencing — not just optimization for speed.

---

## T-003: Dispatch lead (Maria) as primary user over VP (David)

**Decision**: Optimize the v1 product experience for Maria (daily dispatch operations) over David (executive reporting).

**What we chose**: Morning Operations Brief, exception workflow, confirmation workflow — features that make Maria's 6am shift better.

**What we didn't choose**: Leading with the executive dashboard, SLA scorecard, and partner report that David would use to justify the purchase.

**Why**:
- Bottom-up adoption converts faster in SMB logistics. If Maria loves it, she champions it to David.
- David writes the check, but Maria's daily behavior determines whether it gets renewed.
- Building for David first requires solving the data collection problem (Maria's features) anyway — there's no executive dashboard without the underlying exception data.
- In user interviews, Maria's pain is acute and daily. David's pain is a quarterly meeting problem.

**What we gave up**:
- David-first strategy might have shortened sales cycles (economic buyer engagement from day 1)
- Partner reports and SLA scorecards are the features David immediately understands the value of
- Risk: David sees a demo, likes it conceptually, but doesn't see "his" features — signs late or not at all

**Mitigation**: Include executive reporting in the demo even in v1 (show what it will look like with data) and position it explicitly as a Q4 feature.

---

## T-004: Single-warehouse scope in v1

**Decision**: v1 supports one warehouse/depot per carrier account.

**What we chose**: Depth of feature execution for a single-warehouse operation.

**What we didn't choose**: Multi-warehouse support from day 1 (multiple depots, cross-market reporting).

**Why**:
- Our ICP (15–80 truck regional carrier) frequently operates from a single warehouse
- Multi-warehouse adds significant data model and UX complexity (routing between warehouses, cross-market benchmarking, crew assignment across markets)
- The core problem (exception intelligence, morning brief, FACR) is fully solvable for single warehouse
- David's company (3 markets) is the exception in our ICP, not the rule

**What we gave up**:
- Can't fully serve David's vision of cross-market FACR benchmarking until Phase 3
- Multi-market carriers looking for one tool across all locations will look elsewhere in v1
- Potential large contract opportunity delayed (multi-warehouse carriers have higher ACV)

**Trigger to revisit**: First time we lose a deal explicitly because of single-warehouse limitation.

**When we'll build it**: Phase 3 (Q1 2027), Milestone 3.3.

---

## T-005: Manual data entry over TMS integration in v1

**Decision**: v1 requires manual data entry (or CSV upload) for route and stop data. No live TMS integrations.

**What we chose**: Ship faster without the integration engineering burden. Customers enter or import their data manually.

**What we didn't choose**: Building API integrations with major TMS platforms (McLeod, TMWSuite, DispatchTrack, custom systems) from day 1.

**Why**:
- Each TMS integration is 2–4 weeks of engineering. Integrating 5 platforms before launch would delay by 3+ months.
- Manual data entry validates that the core product value (exception intelligence, FACR) is worth the friction cost
- Carriers who love the product will tolerate some friction; ones who won't aren't strong signals
- Integration is table stakes eventually, but it's not the reason a carrier decides to try Atlas

**What we gave up**:
- Manual data entry is a real friction point — creates daily data entry work for dispatch
- Some carriers will decline trial specifically because "we're not going to re-enter our manifest every day"
- Data entry errors reduce data quality and FACR accuracy

**Trigger to revisit**: If > 25% of churned or lost deals cite "too much manual work" as the reason.

**When we'll build it**: Phase 3 — after validating which TMS platforms are most common across our customer base (build the one that covers 60%+ of customers first).

---

## T-006: No AI/ML exception prediction in v1

**Decision**: v1 does not predict which stops will fail. It only reports on what has already failed.

**What we chose**: Historical analytics (what happened, what patterns exist) as the intelligence layer.

**What we didn't choose**: Predictive analytics ("this stop has a 40% chance of failing today").

**Why**:
- Prediction requires training data. We don't have it yet. Building an ML model without data produces low-confidence predictions that erode trust faster than they build it.
- The "what happened" analytics layer is itself highly differentiated — no competitor has it for white-glove delivery.
- A dispatch lead who sees "this address had elevator access issues twice in the last 6 months" has almost as much actionable information as one who sees a probabilistic failure score.
- ML is a feature for Phase 4, once we have 500K+ exception records.

**What we gave up**:
- "AI-powered" positioning in sales conversations (table stakes for some buyers)
- Pre-departure risk scoring is the highest-value feature for Maria's morning workflow
- Competitors who invest in ML earlier could claim the prediction narrative

**Trigger to revisit**: When we have 6+ months of exception data across 10+ carriers.

---

## T-007: No customer-facing tracking portal in v1

**Decision**: v1 does not include an end-customer (recipient) tracking experience.

**What we chose**: Carrier-facing operations tool only.

**What we didn't choose**: Consumer-facing delivery tracking (live ETAs, "your delivery is 3 stops away").

**Why**:
- Two separate products with separate UX requirements, separate trust models, and separate stakeholders
- The consumer tracking problem is partially solved (Onfleet, DispatchTrack both do this)
- Atlas's primary differentiation is operational intelligence, not customer communication
- Building a consumer product adds GDPR/CCPA complexity, customer support burden, and dilutes focus

**What we gave up**:
- Customer notification on reschedule is in scope (automated SMS/email) — that covers the most important consumer touchpoint without a full portal
- Some carriers specifically want a white-label tracking portal to improve end-customer NPS
- Could be a meaningful expansion revenue line

**When we'll build it**: Phase 4, as a white-label add-on for carriers who want it.

---

## Tradeoff Principles

Across all of these decisions, a few underlying principles emerge:

1. **Depth over breadth in v1** — better to do 5 things brilliantly than 15 things adequately
2. **Data collection before intelligence** — don't build the analytics before the logging
3. **Validate before automating** — manual first, then automate what's validated
4. **Maria first** — if a tradeoff helps David but hurts Maria, Maria wins in v1
5. **Ship, then iterate** — a shipped imperfect product generates more learning than a perfect unshipped one
