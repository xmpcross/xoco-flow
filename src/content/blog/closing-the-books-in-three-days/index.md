---
title: "How Northbeam closes the books in three days"
description: "Northbeam's finance team used to spend nine days on month-end. Here is the set of workflows that took six days out, and what they kept for people."
date: 2026-09-08
topic: Customers
author: Lena Fischer
cover: ./cover.jpg
coverAlt: "A person writing notes beside a laptop, a tablet and a calculator on a desk"
coverCredit:
  name: "Mikhail Nilov / Pexels"
  url: "https://www.pexels.com/photo/8296979/"
tags: [finance, customer-story]
cta:
  after: 3
  title: See the close checklist in Flow
  body: We'll walk through Northbeam's workflows and map them onto your own month-end.
  label: Book a walkthrough
---

Northbeam is a fintech with 340 employees and a finance team of six. A year ago, their month-end close took nine working days. Rafael Costa, who leads finance operations, described it as "two days of accounting and seven days of chasing".

Today they close in three. They didn't hire, change their ledger or buy a close-management tool. They moved the chasing into Flow.

## Where the nine days went

Before building anything, Rafael's team spent a week writing down every task in the close and how long it took. The list had 64 items. Only eleven were judgement calls. The rest fell into three groups:

- **Collecting:** receipts from employees, accruals from budget owners, confirmations from banks.
- **Matching:** payments to invoices, card transactions to receipts, intercompany balances to each other.
- **Reminding:** everyone, several times, about the first two groups.

The insight was that the eleven judgement calls were fast. Waiting for inputs was what took nine days.

## The four workflows

Northbeam runs four workflows for the close. Each started as a sentence in Flow's composer and was refined on the canvas.

1. **Receipt chase.** Two days before month-end, Flow finds card transactions without receipts in Xero, messages each employee in Slack with the transaction details, and attaches whatever they reply with. Reminders escalate to the employee's manager after 48 hours.
2. **Payment matching.** Every night, Flow matches Stripe payouts to invoices. Clean matches are reconciled automatically. Anything with a difference goes to a review queue with the likely cause already written down.
3. **Accrual requests.** Budget owners get a short form with last month's figure filled in. Most reply "same as last month" with one click.
4. **Close checklist.** A single run tracks all 64 tasks, assigns owners and posts a daily summary to the finance channel.

## What stayed human

Rafael was clear from the start that Flow should not make accounting decisions. Agents draft, match and remind. People approve adjustments, sign off on reconciliations and decide anything involving judgement.

> "The agent does the part of the job where you're waiting for someone. We do the part where you need to think." — Rafael Costa, Northbeam

Every adjustment above $500 requires an approval in Slack. Every automatic reconciliation is written to the audit log with the rule that matched it, which made their first audit after the change shorter, not longer.

## The numbers

After four closes with the new workflows:

| Measure                            | Before | After |
| ---------------------------------- | ------ | ----- |
| Days to close                      | 9      | 3     |
| Receipts missing at month-end      | 212    | 9     |
| Manual reconciliations             | 1,400  | 160   |
| Reminder messages sent by the team | ~300   | 0     |

The last row is Rafael's favourite. Nobody on the team writes a reminder any more.

## Advice from Northbeam

Asked what they would tell another finance team, Northbeam had three suggestions. Write down the whole close before you automate any of it. Start with the chasing, not the accounting. And give every workflow an owner who reads its runs for the first month.
