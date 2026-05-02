# Success Metrics Framework
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Purpose

This document defines how we know Atlas Hub 2.0 is working — across four dimensions: product impact, business health, user experience, and operational quality. It is the source of truth for what "success" means at each stage of the product lifecycle.

The North Star and KPI tree live in `09-north-star-and-kpis.md`. This document focuses on thresholds, measurement methods, and what actions to take when metrics are off.

---

## Metric Categories

| Category | What It Measures | Primary Audience |
|----------|-----------------|-----------------|
| Product Impact | Is Atlas improving delivery outcomes? | Product, Customer Success |
| Business Health | Is Atlas a sustainable business? | Leadership, Investors |
| User Experience | Are users actually using it effectively? | Product, Design |
| Data Quality | Is the underlying data trustworthy? | Engineering, Product |

---

## Category 1 — Product Impact

These are the metrics that prove Atlas works. If these aren't moving, nothing else matters.

### 1.1 FACR Improvement (Customer Cohort)

**Definition**: Change in FACR from customer's pre-Atlas baseline to 90-day post-onboarding average.

**How to measure**: Ask customers for their TMS-reported FACR for the 90 days before Atlas. Compare to Atlas-reported FACR at 90 days of use.

| Threshold | Status | Action |
|-----------|--------|--------|
| ≥ 5pp improvement | Green | Document as case study |
| 2–4pp improvement | Yellow | Investigate — is logging complete? Are analytics being used? |
| < 2pp improvement | Red | CSM investigation + root cause analysis |
| No improvement after 120 days | Critical | Executive review; consider churn risk |

**Measurement frequency**: 90-day cohort review, then quarterly.

---

### 1.2 Exception Recurrence Rate

**Definition**: % of exceptions where the same address + same reason code appear again within 30 days.

**Target**: ≤ 5%

| Threshold | Status | Action |
|-----------|--------|--------|
| ≤ 5% | Green | — |
| 6–10% | Yellow | Audit whether exception analytics are being reviewed |
| > 10% | Red | Pattern recognition is not being acted on; CSM investigation |

**Why this matters**: High recurrence = Maria is logging exceptions but not using the analytics to fix root causes. The data is being collected but not converted into decisions.

**Measurement frequency**: Monthly, per customer.

---

### 1.3 Pre-Departure Confirmation Rate

**Definition**: % of stops with confirmed customer status before first truck departure.

**Target**: ≥ 80%

| Threshold | Status | Action |
|-----------|--------|--------|
| ≥ 80% | Green | — |
| 60–79% | Yellow | Training follow-up with dispatch team |
| < 60% | Red | Workflow audit — is confirmation step too friction-heavy? |

**Measurement frequency**: Daily per customer; weekly aggregate.

---

### 1.4 Exception Attribution Shift

**Definition**: Over time, what % of exceptions are shifting from "unknown" to having a structured reason code?

**Target**: ≥ 95% of exceptions have a reason code within 30 days of customer go-live.

**Why this matters**: If drivers are logging exceptions as "other" without notes, the data is polluted. Attribution shift measures data quality improvement over time.

---

## Category 2 — Business Health

### 2.1 ARR (Annual Recurring Revenue)

| Milestone | Target | Date |
|-----------|--------|------|
| First paid customer | $12K ARR | Q3 2026 |
| 5 customers | $60K ARR | Q3 2026 |
| 20 customers | $240K ARR | Q4 2026 |
| 50 customers | $600K ARR | Q1 2027 |
| 100 customers | $1.5M ARR | Q3 2027 |

**Warning signal**: If ARR is more than 30% below target at any milestone, trigger GTM strategy review.

---

### 2.2 Monthly Churn Rate

**Target**: ≤ 2% monthly (equivalent to ~22% annual, acceptable for early stage)
**Aspirational**: ≤ 1% monthly (equivalent to ~12% annual)

| Threshold | Status | Action |
|-----------|--------|--------|
| ≤ 1% | Green | — |
| 1–2% | Yellow | Exit interview all churned accounts; look for patterns |
| > 2% | Red | Pause growth spend; investigate retention before acquiring more |

---

### 2.3 Net Revenue Retention (NRR)

**Target**: ≥ 110%

NRR above 100% means expansions outpace churn — the business grows even without new customers.

**Leading signal for NRR**: Are any customers adding trucks, warehouses, or users to their contract?

---

### 2.4 CAC (Customer Acquisition Cost)

**Target**: < $3,000 per customer

Early-stage CAC will be high (founder time is expensive). The target is to bring this down as channel partnerships and referrals take over from direct outbound.

**CAC payback period target**: < 18 months (at $1,200/month average, $3,000 CAC is 2.5 months — well within target).

---

### 2.5 Time-to-Value (TTV)

**Definition**: Days from contract signed to first FACR insight surfaced in Atlas.

**Target**: ≤ 14 days

| Threshold | Status | Action |
|-----------|--------|--------|
| ≤ 7 days | Green | Excellent onboarding velocity |
| 8–14 days | Yellow | Normal — monitor |
| 15–30 days | Red | Onboarding friction; audit the setup flow |
| > 30 days | Critical | Account at risk; CSM escalation |

---

## Category 3 — User Experience

### 3.1 Morning Brief Engagement Rate

**Definition**: % of dispatch user sessions that include a Morning Brief view before 8am on workdays.

**Target**: ≥ 80%

**Why it's a leading indicator**: If Maria isn't using the Brief, the highest-leverage feature in the product is idle. Low engagement predicts low FACR improvement.

---

### 3.2 Exception Log Submission Rate

**Definition**: % of delivery failures that result in an exception log in Atlas within 2 hours.

**Target**: ≥ 90%

This is the data quality driver. Every unlogged exception is a gap in the analytics layer.

---

### 3.3 Time-to-Log Exception (Median)

**Target**: ≤ 5 minutes (driver mobile)
**Aspirational**: ≤ 2 minutes

Any increase in this metric is a mobile UX signal — something in the logging flow is too slow or too many taps.

---

### 3.4 NPS by Persona

| Persona | Target NPS | Measurement Timing |
|---------|-----------|-------------------|
| Maria (Dispatch Lead) | ≥ 50 | 30 days post-onboarding, then quarterly |
| David (VP of Ops) | ≥ 40 | 90 days post-onboarding, then quarterly |
| Marcus (Crew Lead) | ≥ 35 | 60 days post-onboarding |

NPS < 30 for any persona triggers a user research sprint.

---

### 3.5 Feature Adoption Funnel

Tracks whether key features get used after being released:

| Feature | Target Adoption (% of eligible users, 30 days post-launch) |
|---------|-------------------------------------------------------------|
| Morning Brief | 85% of dispatch users |
| Exception Logging | 90% of active drivers |
| Exception Trend View | 70% of dispatch users |
| Crew FACR Dashboard | 60% of dispatch users |
| Partner Report | 50% of VP/GM users |
| Self-View (Marcus) | 50% of active drivers |

Feature adoption < 30% triggers a product investigation: Is it discoverable? Is it useful? Was the problem real?

---

## Category 4 — Data Quality

Data quality is a silent product killer. Analytics built on incomplete or incorrect data erode trust, and users stop relying on the platform.

### 4.1 Exception Log Completeness

**Definition**: % of exception records that have: reason code + at least 1 supporting field (notes or photo).

**Target**: ≥ 95%

---

### 4.2 FACR Calculation Accuracy

**Definition**: Does Atlas-reported FACR match manual count from TMS for the same period?

**Acceptable variance**: ≤ 1 percentage point

**How to verify**: Quarterly reconciliation with 2–3 customers who are willing to cross-check their TMS data.

---

### 4.3 Data Latency

**Definition**: Time from exception logged by driver to exception visible on dispatch dashboard.

**Target**: < 60 seconds (p95)

---

### 4.4 Stale Data Rate

**Definition**: % of stops in the Morning Brief that have not been updated in the last 12 hours.

**Target**: < 5%

High stale data rate means the integration with TMS or manual data entry is lagging — and the Brief is showing yesterday's picture.

---

## Metric Review Cadence

| Frequency | Metrics Reviewed | Owner |
|-----------|-----------------|-------|
| Daily (automated) | Exception log completeness, data latency | Engineering |
| Weekly (team) | Morning Brief engagement, time-to-log, pre-departure confirmation rate | Product |
| Monthly | FACR cohort improvement, churn, NRR, feature adoption | Product + CS |
| Quarterly | All OKR KRs, NPS, ARR milestone check | Leadership |

---

## Red Flag Triggers (Escalation Criteria)

Any of the following triggers an immediate cross-functional review:

| Red Flag | Escalation |
|----------|-----------|
| FACR not improved after 120 days for any customer | Product + CS joint review |
| Monthly churn > 2% for two consecutive months | GTM strategy review |
| Exception log completeness drops below 80% for a customer | CSM engagement + UX review |
| Morning Brief engagement < 50% for a customer 30 days post-onboarding | Check-in call; investigate friction |
| Data latency > 5 minutes (p95) | Engineering incident |
| NPS drops below 30 for any persona across the customer base | User research sprint |
