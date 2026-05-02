# Launch Plan
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Launch Philosophy

This is a B2B SaaS launch targeting regional logistics operators — not a consumer product, not a viral app. The launch is not a single event. It is a staged rollout designed to:
1. Validate the product works in real operations (Alpha)
2. Stress-test onboarding and support (Beta)
3. Generate the first case study evidence (v1 launch)
4. Begin building a repeatable sales motion

A "successful launch" is not press coverage. It is 5 paying customers using Atlas daily, with at least one showing measurable FACR improvement.

---

## Launch Stages

### Stage 0 — Pre-Alpha (Weeks 1–4)
**Goal**: Internal dogfooding and data model validation.

| Action | Owner | Timeline |
|--------|-------|----------|
| Core exception workflow built and functional | Engineering | Week 2 |
| Multi-tenant auth and carrier account setup | Engineering | Week 3 |
| Internal team simulates dispatch workflow | Product | Week 3–4 |
| Exception data schema reviewed and frozen | Engineering + Product | Week 4 |
| Fix all P0 bugs from internal testing | Engineering | Week 4 |

**Exit criteria**: Exception can be logged on mobile and appear on web dashboard in < 60 seconds. No data loss bugs.

---

### Stage 1 — Alpha (Weeks 5–8)
**Goal**: Get 2–3 real dispatch leads using the core workflow. Not for payment — for validation.

| Action | Owner | Timeline |
|--------|-------|----------|
| Identify 3 alpha contacts (personal network, warm intros) | Founder | Week 4 |
| Alpha invite sent with expectations set (bugs, limited features) | Founder | Week 5 |
| White-glove onboarding: 1-hour setup call per account | Founder | Week 5–6 |
| Daily check-in Slack channel with alpha users | Founder | Weeks 5–8 |
| Exception logging used for full week of operations | Alpha users | Week 6–8 |
| Interview each alpha user at end of month | Founder | Week 8 |

**Metrics to watch**:
- % of exceptions logged in Atlas vs TMS/spreadsheet
- Time-to-log (median)
- Any friction or blockers users hit

**Exit criteria**: At least 2 of 3 alpha users complete a full week of exception logging without falling back to spreadsheets.

---

### Stage 2 — Beta (Weeks 9–16)
**Goal**: Expand to 5–8 users. Add Morning Brief and confirmation workflow. Test onboarding with less white-glove support.

| Action | Owner | Timeline |
|--------|-------|----------|
| Morning Operations Brief built and deployed | Engineering | Week 10 |
| Confirmation workflow (status per stop, access notes) built | Engineering | Week 11 |
| Onboarding documentation written (self-serve capable) | Product | Week 9–10 |
| Beta invites sent (5 additional carriers) | Founder | Week 9 |
| Onboarding time target: < 1 hour setup call (not per-user) | Founder | Week 10+ |
| Weekly group check-in with beta users | Founder | Weeks 9–16 |
| NPS survey at Day 30 for each beta user | Product | Rolling |
| Bug tracking: severity classification and SLA | Engineering | Week 9 |

**Metrics to watch**:
- Morning Brief engagement rate (target: ≥ 70% of dispatch users by end of beta)
- Onboarding time (target: < 1 hour to first meaningful session)
- Bug count by severity
- NPS at Day 30 (target: ≥ 40)

**Exit criteria**:
- NPS ≥ 40 from beta dispatch users
- Morning Brief engagement ≥ 70%
- Zero P0 (data loss, incorrect calculations) bugs open
- Self-serve onboarding documented and tested

---

### Stage 3 — v1 Launch (Week 17)
**Goal**: Open to paying customers. First 5 contracts signed. Public presence established.

#### Pre-Launch Checklist (Week 14–16)

**Product**
- [ ] All Must-Have features from MoSCoW analysis shipped and tested
- [ ] Mobile exception logging tested on iOS Safari + Android Chrome
- [ ] Morning Brief loads in < 2 seconds (p95)
- [ ] Multi-tenant data isolation verified (no data bleed between accounts)
- [ ] Onboarding flow end-to-end tested with a fresh account
- [ ] CSV export functional
- [ ] Basic documentation (help docs) published

**Business**
- [ ] Pricing page live
- [ ] Standard contract template ready (reviewed by lawyer)
- [ ] Payment processing configured (Stripe)
- [ ] Data processing agreement (DPA) ready for customers who require it
- [ ] Support email and SLA defined (target: 4-hour response during business hours)

**Marketing / Sales**
- [ ] Landing page live with clear value prop and ICP targeting
- [ ] ROI calculator on landing page (enter exception rate → see dollar savings)
- [ ] Demo video recorded (3–5 minutes: Morning Brief → exception log → FACR trend)
- [ ] 2 beta customer quotes / testimonials secured
- [ ] Outbound prospect list built (100+ ICP carriers from association directories)
- [ ] LinkedIn presence for Atlas Hub established

**Operations**
- [ ] Monitoring and alerting configured (uptime, error rate, latency)
- [ ] Backup and data retention policy implemented
- [ ] Incident response runbook written
- [ ] On-call rotation defined (Founder handles all P0s initially)

---

#### Launch Week Actions

| Day | Action |
|-----|--------|
| Monday | Send launch announcement to beta users; ask for referrals |
| Monday | Post on LinkedIn (founder voice): problem statement post, not product post |
| Tuesday | Begin outbound to first 20 ICP prospects |
| Wednesday | Follow up with warm leads from beta period |
| Thursday | First demo calls with interested prospects |
| Friday | Week 1 debrief: what's working in outbound, what's not |

---

### Post-Launch: Weeks 18–26 (First 90 Days)

| Focus | Actions |
|-------|---------|
| **Conversion** | Run outbound at 20 new prospects/week. Target 5 signed by Week 24. |
| **Retention** | 30-day check-in call with all live customers. Exception log completeness audit. |
| **Evidence** | Begin building first case study at Day 60 with best-performing customer. |
| **Product** | Ship Should-Have features from MoSCoW (reschedule trigger, customer notifications). |
| **Learning** | Monthly user interview with 2–3 dispatch leads. What's missing? What's confusing? |

---

## Outbound Sales Motion

### Prospect Sources
1. **Furniture carrier association directories** (NHFA member list)
2. **Wayfair / Ashley Furniture carrier network** (carriers who deliver for major retailers)
3. **LinkedIn search**: "Dispatch Manager," "VP Operations," "Last-Mile Carrier," "Furniture Delivery"
4. **Referrals from beta users** — single most valuable source

### Outreach Sequence

**Email 1 (Day 1)**:
Subject line: "Quick question about your exception rate"
Body: 2 sentences on the problem, 1 sentence on Atlas, ask if they have 15 minutes.

**Email 2 (Day 5)**:
Reply to Email 1. One line: "Worth a 15-minute call to see if this is relevant to your operation?"

**LinkedIn DM (Day 8)**:
"Hi [Name], sent you an email about exception tracking for white-glove delivery — wanted to make sure it didn't get buried."

**Email 3 (Day 12)**:
Share a specific insight relevant to their operation or retail partners.

**Breakup email (Day 20)**:
"I'll stop following up after this — just wanted to make sure you had a chance to see this. If timing is better later, here's a link to book a call."

### Demo Flow (30 minutes)

1. **Problem framing (5 min)**: "Walk me through what happens when a delivery fails at your operation." Listen first.
2. **Morning Brief demo (8 min)**: Show the pre-departure scan — unconfirmed stops, vehicle alerts, risk flags
3. **Exception workflow demo (7 min)**: Driver logs exception on mobile → dispatch notification → queue
4. **FACR trend demo (5 min)**: "Here's what this looks like after 60 days of data"
5. **ROI calculation (5 min)**: Enter their exception rate, see the dollar number

---

## Launch Risks

| Risk | Mitigation |
|------|-----------|
| First 5 customers are all from personal network (not repeatable) | Track source of all leads from day 1; force outbound to cold contacts in parallel |
| Long sales cycle (2–4 months) delays first revenue | Start outbound as early as Week 10 (before launch); don't wait for product to be "perfect" |
| Alpha users give positive feedback but don't pay | Charge for beta access (nominal fee acceptable) to test willingness to pay |
| Product isn't stable enough for real operations | Define and enforce a P0 bug SLA; don't launch until Morning Brief reliability is confirmed |
| No case study data by 90 days | Ask best alpha/beta user to be a formal case study partner from Day 1 of their onboarding |
