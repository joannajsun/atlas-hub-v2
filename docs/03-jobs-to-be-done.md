# Jobs To Be Done (JTBD)
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Framework

Jobs-to-be-Done captures the real motivation behind a user action — not "I want a dashboard" but "I want to walk into my 6am shift knowing what's at risk so I don't get blindsided." Features are hired to do jobs. This document defines the jobs Atlas Hub 2.0 is built to fulfill.

Format: **"When [situation], I want to [motivation], so I can [outcome]."**

---

## Maria — Dispatch Lead

### Core Jobs

**Job 1: Morning Risk Scan**
> When I arrive at the warehouse before routes leave, I want to see which stops are most likely to fail today, so I can intervene before the truck leaves and turn a probable failure into a successful delivery.

*Signals that satisfy this job: Unconfirmed customer count, vehicles flagged for maintenance, high-exception-rate routes, weather alerts, understaffed routes.*

---

**Job 2: Exception Response**
> When a delivery failure is reported by a driver mid-route, I want to log the reason, trigger a reschedule, and notify the customer immediately, so I can close the loop in under 5 minutes without losing track of what happened.

*Signals that satisfy this job: One-tap failure logging with reason codes, auto-triggered reschedule workflow, customer notification template.*

---

**Job 3: Pattern Recognition**
> When I notice the same type of failure happening repeatedly on a specific route, building, or with a specific retail partner, I want to see aggregated exception data, so I can fix the root cause instead of just firefighting each instance.

*Signals that satisfy this job: Exception trend view by category (access, customer, vehicle, weather), filterable by route/zone/partner/crew.*

---

**Job 4: Crew Coaching**
> When I need to have a performance conversation with an underperforming driver, I want to show them their FACR trend and specific failure instances, so the conversation is grounded in data rather than my impressions.

*Signals that satisfy this job: Per-crew FACR over time, exception history by crew member, benchmark vs team average.*

---

**Job 5: Shift Handoff**
> When my shift ends and the afternoon lead takes over, I want to leave a clear record of open issues, exceptions from today, and anything that needs follow-up, so nothing falls through the cracks overnight.

*Signals that satisfy this job: Shift summary view, open exception queue, auto-generated daily digest.*

---

### Supplemental Jobs

**Job 6: Retailer Accountability**
> When Ashley Furniture calls me about a failed delivery, I want to show them whether the failure was caused by their order data (wrong address, wrong item) vs. our execution, so I can defend our performance with evidence.

**Job 7: Staffing Decisions**
> When I'm building next week's route schedule, I want to see crew availability, performance scores, and which routes are historically hardest, so I can match the right people to the right stops.

---

## David — VP of Operations

### Core Jobs

**Job 1: Weekly Performance Review**
> When I'm preparing for my Monday operations review, I want to see last week's FACR, on-time rate, and cost per delivery across all markets in one place, so I can identify trends and bring concrete data to the conversation — not manually assembled spreadsheets.

---

**Job 2: Retailer SLA Defense**
> When a retail partner challenges our SLA performance in a quarterly review, I want to pull accurate, credible delivery data segmented by partner, so I can either acknowledge the issue with a remediation plan or show that the failures were caused upstream by their own order data.

---

**Job 3: Market Expansion Modeling**
> When I'm evaluating whether to expand to a new market (e.g., Chicago), I want to see unit economics from comparable markets — cost per delivery, FACR, crew ramp time — so I can make a financially defensible recommendation to the board.

---

**Job 4: Anomaly Detection**
> When one market's performance dips unexpectedly, I want to know about it the same day — not when the weekly report arrives — so I can diagnose the issue before it becomes a pattern.

---

## Marcus — Crew Lead

### Core Jobs

**Job 1: Pre-Route Briefing**
> When I'm loading my truck in the morning, I want to see today's stops with accurate customer confirmations, access notes, and any special instructions, so I don't discover a problem at the customer's front door.

---

**Job 2: Fast Exception Logging**
> When a delivery fails, I want to log the reason in under 60 seconds on my phone, so dispatch knows immediately and I don't have to remember it for the paperwork at end of day.

---

**Job 3: Personal Performance Visibility**
> When the week ends, I want to see my FACR and how it compares to the team average, so I know where I stand and can take pride in my numbers (or know I need to improve).

---

## Anti-Jobs (What Atlas Hub Should NOT Do)

Understanding what users are NOT trying to do is as important as knowing what they want.

| Anti-Job | Why It Matters |
|----------|---------------|
| Maria doesn't want to manually enter delivery data — she wants systems to capture it | Don't build data-entry heavy workflows |
| David doesn't want to learn a new BI tool — he wants to read a summary | Don't build raw data exports, build curated dashboards |
| Marcus doesn't want a complex mobile app — he wants 3 taps to do anything | Don't build feature-rich mobile; build focused, fast mobile |
| Nobody wants a tool that requires 2 weeks of training | Every feature must be usable without onboarding documentation |

---

## JTBD → Feature Mapping

| Job | Feature in Atlas Hub 2.0 |
|-----|--------------------------|
| Morning Risk Scan | Morning Operations Brief (dashboard) |
| Exception Response | Exception Workflow + one-tap logging |
| Pattern Recognition | Exception Analytics (trend by category/partner/zone) |
| Crew Coaching | Crew Performance Dashboard |
| Retailer SLA Defense | Partner Performance Report (exportable) |
| Pre-Route Briefing | Live Manifest (mobile) |
| Fast Exception Logging | Mobile exception capture |
| Weekly Performance Review | Executive Dashboard (David's view) |

> This mapping is the foundation for the PRD feature list. Every feature in the PRD should trace back to a job in this document.
