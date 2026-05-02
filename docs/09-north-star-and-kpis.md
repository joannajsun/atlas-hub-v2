# North Star & KPIs
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## North Star: FACR (First-Attempt Completion Rate)

```
FACR = Completed First Attempt / Total Scheduled Stops × 100
```

The single number that tells you whether the product is working. It's directly meaningful to every persona, it has a clear dollar value ($200–500 per failure), and it's hard to game — improving it requires actually improving operations.

**Benchmarks:**
- Industry average: ~82–85%
- Top-quartile carrier (pre-Atlas): ~88–91%
- Atlas customer target at 90 days: ≥ 88%
- Atlas customer target at 12 months: ≥ 92%

---

## KPI Tree

**Leading indicators** (predict FACR movement)
- Pre-departure confirmation rate → target ≥ 80% of stops confirmed before first truck leaves
- Exception recurrence rate → target ≤ 5% (same address + reason within 30 days)
- Morning Brief engagement → target ≥ 80% of dispatch users before 8am on workdays

**Lagging indicators** (confirm FACR improved)
- Exception rate (exceptions / total stops) → target ≤ 10%
- Reschedule rate → target ≤ 8%
- Retailer SLA compliance rate → target ≥ 95%

**Product health** (data quality and engagement signals)
- Exception log completeness → ≥ 95% of exceptions have a reason code
- Time-to-log exception (median) → ≤ 5 minutes
- Crew FACR variance (std dev within carrier) → < 8pp

---

## By Persona

| Persona | Primary KPI | Why |
|---------|------------|-----|
| Maria | Daily FACR + exception rate vs avg | She needs to know if today is on track |
| David | Monthly FACR by market + SLA compliance | He owns the partner relationships |
| Marcus | His personal FACR + rank vs team | Pride and accountability |

---

## What I'm not optimizing for

DAU, time-on-site, feature adoption rate in isolation. A dispatcher who uses Atlas for 3 minutes/day and improves FACR by 5pp is better than one who's in the app for 2 hours/day with no improvement.
