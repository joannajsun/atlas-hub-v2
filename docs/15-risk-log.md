# Risk Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Framework

Risks are tracked across four categories: **Product**, **Market**, **Execution**, and **Business**. Each risk is rated on:

- **Likelihood**: 1 (unlikely) → 5 (near-certain)
- **Impact**: 1 (minor) → 5 (existential)
- **Risk Score**: Likelihood × Impact
- **Status**: Open | Mitigated | Closed | Realized

Risks with score ≥ 12 are flagged as **High Priority**.

---

## Product Risks

### P1 — Exception logging adoption is too low to power analytics
**Likelihood**: 4 | **Impact**: 5 | **Score**: 20 | **Status**: Open

**Description**: If drivers don't log exceptions consistently (< 80% capture rate), the analytics layer has garbage-in-garbage-out data. Maria and David won't trust the FACR numbers. The core value proposition collapses.

**Root causes**: Mobile UX is too slow, exception logging is seen as extra work, dispatch leads don't enforce it, drivers work in low-signal areas.

**Mitigation**:
- Design logging flow to complete in ≤ 3 taps / ≤ 60 seconds
- Make exception non-submission visible to dispatch (missing log = flagged stop)
- Offer offline logging with sync-on-reconnect
- Track exception log completeness as a primary health metric; CSM alerts at < 80%
- Train dispatch leads to hold drivers accountable, not just use the tool themselves

---

### P2 — Data model doesn't scale to multiple warehouses / markets
**Likelihood**: 3 | **Impact**: 4 | **Score**: 12 | **Status**: Open

**Description**: If the v1 data model is scoped to a single warehouse and doesn't account for multi-tenancy or multi-location from the start, a schema migration will be required in Phase 3 — creating data integrity risk and engineering debt.

**Mitigation**:
- Schema review and freeze before first customer onboarding
- Multi-tenant isolation from day 1 (carrier_id on every record)
- Warehouse_id field present even if single-warehouse in v1

---

### P3 — Morning Brief shows stale or incorrect data, eroding trust
**Likelihood**: 3 | **Impact**: 4 | **Score**: 12 | **Status**: Open

**Description**: If the Morning Brief shows a vehicle as "available" when it's actually in maintenance, or an exception rate from yesterday, Maria stops trusting it. One bad data day can set adoption back weeks.

**Mitigation**:
- Show data freshness timestamp on the Brief
- Automated alert if data source hasn't updated in > 30 minutes
- Manual refresh button as escape hatch
- Data quality health metric tracked (stale data rate < 5%)

---

### P4 — Mobile web UX is not good enough to retain drivers
**Likelihood**: 4 | **Impact**: 3 | **Score**: 12 | **Status**: Open

**Description**: Marcus and drivers are the primary exception logging source. If the mobile web experience is slow, hard to use, or unreliable on 3G, drivers fall back to calling dispatch — breaking the data collection loop.

**Mitigation**:
- Mobile-first design from day 1 (not responsive web as afterthought)
- Test on real devices in real conditions (3G, gloves, outdoor light)
- Exception flow completable with one hand
- Native app on the Phase 3 roadmap; don't let mobile web debt accumulate

---

### P5 — FACR calculation is disputed by a customer
**Likelihood**: 2 | **Impact**: 4 | **Score**: 8 | **Status**: Open

**Description**: If Atlas shows 87% FACR and the customer's TMS shows 91%, trust breaks. The customer will default to the number they already have.

**Mitigation**:
- Document the exact FACR calculation in the product and in onboarding materials
- Clarify denominator: scheduled stops, not attempted stops
- Reconciliation check with 2–3 customers in first 90 days
- Make data export available so customers can verify the math

---

## Market Risks

### M1 — DispatchTrack or Onfleet aggressively adds exception analytics
**Likelihood**: 2 | **Impact**: 4 | **Score**: 8 | **Status**: Open

**Description**: Our primary feature advantage (exception intelligence) could be copied by a well-resourced competitor. DispatchTrack has the vertical focus; Onfleet has the UX maturity.

**Mitigation**:
- Move fast on data collection — the moat is in the accumulated data, not just the feature
- Lock in long-term contracts with early customers before the category is validated publicly
- Build features that require data history to be valuable (exception recurrence, FACR trends) — can't be replicated overnight

---

### M2 — Sales cycle is longer than expected (> 4 months average)
**Likelihood**: 3 | **Impact**: 3 | **Score**: 9 | **Status**: Open

**Description**: Regional carriers are relationship-driven buyers. The economic buyer (David) may need multiple quarters of internal advocacy before signing. This stretches runway and delays ARR growth.

**Mitigation**:
- Start sales conversations in parallel with product development (Week 10+)
- Use alpha/beta users as internal champions — they have the relationship with David
- Offer monthly contracts initially to reduce commitment barrier; convert to annual
- Build a case study with first customer to accelerate second and third

---

### M3 — ICP is too narrow — not enough carriers in the beachhead
**Likelihood**: 2 | **Impact**: 4 | **Score**: 8 | **Status**: Open

**Description**: The white-glove / regional carrier ICP is specific. If there are fewer than 500 addressable carriers in the US fitting this profile, the SAM may not support a standalone business.

**Mitigation**:
- Market sizing analysis already done (SAM: ~$420M, ~1,120 addressable carriers at 40% digitization rate) — see `05-market-sizing.md`
- If beachhead is too narrow, adjacent verticals (medical equipment delivery, exercise equipment installation) follow the same exception economics
- Track ICP conversion rate early; if < 5% on cold outbound, revisit ICP definition

---

### M4 — Retail partners (Ashley, Wayfair) build their own carrier analytics tool
**Likelihood**: 1 | **Impact**: 4 | **Score**: 4 | **Status**: Open

**Description**: A major retailer could invest in a proprietary carrier performance platform that they push down to their carrier network, bypassing third-party tools.

**Mitigation**:
- Carriers would still want a tool they control and that works across all their retail partners, not just one
- Position Atlas as carrier-owned intelligence — not a retailer surveillance tool
- Build retailer portal as a future feature (carriers share data with retailers on their own terms)

---

## Execution Risks

### E1 — Founder-only engineering creates a single point of failure
**Likelihood**: 4 | **Impact**: 4 | **Score**: 16 | **Status**: Open

**Description**: If engineering is done by a single person, any illness, burnout, or distraction halts the roadmap. Phase 2 and 3 targets are at risk.

**Mitigation**:
- Document architecture decisions and data model from the start
- Keep the system as simple as possible in v1 — don't build complexity that requires a team to maintain
- Plan first engineering hire by Q4 2026 if revenue supports it
- Don't commit to customer SLAs that can't be met with one engineer

---

### E2 — Onboarding takes longer than 14 days, delaying time-to-value
**Likelihood**: 3 | **Impact**: 3 | **Score**: 9 | **Status**: Open

**Description**: If getting a new carrier set up in Atlas requires weeks of back-and-forth on route imports, driver accounts, and TMS integration, customers get frustrated before they see value.

**Mitigation**:
- v1 onboarding is manual-data-entry first (no TMS integration required)
- Write onboarding guide that a non-technical dispatch manager can follow
- Target: carrier is logging exceptions within 3 days of account creation
- Track TTV (time-to-value) as a primary metric from first customer

---

### E3 — v1 scope creep delays launch beyond Q3 2026
**Likelihood**: 3 | **Impact**: 3 | **Score**: 9 | **Status**: Open

**Description**: The MoSCoW framework defines Must-Have features — but there will be pressure to add "just one more thing" before launch. Scope creep delays revenue and extends risk.

**Mitigation**:
- Maintain a hard Must-Have list; any addition to v1 scope requires dropping something else
- Set a launch date and work backwards — don't let the date slip for Should-Have features
- "Ship and iterate" mindset — beta users have already validated the core; don't over-polish before launch

---

## Business Risks

### B1 — First 5 customers are too concentrated (one churned = 20% revenue loss)
**Likelihood**: 3 | **Impact**: 3 | **Score**: 9 | **Status**: Open

**Description**: At 5 customers, losing one is a 20% ARR hit. Losing two in the same quarter is existential.

**Mitigation**:
- Deep relationships with every early customer (founder-level attention)
- 30-day and 90-day check-ins formalized
- NPS at Day 30 — any score < 30 is an early warning
- Don't count on customer revenue to be stable until 15+ customers

---

### B2 — Pricing too low to be sustainable; carriers don't perceive value at higher price
**Likelihood**: 2 | **Impact**: 4 | **Score**: 8 | **Status**: Open

**Description**: If $800/month is too low to cover costs + growth, and carriers resist paying $1,400+, the business model is compromised.

**Mitigation**:
- ROI calculation is central to every demo: at 200 deliveries/day and 15% exception rate, Atlas at $1,400/month pays for itself in < 1 week of saved re-attempts
- Charge from day 1 (even in beta at nominal price) to validate WTP
- Enterprise tier pricing ($2,000+) tested with first multi-market customer

---

### B3 — Regulatory or data privacy requirements create unexpected compliance burden
**Likelihood**: 2 | **Impact**: 3 | **Score**: 6 | **Status**: Open

**Description**: Storing driver performance data and delivery exception records may trigger CCPA, GDPR (if any EU expansion), or local labor law requirements (some states have rules about driver monitoring).

**Mitigation**:
- Legal review of data retention policy and PII handling before first customer
- Driver performance data (FACR, exception history) is owned by carrier, not Atlas
- Anonymization option for crew leaderboard (driver name hidden)
- DPA (Data Processing Agreement) template ready for enterprise customers

---

## Risk Summary

| Category | High Priority (≥12) | Medium (6–11) | Low (<6) |
|----------|-------------------|--------------|---------|
| Product | P1, P2, P3, P4 | P5 | — |
| Market | — | M2, M3 | M1, M4 |
| Execution | E1 | E2, E3 | — |
| Business | — | B1, B2 | B3 |

**Most critical risk**: P1 (exception logging adoption). If drivers don't log, the entire intelligence layer is inert. This is the first thing to validate in alpha.

**Second most critical**: E1 (single-point-of-failure engineering). Mitigated by keeping v1 architecture simple and documenting everything.
