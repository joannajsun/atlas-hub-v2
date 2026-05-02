# Success Metrics
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## What "working" looks like

Success is not features shipped or users onboarded. Success is carriers improving their FACR using data Atlas surfaced.

---

## Product Impact Metrics

**FACR improvement (90-day cohort)**
Customers at 90 days of use vs. their pre-Atlas TMS baseline. Target: ≥ 5pp improvement. Below 2pp is a red flag — something in the workflow (logging, analytics adoption, or data quality) is broken.

**Exception recurrence rate**
Same address + same reason code within 30 days. Target ≤ 5%. High recurrence means Maria is logging exceptions but not using analytics to fix root causes. The data is being collected but not converted into decisions.

**Pre-departure confirmation rate**
Stops with confirmed customer status before first truck leaves. Target ≥ 80%. This is the leading indicator — unconfirmed stops are the strongest predictor of "customer not home" failures.

---

## Product Health Metrics

| Metric | Target | Why it matters |
|--------|--------|---------------|
| Morning Brief engagement (before 8am) | ≥ 80% of dispatch users on workdays | If Maria isn't using the brief, the highest-leverage feature is idle |
| Exception log completeness | ≥ 95% have a reason code | Incomplete logs poison the analytics layer |
| Time-to-log exception (median) | ≤ 5 minutes | Leading indicator of mobile UX quality |
| Data latency (logged → dashboard) | < 60 seconds p95 | If Maria sees yesterday's data, she stops trusting the Brief |

---

## Business Metrics

| Metric | Target |
|--------|--------|
| ARR | $60K (5 customers, Q3) → $240K (20 customers, Q4) → $600K (50 customers, Q1 2027) |
| Monthly churn | ≤ 2% |
| NRR | ≥ 110% |
| Time-to-value (contract → first FACR insight) | ≤ 14 days |
| NPS (dispatch leads, Day 30) | ≥ 50 |

---

## Red flags

Any of these triggers an immediate review:
- FACR not improved after 120 days for any customer
- Exception log completeness drops below 80% for a customer
- Monthly churn > 2% for two consecutive months
- Morning Brief engagement < 50% at 30 days post-onboarding

---

## What I'm not tracking

DAU, time-on-site, and generic feature adoption rates. A dispatcher using Atlas for 3 minutes/day with 5pp FACR improvement is a success. One using it for 2 hours/day with no movement is a problem.
