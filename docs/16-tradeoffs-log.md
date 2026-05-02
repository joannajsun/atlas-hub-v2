# Tradeoffs Log
**Atlas Hub 2.0 — Last-Mile Delivery Operations Platform**
*May 2026 | Joanna Sun*

---

## Purpose

The decisions I chose *not* to make are as revealing as the ones I did. This document records significant product decisions, what was rejected, and why.

---

## Web-first mobile over native app

Built a mobile-responsive web app for drivers instead of native iOS/Android. Faster iteration (no App Store review lag), no installation friction for drivers, validates workflows before committing native build cost. What I gave up: push notifications are degraded on iOS Safari, offline logging needs Service Worker complexity, no App Store presence as a trust signal. Revisit if driver exception logging time is consistently > 3 minutes or < 50% of drivers log without calling dispatch.

---

## Exception intelligence over route optimization

Built exception analytics as the core differentiator instead of a first-party route optimizer. Route optimization is a solved problem — Routific and OptimoRoute do it well, building parity is expensive, and it doesn't differentiate. Exception intelligence is unsolved for white-glove delivery, and it directly moves FACR. Using a third-party routing API in v1. What I gave up: customers who want "everything in one tool" may look elsewhere. Revisit if > 30% of lost deals cite missing route optimization.

---

## Maria (dispatch lead) over David (VP)

Optimized v1 for Maria's daily 6am workflow instead of David's executive reporting layer. Bottom-up adoption converts faster in SMB logistics. Maria's behavior determines whether David renews. You can't build the executive dashboard without collecting the underlying exception data first anyway. What I gave up: a David-first demo might shorten sales cycles. Mitigation: show David a preview of his dashboard in the demo even before it's built.

---

## Single warehouse in v1

One depot/warehouse per carrier account. Our ICP (15–80 truck regional carrier) frequently operates from one warehouse. Multi-warehouse adds significant data model and UX complexity without solving the core problem. What I gave up: can't serve David's multi-market vision until Phase 3. First deal lost because of single-warehouse limitation is the trigger to accelerate this.

---

## Manual data entry over TMS integration

v1 requires CSV upload or manual entry — no live TMS integrations. Each TMS integration is 2–4 weeks of engineering. Manual entry validates that the product is worth the friction cost before investing in integrations. Carriers who love the product tolerate some friction. What I gave up: "too much manual work" is a real objection. Trigger to revisit: > 25% of churned or lost deals cite it.

---

## No ML prediction in v1

Historical analytics only — no "this stop has a 40% chance of failing" predictions. Prediction requires training data. Building an ML model without it produces low-confidence predictions that erode trust. "This address had elevator access issues twice in 6 months" is almost as actionable as a probabilistic score. ML is Phase 4, after 500K+ exception records. What I gave up: "AI-powered" positioning in sales conversations.
