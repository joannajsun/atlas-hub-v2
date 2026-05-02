# Prioritization Framework
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Framework Overview

Two complementary frameworks:

1. **RICE Scoring** — quantitative ranking across all features
2. **MoSCoW** — categorical classification for release planning

Both feed into the Roadmap (`10-roadmap.md`). When RICE and MoSCoW conflict, RICE wins for sequencing; MoSCoW wins for must-have / will-not-ship decisions.

---

## RICE Scoring Methodology

**RICE = (Reach × Impact × Confidence) / Effort**

| Factor | Definition | Scale |
|--------|-----------|-------|
| **Reach** | How many users/accounts affected per quarter | Actual number (dispatchers, drivers, etc.) |
| **Impact** | Effect on North Star (FACR) or key business outcome | 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal |
| **Confidence** | How certain are we in the estimate | 100% = high, 80% = medium, 50% = low |
| **Effort** | Engineering weeks (one engineer) | Whole weeks |

---

## Feature RICE Scores

### Module 1 — Morning Operations Brief

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 1.1 Unconfirmed Stops Counter | 25 dispatchers | 3 | 80% | 2 | **30.0** |
| 1.2 Vehicle Alerts | 25 dispatchers | 2 | 80% | 1.5 | **26.7** |
| 1.3 High-Risk Route Flags | 25 dispatchers | 3 | 70% | 3 | **17.5** |
| 1.4 Today's Exception Baseline | 25 dispatchers | 2 | 90% | 1 | **45.0** |
| 1.5 Crew Callout Alerts | 25 dispatchers | 1 | 80% | 1 | **20.0** |

### Module 2 — Exception Workflow

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 2.1 Exception Logging (Driver) | 80 drivers | 3 | 90% | 3 | **72.0** |
| 2.2 Dispatch Alert on Exception | 25 dispatchers | 3 | 90% | 1 | **67.5** |
| 2.3 Reschedule Trigger | 25 dispatchers | 2 | 90% | 2 | **22.5** |
| 2.4 Customer Notification | 200 customers | 2 | 80% | 2 | **160.0** |
| 2.5 Exception Queue | 25 dispatchers | 2 | 90% | 2 | **22.5** |

### Module 3 — Exception Analytics

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 3.1 Exception Trend View | 25 dispatchers + 5 VPs | 3 | 80% | 2 | **36.0** |
| 3.2 Exception Filter Matrix | 25 dispatchers | 2 | 80% | 2 | **20.0** |
| 3.3 Top Exception Locations | 25 dispatchers | 2 | 80% | 2 | **20.0** |
| 3.4 Partner-Level Exception Breakdown | 5 VPs | 2 | 80% | 2 | **4.0** |
| 3.5 Item Category Breakdown | 5 VPs | 1 | 80% | 1 | **4.0** |

### Module 4 — Crew Performance Dashboard

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 4.1 Individual Crew FACR | 25 dispatchers + 80 drivers | 2 | 80% | 2 | **42.0** |
| 4.2 FACR Trend Chart | 25 dispatchers | 2 | 80% | 2 | **20.0** |
| 4.3 Exception History per Crew | 25 dispatchers | 1 | 90% | 1.5 | **15.0** |
| 4.4 Crew Leaderboard | 80 drivers | 1 | 70% | 1 | **56.0** |
| 4.5 Self-View (Mobile) | 80 drivers | 2 | 70% | 2 | **56.0** |

### Module 5 — Pre-Delivery Confirmation

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 5.1 Confirmation Status per Stop | 25 dispatchers + 80 drivers | 3 | 80% | 2 | **126.0** |
| 5.2 Confirmation Checklist (Mobile) | 80 drivers | 3 | 80% | 2 | **96.0** |
| 5.3 Access Notes per Stop | 80 drivers | 2 | 90% | 1.5 | **96.0** |
| 5.4 Prior Exception Flag | 25 dispatchers + 80 drivers | 2 | 70% | 2 | **73.5** |

### Module 6 — Retail Partner Report

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 6.1 Per-Partner Summary | 5 VPs | 2 | 90% | 2 | **4.5** |
| 6.2 Exception Attribution | 5 VPs + 25 dispatchers | 2 | 70% | 3 | **9.3** |
| 6.3 SLA Scorecard | 5 VPs | 2 | 80% | 2 | **4.0** |
| 6.4 Export | 5 VPs + 25 dispatchers | 1 | 90% | 1 | **27.0** |

### Module 7 — Fleet & Route Overview

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| 7.1 Fleet Status Board | 25 dispatchers | 1 | 80% | 2 | **10.0** |
| 7.2 Route Status Board | 25 dispatchers | 2 | 80% | 2 | **20.0** |
| 7.3 Vehicle Maintenance Flags | 25 dispatchers | 1 | 70% | 2 | **8.75** |

---

## RICE Ranking — Top 15 Features

| Rank | Feature | RICE Score | Module |
|------|---------|-----------|--------|
| 1 | Customer Notification (reschedule) | 160.0 | 2.4 |
| 2 | Confirmation Status per Stop | 126.0 | 5.1 |
| 3 | Confirmation Checklist (Mobile) | 96.0 | 5.2 |
| 4 | Access Notes per Stop | 96.0 | 5.3 |
| 5 | Prior Exception Flag | 73.5 | 5.4 |
| 6 | Exception Logging (Driver) | 72.0 | 2.1 |
| 7 | Dispatch Alert on Exception | 67.5 | 2.2 |
| 8 | Crew Leaderboard | 56.0 | 4.4 |
| 9 | Self-View (Mobile) | 56.0 | 4.5 |
| 10 | Today's Exception Baseline | 45.0 | 1.4 |
| 11 | Individual Crew FACR | 42.0 | 4.1 |
| 12 | Exception Trend View | 36.0 | 3.1 |
| 13 | Unconfirmed Stops Counter | 30.0 | 1.1 |
| 14 | Export (Partner Report) | 27.0 | 6.4 |
| 15 | Vehicle Alerts | 26.7 | 1.2 |

---

## MoSCoW Classification

### Must Have (v1 Launch — non-negotiable)

These features define the core value proposition. Without them, Atlas is not differentiated from existing tools.

| Feature | Rationale |
|---------|-----------|
| Exception logging (driver, mobile) | Without this, no data to analyze. Foundation of everything. |
| Dispatch alert on exception | Without this, Atlas doesn't close the loop faster than a phone call. |
| Confirmation status per stop | Directly addresses the #1 pre-departure failure vector. |
| Access notes per stop | Biggest driver frustration. Quick win, high trust builder. |
| Morning Operations Brief (unconfirmed + baseline) | This is the 90-second brief. If it doesn't exist, Maria has no reason to open Atlas first thing. |
| Individual crew FACR | Core metric. Without it, coaching conversations can't happen. |
| Exception trend view | Without this, Maria can firefight but not prevent. |

### Should Have (v1 — strong preference, will delay launch to include)

| Feature | Rationale |
|---------|-----------|
| Reschedule trigger + customer notification | Significant UX differentiation. Expected by carriers. |
| Exception filter matrix | Required to make trend view actionable. |
| Prior exception flag | High-value pattern surfacing with low effort. |
| FACR trend chart per crew | Needed to support coaching conversation (Maria Job 4). |
| Route status board | Dispatch needs to see all routes at a glance. |

### Could Have (v1 stretch — include if sprint permits)

| Feature | Rationale |
|---------|-----------|
| Crew leaderboard | Motivational, Marcus-facing. Not core to operations. |
| Per-partner summary | Important for David, but less urgent for initial dispatch use. |
| Top exception locations | Useful but derivable from filter matrix manually. |
| Vehicle maintenance flags | Nice operational safety net; not FACR-critical. |
| Self-view mobile (Marcus) | High driver satisfaction value; low priority until mobile app is solid. |

### Will Not Have (v1 — explicit exclusions)

| Feature | Rationale |
|---------|-----------|
| Route optimization engine | Third-party API in v1; native build is v2 |
| AI/ML exception prediction | Data collection must precede prediction |
| Customer-facing tracking portal | Post-launch; separate product surface |
| Native iOS/Android app | Web mobile-first in v1 |
| Payroll / crew pay | Separate product surface; not operational intelligence |
| TMS integrations (specific vendors) | v2; v1 is standalone data entry + import |
| Multi-warehouse | Single warehouse scope in v1 |

---

## Prioritization Rationale

### Why the confirmation workflow scores so high

The confirmation features (Module 5) have the highest RICE scores because they affect both dispatchers AND 80+ drivers simultaneously, and they directly address the most common pre-delivery failure vector (customer not home, address incorrect). High reach × high impact = high priority even at medium confidence.

### Why partner reports score lower than you'd expect

Module 6 has low Reach scores because it primarily serves VPs (small denominator). The features are strategically important for the economic buyer (David), but RICE is an operational metric, not a strategic one. This is why MoSCoW complements RICE — partner reports are a "Could Have" for v1 based on MoSCoW judgment, not purely RICE math.

### Why exception analytics ranks below exception workflow

You have to collect the data before you can analyze it. Exception workflow (Module 2) is the data collection layer; exception analytics (Module 3) is the intelligence layer. Sequencing follows dependency, not just RICE rank.

### The FACR logic

Every P0 and P1 feature has a direct causal link to FACR:
- Pre-delivery confirmation → fewer "not home" failures → higher FACR
- Exception logging → faster reschedule → lower re-attempt cost
- Exception analytics → pattern identification → fewer repeat failures
- Crew FACR dashboard → coaching → better crew performance

Features without a clear FACR link are P2 or out of scope.
