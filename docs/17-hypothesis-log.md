# Hypothesis Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

Every product decision rests on assumptions. Writing them as falsifiable hypotheses forces me to be clear about what I'm actually betting on — and how I'll know if I'm wrong.

Format: belief → validating evidence → counter-signal. Status: `Untested` | `Testing` | `Validated` | `Invalidated`

---

**H-001: The problem is real**
Regional white-glove carriers are losing significant revenue to failed first-attempt deliveries, and the root cause is a tooling/data problem, not a workforce problem. *Validates if*: ≥ 3 dispatch leads in interviews confirm exception rate > 15% and attribute it to information gaps. *Counter*: carriers think their exception rate is acceptable. Status: `Partially Validated` — early conversations confirm the problem, formal ICP interviews pending.

**H-002: The Morning Brief gets used**
Dispatch leads will use a single-screen brief as their primary planning tool if it genuinely replaces information they currently get from 3+ sources. *Validates if*: ≥ 80% open it before 8am on workdays after 30 days. *Counter*: opens once, finds it incomplete, reverts to TMS. Status: `Untested` — test in alpha.

**H-003: Drivers will log exceptions in < 60 seconds**
If the mobile UX is optimized for 3-tap completion with pre-set reason codes, drivers will log exceptions consistently without it feeling like extra work. *Validates if*: median time-to-log < 60 seconds, ≥ 90% exception capture rate. *Counter*: median > 3 minutes or drivers still call dispatch instead. Status: `Untested` — most important thing to test in alpha.

**H-004: Maria champions the purchase to David**
If a dispatch lead adopts Atlas and sees value, she will internally champion the purchase without requiring founder-led enterprise sales to the VP. *Validates if*: ≥ 2 of first 5 deals initiated by dispatch lead, not VP outreach. *Counter*: all deals require VP-level outreach regardless of dispatch enthusiasm. Status: `Untested` — track in CRM from day 1.

**H-005: Atlas improves FACR**
Carriers using Atlas for 90+ days will show ≥ 5pp FACR improvement vs pre-Atlas baseline. *Validates if*: cohort analysis at Day 90 shows average delta ≥ 5pp. *Counter*: FACR is flat or improves only 1–2pp (within normal variance). Status: `Untested` — the most important hypothesis. Everything else is in service of this one.

**H-006: Exception data creates switching costs**
After 6 months of use, accumulated exception history (address flags, FACR trends, partner scoring) makes Atlas significantly more valuable than a fresh competitor install. *Validates if*: customers explicitly cite historical data when asked why they wouldn't switch. Status: `Untested` — not testable until Q1 2027 at earliest.

**H-007: Carriers will pay $1,000–1,500/month**
The ROI story (FACR improvement saves multiples of the subscription cost) is strong enough that price resistance is minimal at our target price points. *Validates if*: ≥ 5 customers sign at ≥ $1,000/month without significant negotiation. *Counter*: multiple customers compare Atlas to free tools or ask for < $500/month. Status: `Untested` — charge nominal fee in beta to test early.
