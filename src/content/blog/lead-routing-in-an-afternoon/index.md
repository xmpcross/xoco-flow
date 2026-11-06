---
title: "Build lead routing in an afternoon"
description: "A step-by-step recipe for routing inbound leads by territory and fit, booking the first call and telling the rep, all within a few minutes of sign-up."
date: 2026-08-27
topic: Guides
author: Owen Brooks
cover: ./cover.jpg
coverAlt: "A laptop, a sheet of paper and a pencil on a clean white desk, seen from above"
coverCredit:
  name: "Yan Krukau / Pexels"
  url: "https://www.pexels.com/photo/5793964/"
tags: [revops, recipe]
---

Speed to lead is the most studied number in sales, and most teams still lose it in the handover. A form submission lands in the CRM, waits for someone to assign it, and by the time a rep calls, the prospect has booked a demo with someone else.

This guide builds a routing workflow that gets a qualified lead to the right rep, with a meeting on the calendar, in under five minutes. It assumes HubSpot and Slack, but the same steps work with Salesforce and Teams.

## What you'll build

The finished workflow has six steps:

1. **Trigger:** a new contact is created from your demo form.
2. **Enrich:** look up the company's size, industry and country.
3. **Qualify:** an agent step checks fit against your ideal customer profile.
4. **Route:** pick a rep by territory and current workload.
5. **Book:** offer the prospect three times from the rep's calendar.
6. **Notify:** post the lead, its summary and the meeting to the rep in Slack.

## Step 1: start from a sentence

Open Flow, choose **New workflow** and type:

"When someone fills in the demo form in HubSpot, enrich the company, check if it fits our ICP, assign it to a rep by territory and send the rep a Slack message."

Flow drafts the steps above and asks two questions: where your territories are defined, and what your ideal customer profile is. Answer both in plain words. You can change them later.

## Step 2: write the qualification policy

The agent step needs a short policy. Ours reads:

- Companies with 50 to 5,000 employees are a fit.
- Software, fintech and logistics are priority industries.
- Personal email domains are not a fit unless the job title includes "founder".
- If unsure, mark as fit and say why.

That last line matters. A false positive costs a rep five minutes. A false negative costs a deal.

## Step 3: route by territory and workload

Use a **Route** step with your territory table. Flow can read it from a Google Sheet, a HubSpot property or a table you keep in Flow. Turn on **Balance by open leads** so a rep with twelve untouched leads doesn't get a thirteenth while a colleague has two.

## Step 4: book before anyone has to ask

Add a **Book meeting** step that emails the prospect three slots from the assigned rep's calendar. Most prospects pick a slot within the hour. The ones who don't get one reminder the next morning, then go back to the rep as a manual follow-up.

## Step 5: give the rep context, not just a name

The Slack message is where routing workflows usually disappoint. A name and an email address send the rep straight back to research. Ask the agent to include:

- what the company does, in one line
- why it was marked as a fit
- what the prospect wrote in the form
- the meeting time, if one was booked

## Testing and going live

Before publishing, run the workflow against your last twenty form submissions using **Replay on past data**. Check the routing against what actually happened, and adjust the policy where the agent disagrees with your best rep.

Fernway, who use a version of this workflow, cut median lead response from four hours to three minutes in their first week. The workflow took one afternoon to build. Most of that afternoon was agreeing on the territory table.
