# North Star Metric & KPI Tree
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## North Star Metric

**First-Attempt Completion Rate (FACR)**

> The percentage of scheduled delivery stops completed successfully on the first attempt.

```
FACR = (Completed First Attempt) / (Total Scheduled Stops) × 100
```

### Why FACR

FACR is the single number that tells you whether the product is working:

- It directly measures the core problem (failed first-attempt deliveries)
- It's meaningful to every persona: Maria tracks it daily, David defends it to retailers, Marcus takes personal pride in it
- It has a direct dollar value (see Problem Statement: $200–500 per failure)
- It's hard to game — improving FACR requires actually improving operations
- It creates a compounding data advantage: the more carriers log exceptions, the better the pattern detection

**What FACR is not**: a vanity metric, an easy-to-move number, or something Atlas can inflate by logging exceptions incorrectly. Real FACR improvement requires real delivery improvement.

### Target Benchmarks

| Benchmark | FACR |
|-----------|------|
| Industry average (white-glove delivery) | ~82–85% |
| Top-quartile regional carrier (pre-Atlas) | ~88–91% |
| Atlas customer target (90 days post-onboarding) | ≥ 88% |
| Atlas customer target (12 months post-onboarding) | ≥ 92% |
| Aspirational ceiling | 95%+ |

---

## KPI Tree

The KPI tree breaks FACR into its drivers and supporting metrics. Each branch answers: "What moves FACR, and how do we know it's moving in the right direction?"

```
NORTH STAR
└── FACR (First-Attempt Completion Rate)
    │
    ├── INPUT METRICS (leading indicators — affect FACR)
    │   ├── Pre-Departure Confirmation Rate
    │   ├── Exception Recurrence Rate (same address, same reason, 30d)
    │   └── Morning Brief Engagement Rate
    │
    ├── OUTPUT METRICS (lagging indicators — confirm FACR is improving)
    │   ├── Exception Rate (exceptions / total stops)
    │   ├── Reschedule Rate
    │   └── Retailer SLA Compliance Rate
    │
    └── HEALTH METRICS (product is being used correctly)
        ├── Exception Log Completeness
        ├── Time-to-Log Exception
        └── Crew FACR Variance
```

---

## Metric Definitions

### Input Metrics (Leading Indicators)

**Pre-Departure Confirmation Rate**
```
= Stops with confirmed customer status before truck departure / Total stops scheduled for departure
```
- Target: ≥ 80% of stops confirmed before first truck leaves
- Why it matters: Unconfirmed stops are the single strongest predictor of "customer not home" failures
- Frequency: Daily (per route, per carrier)

---

**Exception Recurrence Rate**
```
= Exceptions where same address + same reason code recurred within 30 days / Total exceptions
```
- Target: ≤ 5% recurrence rate
- Why it matters: High recurrence = patterns are not being acted on. Low recurrence = analytics layer is working.
- Frequency: Monthly rolling

---

**Morning Brief Engagement Rate**
```
= Sessions that open Morning Operations Brief before 8am / Total dispatch user sessions on workdays
```
- Target: ≥ 80% of dispatch users engage with Morning Brief on workdays
- Why it matters: If Maria isn't using the brief, the most high-leverage feature isn't doing its job
- Frequency: Weekly

---

### Output Metrics (Lagging Indicators)

**Exception Rate**
```
= Total exceptions logged / Total stops completed × 100
```
- Target: ≤ 10% (industry average is 15–25%)
- Why it matters: Direct inverse of FACR — lower exception rate = higher FACR
- Frequency: Daily, Weekly (trend)

---

**Reschedule Rate**
```
= Stops rescheduled (not completed on original date) / Total stops scheduled × 100
```
- Target: ≤ 8%
- Why it matters: Reschedules are the cost center — crew time, truck fuel, customer service
- Frequency: Weekly

---

**Retailer SLA Compliance Rate**
```
= Stops meeting retailer-defined SLA window / Total stops for that retailer × 100
```
- Target: ≥ 95% per carrier-retailer contract
- Why it matters: Carrier-retailer relationships depend on this number; losing a retail partner is catastrophic
- Frequency: Monthly (per retailer)

---

### Product Health Metrics

**Exception Log Completeness**
```
= Exceptions with reason code + notes / Total exceptions logged × 100
```
- Target: ≥ 95% completeness
- Why it matters: Incomplete exception logs poison the analytics layer — GIGO
- Frequency: Weekly

---

**Time-to-Log Exception (Median)**
```
= Median time from "delivery failed" event to exception submitted in Atlas
```
- Target: ≤ 5 minutes
- Why it matters: Faster logging = more accurate data; also validates mobile UX
- Frequency: Weekly

---

**Crew FACR Variance**
```
= Standard deviation of individual crew member FACR scores within a carrier
```
- Target: < 8 percentage points standard deviation
- Why it matters: High variance suggests training or routing issues; low variance means performance is consistent
- Frequency: Monthly

---

## Business Metrics (Separate from Product KPIs)

These measure Atlas's health as a business, not product impact. They belong in the OKR document but are listed here for completeness.

| Metric | Definition | Target |
|--------|-----------|--------|
| ARR | Annual Recurring Revenue | $240K (Q4 2026), $600K (Q1 2027) |
| MRR Growth | Month-over-month MRR increase | ≥ 15%/month (early growth phase) |
| Churn Rate | Customers canceling per month | ≤ 2% monthly |
| NRR | Net Revenue Retention | ≥ 110% |
| CAC | Cost to Acquire Customer | < $3,000 (target LTV/CAC ≥ 4:1) |
| LTV | Lifetime Value | ~$50K+ at $1,500/month × 36-month avg tenure |
| Activation Rate | Customers logging exceptions within 7 days of signup | ≥ 80% |
| Time-to-Value | Days from signup to first FACR insight surfaced | ≤ 14 days |

---

## KPI Hierarchy by Persona

Different users care about different metrics:

| Persona | Primary KPI | Secondary KPI | Why |
|---------|------------|--------------|-----|
| Maria (Dispatch Lead) | Daily FACR | Exception Rate (today vs avg) | She needs to know if today is going well |
| David (VP of Ops) | Monthly FACR by market | Retailer SLA Compliance Rate | He owns the numbers for partner conversations |
| Marcus (Crew Lead) | His personal FACR | Rank vs team average | Pride and accountability motivator |
| Atlas (internal) | North Star FACR | Activation Rate, NRR | Product-market fit and retention signals |

---

## Anti-Metrics (What We Will Not Optimize For)

Some metrics would be easy to improve without improving the product. We explicitly reject these as primary KPIs:

| Anti-Metric | Why We Reject It |
|-------------|-----------------|
| Total exceptions logged | Could increase if users are just logging more, not improving operations |
| Daily active users | Engagement ≠ value; Maria using Atlas 3 minutes/day with high FACR is better than 3 hours/day with no improvement |
| Feature adoption rate (generic) | A feature adopted by everyone but not improving FACR is a distraction |
| App store rating | Vanity metric; doesn't tell us if FACR is moving |
| Time on site | Same as DAU trap — this is not a social app |

---

## KPI Review Cadence

| Frequency | Reviewer | Metrics |
|-----------|---------|---------|
| Daily (automated alert) | Maria (customer) | FACR, exceptions today vs baseline |
| Weekly (internal) | Product team | Morning Brief engagement, exception log completeness, time-to-log |
| Monthly (internal) | Product + Growth | FACR trend by cohort, recurrence rate, ARR, churn |
| Quarterly (OKR review) | All | All OKR KRs graded; North Star trend reviewed |
