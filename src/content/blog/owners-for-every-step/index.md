---
title: "Every workflow needs an owner"
description: "Automation that nobody owns decays quietly. Why we made ownership a required field, and what owners actually do each week."
date: 2026-08-18
topic: Product
author: Clara Novak
coauthors: [Lena Fischer]
cover: ./cover.jpg
coverAlt: "Two white shutters on a plain sage-green wall"
coverCredit:
  name: "Jan van der Wolf / Pexels"
  url: "https://www.pexels.com/photo/35597467/"
tags: [ownership, governance]
---

Last quarter we looked at every workflow that had been switched off by a customer after running for more than a month. We wanted to know why automation dies.

The answer was not bugs or bad models. In 71% of cases, the workflow had no clear owner. The person who built it had changed teams, the process it automated had changed underneath it, and nobody noticed until a customer did.

So from this month, every workflow in Flow has a required owner. Here is why, and what we expect owners to do.

## Automation decays

A workflow encodes a process as it was on the day someone built it. Processes move. Pricing changes, a new region opens, the refund policy gets stricter. Each change is small. None of them break the workflow outright. They just make it slightly wrong, and slightly wrong at scale is how you end up emailing 3,000 customers the old price.

The fix is not more testing. It is someone whose job includes noticing.

## What an owner does

We asked the customers with the healthiest workflows what their owners actually do. The answers were consistent and surprisingly light:

- **Reads ten runs a week.** Not the dashboard, the runs themselves. Ten is enough to spot drift.
- **Reviews every approval request that got a "no".** A rejected agent decision is a policy line waiting to be written.
- **Gets the failure alerts.** Owners are paged, not a shared inbox.
- **Signs off on edits.** Anyone can propose a change; the owner publishes it.

That is about an hour a week for a busy workflow and ten minutes for a quiet one.

## What changed in Flow

Ownership is now a first-class field, and a few features hang off it:

1. **Required on publish.** You can't publish a workflow without naming an owner, and the owner must be an active member of the workspace.
2. **Handover on departure.** When an owner is deactivated, Flow asks their manager to pick a new one before any of their workflows can be edited.
3. **Weekly digest.** Every Monday, owners get a short summary: runs, failures, approvals declined and anything that changed in the connected apps.
4. **Stale workflow warnings.** If an owner hasn't opened a workflow in 60 days, Flow nudges them, then their manager.

## Ownership is not blame

We worried that a named owner would make people reluctant to build. The opposite happened in our pilot. Teams built more workflows, because it was finally clear who to ask about each one, and who could say yes to a change.

Tidewater, who run forty workflows across four teams, put it well in their customer story: every one of them has an owner and an audit trail. That combination is what lets a COO sleep at night while agents run the refunds.
