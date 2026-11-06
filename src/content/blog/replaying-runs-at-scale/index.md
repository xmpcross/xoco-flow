---
title: "Replaying a run, step by step"
description: "How we record enough of every run to replay it later against a new version of a workflow, without calling a single external API."
date: 2026-08-05
topic: Engineering
author: Jun Seo
cover: ./cover.jpg
coverAlt: "A bright office atrium under a large glass skylight, with people working below"
coverCredit:
  name: "Richard L / Pexels"
  url: "https://www.pexels.com/photo/31248449/"
tags: [replay, testing]
---

The most used button in Flow's editor isn't Publish. It's **Replay on past data**, which takes a draft of a workflow and runs it against real runs from the last thirty days to show what would have been different.

Replay sounds simple. It turned out to be one of the harder things we have built, because a faithful replay has to answer a strange question: what would the outside world have said, if we had asked it something slightly different?

## Record the boundary, not the world

A run touches many systems. Replaying it against the live systems would be slow, would cost money and, for anything that writes, would be dangerous. So we don't. Instead, we record every exchange at the boundary between Flow and the outside world:

- every request a connector sends, with its response
- every model call, with its prompt, parameters and output
- every human input, such as an approval or a form reply
- the clock, so time-based conditions evaluate the same way

The recording is a tape. Replay plays the workflow forwards and serves responses from the tape instead of the network.

## When the draft asks a new question

If the draft workflow is identical to the original, every request matches the tape and the replay is exact. The interesting case is when it isn't.

Say the draft adds a step that looks up the customer's plan in Stripe. The original run never made that request, so the tape has no answer. For reads, Flow can make the call for real against the current data, clearly labelled as live. For writes, it never does. Instead, the step is shown as **would have run**, with the inputs it would have sent.

For model calls, a changed prompt always means a real call to the model, because the whole point of replay is to see what the new policy decides. We run those calls in a sandbox with every tool disabled, so the agent can choose actions but none of them happen.

## Keeping tapes cheap

At 48 million steps a month, tapes add up. Three things keep storage manageable:

1. **Deduplication.** Large responses, like a list of 500 invoices, are stored once by content hash and shared between every run that saw them.
2. **Redaction at write time.** Fields marked sensitive are replaced with stable tokens before the tape is stored, so replays still match on them without keeping the values.
3. **Retention by plan.** Tapes are kept for 30 days on Team and up to a year on Enterprise, then deleted along with their run data.

The median tape is 14 KB compressed. Agent runs are larger, around 60 KB, mostly prompts.

## What replay is for

Teams use replay in three ways, roughly in this order of frequency:

- **Before publishing an edit**, to see which past runs would change and how.
- **When tuning an agent policy**, to check that a new rule fixes the bad decision without breaking good ones.
- **During incidents**, to reproduce exactly what a run saw, step by step, without guessing.

The last one is why we built it. Before replay, debugging a run that went wrong three days ago meant reading logs and imagining. Now it means pressing play.
