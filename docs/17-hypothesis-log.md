# Hypothesis Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Purpose

Every product decision rests on assumptions. This log makes those assumptions explicit — stating them as testable hypotheses so we can track which ones have been validated, which have been invalidated, and which are still open. Unvalidated assumptions are risks; validated ones are confidence.

Format: **"We believe [assumption]. We'll know we're right if [evidence]. We'll know we're wrong if [counter-signal]."**

Status: `Untested` | `Testing` | `Validated` | `Invalidated` | `Partially Validated`

---

## H-001: The Problem Hypothesis

**Hypothesis**: Regional white-glove carriers are losing significant revenue to first-attempt delivery failures, and the root cause is a lack of structured data — not a workforce problem.

**Evidence that would validate**:
- ≥ 3 dispatch leads in interviews confirm exception rate > 15% and attribute it to information gaps, not driver performance
- They currently use no tool that aggregates exception reasons

**Counter-signal**: Carriers believe their exception rate is already at acceptable levels, or they attribute failures to workforce quality (not tooling).

**Status**: `Partially Validated`
**Notes**: Early conversations with logistics operators confirm the problem. Formal user interviews with target ICPs pending.

---

## H-002: The Morning Brief Hypothesis

**Hypothesis**: Dispatch leads will use a single-screen Morning Brief as their primary planning tool if it replaces information they currently gather from 3+ sources.

**Evidence that would validate**:
- ≥ 80% of dispatch users open the Morning Brief before 8am on workdays after 30 days of use
- Maria (or a Maria-equivalent) says "I check this before I check my TMS"

**Counter-signal**: Users open the brief once, find it incomplete or incorrect, and revert to their current workflow.

**Status**: `Untested`
**Test**: Alpha phase — watch first-week behavior with 3 dispatch leads.

---

## H-003: The Exception Logging Hypothesis

**Hypothesis**: Drivers will log exceptions in Atlas in under 60 seconds if the mobile UX is optimized for 3-tap completion with pre-set reason codes.

**Evidence that would validate**:
- Median time-to-log < 60 seconds in session data
- ≥ 90% exception capture rate (Atlas logs vs estimated actual failures)

**Counter-signal**: Median time > 3 minutes OR drivers call dispatch instead of logging, even after training.

**Status**: `Untested`
**Test**: Alpha phase — measure in first 2 weeks of real driver use.

---

## H-004: The Dispatch Champion Hypothesis

**Hypothesis**: If a dispatch lead (Maria) adopts Atlas and sees value, she will champion the purchase internally to the VP/GM (David) without requiring founder-led enterprise sales.

**Evidence that would validate**:
- ≥ 2 of first 5 customers where the deal was initiated by a dispatch lead, not the VP
- At least 1 case where Maria explicitly asked David to approve the contract

**Counter-signal**: All deals require VP-level outreach and Maria adoption has no influence on purchase decision.

**Status**: `Untested`
**Test**: Track deal source and champion role in CRM from day 1.

---

## H-005: The FACR Improvement Hypothesis

**Hypothesis**: Carriers who use Atlas for 90+ days will show a ≥ 5 percentage point improvement in FACR compared to their pre-Atlas baseline.

**Evidence that would validate**:
- Cohort analysis at Day 90 shows average FACR delta ≥ 5pp across first 5 customers
- At least 1 customer can attribute improvement to a specific pattern Atlas surfaced

**Counter-signal**: FACR is flat or improves only 1–2pp — within noise of normal variance.

**Status**: `Untested`
**Notes**: This is the most important hypothesis in the product. Everything else is in service of validating this.
**Test**: 90-day cohort reviews with all customers who have pre-Atlas baseline data.

---

## H-006: The Exception Analytics Usage Hypothesis

**Hypothesis**: Once dispatch leads have 30 days of exception data, they will use the analytics view at least weekly to identify patterns — without being prompted.

**Evidence that would validate**:
- Exception analytics session rate ≥ 1x/week per dispatch user after Day 30
- At least 3 users can name a specific pattern they found unprompted

**Counter-signal**: Exception analytics is opened once (out of curiosity) and then ignored. Users prefer to ask Maria verbally.

**Status**: `Untested`
**Test**: Feature usage tracking in analytics; follow-up interviews at Day 45.

---

## H-007: The WTP (Willingness to Pay) Hypothesis

**Hypothesis**: Regional carriers will pay $1,000–$1,500/month for Atlas, justified by the ROI story (FACR improvement saves multiples of the subscription cost).

**Evidence that would validate**:
- ≥ 5 customers signed at ≥ $1,000/month without significant price negotiation
- Customers can articulate the ROI unprompted: "this pays for itself if we prevent X failures/month"

**Counter-signal**: Multiple customers ask for pricing below $500/month, or compare Atlas to free tools (Onfleet free tier, spreadsheets).

**Status**: `Untested`
**Test**: Charge for beta access (even at $200/month nominal); observe pushback.

---

## H-008: The Data Moat Hypothesis

**Hypothesis**: After 6 months of use, the accumulated exception data in Atlas (address flags, FACR trends, partner scoring) makes Atlas significantly more valuable than a fresh competitor install, creating switching costs.

**Evidence that would validate**:
- Customers explicitly cite "our historical data" as a reason not to switch
- Average tenure > 24 months for customers past 6-month mark

**Counter-signal**: Customers say "we could export our data and move to [competitor] easily."

**Status**: `Untested`
**Notes**: This is a long-horizon hypothesis — won't be testable until Q1 2027 at earliest.

---

## H-009: The Retail Partner Leverage Hypothesis

**Hypothesis**: Carriers will value the partner exception attribution feature enough that it becomes a retention driver — the ability to show "that failure was your fault, not ours" in retailer conversations.

**Evidence that would validate**:
- At least 3 customers use the partner exception attribution in a real SLA meeting
- ≥ 1 customer attributes contract retention (with a retailer) to Atlas-provided data

**Counter-signal**: Carriers are reluctant to show retailers this data (fear of liability, relationship sensitivity).

**Status**: `Untested`
**Test**: Include partner attribution demo in sales conversation; gauge reaction.

---

## H-010: The Multi-Warehouse Expansion Hypothesis

**Hypothesis**: Carriers who start with Atlas for one warehouse will expand to additional warehouses/markets, increasing ACV.

**Evidence that would validate**:
- ≥ 1 customer upgrade to multi-warehouse (Scale tier) within 12 months of onboarding
- Expansion ARR accounts for ≥ 20% of total ARR growth in Q2 2027

**Counter-signal**: Customers treat Atlas as warehouse-specific; no appetite to expand beyond initial scope.

**Status**: `Untested`
**Test**: Include expansion conversation in 90-day QBR template.

---

## Hypothesis Priority

| Priority | Hypothesis | Why |
|----------|-----------|-----|
| P0 | H-003 (Exception logging adoption) | Foundational — nothing works without this |
| P0 | H-001 (Problem hypothesis) | Should have been validated in discovery; confirm in alpha |
| P0 | H-005 (FACR improvement) | The core promise — must be demonstrated by Q4 |
| P1 | H-002 (Morning Brief usage) | Highest-leverage daily feature |
| P1 | H-007 (WTP) | Revenue validation |
| P2 | H-004 (Dispatch champion) | Sales motion validation |
| P2 | H-006 (Analytics usage) | Phase 2 feature validation |
| P3 | H-008 (Data moat) | Long-horizon defensibility |
| P3 | H-009 (Retailer leverage) | Phase 2 value prop extension |
| P3 | H-010 (Expansion) | Revenue model validation |
