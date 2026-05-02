# Competitive Analysis
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## The Gap

The last-mile delivery software market splits across three layers — visibility (where's my truck), optimization (how do I sequence stops), and intelligence (why are deliveries failing). No one has built the intelligence layer for white-glove delivery. That's the opening.

---

## Competitors

### Samsara
Fleet telematics. Excellent real-time GPS, driver safety scoring, vehicle diagnostics. Used by a lot of regional carriers including the ones I've spoken to — one dispatch manager described it as "great for knowing where my trucks are, useless for knowing why a delivery failed." No delivery-level data, no exception workflow, no customer confirmation.

**Gap**: Samsara knows the truck. Atlas knows the delivery.

---

### Onfleet
Last-mile delivery management, primarily built for food delivery and pharmacy. Clean UX, driver mobile app with proof of delivery, real-time customer notifications. Carriers in the white-glove space use it because it's modern and affordable — but it was designed for parcel, not furniture. No assembly workflow, no multi-step delivery protocols, no crew-level analytics, basic exception handling ("delivery attempted" logged, that's it).

**Gap**: Onfleet handles the delivery moment. Atlas handles the 4 hours before and after.

---

### DispatchTrack
The closest competitor on vertical focus. Built for white-glove — understands appointment windows, multi-stop, assembly. Driver app, customer notifications, ERP integrations for furniture/appliance. Analytics are weak — good at "what happened," not "why" or "what will happen." UX is dated. Pricing skews mid-market.

**Why this matters**: DispatchTrack validated that white-glove delivery needs purpose-built tooling. Their analytics gap is significant and their UX is a liability.

---

### Bringg
Enterprise last-mile orchestration — Walmart, Home Depot tier. Comprehensive platform, real analytics capability. Minimum contract ~$200–500K/year, 6–12 month implementations. Doesn't exist for the $5–50M regional carrier.

**Gap**: Bringg solves the problem at enterprise scale. That's our market opportunity.

---

## Feature Matrix

| Feature | Samsara | Onfleet | DispatchTrack | **Atlas Hub 2.0** |
|---------|---------|---------|--------------|------------------|
| Real-time truck tracking | ✅ | ✅ | ✅ | ✅ |
| Driver mobile app | ✅ | ✅ | ✅ | ✅ |
| Pre-delivery confirmation workflow | ❌ | ❌ | Partial | ✅ |
| Exception logging with reason codes | ❌ | Partial | Partial | ✅ |
| Exception pattern analytics | ❌ | ❌ | ❌ | ✅ |
| Crew FACR tracking | ❌ | ❌ | ❌ | ✅ |
| Morning Operations Brief | ❌ | ❌ | ❌ | ✅ |
| Retail partner performance report | ❌ | ❌ | ❌ | ✅ |
| SMB pricing (<$2K/month) | ✅ | ✅ | ❌ | ✅ |

---

## Positioning

**Where we win**: Exception intelligence, crew FACR analytics, Morning Brief, white-glove workflows — none of these exist in competing tools.

**Where we're catching up**: Route optimization (third-party API in v1), native mobile app (v2).

**The defensibility**: Exception patterns, FACR benchmarks, and partner scoring get more valuable with more data. The longer a carrier uses Atlas, the smarter the platform gets for their specific routes and buildings.
