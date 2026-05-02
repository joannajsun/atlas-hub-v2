# OKRs — Quarterly Objectives & Key Results
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Framework

OKRs operate on a quarterly cadence. Objectives are qualitative aspirations; Key Results are quantitative and falsifiable. A KR is not a task — it measures an outcome, not an activity.

**Grading scale**: 0.0 (not started) → 1.0 (fully achieved). Target grade: 0.7–0.8. A 1.0 means the goal was too easy.

Atlas Hub 2.0 operates on a pre-launch → launch → post-launch arc. OKRs are structured accordingly.

---

## Q3 2026 — Foundation & Launch Readiness

**Theme**: Build the core product and get it into the hands of the first paying customers.

---

### Objective 1: Ship a v1 product that Maria would choose over her current workflow

*This is the product-market fit bar. If a real dispatch lead wouldn't switch, we haven't shipped a v1 worth talking about.*

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 1.1 | At least 3 real dispatch leads complete a full week of exception logging in Atlas without falling back to their TMS or spreadsheet | 3 users | User interview + session data |
| KR 1.2 | Morning Operations Brief loads in under 2 seconds for 95th percentile of sessions | p95 < 2s | Production performance monitoring |
| KR 1.3 | Exception logging flow completable in under 60 seconds (median time to submit) | Median < 60s | Session recording / timing |
| KR 1.4 | 0 critical bugs (data loss, incorrect FACR calculation, broken notifications) at launch | 0 critical bugs | Bug tracker |

---

### Objective 2: Acquire the first 5 paying customers

*Revenue validates that the problem is real and that our solution is worth paying for. 5 customers is enough to stress-test onboarding and surface edge cases.*

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 2.1 | 5 signed contracts at minimum $1,000/month by end of Q3 | 5 contracts | CRM / contracts |
| KR 2.2 | All 5 customers onboarded and logging exceptions within 14 days of contract signature | 100% onboarded ≤ 14 days | Onboarding tracker |
| KR 2.3 | First customer generates a FACR improvement of ≥ 3 percentage points within 60 days of go-live | ≥ 3pp improvement | Atlas FACR data |
| KR 2.4 | NPS ≥ 50 from initial user cohort (dispatchers only) after 30 days of use | NPS ≥ 50 | In-app survey |

---

### Objective 3: Establish the data foundation for the intelligence layer

*The analytics features only get smarter with more data. We need to design for data quality from day one, not retrofit it later.*

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 3.1 | 100% of logged exceptions include a reason code (no "other" without notes) | 100% with reason code | DB query |
| KR 3.2 | Average exception data latency (logged by driver → visible on dashboard) < 60 seconds | < 60s p95 | System telemetry |
| KR 3.3 | Zero personally identifiable customer data stored outside of the designated secure fields | 0 PII violations | Security audit |
| KR 3.4 | Data schema reviewed and frozen before first customer go-live (no breaking migrations post-launch) | Schema frozen | Engineering milestone |

---

## Q4 2026 — Growth & Retention

**Theme**: Prove the product works, build the analytics intelligence layer, and expand to 20 customers.

---

### Objective 1: Demonstrate measurable FACR improvement across the customer base

*This is the ROI proof point. If we can't show it in data, we can't grow through word of mouth or case studies.*

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 1.1 | Customers who have used Atlas for 90+ days show average FACR improvement of ≥ 5 percentage points vs pre-Atlas baseline | ≥ 5pp | Atlas FACR data vs customer-reported baseline |
| KR 1.2 | At least 2 customers can point to a specific exception pattern Atlas surfaced that they subsequently fixed | 2 customers | Customer interviews |
| KR 1.3 | Average exception re-attempt rate (same address, same reason, within 30 days) decreases by 20% across the customer base | -20% re-attempt rate | Atlas data |

---

### Objective 2: Grow to 20 active paying customers

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 2.1 | 20 active paying customers by end of Q4 | 20 customers | CRM |
| KR 2.2 | Monthly churn ≤ 2% (max 1 churned customer in Q4) | ≤ 2%/month | CRM |
| KR 2.3 | ARR ≥ $240K by December 31 | $240K ARR | Finance |
| KR 2.4 | At least 1 customer expands their contract (adds zones, seats, or modules) | 1 expansion | CRM |

---

### Objective 3: Ship the analytics intelligence layer

*Analytics is the moat. The longer a carrier uses Atlas, the smarter the platform gets. Q4 is when that story starts.*

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 3.1 | Exception trend view (Module 3.1–3.3) shipped and used by 80%+ of dispatch users in their first week | 80% adoption | Feature usage analytics |
| KR 3.2 | Partner-level exception breakdown (Module 3.4) reviewed by at least 3 VP/GM-level users | 3 VP users | Session data |
| KR 3.3 | Crew FACR dashboard (Module 4) used in at least 5 documented coaching conversations across the customer base | 5 conversations | Customer interviews |

---

## Q1 2027 — Scale & Defensibility

**Theme**: Build the moat. Add features that are hard to replicate without Atlas's data network.

---

### Objective 1: Make the exception intelligence layer defensible

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 1.1 | 500,000+ exception records in the system across all customers | 500K records | DB count |
| KR 1.2 | Exception pattern algorithm surfaced at least 10 recurring address-level issues that customers verified as accurate | 10 verified patterns | Customer validation |
| KR 1.3 | Retail partner scorecard (Module 6) used in at least 3 real SLA review meetings | 3 meetings | Customer interview |

---

### Objective 2: Grow to 50 customers and $600K ARR

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 2.1 | 50 active paying customers by March 31, 2027 | 50 customers | CRM |
| KR 2.2 | ARR ≥ $600K | $600K ARR | Finance |
| KR 2.3 | Net Revenue Retention ≥ 110% (existing customers expand enough to offset churn) | NRR ≥ 110% | Finance |
| KR 2.4 | First channel partner deal signed (furniture carrier association, 3PL network, or retail partner referral) | 1 channel deal | CRM |

---

### Objective 3: Launch mobile app v1 (iOS + Android)

| # | Key Result | Target | Measurement |
|---|-----------|--------|-------------|
| KR 3.1 | Native mobile app launched in App Store and Google Play | Shipped | App store listing |
| KR 3.2 | Driver exception logging time decreases by 20% on native app vs web mobile | -20% | A/B session timing |
| KR 3.3 | 60%+ of active drivers using native app within 60 days of launch | 60% | MAU data |

---

## OKR Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
|-------------|--------------|
| "Ship feature X" as a KR | That's a task, not an outcome. What changes when X ships? |
| "Increase FACR" without a baseline | Unmeasurable without knowing where you started |
| KRs with no data source | If you can't name how you'll measure it today, you can't grade it |
| 1.0 every quarter | Either goals are too easy or grading is dishonest |
| "100% customer satisfaction" | Vanity metric. NPS, churn, and expansion revenue are real |

---

## Notes on FACR as a KR

FACR is the North Star metric, but using it directly as a Q3 KR is premature — we don't have baseline data from customers yet, and we can't credibly claim credit for FACR movement in the first quarter of use. Q3 KRs focus on proxy metrics (exception logging adoption, user behavior, time-to-log) that are leading indicators. FACR as a direct KR starts in Q4 once we have baseline data and 90+ days of use.
