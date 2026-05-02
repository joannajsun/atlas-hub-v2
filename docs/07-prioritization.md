# Prioritization
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## Framework

RICE scoring + MoSCoW. RICE handles sequencing; MoSCoW handles must-have vs. won't-ship decisions.

**RICE = (Reach × Impact × Confidence) / Effort**

---

## Top Features by RICE

| Feature | Reach | Impact | Conf. | Effort | Score |
|---------|-------|--------|-------|--------|-------|
| Customer notification on reschedule | 200 customers | 2 | 80% | 2 | 160 |
| Confirmation status per stop | 105 users | 3 | 80% | 2 | 126 |
| Confirmation checklist (mobile) | 80 drivers | 3 | 80% | 2 | 96 |
| Access notes per stop | 80 drivers | 2 | 90% | 1.5 | 96 |
| Prior exception flag | 105 users | 2 | 70% | 2 | 73.5 |
| Exception logging (driver) | 80 drivers | 3 | 90% | 3 | 72 |
| Dispatch alert on exception | 25 dispatchers | 3 | 90% | 1 | 67.5 |
| Individual crew FACR | 105 users | 2 | 80% | 2 | 42 |
| Exception trend view | 30 users | 3 | 80% | 2 | 36 |
| Morning Brief (unconfirmed + baseline) | 25 dispatchers | 3 | 80% | 2 | 30 |

---

## MoSCoW

**Must Have** — non-negotiable for v1
- Exception logging (driver, mobile)
- Dispatch alert on exception
- Confirmation status per stop + access notes
- Morning Operations Brief (unconfirmed counter + baseline)
- Individual crew FACR

**Should Have** — strong preference, delay launch if needed
- Reschedule trigger + customer notification
- Exception filter + trend view
- Prior exception flag on stop
- Route status board

**Could Have** — ship if sprint permits
- Crew leaderboard
- Per-partner summary
- Vehicle maintenance flags

**Won't Have (v1)**
- Native iOS/Android app, route optimization engine, TMS integrations, ML prediction, multi-warehouse, customer tracking portal

---

## Why the confirmation workflow scores highest

Confirmation features hit both dispatchers AND 80+ drivers — high reach. They directly address the most common pre-delivery failure vector. The prior exception flag is low effort and high trust-building.

Partner reports and the executive dashboard score lower on RICE because they only reach 5 VPs. They're strategically important but not the daily-use layer. I'm not building for David first.
