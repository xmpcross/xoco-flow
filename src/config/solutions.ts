import type { ImageMetadata } from "astro";
import financePhoto from "@/assets/images/solutions/finance.jpg";
import itPhoto from "@/assets/images/solutions/it.jpg";
import revenuePhoto from "@/assets/images/solutions/revenue.jpg";
import supportPhoto from "@/assets/images/solutions/support.jpg";
import type { CompanyName, Credit } from "@/config/customers";

export interface SolutionNode {
  kind: string;
  title: string;
  sub?: string;
  /** An integration file name, or leave empty and set `icon`. */
  app?: string;
  icon?: string;
  tone?: "mint" | "amber" | "violet" | "blue" | "ink";
  status?: "done" | "waiting";
}

export interface SolutionPage {
  /** The URL segment: `finance` renders at `/solutions/finance/`. */
  slug: string;
  name: string;
  title: string;
  lead: string;
  photo: ImageMetadata;
  photoAlt: string;
  photoCredit: Credit;
  /** The small run card over the photo. */
  chip: { app: string; title: string; detail: string };
  metrics: { value: string; label: string }[];
  workflows: {
    title: string;
    lead: string;
    /** `apps` are integration file names, shown in order as the workflow's chain. */
    items: { title: string; body: string; apps: string[] }[];
  };
  featured: {
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    window: string;
    nodes: SolutionNode[];
  };
  /** A company from `src/config/customers.ts`. */
  story: CompanyName;
  apps: string[];
  faq: { title: string; items: { q: string; a: string }[] };
  closing: { title: string; body: string };
}

/** The heading above the apps on every solution page. */
export const solutionAppsTitle = "Connects to the tools you use";

export const solutionPages: SolutionPage[] = [
  {
    slug: "revenue-operations",
    name: "Revenue operations",
    title: "Every lead, deal and renewal handled on time",
    lead: "Flow routes leads in minutes, keeps the CRM clean and prepares every renewal months ahead, so your reps spend their day selling.",
    photo: revenuePhoto,
    photoAlt: "A man in a video call at his desk, with plants behind him",
    photoCredit: {
      name: "LinkedIn Sales Navigator / Pexels",
      url: "https://www.pexels.com/photo/7245797/",
    },
    chip: {
      app: "hubspot",
      title: "Lead assigned to Ana Ruiz",
      detail: "Call booked for Thu 10:30",
    },
    metrics: [
      { value: "3 min", label: "median time from form fill to assigned rep" },
      { value: "92%", label: "of CRM records complete, up from 61%" },
      { value: "90 days", label: "of notice before every renewal" },
    ],
    workflows: {
      title: "Workflows revenue teams run on Flow",
      lead: "Start from a template or describe your own. Each one is a few minutes to set up and runs from then on.",
      items: [
        {
          title: "Lead routing",
          body: "Enrich new leads, check fit and assign them by territory and workload.",
          apps: ["hubspot", "slack"],
        },
        {
          title: "Meeting booking",
          body: "Offer qualified prospects three times from their rep's calendar, straight away.",
          apps: ["hubspot", "googlecalendar"],
        },
        {
          title: "Deal desk approvals",
          body: "Send discounts above your limit to the right approver with the deal context attached.",
          apps: ["salesforce", "slack"],
        },
        {
          title: "Closed-won handoff",
          body: "Create the customer in billing, open onboarding and introduce the CSM.",
          apps: ["hubspot", "stripe", "linear"],
        },
        {
          title: "CRM hygiene",
          body: "Find duplicates, fill missing fields and flag deals with no activity in 14 days.",
          apps: ["salesforce", "snowflake"],
        },
        {
          title: "Renewal prep",
          body: "Build an account brief 90 days out, with usage trends and open tickets.",
          apps: ["salesforce", "zendesk", "notion"],
        },
      ],
    },
    featured: {
      title: "Lead routing that finishes the job",
      lead: "Most routing stops at assigning an owner. Flow books the meeting and briefs the rep too.",
      steps: [
        {
          title: "Enrich",
          body: "Company size, industry and region are added the moment a lead arrives.",
        },
        {
          title: "Qualify",
          body: "An agent checks fit against your ideal customer profile and explains its call.",
        },
        {
          title: "Route and book",
          body: "The lead goes to the right rep, and the prospect gets three times to choose from.",
        },
      ],
      window: "Inbound lead routing",
      nodes: [
        {
          kind: "Trigger",
          app: "hubspot",
          title: "Demo form submitted",
          sub: "Website · /demo",
          status: "done",
        },
        {
          kind: "Agent",
          icon: "bot",
          tone: "ink",
          title: "Check fit against ICP",
          sub: "Fit: 240 employees, fintech",
          status: "done",
        },
        {
          kind: "Action",
          icon: "split",
          tone: "violet",
          title: "Route by territory",
          sub: "EMEA · Ana Ruiz",
          status: "done",
        },
        {
          kind: "Action",
          app: "googlecalendar",
          title: "Offer three meeting times",
          sub: "Booked Thu 10:30",
          status: "done",
        },
        { kind: "Notify", app: "slack", title: "Brief the rep", sub: "Posted to @ana.ruiz" },
      ],
    },
    story: "Fernway",
    apps: [
      "hubspot",
      "salesforce",
      "slack",
      "googlecalendar",
      "stripe",
      "snowflake",
      "notion",
      "docusign",
    ],
    faq: {
      title: "Revenue operations questions",
      items: [
        {
          q: "Does Flow replace our CRM's built-in automation?",
          a: "No, it works alongside it. Keep simple field updates in your CRM and use Flow for anything that crosses tools or needs judgement, like qualification or handoffs.",
        },
        {
          q: "Can routing respect our existing territory rules?",
          a: "Yes. Flow reads territories from a CRM property, a Google Sheet or a table in Flow, and can balance by open leads within each territory.",
        },
        {
          q: "How does Flow handle duplicate leads?",
          a: "Every routing workflow checks for an existing contact and account first. Matches go to the current owner instead of creating a new record.",
        },
      ],
    },
    closing: {
      title: "Get every lead to a rep in minutes",
      body: "Start with the lead routing template, or book a demo and we'll build it around your territories.",
    },
  },
  {
    slug: "finance",
    name: "Finance",
    title: "Close faster, chase less, and keep every number traceable",
    lead: "Flow sends the reminders, matches the payments and collects the receipts, then leaves your team the decisions that need an accountant.",
    photo: financePhoto,
    photoAlt: "A woman working through financial documents with a calculator at her desk",
    photoCredit: { name: "Mikhail Nilov / Pexels", url: "https://www.pexels.com/photo/8297044/" },
    chip: { app: "xero", title: "11 reminders sent", detail: "$31,060 outstanding" },
    metrics: [
      { value: "3 days", label: "to close the books, down from 9 at Northbeam" },
      { value: "−38%", label: "days sales outstanding after six months" },
      { value: "100%", label: "of automatic entries traced to a rule" },
    ],
    workflows: {
      title: "Workflows finance teams run on Flow",
      lead: "Built for the repetitive half of finance, with approvals wherever money moves.",
      items: [
        {
          title: "Invoice follow-ups",
          body: "Send polite, escalating reminders on overdue invoices, in your tone of voice.",
          apps: ["xero", "gmail"],
        },
        {
          title: "Payment matching",
          body: "Match payouts to invoices every night and queue the differences for review.",
          apps: ["stripe", "quickbooks"],
        },
        {
          title: "Receipt collection",
          body: "Ask employees for missing receipts in Slack and attach whatever they reply with.",
          apps: ["xero", "slack"],
        },
        {
          title: "Spend approvals",
          body: "Route purchase requests to budget owners with last quarter's spend attached.",
          apps: ["slack", "googlesheets"],
        },
        {
          title: "Failed payment recovery",
          body: "Retry failed charges on the best day and email the customer a card update link.",
          apps: ["stripe", "gmail"],
        },
        {
          title: "Close checklist",
          body: "Track every month-end task, chase owners and post a daily status update.",
          apps: ["notion", "slack"],
        },
      ],
    },
    featured: {
      title: "Collections that sound like you",
      lead: "The collections agent drafts every reminder from your tone guide and holds anything sensitive for a person.",
      steps: [
        {
          title: "Find what's overdue",
          body: "Every weekday at 9:00, Flow pulls invoices past their due date from your ledger.",
        },
        {
          title: "Draft and hold",
          body: "The agent drafts reminders and holds strategic accounts and disputes for review.",
        },
        {
          title: "Send and follow up",
          body: "Approved reminders go out from your address, with a follow-up a week later.",
        },
      ],
      window: "Overdue invoice follow-up",
      nodes: [
        {
          kind: "Schedule",
          icon: "calendar-clock",
          tone: "blue",
          title: "Weekdays at 9:00",
          sub: "Europe/London",
          status: "done",
        },
        {
          kind: "Action",
          app: "xero",
          title: "Find overdue invoices",
          sub: "14 found · $48,210",
          status: "done",
        },
        {
          kind: "Agent",
          icon: "bot",
          tone: "ink",
          title: "Draft reminders",
          sub: "Policy: Collections v3",
          status: "done",
        },
        {
          kind: "Approval",
          app: "slack",
          title: "Review 3 accounts",
          sub: "#finance-ops",
          status: "waiting",
        },
        {
          kind: "Action",
          app: "gmail",
          title: "Send 11 reminders",
          sub: "From ar@northbeam.com",
          status: "done",
        },
      ],
    },
    story: "Northbeam",
    apps: ["xero", "quickbooks", "stripe", "gmail", "slack", "googlesheets", "notion", "snowflake"],
    faq: {
      title: "Finance questions",
      items: [
        {
          q: "Will Flow post entries to our ledger without approval?",
          a: "Only if you allow it. Most teams let Flow reconcile exact matches automatically and require approval for anything with a difference or above a set amount.",
        },
        {
          q: "Can our auditors see what Flow did?",
          a: "Yes. Every action is in the audit log with the run, the rule it followed and who approved it. Business and Enterprise plans can export the log for any period.",
        },
        {
          q: "Which accounting systems do you support?",
          a: "Xero, QuickBooks and NetSuite have native connectors. Others can be connected with the HTTP step or through a data warehouse.",
        },
      ],
    },
    closing: {
      title: "Take the chasing out of month-end",
      body: "Start with invoice follow-ups, or book a demo and we'll map your close checklist into Flow.",
    },
  },
  {
    slug: "customer-support",
    name: "Customer support",
    title: "Tickets that arrive understood, and routine ones that resolve themselves",
    lead: "Flow reads every ticket, attaches the account history and routes it to the right person, or handles refunds and updates on its own.",
    photo: supportPhoto,
    photoAlt: "A support agent wearing a headset, smiling at her desk",
    photoCredit: { name: "Mikhail Nilov / Pexels", url: "https://www.pexels.com/photo/8101312/" },
    chip: { app: "zendesk", title: "Routed to Billing", detail: "Summary attached" },
    metrics: [
      { value: "62%", label: "of tickets triaged with no manual step" },
      { value: "−41%", label: "time to first response" },
      { value: "4.8/5", label: "average satisfaction on resolved refunds" },
    ],
    workflows: {
      title: "Workflows support teams run on Flow",
      lead: "Keep your helpdesk. Flow does the lookups, the routing and the follow-ups around it.",
      items: [
        {
          title: "Ticket triage",
          body: "Classify intent and urgency, attach account context and route to the right queue.",
          apps: ["zendesk", "salesforce"],
        },
        {
          title: "Refunds within policy",
          body: "Check the order, apply your refund rules and issue the refund in one step.",
          apps: ["shopify", "stripe"],
        },
        {
          title: "VIP escalations",
          body: "Alert the account owner in Slack when a high-value customer opens an urgent ticket.",
          apps: ["intercom", "slack"],
        },
        {
          title: "Bug reports",
          body: "Turn confirmed bugs into issues with steps to reproduce, and update the customer when fixed.",
          apps: ["zendesk", "linear"],
        },
        {
          title: "Outage updates",
          body: "Tag every related ticket during an incident and reply when it's resolved.",
          apps: ["pagerduty", "zendesk"],
        },
        {
          title: "Satisfaction follow-up",
          body: "Reach out personally after a low rating and log the reason for the weekly review.",
          apps: ["intercom", "googlesheets"],
        },
      ],
    },
    featured: {
      title: "Triage that writes the first paragraph for you",
      lead: "Agents start every ticket with the answer to 'who is this and what do they need', instead of an investigation.",
      steps: [
        {
          title: "Read and classify",
          body: "An agent reads the ticket and decides intent, urgency and language.",
        },
        {
          title: "Add context",
          body: "Plan, recent orders and open tickets are pulled in and summarised in two lines.",
        },
        {
          title: "Route or resolve",
          body: "Routine requests are handled outright. The rest go to the right queue, ready to answer.",
        },
      ],
      window: "New ticket triage",
      nodes: [
        {
          kind: "Trigger",
          app: "zendesk",
          title: "New ticket created",
          sub: "#48213 · Email",
          status: "done",
        },
        {
          kind: "Agent",
          icon: "bot",
          tone: "ink",
          title: "Classify the request",
          sub: "Billing · High · English",
          status: "done",
        },
        {
          kind: "Action",
          app: "stripe",
          title: "Look up the account",
          sub: "Business plan · 2 failed charges",
          status: "done",
        },
        {
          kind: "Action",
          app: "zendesk",
          title: "Route with a summary",
          sub: "Queue: Billing",
          status: "done",
        },
        {
          kind: "Notify",
          app: "slack",
          title: "Alert the account owner",
          sub: "Strategic account",
        },
      ],
    },
    story: "Quillo",
    apps: [
      "zendesk",
      "intercom",
      "shopify",
      "stripe",
      "slack",
      "linear",
      "pagerduty",
      "salesforce",
    ],
    faq: {
      title: "Support questions",
      items: [
        {
          q: "Does Flow reply to customers directly?",
          a: "It can, for the requests you allow, like order updates or refunds within policy. Many teams start with triage only and add replies once they trust the classifications.",
        },
        {
          q: "Do we have to change helpdesk?",
          a: "No. Flow works with Zendesk, Intercom, Freshdesk and Front through their APIs, and your agents keep working where they are.",
        },
        {
          q: "How does Flow handle other languages?",
          a: "Agents read and write in more than forty languages and tag each ticket with the language detected, so you can route by language too.",
        },
      ],
    },
    closing: {
      title: "Give every agent a head start",
      body: "Start with ticket triage, or book a demo and we'll run it on a week of your real tickets.",
    },
  },
  {
    slug: "it-and-people",
    name: "IT and people",
    title: "Access that's right on day one and gone on the last",
    lead: "Flow provisions accounts from the HR record, handles access requests with manager approval and cleans up everything when someone leaves.",
    photo: itPhoto,
    photoAlt: "An engineer holding a laptop in a server room",
    photoCredit: {
      name: "Christina Morillo / Pexels",
      url: "https://www.pexels.com/photo/1181354/",
    },
    chip: { app: "okta", title: "7 apps provisioned", detail: "Manager approved" },
    metrics: [
      { value: "20 min", label: "to provision a new hire, down from 2 days" },
      { value: "0", label: "accounts left active after a leaver's last day" },
      { value: "4 hrs", label: "saved per access review" },
    ],
    workflows: {
      title: "Workflows IT and people teams run on Flow",
      lead: "Every request, grant and removal is approved by the right person and written to the audit log.",
      items: [
        {
          title: "Employee onboarding",
          body: "Create accounts, assign groups and send the welcome pack from the HR record.",
          apps: ["okta", "slack", "googledrive"],
        },
        {
          title: "Access requests",
          body: "Let people ask for an app in Slack, get the manager's approval and grant it.",
          apps: ["slack", "okta"],
        },
        {
          title: "Offboarding",
          body: "Suspend accounts, transfer files and collect equipment on the last day.",
          apps: ["okta", "googledrive"],
        },
        {
          title: "Access reviews",
          body: "Send managers a quarterly list of their team's access to confirm or revoke.",
          apps: ["okta", "googlesheets"],
        },
        {
          title: "Equipment orders",
          body: "Order a laptop when an offer is signed and track it until it's delivered.",
          apps: ["docusign", "jira"],
        },
        {
          title: "IT help desk",
          body: "Answer common questions in Slack and open a ticket when a person is needed.",
          apps: ["slack", "jira"],
        },
      ],
    },
    featured: {
      title: "Onboarding that's done before the first coffee",
      lead: "When HR marks a hire as signed, Flow takes it from there and asks managers only what they need to decide.",
      steps: [
        {
          title: "Read the HR record",
          body: "Role, team and start date decide which apps and groups a new hire needs.",
        },
        {
          title: "Confirm with the manager",
          body: "Anything outside the role's standard set goes to the manager for one-click approval.",
        },
        {
          title: "Provision and welcome",
          body: "Accounts are created, the laptop is ordered and the welcome message goes out on day one.",
        },
      ],
      window: "New hire onboarding",
      nodes: [
        {
          kind: "Trigger",
          app: "docusign",
          title: "Offer signed",
          sub: "Priya Shah · Product Designer",
          status: "done",
        },
        {
          kind: "Agent",
          icon: "bot",
          tone: "ink",
          title: "Plan access for the role",
          sub: "7 apps · 3 groups",
          status: "done",
        },
        {
          kind: "Approval",
          app: "slack",
          title: "Manager approves extras",
          sub: "Approved by Owen",
          status: "done",
        },
        {
          kind: "Action",
          app: "okta",
          title: "Create accounts",
          sub: "Starts Mon 3 Nov",
          status: "done",
        },
        { kind: "Action", app: "jira", title: "Order a laptop", sub: "IT-2291 · MacBook Pro 14" },
      ],
    },
    story: "Halden",
    apps: ["okta", "slack", "googledrive", "jira", "docusign", "googlesheets", "github", "notion"],
    faq: {
      title: "IT and people questions",
      items: [
        {
          q: "Which identity providers does Flow work with?",
          a: "Okta, Microsoft Entra ID and Google Workspace have native connectors. Flow can also provision directly into apps that support SCIM.",
        },
        {
          q: "Can access requests come from Slack?",
          a: "Yes. People ask in a channel or a direct message, the agent works out which app and role they need, and the request goes to the right approver.",
        },
        {
          q: "How does Flow help with audits?",
          a: "Every grant and removal is logged with who asked, who approved and when. Quarterly access reviews can run as a workflow and produce an export for your auditors.",
        },
      ],
    },
    closing: {
      title: "Make day one the easiest day",
      body: "Start with the onboarding template, or book a demo and we'll connect it to your HR system.",
    },
  },
];
