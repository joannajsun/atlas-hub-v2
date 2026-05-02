# User Personas
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*Version 1.0 | May 2026 | Author: Joanna Sun*

---

## Overview

Three personas shape Atlas Hub 2.0. They have different goals, different relationships to data, and different definitions of a good day. Every feature decision should be tested against all three — but Persona 1 is the primary user, and her daily workflow is the product's core.

---

## Persona 1 — The Dispatch Lead (Primary User)

**Maria Chen, 36**
Dispatch Manager, Bay Area Regional Carrier
8 years in logistics, 4 years managing dispatch

> *"I know something's going to go wrong today. I just don't know which stop yet."*

### About Maria
Maria runs dispatch for a carrier handling ~180 white-glove deliveries per day across Bay Area furniture and appliance routes. She manages 12 drivers and 3 delivery crews. She is the connective tissue of the operation — the person drivers call when an elevator is broken, the person retail partners call when a customer complains, the person her GM asks when he wants to know why last week's numbers were off.

Maria is not a technology skeptic. She's used Samsara, she knows Onfleet. She's skeptical of tools that create more work than they save, because her attention is a limited resource.

### Her Day
- 5:45am: Arrives at warehouse. Checks phone for overnight driver messages.
- 6:00am: Reviews today's manifest in TMS. Makes mental note of anything risky.
- 6:15am: Calls or texts any customers she's worried about. No system for this — it's based on memory and gut.
- 6:45am: Routes leave. Spends the next 8 hours reactive — fielding driver calls, rescheduling failures, answering retailer inquiries.
- 3:30pm: Enters exception notes into TMS (when she has time).
- 4:00pm: Her GM asks her why Route 7 had 3 failures. She knows why, but can't show him the data.

### Goals
- Prevent failures before they happen, not react to them after
- Know which routes are at risk every morning in under 5 minutes
- Have data to back up coaching conversations with underperforming crews
- Stop losing time to information that lives in her head instead of a system

### Frustrations
- "By the time I know a delivery failed, it's already too late to fix it today."
- "I know Driver Carlos has been struggling with furniture routes, but I can't prove it to HR."
- "We have the same access issues at 432 Oak Street every month. Nobody tracks it."
- "Our TMS is technically accurate but tells me nothing I can act on."

### Current Tools
- Proprietary TMS (older, form-heavy, not mobile-first)
- Google Sheets for scheduling and exception tracking
- iMessage group threads with drivers
- Samsara for truck locations

### What "A Good Day" Looks Like for Maria
She spends the morning proactively fixing problems that haven't happened yet. Fewer than 2 failures. Every exception has a logged reason. She leaves before 5pm.

---

## Persona 2 — The VP of Operations (Stakeholder / Power User)

**David Kim, 44**
VP of Operations, Regional Last-Mile Carrier
15 years in logistics, P&L owner for 3 regional markets

> *"I need to know if we're hitting SLAs. My retail partners are asking me every week."*

### About David
David oversees operations across Bay Area, LA Metro, and Dallas. He doesn't touch individual routes, but he owns the numbers: FACR, on-time rate, cost per delivery, and the health of relationships with his top 5 retail partners. His company has grown fast and the tooling hasn't kept up. He manages with weekly Excel reports that Maria's team assembles by hand.

David is the economic buyer. He approves software purchases. His primary concern is ROI — he will sign a contract if you can show him a credible path to reducing failed delivery costs.

### His Week
- Monday: Reviews last week's performance numbers. Manually compiled by Maria's team. Usually arrives Tuesday.
- Wednesday: Call with Ashley Furniture account manager. They ask about SLA performance on Q1. David doesn't have clean data. It's uncomfortable.
- Friday: Strategy meeting. Trying to decide whether to expand to Chicago. Doesn't have reliable unit economics to model it.

### Goals
- Real-time view of FACR, on-time rate, cost per delivery across all markets
- Data to support/defend SLA conversations with retail partners
- Spot which markets, routes, or retail partners are dragging down performance
- Make expansion decisions with actual data, not intuition

### Frustrations
- "We're flying blind on the things that actually matter for our contracts."
- "My retail partners have better visibility into our operations than I do."
- "It takes 2 days to get a performance report. By then, the week is over."

### Current Tools
- Excel/Google Sheets (assembled by ops staff)
- Occasional Samsara exports
- TMS reporting (limited)

### What "A Good Day" Looks Like for David
He opens Atlas Hub, sees FACR is 91% this week (up from 87% last week), knows it's because the Chicago access-issue protocol fix worked, and walks into the Ashley Furniture call with a slide pulled directly from the platform.

---

## Persona 3 — The Crew Lead / Senior Driver (Field User)

**Marcus Williams, 31**
Crew Lead / Senior Driver, Bay Area routes
5 years in white-glove delivery, CDL Class B

> *"I just need to know what I'm walking into before I get there."*

### About Marcus
Marcus leads a 2-person crew on furniture and appliance routes. He takes pride in his FACR — he's at 94%, one of the best on the team. He's frustrated when failures happen that could have been prevented with better information: the customer who was at work all day, the apartment with the broken elevator, the sectional sofa that doesn't fit through a 28" doorway.

Marcus is not a power user. He will not read a dashboard. He needs information surfaced to him at the right moment — before he leaves the warehouse, and when a stop goes wrong.

### His Day
- 7:00am: Reviews manifest on his phone. Usually a PDF. Notes are incomplete.
- 7:30am: Leaves warehouse. Finds out about elevator outage at stop 3 via text from a previous crew.
- 2:15pm: Delivery fails — customer not home. Has to call dispatch to log it.
- 4:30pm: Returns to warehouse. Spends 20 minutes writing up exception notes.

### Goals
- Know about access issues, customer confirmations, and special notes BEFORE arriving
- Log exceptions quickly from his phone without paperwork
- See his own performance stats — he takes pride in his numbers

### Frustrations
- "Half the time the notes in the manifest are wrong or missing."
- "I had to carry a king mattress up 6 flights because nobody checked if the elevator was working."
- "It takes me 20 minutes to write up failures at the end of the day. That's my time."

### What "A Good Day" Looks Like for Marcus
Every stop has accurate access notes and a confirmed customer. When something goes wrong, he logs it in 60 seconds on his phone. He can see his FACR at the end of the week.

---

## Persona Prioritization

| Persona | Build Priority | Why |
|---------|---------------|-----|
| Maria (Dispatch Lead) | **Primary** | Uses Atlas daily, drives adoption, feels pain most acutely |
| David (VP of Ops) | **Secondary** | Economic buyer, needs reporting layer, less daily touchpoints |
| Marcus (Crew Lead) | **Tertiary** | High-impact if done right, but mobile-only, simpler feature set |

> **Design principle**: Every feature must answer "what does Maria do with this at 6am?" If it doesn't make her morning better, reconsider it.
