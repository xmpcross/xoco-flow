---
title: "Idempotency is the whole job"
description: "Why every step in Flow can run twice without doing anything twice, and the three rules we follow to keep it that way."
date: 2026-09-17
topic: Engineering
author: Jun Seo
cover: ./cover.jpg
coverAlt: "Rows of green glass balconies on a modern building"
coverCredit:
  name: "Jan van der Wolf / Pexels"
  url: "https://www.pexels.com/photo/29054015/"
tags: [reliability, infrastructure]
---

A workflow engine fails in interesting ways. A worker restarts halfway through a step. A third-party API times out after it has already created the invoice. A webhook arrives twice, a second apart. Any of these can turn "create one customer" into "create two customers", and nobody notices until finance does.

We run about 48 million steps a month. At that volume, rare failures happen every few minutes. The only way to stay sane is to make every step safe to repeat. That property has a name, idempotency, and it is most of what our platform team works on.

## Rule one: every step has a key

Before a step runs, Flow derives an idempotency key from the run, the step and the attempt's inputs. The key goes with every outgoing request that supports one, and into our own ledger for every request that doesn't.

```ts
const key = hash([run.id, step.id, stableStringify(step.inputs)]);

const existing = await ledger.find(key);
if (existing?.status === "succeeded") return existing.output;

const output = await connector.call(step.action, step.inputs, { idempotencyKey: key });
await ledger.record(key, { status: "succeeded", output });
return output;
```

If a step runs again with the same inputs, it gets the stored output back instead of calling the API again. If the inputs changed, because someone edited the run and replayed it, it gets a new key and really runs.

## Rule two: look before you write

Plenty of APIs ignore idempotency keys. For those, connectors check before they create. The Stripe connector looks for a customer with our run ID in its metadata. The HubSpot connector searches for the contact by email before inserting one. This costs an extra read, roughly 40 milliseconds on average, and saves us from almost every duplicate we used to see.

Where neither a key nor a lookup is possible, the connector is marked as **at-most-once**. Flow will not retry those steps automatically. It pauses the run and asks a person, because a duplicate payment is worse than a delayed one.

## Rule three: side effects come last

Inside a step, we do all reading and thinking first and every write at the very end, in one place. Agent steps follow the same rule: the model decides on a list of actions, the plan is recorded, and only then do the actions run, each with its own key.

This makes crashes boring. If a worker dies while the model is still thinking, the retry starts the thinking again and nothing outside Flow has changed. If it dies during the writes, the ledger knows exactly which ones finished.

## What it bought us

Since we finished moving every connector to these rules in the spring:

- Duplicate side effects fell from about one in 90,000 steps to one in 4.2 million.
- 99.98% of runs now finish without any retry a customer can see.
- Automatic retries are enabled by default for 92% of actions, up from 61%.

The remaining duplicates come from a handful of APIs that confirm a write before it is visible to reads. We keep a list of those connectors in our public docs, along with the safeguards we add for each one.

None of this is glamorous. It is the reason teams trust Flow with money, access and customer email. If a platform can't promise that a step runs exactly once in effect, everything built on top of it inherits the doubt.
