# Stakeholder Map
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Overview

This document maps the stakeholders Atlas interacts with — inside customer organizations, in the broader market ecosystem, and internally. Understanding who has influence over adoption, purchase, and renewal is essential for sales, product, and customer success strategy.

---

## Internal Stakeholder Map (Within Customer Carrier Organizations)

### Tier 1 — Direct Users (Use Atlas daily)

| Role | Representative Persona | Relationship to Atlas | What They Need | Risk if Ignored |
|------|----------------------|----------------------|----------------|-----------------|
| Dispatch Lead / Dispatch Manager | Maria Chen | Primary daily user | Fast, accurate operations briefing; exception workflow that saves time | Won't adopt → no data → entire product fails |
| Crew Lead / Senior Driver | Marcus Williams | Mobile user; exception logger | Simple mobile UX; pre-route context; personal FACR visibility | Doesn't log exceptions → data gaps → analytics useless |
| Dispatcher (junior) | Supporting Maria | Secondary daily user | Same as Maria but less authority | Low urgency |

### Tier 2 — Decision Influencers (Shape the purchase and renewal)

| Role | Representative Persona | Relationship to Atlas | What They Need | Risk if Ignored |
|------|----------------------|----------------------|----------------|-----------------|
| VP / GM of Operations | David Kim | Economic buyer; power user | Cross-market FACR, SLA defense data, ROI clarity | Doesn't sign → no revenue; doesn't see value at renewal → churn |
| Operations Analyst / Coordinator | TBD | May configure routes, import data | Clear data import workflow; help documentation | Creates onboarding bottleneck if not supported |

### Tier 3 — Peripheral Stakeholders (Aware of Atlas; may interact occasionally)

| Role | Interaction with Atlas | Concern |
|------|----------------------|---------|
| IT / Systems Administrator | May need to approve software; reviews security/data handling | Data security, GDPR/CCPA compliance, SSO integration |
| HR | May see crew FACR data used in performance reviews | Privacy of individual driver performance data |
| Finance | Approves software spend | ROI justification, contract terms |
| General Drivers (non-crew-lead) | Use mobile exception logging | Ease of use; fear of performance surveillance |

---

## External Stakeholder Map (Ecosystem)

### Retail Partners (Downstream Beneficiaries)

| Entity | Relationship to Atlas | What They Want | How Atlas Serves Them |
|--------|----------------------|---------------|----------------------|
| Furniture retailers (Ashley Furniture, RH) | Customer of carrier; not Atlas customer | Reliable SLA compliance, visibility into delivery performance | Partner report (carrier shares data voluntarily); exception attribution |
| Appliance retailers (Best Buy, Home Depot) | Same as above | Same | Same |
| Mattress brands (Sleep Number, Purple) | Same | Same | Same |

**Strategic note**: Retail partners are not Atlas customers in v1. They are downstream stakeholders whose satisfaction drives carrier retention. If Atlas helps carriers improve SLA performance with Ashley, Ashley rewards the carrier with more volume. That creates an indirect revenue incentive for carriers to invest in Atlas.

**Phase 4 option**: Build a retailer-facing portal where carriers share performance data with their retail partners voluntarily. This makes Atlas a collaboration layer, not just a carrier tool — and significantly increases switching costs.

---

### Carrier Associations and Networks

| Entity | Relevance | Engagement Strategy |
|--------|-----------|-------------------|
| NHFA (National Home Furnishings Association) | Member list = ICP prospect list; newsletter = awareness channel | Present at annual conference; offer member discount |
| Regional logistics associations | Secondary ICP source | Identify 2–3 by Q4 2026 |
| Carrier networks / 3PL hubs | Potential channel partners | Identify after first 10 customers; see if network relationships exist |

---

### Competitor Stakeholders

| Entity | Threat Level | Watch Signal |
|--------|-------------|--------------|
| DispatchTrack | Medium | Any announcement of analytics roadmap investment |
| Onfleet | Low-Medium | Any move into white-glove / big-and-bulky vertical |
| Bringg | Low (enterprise pricing) | Downmarket pricing announcement |
| New entrant (unfunded startup) | Medium | YC batch announcements; AngelList job postings in last-mile ops |

---

## Influence Map

```
PURCHASE DECISION                          PRODUCT ADOPTION

        David (VP/GM)                           Maria (Dispatch Lead)
              │                                        │
              │ approves budget                        │ daily champion
              │                                        │
              ▼                                        ▼
        CONTRACT SIGNED ──────────────────────▶ DAILY ACTIVE USE
              │                                        │
              │                                        │ trains and manages
              │                                        ▼
              │                                 Drivers / Crew Leads
              │                                 (exception logging)
              │                                        │
              │                                        ▼
              └────────────────────────────────▶ DATA QUALITY
                                                        │
                                                        ▼
                                                 FACR IMPROVEMENT
                                                        │
                                                        ▼
                                                 RENEWAL DECISION ◀──── David
```

**Key insight**: David makes the purchase decision but Maria makes the product work. If we focus on David first and Maria's experience degrades, we win the sale and lose the renewal.

---

## Stakeholder Engagement Strategy

### Maria (Dispatch Lead) — Primary User

**Goal**: Make her a daily power user within 14 days of onboarding.

| Channel | Frequency | Content |
|---------|-----------|---------|
| Onboarding call | Once | Walk through Morning Brief + exception workflow together |
| In-product tooltips | On first use | Contextual guidance for key features |
| Slack / email check-in | Week 1 and Week 2 | "How's the morning brief working? Any blockers?" |
| 30-day review call | Once | Exception log completeness audit; FACR baseline discussion |

---

### David (VP of Operations) — Economic Buyer

**Goal**: Give him the numbers he can use in his next SLA meeting.

| Channel | Frequency | Content |
|---------|-----------|---------|
| Demo | Once (pre-purchase) | Focus on FACR trend + partner report + ROI calculator |
| Onboarding summary | Week 2 | "Here's what your team has logged so far; here's the first FACR snapshot" |
| Monthly email digest | Monthly | FACR trend, exception rate, top patterns identified |
| QBR (Quarterly Business Review) | Quarterly | Full performance review; expansion conversation |

---

### Marcus (Crew Lead) — Field User

**Goal**: Get him logging exceptions in < 60 seconds within his first week.

| Channel | Frequency | Content |
|---------|-----------|---------|
| Mobile onboarding (in-app) | First login | 3-step walkthrough of exception logging |
| Dispatch-led training | Week 1 | Maria shows Marcus how to use the app |
| Exception log confirmation | Every log | In-app confirmation: "Exception logged. Dispatch notified." |
| Weekly FACR digest (mobile push) | Weekly | "Your FACR this week: 94%. Team average: 87%." |

---

### Retail Partners — Indirect Stakeholders

**Goal**: No direct engagement in v1. Long-term, make them aware that carriers using Atlas are better SLA partners.

**v1 action**: Mention "partner accountability report" in carrier demos to signal future value. No retail partner outreach until the feature is built.

---

## Internal (Atlas Team) Stakeholder Notes

In the early stage, the Atlas "team" is small. The stakeholder map is primarily external. As the team grows:

| Function | Primary Stakeholder Relationship |
|----------|----------------------------------|
| Founder / PM | Maria (primary user), David (buyer), carrier associations (GTM) |
| Engineering | Maria (feature prioritization), drivers (mobile UX feedback) |
| Customer Success (future hire) | Maria and David (retention, expansion) |
| Sales (future hire) | David (outbound target), retail partner networks (channel) |
