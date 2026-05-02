# Product Requirements Document (PRD)
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Document Purpose

This PRD defines what Atlas Hub 2.0 will build, why, and to what specification. It is the contract between product, design, and engineering. Every feature in this document traces back to a job in the JTBD document and a problem in the Problem Statement.

**Out of scope for this document**: business model details (see Market Sizing), competitor analysis (see Competitive Analysis), phasing and sequencing (see Roadmap), and success targets (see OKRs and KPIs).

---

## Product Vision

Atlas Hub 2.0 is the operational intelligence layer for white-glove delivery — the tool that turns delivery data into decisions, built for the regional carrier that's too sophisticated for Onfleet and too small for Bringg.

---

## Target User

**Primary**: Maria (Dispatch Lead) — uses Atlas every day, starting at 5:45am
**Secondary**: David (VP of Operations) — weekly performance reviews, retailer SLA defense
**Tertiary**: Marcus (Crew Lead / Senior Driver) — mobile-only, pre-route briefing, exception logging

Full personas in `02-user-personas.md`.

---

## Problem Summary

Five core problems define the gap Atlas fills:
1. **Confirmation Gap**: no systematic pre-departure customer/address/access verification
2. **Exception Blindspot**: failure reasons live in driver memory and text threads — never aggregated
3. **Morning Brief Problem**: risk information is scattered across 3 systems + 2 text threads
4. **Performance Visibility Gap**: FACR, crew benchmarks, and partner-level data are not synthesized
5. **Retailer Accountability Vacuum**: carriers can't prove whether failures were their fault or the retailer's

Full breakdown in `01-problem-statement.md`.

---

## North Star Metric

**First-Attempt Completion Rate (FACR)** — the percentage of scheduled deliveries completed successfully on the first attempt. Every feature in this product should move this number.

---

## Feature Specification

### Module 1 — Morning Operations Brief

**Priority**: P0
**JTBD**: Maria's Job 1 (Morning Risk Scan)
**User**: Maria (Dispatch Lead)

#### Overview
A single-screen, auto-generated morning brief that Maria sees when she opens Atlas Hub before routes leave. Replaces 45 minutes of manual information gathering with a 90-second scan.

#### Requirements

**1.1 — Unconfirmed Stops Counter**
- Display total stops for today's routes
- Flag stops where customer confirmation has not been logged in the last 24 hours
- Tap/click to see the full list of unconfirmed stops
- Allow direct action: trigger confirmation call workflow from the list
- *Acceptance*: Number updates in real-time as confirmations come in; zero state shows "All stops confirmed ✓"

**1.2 — Vehicle Alerts**
- Pull from fleet module: vehicles flagged for maintenance, overdue inspection, or unresolved warning
- Show truck ID, status reason, and impact (which route is affected)
- *Acceptance*: Alert appears within 5 minutes of a vehicle being flagged; links to fleet detail

**1.3 — High-Risk Route Flags**
- Flag routes with FACR below 80% (rolling 30-day) or exception rate above 2x baseline
- Show route ID, historical FACR, and top exception reason for that route
- *Acceptance*: Flags are based on rolling 30-day data, recalculated daily

**1.4 — Today's Exception Baseline**
- Show yesterday's exception count vs 14-day rolling average
- Surface if today has any known risk factors (unconfirmed stops, flagged vehicles)
- *Acceptance*: Calculation is accurate; renders in under 2 seconds on page load

**1.5 — Crew Callout Alerts**
- Show if any crew members have flagged unavailability for today
- Link to affected routes
- *Acceptance*: Callout flag appears within 15 minutes of crew marking unavailable

---

### Module 2 — Exception Workflow

**Priority**: P0
**JTBD**: Maria's Job 2 (Exception Response), Marcus's Job 2 (Fast Exception Logging)
**Users**: Maria (Dispatch Lead), Marcus (Crew Lead)

#### Overview
A structured workflow for logging, categorizing, and resolving delivery exceptions — from driver-initiated logging on mobile to dispatch follow-through and rescheduling.

#### Requirements

**2.1 — Exception Logging (Driver Mobile)**
- Driver can log an exception in ≤ 60 seconds
- Required fields: reason code (required), free-text notes (optional), photo (optional)
- Reason codes: `access_denied` | `customer_not_home` | `address_incorrect` | `item_damage` | `vehicle_issue` | `building_access` | `refused_delivery` | `weather` | `other`
- *Acceptance*: Logging flow completable in 3 taps minimum, maximum 6 steps

**2.2 — Dispatch Alert on Exception**
- When driver logs exception, Maria receives a real-time in-app notification
- Notification shows: stop address, reason code, driver name, time logged
- *Acceptance*: Notification appears in under 30 seconds of driver submission

**2.3 — Reschedule Trigger**
- From exception notification, Maria can trigger a reschedule in 2 taps
- Reschedule form pre-fills: customer name, address, original delivery window, exception reason
- *Acceptance*: Reschedule record created; customer notification triggered automatically

**2.4 — Customer Notification (on Reschedule)**
- Automated SMS/email to customer on reschedule with: new estimated window, apology language, carrier contact number
- *Acceptance*: Notification sends within 60 seconds of reschedule trigger; delivery receipt logged

**2.5 — Exception Queue (Dispatch View)**
- Dedicated view for all open exceptions: not-yet-resolved, today's date
- Columns: Stop, Reason, Driver, Logged At, Action Taken
- Filter: by reason code, by route, by crew member
- *Acceptance*: Queue shows all exceptions logged in last 72 hours; closes when exception is resolved

---

### Module 3 — Exception Analytics

**Priority**: P0
**JTBD**: Maria's Job 3 (Pattern Recognition), David's Job 1 (Weekly Performance Review)
**Users**: Maria (primary), David (secondary)

#### Overview
Aggregated, filterable exception data that surfaces patterns — the same building, the same partner, the same reason code repeating — so dispatch can fix root causes rather than firefight each incident.

#### Requirements

**3.1 — Exception Trend View**
- Chart: exceptions over time (daily, 7-day, 30-day toggle)
- Breakdown by reason code (stacked or segmented)
- *Acceptance*: Renders in under 3 seconds; all data is accurate to logged exceptions

**3.2 — Exception Filter Matrix**
- Filter by: reason code, route/zone, retail partner, crew member, date range
- Multiple filters can be active simultaneously
- *Acceptance*: Filters update chart and table in under 500ms

**3.3 — Top Exception Locations**
- Table: addresses or zones with the most exception recurrences
- Columns: Address/Zone, Exception Count, Top Reason, Last Occurrence
- *Acceptance*: Minimum 30-day history; sortable by count descending

**3.4 — Partner-Level Exception Breakdown**
- Per retail partner: total exceptions, exception rate (exceptions / total deliveries), top reason code
- Timeframe: current month, last 3 months, trailing 12 months
- *Acceptance*: Partner data accurate; exportable as CSV

**3.5 — Item Category Exception Breakdown**
- Same as 3.4 but segmented by item category (furniture, appliances, mattresses, fitness)
- *Acceptance*: Category data matches logged exceptions

---

### Module 4 — Crew Performance Dashboard

**Priority**: P1
**JTBD**: Maria's Job 4 (Crew Coaching), David's Job 3 (Anomaly Detection), Marcus's Job 3 (Personal Performance Visibility)
**Users**: Maria, David, Marcus

#### Requirements

**4.1 — Individual Crew FACR**
- Per crew member: FACR (rolling 30-day), trend (up/down/flat vs prior 30 days), total deliveries
- Compare to team average
- *Acceptance*: FACR calculation is accurate to logged completions and exceptions

**4.2 — FACR Trend Chart (per crew member)**
- Weekly FACR over trailing 12 weeks
- Overlay team average line
- *Acceptance*: Chart renders correctly; handles weeks with zero deliveries gracefully

**4.3 — Exception History (per crew member)**
- List of exceptions logged by or attributed to crew member
- Columns: Date, Stop, Reason Code, Resolution
- *Acceptance*: Accurate to exception log; paginated at 20 per page

**4.4 — Crew Leaderboard**
- Team ranking by FACR (30-day rolling)
- Optionally anonymized for privacy (setting)
- *Acceptance*: Updates daily; no personally identifiable data beyond name and FACR

**4.5 — Self-View (Mobile)**
- Marcus can see his own FACR, rank, and recent delivery history from the mobile app
- *Acceptance*: Accessible from mobile home screen; reads-only, no edit capability

---

### Module 5 — Pre-Delivery Confirmation Workflow

**Priority**: P1
**JTBD**: Maria's Job 1 (indirectly), Marcus's Job 1 (Pre-Route Briefing)
**Users**: Maria, Marcus

#### Requirements

**5.1 — Confirmation Status per Stop**
- Each stop in the day's manifest has a confirmation status: `confirmed` | `unconfirmed` | `attempted` | `rescheduled`
- Status updates when driver logs confirmation or when customer responds
- *Acceptance*: Status reflects reality; syncs across web and mobile

**5.2 — Confirmation Checklist (Driver Mobile)**
- Before leaving warehouse, driver sees confirmation status for all stops
- Red flags: unconfirmed stops, stops with access notes, stops with prior exception history at that address
- *Acceptance*: Loads within 2 seconds; flags are accurate

**5.3 — Access Notes per Stop**
- Dispatch can add access notes to any stop: elevator status, gate code, building access contact, stairwell info
- Notes visible to driver before departure and during delivery
- *Acceptance*: Notes persist; editable by dispatch only; visible (read-only) to driver

**5.4 — Prior Exception Flag**
- If a stop address has a prior exception logged (any date), flag it on the manifest with the prior exception reason
- *Acceptance*: Flag appears if address matches any exception in the trailing 12 months

---

### Module 6 — Retail Partner Report

**Priority**: P1
**JTBD**: Maria's Job 6 (Retailer Accountability), David's Job 2 (Retailer SLA Defense)
**Users**: David (primary), Maria (secondary)

#### Requirements

**6.1 — Per-Partner Summary**
- For each retail partner: total deliveries, FACR, exception rate, top exception reason, trend (month-over-month)
- Timeframe toggles: last 30 days, last quarter, trailing 12 months
- *Acceptance*: Data is accurate; renders in under 2 seconds

**6.2 — Exception Attribution**
- Show breakdown of exceptions by cause: carrier-caused vs. partner-caused (based on reason code)
- Carrier-caused: vehicle issues, crew errors
- Partner-caused: address incorrect, item damage (pre-delivery), wrong item
- *Acceptance*: Attribution logic is documented and configurable; shown as % breakdown

**6.3 — SLA Scorecard**
- Per partner: on-time delivery rate, FACR, reschedule rate
- Visual indicator: green/yellow/red vs SLA targets (configurable)
- *Acceptance*: Targets are configurable per partner; scorecard matches raw data

**6.4 — Export**
- Export full partner report as PDF or CSV
- *Acceptance*: Export renders all data shown on screen; filename includes partner name and date range

---

### Module 7 — Fleet & Route Overview

**Priority**: P2
**JTBD**: Maria's Job 1 (Morning Risk Scan, vehicle alerts portion)
**Users**: Maria, David

#### Requirements

**7.1 — Fleet Status Board**
- All vehicles: ID, status (on-route / available / maintenance / out-of-service), current location, assigned route
- Filter by status
- *Acceptance*: Status is accurate; location updates every 5 minutes

**7.2 — Route Status Board**
- All active routes: route ID, crew assigned, stops total / completed / remaining, ETA, exception count
- *Acceptance*: Updates in near real-time; handles routes with zero stops gracefully

**7.3 — Vehicle Maintenance Flags**
- Log vehicle warnings, maintenance dates, and expected return
- Alert when vehicle overdue for inspection
- *Acceptance*: Inspection intervals are configurable; alerts generated 48 hours before overdue

---

## Non-Functional Requirements

| Requirement | Specification |
|------------|---------------|
| Page load time (P50) | < 2 seconds on broadband |
| Mobile app responsiveness | Usable on 4G; core flows work on 3G |
| Data accuracy | Exception data accurate within 1 minute of logging |
| Uptime target | 99.5% during business hours (5am–8pm local) |
| Browser support | Chrome, Safari, Firefox (latest 2 versions) |
| Mobile OS support | iOS 15+, Android 11+ |
| Accessibility | WCAG 2.1 AA for web |
| Authentication | Email + password, Google SSO |
| Data retention | 12 months of delivery and exception data |
| Multi-tenancy | Each carrier account is isolated; no data bleed |

---

## Design Principles

1. **Maria at 6am is the bar**: Every feature must be usable by someone who's tired, distracted, and moving fast
2. **Show, don't ask**: Surface the right information without the user having to configure a report
3. **Mobile is first-class for Marcus**: The driver experience cannot be a simplified version of the web app — it must be purpose-built for field use
4. **No dead ends**: Every alert, flag, and notification has a next action. Information without action is noise.
5. **Trust the data**: Do not soften or round results. Show 82.4% FACR, not "approximately 80%."

---

## Out of Scope (v1)

The following are explicitly excluded from v1 to maintain focus:

| Feature | Rationale |
|---------|-----------|
| Native iOS/Android app | Web mobile first; native app in v2 |
| Route optimization engine | Using third-party API in v1; build in v2 |
| Customer-facing tracking portal | Important, but post-launch |
| Payroll / crew pay calculations | Distinct product surface, not operations tooling |
| Integration with specific TMS platforms | API-first design enables this; specific integrations in v2 |
| AI-powered exception prediction | Data must be collected first; ML in v2 |
| Multi-warehouse support | Single warehouse in v1 |

---

## Open Questions

| Question | Owner | Target Resolution |
|----------|-------|-------------------|
| What format do retail partner SLA targets come in? How do we ingest them? | Product | Before Module 6 spec finalization |
| Do drivers need offline exception logging capability? | Engineering | Before Module 2 implementation |
| Is exception attribution (carrier vs partner) reviewable/disputable? | Product | Before Module 6 implementation |
| What's the notification channel for reschedule alerts — SMS, email, or both? | Product | Before Module 2 implementation |
| How does confirmation status get set? Driver manual log, auto-detection, or customer reply? | Product | Before Module 5 implementation |
