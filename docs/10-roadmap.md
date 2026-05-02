# Roadmap
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## Sequencing Logic

Data before analytics. Maria before David. Web before native mobile. Solve the acute pain first.

---

## Phase 1 — Core Operations (Q3 2026)
*Goal: Ship a product Maria uses every day. Get 5 paying customers.*

**Milestone 1: Alpha (Month 1)**
- Exception logging (driver, web mobile) + reason codes
- Dispatch notification on exception
- Basic exception list view
- Auth + multi-tenant carrier accounts
- Schema frozen before anything else ships

*Exit criteria: one real dispatch lead logs an exception on mobile and sees it on web dashboard in < 60 seconds.*

**Milestone 2: Beta (Month 2)**
- Confirmation status per stop + access notes
- Prior exception flag
- Morning Operations Brief (unconfirmed counter + baseline)
- Vehicle alerts
- Confirmation checklist (driver mobile)

*Exit criteria: beta users open Atlas before routes leave without being prompted.*

**Milestone 3: Launch (Month 3)**
- Reschedule trigger + customer notification (SMS/email)
- Exception queue (dispatch view)
- Route status board
- Onboarding flow + help documentation
- 5 signed contracts ✓

---

## Phase 2 — Intelligence Layer (Q4 2026)
*Goal: Turn data into decisions. Grow to 20 customers.*

- Exception trend view + filter matrix
- Top exception locations (address-level patterns)
- Partner-level exception breakdown
- Individual crew FACR + trend chart
- Crew exception history
- Partner report (per-retailer summary + CSV export)

*Exit criteria: 3 dispatch leads identify a recurring pattern using Atlas data unprompted.*

---

## Phase 3 — Mobile & Scale (Q1 2027)
*Goal: Native mobile app. 50 customers. Multi-warehouse.*

- Native iOS + Android app (React Native)
- Offline exception logging
- Push notifications
- Multi-warehouse support (cross-market FACR)
- Route optimization (first-party, exception-aware)

---

## Phase 4 — Platform (Q2 2027+)

ML exception prediction (needs 6+ months of data), TMS integration layer, retailer portal, self-serve onboarding.

---

## What I'm not building and when I'll revisit

| Feature | Why not now | Revisit when |
|---------|------------|--------------|
| Native mobile app | Validate web-mobile workflows first | Phase 3 |
| Route optimization | Solved problem; not our differentiator | Phase 3 as exception-aware routing |
| ML prediction | Need the data first | Q4 2027 |
| TMS integrations | Validate which platforms matter before building | v2 after knowing customer stack |
