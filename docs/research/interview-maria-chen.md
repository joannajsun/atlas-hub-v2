# User Interview — Maria Chen
**Date:** May 2, 2026
**Persona:** Dispatch Manager, regional white-glove carrier, Bay Area
**Interviewer:** Joanna Sun (PM)
**Format:** Simulated interview, 11 questions

---

## Raw Notes

**Tracking today**
Uses a legacy TMS that updates only when drivers manually scan. Supplements with a personal Google Sheet color-coded by driver (green/yellow/red). TMS status is unreliable — she can't tell if a stop is done or just not scanned yet.

**Typical day**
In at 6am for pre-departure checks. Late add-ons from clients (night before) cause routine chaos. Once trucks leave at ~7:30am, day is 60% reactive — driver calls, customer calls, "where's my couch." Fires she didn't see coming.

**Last time she looked at failure metrics**
Bad Tuesday last week — 3 failed deliveries, client called her manager. Pulled a TMS report (only shows completed vs. attempted, no reason code). Spent 45 min piecing together what happened from texts + TMS + her sheet. Client had their own version of events by then.

**Where things fall through the cracks**
Access issues — elevator restrictions, narrow hallways, building codes. Should be captured at booking by the retailer. Isn't. Driver finds out standing in the lobby.

**Decision-making process**
Calls the driver first. Then checks TMS. Then looks at original delivery order. 3-4 sources, no single screen.

**Self-built workarounds**
Google Sheet (manual, color-coded). Shared Notes doc with lead driver for real-time stop updates because TMS is too slow.

**Information needed to act**
Driver location, stops remaining, reason for issue, whether customer has been contacted. Without all 4, she's guessing.

**Who else is involved**
Small issues: just Maria. SLA impact or vehicle issues: ops manager. Client-facing escalations: manager handles the call, Maria feeds the info.

**Prioritization method**
Time-window first (customer's delivery window). Then complexity (quick vs. 45-min situation). Not a formal system — "just experience."

**Data confidence**
No dashboard. Knows she has good data when driver location + timestamp + customer report all line up. Flags discrepancies herself. Manual pattern recognition.

---

## Pain Points

| Pain | Category |
|------|----------|
| TMS only updates on manual driver scan | Data lag |
| No reason codes on failed deliveries | Exception blindness |
| 3-4 sources to piece together one incident | Fragmentation |
| Access issues not captured at booking | Upstream data gap |
| Learns about problems when customer calls | Reactive ops |
| Workarounds: sheet + Notes doc | Unmet product need |

---

## Key Insight

Maria doesn't have a data problem. She has a **signal lag problem** — by the time she knows something is wrong, it's already a customer complaint. Her coping mechanism is manual pattern recognition across fragmented sources.

---

## Synthesis (PM)

**Core problem:** Maria can't see a delivery going wrong until it's already wrong. By the time she has the full picture, the customer has already called.

**Exception root cause blindness:** She knows a delivery failed. She doesn't know why. TMS has no reason codes — she has to call the driver every time. Patterns never surface.

**Workarounds = product spec:** She built a color-coded Google Sheet and a shared Notes doc with her lead driver. That's Atlas, built with duct tape. When someone invents their own version of your product, that's the strongest validation you can get.

**Assumption check:** Went in expecting a data visibility gap. Found a timing gap — data exists, it just arrives too late and in pieces. Reactive ops is the result, not the cause.

---

## Open Questions

- How does David (ops director) see this same problem from above?
- Is the access-issue-at-booking gap solvable by Atlas or is it upstream (retailer's responsibility)?
- What does "good" look like to Maria — does she want a dashboard or just fewer phone calls?
- How many dispatch managers at a typical carrier? Is Maria a team of 1 or 5?
