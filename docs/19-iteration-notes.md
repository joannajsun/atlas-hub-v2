# Iteration Notes
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Purpose

This is a living document. It captures product direction changes, decisions revised after new evidence, and lessons learned from user feedback, failed experiments, and market signals. A good iteration log shows that the product is being shaped by reality, not just the original plan.

Each entry follows a structured format:
- **What changed** (the decision or direction)
- **Why it changed** (the evidence or trigger)
- **What we gave up** (the cost)
- **What we learned** (the generalizable insight)

---

## Pre-Launch Iterations

### I-001: Shifted target persona from VP/GM (David) to Dispatch Lead (Maria)
**Date**: May 2026 (product strategy phase)

**What changed**: Original product concept centered on the executive reporting layer — David's cross-market FACR dashboard, SLA scorecards, partner reports. We shifted the primary persona to Maria (Dispatch Lead).

**Why it changed**: In early conversations with logistics operators, it became clear that:
1. VPs don't have time to evaluate and champion new tools — that's dispatch's job
2. The acute daily pain is in dispatch operations (Maria's world), not executive reporting (David's world)
3. You can't build a compelling executive dashboard without first collecting the underlying operational data — which only Maria generates

**What we gave up**: A product that leads with David's language in sales conversations ("real-time FACR across all your markets") is more immediately legible to the economic buyer.

**What we learned**: In B2B SMB, the user and the buyer are often different people. Build for the user first — they are the ones who will determine whether the product actually works, and their advocacy is what makes the buyer sign.

---

### I-002: Added tradeoffs log as a first-class PM artifact
**Date**: May 2026 (documentation phase)

**What changed**: Added `16-tradeoffs-log.md` to the PM documentation suite as a standalone document.

**Why it changed**: A PM artifact suite that only documents what was built (PRD, roadmap) misses the thinking that shaped the product. What you chose *not* to build — and why — is as revealing as what you built.

**What we gave up**: Time spent writing the tradeoffs log could have gone toward earlier prototyping.

**What we learned**: The tradeoffs log is where PM reasoning is most visible. It's the document that separates "this person executed a spec" from "this person made considered decisions under uncertainty."

---

### I-003: Descoped native mobile app from v1 to v2
**Date**: May 2026 (scoping phase)

**What changed**: Early thinking included a native iOS/Android app as part of v1. Moved to Phase 3.

**Why it changed**: Native app development doubles the platform surface in v1. The core workflows (exception logging, confirmation checklist) are achievable on mobile web with enough UX investment. The incremental value of native (push notifications, offline, biometrics) is real but not v1-critical.

**What we gave up**: Better driver experience on day 1. Push notifications for dispatch alerts are degraded on iOS Safari.

**What we learned**: Start with the minimum surface that validates the workflow. Build the native shell after the workflow is proven, not before.

---

### I-004: Added hypothesis log as a structured assumption tracker
**Date**: May 2026 (documentation phase)

**What changed**: Added `17-hypothesis-log.md` to the documentation suite.

**Why it changed**: Every product decision rests on assumptions. Without writing them down as falsifiable hypotheses, it's impossible to know what you're learning from user behavior — or when to change direction.

**What we learned**: The most important hypothesis (H-003: will drivers log exceptions in < 60 seconds?) can't be answered with research. It requires a working prototype in the hands of real drivers. The hypothesis log forces us to identify which questions require more desk research vs. which require a shipped product.

---

## Placeholder: Post-Alpha Iterations

*The following entries will be filled in after the alpha phase (Weeks 5–8). Tracking them here in advance ensures we document learning as it happens, not retroactively.*

### I-005: [Alpha] Exception logging UX revision
**Date**: TBD (Week 6–7)
**What we expect to learn**: Whether the initial exception reason code list is the right set (too many? wrong categories?) and whether the mobile flow is actually completable in 60 seconds.
**How we'll know**: Session recordings + time-to-log data from alpha users.

---

### I-006: [Alpha] Morning Brief content revision
**Date**: TBD (Week 7–8)
**What we expect to learn**: Which sections of the Morning Brief Maria actually uses vs. ignores. Whether "unconfirmed stops counter" is the most useful piece or whether something else matters more at 6am.
**How we'll know**: User interview at end of alpha + feature engagement tracking.

---

### I-007: [Beta] Exception reason code taxonomy revision
**Date**: TBD (Week 10–11)
**What we expect to learn**: Whether the 9 reason codes in v1 cover the actual exceptions being logged, or whether there's a significant "other" category that reveals a missing code.
**How we'll know**: Distribution of reason codes in logged exceptions. If "other" > 20%, the taxonomy is incomplete.

---

### I-008: [Beta] Pricing model validation
**Date**: TBD (Week 14–15)
**What we expect to learn**: Whether beta users convert to paid at $800–$1,400/month, or whether there's significant price resistance at specific tiers.
**How we'll know**: Conversion rate from beta to paid, and at which tier.

---

## Format for Future Entries

When adding new iteration notes, use this format:

```
### I-XXX: [Brief description]
**Date**: [Month Year]
**Stage**: [Alpha / Beta / Post-launch / Quarter]

**What changed**: [The decision or direction that shifted]

**Why it changed**: [The evidence, user feedback, data, or market signal that triggered the change]

**What we gave up**: [The cost of the change — what's now harder, slower, or unavailable]

**What we learned**: [The generalizable insight for future decisions]
```

---

## Meta-Learning: What This Log Is For

The iteration notes document exists for three audiences:

1. **Future product team**: When a new engineer or PM joins, this log explains why the product looks the way it does — what was tried, what failed, what pivoted. It prevents relitigating decisions that were already made with evidence.

2. **Portfolio reviewers**: A PM who shows iterations made based on evidence is demonstrating the core skill. It's easy to write a PRD for a product that doesn't exist yet. It's harder to show how you changed course when reality disagreed with your assumptions.

3. **Yourself**: Product decisions feel obvious in hindsight. The iteration log preserves the uncertainty that existed at the time the decision was made — which is the only honest accounting of how product development actually works.
