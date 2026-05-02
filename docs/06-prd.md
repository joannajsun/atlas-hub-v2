# Product Requirements Document
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## Product Vision

The operational intelligence layer for white-glove delivery — the tool that turns delivery data into decisions, built for the regional carrier that's too sophisticated for Onfleet and too small for Bringg.

**North Star**: First-Attempt Completion Rate (FACR). Every feature should move this number.

**Primary user**: Maria (Dispatch Lead). Every feature decision starts with: "what does Maria do with this at 6am?"

---

## Module 1 — Morning Operations Brief
*Priority: P0 | JTBD: Maria's morning risk scan*

A single-screen auto-generated brief Maria opens before routes leave. Replaces 45 minutes of manual information-gathering with a 90-second scan.

- **Unconfirmed stops counter** — total stops today, flagged by unconfirmed customer status. Tap to see the list and trigger confirmation calls.
- **Vehicle alerts** — trucks flagged for maintenance or overdue inspection, with which route is affected.
- **Today's exception baseline** — yesterday's exception count vs 14-day average. Are we above baseline?
- **High-risk route flags** — routes with FACR below 80% (rolling 30-day) or exception rate 2x baseline.

*The brief must load in < 2 seconds. If it doesn't, Maria won't use it.*

---

## Module 2 — Exception Workflow
*Priority: P0 | JTBD: Maria's exception response, Marcus's fast logging*

Structured workflow from driver logging on mobile through dispatch resolution. Without this, there's no data to analyze.

**Driver (mobile):**
- Log an exception in ≤ 60 seconds, max 6 steps
- Required: reason code. Optional: notes, photo.
- Reason codes: `access_denied` | `customer_not_home` | `address_incorrect` | `item_damage` | `vehicle_issue` | `building_access` | `refused_delivery` | `weather` | `other`

**Dispatch:**
- Real-time notification when exception is logged (< 30 seconds)
- Exception queue: all open exceptions with stop, reason, driver, time
- Two-tap reschedule trigger → auto-sends customer notification (SMS/email)
- Filter by reason code, route, crew member

---

## Module 3 — Pre-Delivery Confirmation
*Priority: P1 | JTBD: Maria's risk scan (pre-departure), Marcus's pre-route briefing*

The single biggest pre-departure failure vector is the customer not being home or access information being wrong. This module addresses it directly.

- **Confirmation status per stop** — `confirmed` | `unconfirmed` | `attempted` | `rescheduled`. Syncs across web and mobile.
- **Access notes** — dispatch adds elevator status, gate code, building access contact. Driver sees them read-only before departure.
- **Prior exception flag** — if the stop address has a prior exception in the last 12 months, flag it on the manifest with the reason.
- **Confirmation checklist (mobile)** — Marcus sees confirmation status and access notes for all stops before leaving the warehouse. Unconfirmed stops are flagged red.

---

## Module 4 — Exception Analytics
*Priority: P1 | JTBD: Maria's pattern recognition, David's weekly review*

Aggregated exception data so Maria can fix root causes rather than firefight each instance.

- Exception trend chart — daily/7-day/30-day toggle, broken down by reason code
- Filter by reason code, route/zone, retail partner, crew member, date range
- Top exception locations — addresses or zones with most recurrences
- Partner-level exception breakdown — exception rate per retail partner, top reason code, exportable as CSV

*This module requires Module 2 data. Don't ship analytics before logging is solid.*

---

## Module 5 — Crew Performance Dashboard
*Priority: P1 | JTBD: Maria's crew coaching, Marcus's personal visibility*

- Per crew member: FACR (30-day rolling), trend vs prior 30 days, total deliveries, comparison to team average
- FACR trend chart (weekly, trailing 12 weeks) with team average overlay
- Exception history per crew member
- Self-view on mobile for Marcus — his FACR, rank, recent exception history

---

## Out of Scope (v1)

| Feature | When |
|---------|------|
| Native iOS/Android app | v2 (Phase 3) |
| Route optimization (first-party) | v2 (Phase 3) |
| TMS integrations | v2 after validating which platforms matter |
| AI/ML exception prediction | Phase 4 — need 6+ months of data first |
| Customer-facing tracking portal | Phase 4 |
| Multi-warehouse support | Phase 3 |

---

## Non-Functional Requirements

- Page load p95 < 2 seconds
- Exception log → dashboard visibility < 60 seconds
- Mobile usable on 4G; core flows work on 3G
- Multi-tenant: complete data isolation between carrier accounts
- Data retention: 12 months
- Auth: email + password, Google SSO
