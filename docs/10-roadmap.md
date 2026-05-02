# Product Roadmap
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Roadmap Philosophy

The roadmap is not a promise. It is a sequenced hypothesis about what to build, in what order, to achieve the product goals. It changes when evidence changes.

**Sequencing principles**:
1. Data before analytics (can't analyze what you haven't collected)
2. Maria before David (dispatch lead adoption unlocks executive buyer confidence)
3. Web before mobile native (validate workflows before building native shells)
4. Solve the acute pain before the aspirational features

---

## Phase Overview

```
Phase 1 (Q3 2026)     Phase 2 (Q4 2026)      Phase 3 (Q1 2027)      Phase 4 (Q2 2027+)
─────────────────     ──────────────────      ─────────────────      ─────────────────
Core Operations       Intelligence Layer      Mobile & Scale         Platform & Moat
─────────────────     ──────────────────      ─────────────────      ─────────────────
Exception Workflow    Exception Analytics     Native Mobile App      ML Exception Prediction
Pre-Delivery Confirm  Crew Performance Dash   Route Optimization     API / Integration Layer
Morning Brief         Partner Report          Multi-Warehouse        Customer Tracking Portal
Fleet Status Board    SLA Scorecard           Channel Partnerships   Self-Serve Onboarding
                      Export (CSV/PDF)        Advanced Crew Mgmt
```

---

## Phase 1 — Core Operations (Q3 2026)

**Goal**: Ship a product that replaces Maria's morning whiteboard + group text. Get 5 paying customers.

**Theme**: Make dispatch faster and exception data structured.

### Milestone 1.1 — Alpha (Internal, Month 1)
*Purpose: Validate core data model and exception workflow end-to-end.*

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Exception logging (driver, web mobile) | 2.1 | Must | Core data entry point |
| Exception reason codes + schema | 2.1 | Must | Schema frozen before any other feature |
| Dispatch notification on exception | 2.2 | Must | Validates real-time sync |
| Basic exception list view | 2.5 | Must | Dispatch needs to see what's been logged |
| Authentication (email + Google SSO) | — | Must | Multi-tenant auth required from day 1 |
| Carrier account setup | — | Must | First tenant onboarding flow |

*Exit criteria*: One real dispatch lead can log an exception on mobile and see it on the web dashboard within 60 seconds.

---

### Milestone 1.2 — Beta (Limited Users, Month 2)
*Purpose: Add pre-departure context layer and validate Morning Brief concept.*

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Confirmation status per stop | 5.1 | Must | Core pre-departure value |
| Access notes per stop | 5.3 | Must | High-demand from early user interviews |
| Prior exception flag on stop | 5.4 | Should | Low effort, high trust signal |
| Morning Operations Brief (basic) | 1.1, 1.4 | Must | Unconfirmed counter + baseline |
| Vehicle alerts | 1.2 | Should | Fleet status integration |
| Confirmation checklist (mobile) | 5.2 | Should | Driver pre-route briefing |

*Exit criteria*: Beta users open Atlas before routes leave and use the brief without prompting.

---

### Milestone 1.3 — v1 Launch (Month 3)
*Purpose: Production-ready, paid customers, onboarding documented.*

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Reschedule trigger + customer notification | 2.3, 2.4 | Should | Closes the exception loop |
| Exception queue (dispatch view) | 2.5 | Should | Exception management surface |
| Fleet status board | 7.1 | Could | Quick-win for dispatch morning scan |
| Route status board (basic) | 7.2 | Should | Live route visibility |
| High-risk route flags | 1.3 | Could | Stretch goal; requires 30-day history |
| Onboarding flow (guided setup) | — | Must | Required for paid customers |
| Data export (basic CSV) | — | Must | Enterprise sales requirement |

*Exit criteria*: 5 signed contracts, all customers onboarded within 14 days, zero critical bugs in first 30 days.

---

## Phase 2 — Intelligence Layer (Q4 2026)

**Goal**: Turn collected data into decisions. Add executive buyer value. Grow to 20 customers.

**Theme**: From data collection to pattern recognition.

### Milestone 2.1 — Exception Analytics (Month 4–5)

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Exception trend view (chart) | 3.1 | Must | Core analytics surface |
| Exception filter matrix | 3.2 | Must | Makes trends actionable |
| Top exception locations | 3.3 | Should | Address-level pattern surfacing |
| Item category exception breakdown | 3.5 | Should | Retailer conversation prep |
| Partner-level exception breakdown | 3.4 | Should | David's weekly view |

*Exit criteria*: At least 3 dispatch leads identify a recurring exception pattern using Atlas data.

---

### Milestone 2.2 — Crew Performance Dashboard (Month 5–6)

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Individual crew FACR | 4.1 | Must | Core coaching metric |
| FACR trend chart per crew | 4.2 | Should | Trend context for coaching |
| Exception history per crew | 4.3 | Should | Evidence for performance conversations |
| Crew leaderboard | 4.4 | Could | Driver motivation feature |

*Exit criteria*: At least 5 documented coaching conversations initiated using Atlas FACR data.

---

### Milestone 2.3 — Partner Report (Month 6)

| Feature | Module | Priority | Notes |
|---------|--------|----------|-------|
| Per-partner summary view | 6.1 | Should | David's SLA defense tool |
| Exception attribution (carrier vs partner) | 6.2 | Should | Adds negotiating leverage |
| SLA scorecard with configurable targets | 6.3 | Could | Premium feature candidate |
| PDF/CSV export | 6.4 | Should | Minimum for VP adoption |

*Exit criteria*: At least 1 customer uses the partner report in a real retailer SLA review meeting.

---

## Phase 3 — Mobile & Scale (Q1 2027)

**Goal**: Upgrade the driver experience to native mobile. Expand to 50 customers. Open channel partnerships.

**Theme**: Move from web-mobile to native; add the features that make Atlas stickier.

### Milestone 3.1 — Native Mobile App (Month 7–9)

| Feature | Notes |
|---------|-------|
| iOS + Android native app (React Native) | Wraps and enhances web-mobile flows |
| Offline exception logging | Critical for areas with poor signal coverage |
| Push notifications (exception alerts, route updates) | Real-time driver communication |
| Driver self-view (FACR, rank, history) | Marcus's Job 3 — personal performance visibility |
| Biometric auth (Face ID / fingerprint) | Reduces friction for drivers on the go |

*Exit criteria*: 60%+ of active drivers using native app within 60 days of launch.

---

### Milestone 3.2 — Route Optimization Engine (Month 9–10)

| Feature | Notes |
|---------|-------|
| First-party route optimization (replaces third-party API) | Reduces COGS; improves data integration |
| Exception-aware routing (deprioritize high-risk stops at end of day) | Atlas-only intelligence feature |
| Crew-match optimization (match crew skills to delivery type) | Reduces failure rate on specialty items |

*Exit criteria*: Route optimization FACR lift measurable vs baseline (target: +2pp improvement on optimized routes).

---

### Milestone 3.3 — Multi-Warehouse Support (Month 10)

| Feature | Notes |
|---------|-------|
| Multiple depot/warehouse locations per carrier | Required for multi-market carriers (David's company) |
| Cross-warehouse crew and route visibility | David's executive dashboard |
| Market-level benchmarking | Compare FACR across Bay Area, LA Metro, DFW |

*Exit criteria*: At least 2 customers successfully managing 2+ warehouses in Atlas.

---

## Phase 4 — Platform & Moat (Q2 2027+)

**Goal**: Build the defensibility that makes Atlas hard to replace.

**Theme**: Network effects, data advantage, and expansion revenue.

### Initiatives (Not yet specced)

| Initiative | Strategic Rationale |
|-----------|---------------------|
| ML Exception Prediction | Predict which stops will fail before they leave the warehouse — requires 6+ months of data |
| TMS Integration Layer (API) | Reduce manual data entry; become the layer that sits on top of existing TMS |
| Customer-Facing Tracking Portal | White-label end-customer tracking and communication |
| Carrier Performance Benchmarking (Anonymized) | Network effect: carriers see how they compare to the industry |
| Retailer Dashboard (Read-Only) | Give retail partners (Ashley, Wayfair) direct visibility into their carrier's FACR — moat deepener |
| Self-Serve Onboarding | Reduce CAC by eliminating sales-assisted setup for SMB tier |

---

## Roadmap Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Exception logging adoption too low to build analytics | Medium | Make logging < 60s, reduce friction to minimum, train dispatchers not just drivers |
| Data model breaks when adding second carrier | Medium | Design multi-tenant schema from day 1 (not retrofitted) |
| Mobile web UX not good enough to retain drivers | High | Invest in mobile UX in Phase 1; don't wait for native app to solve driver experience |
| Phase 2 analytics features underused by VPs | Medium | Co-design with at least 2 VP-level users before building |
| Route optimization fails to improve FACR (table stakes, not differentiator) | Low | Position as efficiency feature, not FACR feature; FACR story is in the analytics layer |

---

## What We're Not Building (and When We'll Revisit)

| Feature | Not Building Because | Revisit When |
|---------|---------------------|--------------|
| AI/ML exception prediction | Need 6+ months of structured exception data first | Q4 2027 |
| Payroll / crew pay | Separate product surface; not operations intelligence | If customers consistently ask for it (3+ requests) |
| Hardware (IoT sensors, cameras) | Out of scope for software-first strategy | Never, unless strategic acquisition |
| Consumer-facing delivery tracking | Not the carrier's problem to solve directly | Phase 4, as a bolt-on white-label |
| Freight / parcel delivery support | Different economics, different buyer, different problem | If big-and-bulky market saturates |

---

## Roadmap Visualization

```
        MAY     JUN     JUL     AUG     SEP     OCT     NOV     DEC     JAN     FEB     MAR
2026    ──────────────────────────────────────────────────────────────
                │               │               │
        ALPHA ──┤    BETA ──────┤   LAUNCH ─────┤
                │               │               │
        Exception workflow      Morning Brief   Reschedule + Customer Notif
        Auth + Multi-tenant     Confirmation    Fleet + Route Status
        Data schema frozen      Access notes    Exception Queue
                                                5 paying customers ✓

2026                                    ─────────────────────────────────
                                                │               │
                                        ANALYTICS LAYER         │
                                                │       CREW DASHBOARD
                                        Exception trends        │
                                        Filter matrix           FACR per crew
                                        Partner breakdown       Exception history
                                                                Partner Report
                                                                20 customers ✓

2027    ──────────────────────────────
        │               │
MOBILE APP              ROUTE OPT
        │               │
iOS + Android   Multi-Warehouse
Push notifs     50 customers ✓
Offline logging
```
