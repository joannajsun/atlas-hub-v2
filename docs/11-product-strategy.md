# Product Strategy
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Strategic Position

**Atlas Hub 2.0 is the operational intelligence layer for white-glove delivery — the tool that turns delivery data into decisions.**

We are not building a route optimizer. We are not building a telematics platform. We are not building a TMS. We are building the intelligence layer that sits above all of those tools and answers the question none of them answer: *why are deliveries failing, and what do I do about it?*

---

## The Strategy in One Paragraph

The white-glove delivery market is underserved by existing tooling because every existing tool solves a different slice of the problem — truck tracking, route sequencing, enterprise orchestration — without anyone connecting the dots between *what happened on a delivery* and *what should change tomorrow*. Atlas enters at the intelligence layer, initially for regional carriers too small for Bringg and too sophisticated for Onfleet. We build trust with dispatch leads (Maria) through daily operational value, generate data over time that becomes defensible (exception patterns, FACR benchmarks, partner scoring), and convert that data advantage into a moat before enterprise players push downmarket.

---

## Strategic Bets

### Bet 1: The intelligence gap is real and durable

**The bet**: No competitor will build exception intelligence for regional white-glove carriers in the next 18–24 months.

**Rationale**:
- Samsara and Verizon are building upmarket toward enterprise fleets, not downmarket toward delivery intelligence
- Onfleet is optimized for food/parcel delivery — different exception vocabulary, different economics
- Bringg requires $200K+ contracts — structurally unable to serve SMB carriers
- DispatchTrack has the vertical focus but weak analytics and a dated UX — not aggressively investing in intelligence

**Risk**: A well-funded startup enters the same white space with more resources. Mitigation: move fast on data collection (our moat builds with every exception logged) and lock in early customer relationships before the category is validated publicly.

---

### Bet 2: Dispatch leads are the wedge, VPs are the economic buyers

**The bet**: If we make Maria's day better, she becomes our internal champion. If Maria champions us, David signs the check.

**Rationale**:
- Direct VP/GM outbound is a long, expensive sales cycle
- Dispatch leads have informal but real influence over software decisions at regional carriers
- A bottom-up adoption story ("our dispatch team loves it, can we get a contract?") converts faster than top-down sales

**Implication for product**: The Maria experience is P0. David's executive dashboard is P1. We build for adoption before we build for purchase justification.

---

### Bet 3: Data is the moat, not features

**The bet**: The longer a carrier uses Atlas, the smarter Atlas gets for them — and the more painful it is to leave.

**How the moat builds**:
- Exception patterns become specific to each carrier's routes, buildings, and retail partners
- FACR benchmarks become meaningful once you have 6+ months of history
- Retail partner SLA data creates leverage in contract negotiations — carriers won't want to lose that history
- Address-level exception flags persist — "this building has broken elevator access every month" is only valuable if you've been tracking it

**Implication for product**: Exception logging completeness is critical from day 1. Every exception logged is a moat contribution.

---

### Bet 4: White-glove delivery is a beachhead, not the ceiling

**The bet**: Winning white-glove / big-and-bulky delivery creates a template that applies to other complex last-mile verticals: medical equipment delivery, exercise equipment installation, custom furniture.

**Why start here**:
- Most painful exception economics ($200–500 per failure vs $2–5 for parcel)
- Clearest buyer (regional carrier, 15–80 trucks, 1–5 retail contracts)
- Least crowded by current tooling (Onfleet is food-first, Bringg is enterprise-only)

**Long-term option**: If Atlas proves FACR improvement in white-glove, the same intelligence layer applies to other high-touch, high-failure-cost delivery categories. The platform expands, the beachhead becomes the category.

---

## Go-to-Market Strategy

### Target Customer (ICP)

- Regional US last-mile carrier
- 15–80 trucks
- White-glove / big-and-bulky focus (furniture, appliances, mattresses, fitness)
- 1–5 retail partner contracts
- Currently using: spreadsheets + basic TMS + one route tool
- Pain: high exception rates, no visibility into failure patterns
- Budget: $800–$2,000/month for ops software

Full ICP details in `05-market-sizing.md`.

### Channel Strategy

**Phase 1 (Q3 2026): Direct outbound**
- Founder-led sales to 10–20 ICP targets
- Source lists: Furniture carrier associations, regional logistics directories, Ashley Furniture / Wayfair carrier networks
- Goal: 5 paying customers, all with deep founder relationship

**Phase 2 (Q4 2026): Partnership seeding**
- Intro conversations with furniture carrier associations (NHFA — National Home Furnishings Association)
- Informal referral relationships with carriers who are happy customers
- Goal: 1–2 warm inbound referrals per month

**Phase 3 (Q1 2027): Channel partnerships**
- Formal channel deal with carrier association or 3PL network
- Goal: 10+ inbound leads per quarter from channel
- Consider: Retail partner (Wayfair, Ashley) recommending Atlas to their carrier partners as a performance improvement tool

### Pricing Strategy

| Tier | Price | Who | Limits |
|------|-------|-----|--------|
| Starter | $800/month | 1–20 trucks, 1 warehouse | Core exception workflow + morning brief |
| Growth | $1,400/month | 21–60 trucks, 1 warehouse | + Analytics, crew dashboard, partner reports |
| Scale | $2,000/month | 61–100 trucks, 2 warehouses | + Multi-warehouse, API access, priority support |
| Enterprise | Custom | 100+ trucks | Custom integrations, dedicated CSM |

Annual contracts with 10% discount. Monthly option available at +15%.

---

## Competitive Positioning Statement

> "Atlas Hub is the operational intelligence platform for regional white-glove carriers. Unlike route optimization tools that stop at 'which order to visit stops,' or telematics tools that only know where your trucks are, Atlas answers the question that actually costs money: why are deliveries failing, and what changes tomorrow to prevent them? Built for the carrier that's too sophisticated for Onfleet and too small for Bringg."

---

## Strategic Sequencing Logic

Why we build in this order:

1. **Exception workflow first** — without structured exception data, there is no intelligence layer. The data collection surface is the foundation of every other feature.

2. **Dispatch (Maria) before executive (David)** — bottom-up adoption converts faster. Make the daily user love it, then make the economic buyer see the ROI.

3. **Pattern recognition before prediction** — we need 6+ months of exception data before ML is useful. Build the analytics layer first; ML is Phase 4.

4. **Web before native mobile** — validate the workflow on web mobile (faster iteration, lower build cost), then build native shells around the validated UX.

5. **Single warehouse before multi-warehouse** — solve the core problem deeply for one operation before expanding scope. Multi-warehouse complexity is a Q1 2027 problem.

---

## Metrics That Validate the Strategy

| Strategic Bet | Validating Metric |
|--------------|-------------------|
| Intelligence gap is real | 80%+ of pilot users name "exception analytics" as primary value (user interviews) |
| Dispatch leads as wedge | 3+ deals where dispatch lead championed internal approval (captured in CRM) |
| Data as moat | Exception recurrence rate drops 20%+ after 90 days of use |
| White-glove as beachhead | ICP conversion rate ≥ 10% outbound; average ACV ≥ $14,400 |
