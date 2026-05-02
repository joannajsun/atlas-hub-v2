# Risk Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## High Priority Risks

**Exception logging adoption is too low to power analytics** *(Likelihood: 4, Impact: 5)*
If drivers don't log consistently (< 80% capture rate), the analytics layer has garbage-in data. Maria and David stop trusting the FACR numbers. The entire value proposition collapses. Mitigation: design the logging flow to complete in ≤ 3 taps, make non-submission visible to dispatch (missing log = flagged stop), track exception log completeness as P0 metric from week 1, CSM alert at < 80%.

**Founder-only engineering is a single point of failure** *(Likelihood: 4, Impact: 4)*
Any illness, burnout, or distraction halts the roadmap. Mitigation: document architecture decisions from day one, keep v1 architecture deliberately simple, plan first engineering hire by Q4 2026 if revenue supports it. Don't commit to customer SLAs that a single engineer can't maintain.

**Mobile UX isn't good enough to retain drivers** *(Likelihood: 4, Impact: 3)*
Marcus is the primary exception logging source. If mobile web is slow or unreliable on 3G, drivers call dispatch instead — breaking the data collection loop. Mitigation: mobile-first design from day one (not "responsive web as afterthought"), test on real devices in real conditions.

**Morning Brief shows stale or incorrect data** *(Likelihood: 3, Impact: 4)*
One bad data morning can set adoption back weeks. Maria is data-skeptical of new tools — one inaccurate brief and she's back to her TMS. Mitigation: show data freshness timestamp, automated alert if data source hasn't updated in > 30 minutes, manual refresh button.

---

## Medium Priority Risks

**Sales cycle longer than expected (> 4 months average)** — Start outbound conversations at Week 10, before launch. Use alpha/beta users as internal champions. Offer monthly contracts to reduce commitment barrier.

**First 5 customers too concentrated** — Losing one of 5 is a 20% ARR hit. Maintain deep founder relationships with every early customer. 30-day and 90-day check-ins formalized, not ad hoc.

**Pricing model too low / carriers resist higher price** — ROI calculation is central to every demo: Atlas at $1,400/month pays for itself in under 1 week of prevented failures at 200 deliveries/day. Charge from day 1 to test willingness to pay.

**Scope creep delays v1 launch** — Hard must-have list. Any addition to v1 scope requires dropping something else. Set a launch date and don't let it slip for should-have features.

---

## Most Critical

Risk P1 (exception logging adoption) is the one I think about most. If drivers don't log, the intelligence layer doesn't exist. Validating this in alpha — with real drivers on real routes — is the first thing that matters.
