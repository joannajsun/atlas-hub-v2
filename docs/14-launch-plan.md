# Launch Plan
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## Launch Philosophy

This is not a consumer product launch. There is no press event. A successful launch is 5 paying customers using Atlas daily, at least one showing measurable FACR improvement. Everything else is secondary.

---

## Stages

**Stage 0 — Pre-Alpha (Weeks 1–4)**
Internal only. Exception workflow built, tested end-to-end. Data schema reviewed and frozen — no breaking migrations after this point. Multi-tenant auth working. Exit: exception logs from mobile appear on web dashboard in < 60 seconds with no data loss.

**Stage 1 — Alpha (Weeks 5–8)**
2–3 real dispatch leads, warm intros only, not for payment. White-glove onboarding (1-hour setup call). Daily check-in Slack channel. Goal is validation, not revenue. Exit: ≥ 2 of 3 complete a full week of exception logging without falling back to spreadsheets.

**Stage 2 — Beta (Weeks 9–16)**
5–8 carriers. Add Morning Brief and confirmation workflow. Start charging nominal fee (even $200/month tests willingness to pay). Onboarding time target: < 1 hour setup call. NPS survey at Day 30 — need ≥ 40 before launch. Exit: NPS ≥ 40, Morning Brief engagement ≥ 70%, zero P0 bugs.

**Stage 3 — Launch (Week 17)**
Open to paying customers. 5 contracts is the goal, not a deadline.

---

## Pre-Launch Checklist (the things I've seen skipped that kill launches)

- [ ] Multi-tenant data isolation verified — no data bleed between accounts
- [ ] Mobile exception logging tested on real devices on 3G (not just desktop Chrome)
- [ ] FACR calculation documented and reconciled against a test account
- [ ] Onboarding flow end-to-end tested with a fresh account (not just dev)
- [ ] Payment processing live (Stripe)
- [ ] Standard contract template reviewed
- [ ] Support SLA defined (targeting 4-hour response during business hours)
- [ ] Monitoring and alerting configured — I need to know before customers do

---

## Sales Motion

**Prospect sources**: NHFA member directories, Wayfair/Ashley carrier networks, LinkedIn ("Dispatch Manager," "VP Ops," "last-mile carrier"). Referrals from alpha/beta users are the highest-value source — track them separately.

**Demo flow (30 min)**:
1. Ask about their current exception process before showing anything (5 min)
2. Morning Brief — the 90-second scan that replaces 45 minutes (8 min)
3. Exception logging on mobile → dispatch queue (7 min)
4. FACR trend after 60 days of data (5 min)
5. ROI calculator — their exception rate × $250 average cost (5 min)

**Outreach**: 3-touch sequence over 20 days. Subject line: "Quick question about your exception rate." Two follow-ups. Breakup email at Day 20.
