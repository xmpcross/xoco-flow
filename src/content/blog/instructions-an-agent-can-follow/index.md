---
title: "Writing instructions an agent can follow"
description: "Agent policies are just instructions. The ones that work read like a good handover note: specific, ordered, and honest about the edge cases."
date: 2026-07-09
topic: Guides
author: Owen Brooks
cover: ./cover.jpg
coverAlt: "A cup of coffee, a laptop and pencils on a white desk, seen from above"
coverCredit:
  name: "Cup of Couple / Pexels"
  url: "https://www.pexels.com/photo/7660552/"
tags: [agents, policies]
---

As a solutions engineer, I read a lot of agent policies. The good ones look nothing like prompts. They look like the note a careful person leaves for whoever covers their desk while they are away.

Here is what separates the policies that work from the ones that produce surprises.

## Say what done looks like

Start with the outcome, not the steps. "Reply to the customer" is a step. "The customer knows whether their refund was approved and when the money will arrive" is an outcome. An agent that knows the outcome can handle cases your steps didn't anticipate.

## Be specific where it matters

Vague words are where agents and people disagree. Compare:

- "Offer a discount to unhappy customers."
- "If the customer mentions cancelling and has been with us more than a year, offer 20% off the next three months. Never offer more than once per customer."

The second is longer and much easier to follow. Numbers, time periods and named fields beat adjectives every time.

## Put the rules in order

When two rules conflict, the agent needs to know which wins. Write your rules in priority order and say so at the top. A common structure is:

1. Legal and safety rules.
2. Limits on money and access.
3. How to treat specific customers or segments.
4. Tone and style.

## Name the edge cases you already know

Every process has cases experienced staff handle without thinking: the customer who is also an investor, the order paid by bank transfer, the region with different tax rules. Write them down. If you don't, the agent will treat them like everyone else, which is exactly what a new hire would do.

## Tell it when to stop

The most valuable line in any policy is the one that says when to ask a person. Good examples:

- "If the customer mentions a lawyer or a regulator, stop and hand over."
- "If two records disagree about the amount, don't pick one. Ask."
- "If you're not sure which rule applies, ask, and say which rules you considered."

## Test with the hard ones

Before publishing, replay the policy against the ten hardest runs you can find, not the ten most recent. Recent runs are mostly easy. The hard ones show you where the policy is silent.

## Keep it short enough to read

Long policies are not better policies. If yours runs past a page, split the workflow: one agent to classify, another to act on each class, each with a focused policy. Smaller policies are easier to test, easier to review and easier for the next owner to understand.
