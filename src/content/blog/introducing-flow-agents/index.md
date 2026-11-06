---
title: "Introducing Flow Agents: steps that read, decide and write back"
description: "Agents are now a step type in every workflow. Give one a goal, the tools it may use and the policy it must follow, and it works the queue for you."
date: 2026-09-29
topic: Product
author: Clara Novak
cover: ./cover.jpg
coverAlt: "Two arched windows set into a plain green wall"
coverCredit:
  name: "Simeon Galabov / Pexels"
  url: "https://www.pexels.com/photo/34731531/"
tags: [agents, launch]
featured: true
---

Until today, every step in a Flow workflow did one fixed thing. Create the record, send the message, wait for the approval. That covers a lot of work, but not the part where someone has to read something and decide what it means.

Flow Agents fill that gap. An agent is a step that can read, reason about what it found and take one of several actions you allow, inside the rules you write. It is available on every plan from today.

## What an agent step is made of

Every agent has three things, and you can see all of them on the canvas:

- **A goal.** One or two sentences about what done looks like, such as "Every overdue invoice has a reminder or a reason it doesn't".
- **Tools.** The connected apps and actions the agent may use. If an action isn't on the list, the agent can't take it.
- **A policy.** Plain-language rules, like "Never offer a discount above 10%" or "Hold anything for a strategic account". The agent cites the rule behind each decision in the run log.

There is no prompt engineering screen. If you can write a good handover note for a new colleague, you can configure an agent.

## Limits, not hope

The question we heard most in the beta was simple: what stops it doing something I didn't want?

The answer is limits you set per tool. A refund tool can be capped at an amount. A send-email tool can require approval for a list of domains. Anything above a limit pauses the run and asks a person in Slack, Teams or email. Approvers see what the agent found, what it wants to do and the rule it followed, so the decision takes seconds.

> In the beta, agents asked for approval on 7% of decisions. Approvers said yes to 94% of those, and the rest became new policy lines.

## Every decision on the record

Agent steps write the same run log as every other step, with more detail. For each decision you can see the records the agent read, the options it considered, the one it chose and why. You can replay a run against a new version of the policy before you publish it, which is how most teams tune their agents in the first week.

## What teams built first

Sixty teams used agents during the beta. The most common first jobs were:

1. **Collections.** Draft reminders for overdue invoices in the company's tone of voice, and hold anything sensitive.
2. **Ticket triage.** Read new tickets, attach account context and route them, with a two-line summary for whoever picks it up.
3. **Lead qualification.** Check new sign-ups against the ideal customer profile and route the good ones to sales within minutes.

None of these are new ideas. What changed is that each one became a single step instead of a branching tree of conditions that nobody wanted to maintain.

## Getting started

Open any workflow, add a step and choose **Agent**. The templates gallery has fifteen agent workflows to start from. Agent steps are billed as regular steps, and the model cost is included up to your plan's limit.

We'll publish a guide to writing agent policies next month. Until then, the best advice from the beta is short: start narrow, read the first fifty runs, and turn every surprise into a policy line.
