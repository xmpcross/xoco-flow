---
title: "What 2,000 workflows taught us about automation"
description: "We studied the first 2,000 workflows our customers put into production. The ones that lasted had a few things in common, and complexity wasn't one of them."
date: 2026-06-24
topic: Product
author: Clara Novak
cover: ./cover.jpg
coverAlt: "People working at desks, seen through the grid of a large industrial window"
coverCredit:
  name: "Masi / Pexels"
  url: "https://www.pexels.com/photo/20069166/"
tags: [research, product]
---

In May, Flow passed 2,000 workflows that had been in production for at least ninety days. We took the opportunity to look at all of them and ask a simple question: what do the workflows that last have in common?

We grouped them by whether they were still running, how often they were edited and how many people interacted with their runs. A few patterns stood out clearly.

## Small workflows outlive big ones

The median surviving workflow has seven steps. Workflows with more than twenty steps were three times more likely to be switched off within a year. When we read the big ones, most were several processes glued together, so a change to one part risked breaking the others.

The lesson we now give every customer: one workflow per outcome. If a workflow does two things, it should probably be two workflows that call each other.

## The first workflow is rarely the best one

Teams usually start with the process that annoys them most. That is a fine way to learn Flow, but it is often not the process with the most value. Across our sample, the workflows with the biggest time savings were usually a team's third or fourth, built once they understood what automates well.

The best candidates shared three traits: they happened often, they followed rules that could be written down, and they involved waiting for something.

## Approvals make automation last longer

This surprised us. Workflows with at least one approval step survived longer than fully automatic ones, not shorter. Our interpretation is trust. An approval keeps a person in the loop, so the team keeps paying attention, notices drift and fixes it. Fully automatic workflows were more often forgotten until they broke.

## Edits are healthy

We expected stable workflows to be rarely edited. The opposite was true. Long-lived workflows were edited about twice a month, usually small changes to a policy or a message. Workflows that were never edited after launch were the most likely to be switched off, often because the process they automated had moved on without them.

## Where agents help most

About a third of the workflows used an agent step. Agents were most useful where a decision used to block the process: classifying a ticket, judging whether a lead fits, deciding whether a receipt matches a transaction. They were least useful as a replacement for simple rules, where a condition step is cheaper, faster and easier to read.

## What we're changing

These findings are already shaping the product:

- The composer now suggests splitting a description into separate workflows when it detects more than one outcome.
- Every new workflow template includes an approval step, which you can remove.
- The weekly owner digest highlights workflows that haven't been edited in ninety days, as a prompt to check they still match reality.

We'll repeat this study when we reach 10,000 workflows. If you want to know how your own workflows compare, ask your customer success manager for a review.
