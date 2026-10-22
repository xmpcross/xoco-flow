import heroPhoto from "@/assets/images/hero.jpg";
import financePhoto from "@/assets/images/solutions/finance.jpg";
import itPhoto from "@/assets/images/solutions/it.jpg";
import revenuePhoto from "@/assets/images/solutions/revenue.jpg";
import supportPhoto from "@/assets/images/solutions/support.jpg";
import type { CompanyName } from "@/config/customers";

export const hero = {
  title: "Put the work between your tools on autopilot",
  lead: "Flow turns the processes your team runs by hand into workflows that AI agents carry out across your CRM, billing, inbox and Slack. You decide where a person signs off.",
  notes: ["Free plan, no card needed", "SOC 2 Type II", "120+ integrations"],
  photo: heroPhoto,
  photoAlt: "A woman smiling at her laptop in a bright room",
  photoCredit: { name: "Anna Nekrashevich / Pexels", url: "https://www.pexels.com/photo/7552568/" },
  /** The Slack message that floats over the photo. */
  approval: {
    channel: "#cs-handoffs",
    text: "Kickoff plan for Fernway is ready. $84k ARR, so it needs your sign-off.",
  },
};

export const logoRow = {
  title: "Operations teams at fast-growing companies run on Flow",
  items: [
    "Fernway",
    "Northbeam",
    "Corvid",
    "Halden",
    "Quillo",
    "Tidewater",
    "Kitebird",
    "Lumio",
  ] as CompanyName[],
};

export const howItWorks = {
  id: "how-it-works",
  title: "From a sentence to a running workflow",
  lead: "Write the process the way you would explain it to a new hire. Flow builds the steps, you check them, and agents run it from then on.",
  steps: [
    {
      id: "describe",
      label: "Describe",
      title: "Say what should happen",
      body: "Flow reads your description, picks the apps involved and asks about anything it can't work out on its own.",
    },
    {
      id: "review",
      label: "Review",
      title: "Check every step on a canvas",
      body: "Each step is a card you can edit, reorder or branch. Add approvals wherever a person should decide.",
    },
    {
      id: "run",
      label: "Run",
      title: "Let agents do the work",
      body: "Runs start on their own and log every input, decision and output, so anyone can see what happened and why.",
    },
  ],
};

export const stats = [
  { value: "48M", label: "steps run by Flow agents every month" },
  { value: "99.98%", label: "of runs finish without a retry" },
  { value: "6 days", label: "from sign-up to first live workflow, on average" },
  { value: "2,400+", label: "teams in production" },
];

export const agents = {
  id: "agents",
  title: "Agents that know your process, not just your data",
  lead: "Give an agent a goal, the tools it can use and the policy it must follow. It works through the queue, writes back to your systems and asks before anything it shouldn't decide alone.",
  points: [
    {
      icon: "scroll-text",
      title: "Follows your policies",
      body: "Rules live next to the workflow, in plain words, and every decision points to the line it followed.",
    },
    {
      icon: "user-check",
      title: "Asks before it acts",
      body: "Set limits by amount, customer or risk. Above them, a person approves in Slack or email in one click.",
    },
    {
      icon: "history",
      title: "Shows its working",
      body: "Every run is recorded step by step, with the sources it read and the changes it made.",
    },
  ],
  cta: { label: "See what agents can do", href: "/integrations/" },
};

export const teams = {
  id: "teams",
  title: "One platform for every team that keeps things running",
  lead: "Start with the process that hurts most. Most customers add a second team within a quarter.",
  items: [
    {
      id: "revenue",
      label: "Revenue",
      href: "/solutions/revenue-operations/",
      title: "Every lead routed and followed up in minutes",
      body: "Enrich new leads, assign them by territory and book the first call before the prospect leaves your site.",
      workflows: ["Lead routing", "Deal desk approvals", "Renewal prep"],
      photo: revenuePhoto,
      photoAlt: "A man in a video call at his desk",
      chip: { app: "hubspot", title: "Lead assigned to Ana", detail: "Booked for Thu 10:30" },
    },
    {
      id: "finance",
      label: "Finance",
      href: "/solutions/finance/",
      title: "Close the books without the chase",
      body: "Send polite reminders on overdue invoices, match payments and collect missing receipts before month-end.",
      workflows: ["Invoice follow-ups", "Payment matching", "Spend approvals"],
      photo: financePhoto,
      photoAlt: "A woman working through financial documents with a calculator",
      chip: { app: "xero", title: "11 reminders sent", detail: "$31,060 outstanding" },
    },
    {
      id: "support",
      label: "Support",
      href: "/solutions/customer-support/",
      title: "Tickets that arrive already understood",
      body: "Classify every ticket, attach the account history and route it, or resolve the routine ones outright.",
      workflows: ["Ticket triage", "Refunds", "Escalations"],
      photo: supportPhoto,
      photoAlt: "A support agent with a headset smiling at her desk",
      chip: { app: "zendesk", title: "Routed to Billing", detail: "Summary attached" },
    },
    {
      id: "it",
      label: "IT and people",
      href: "/solutions/it-and-people/",
      title: "New hires ready before their first coffee",
      body: "Create accounts from the HR record, confirm access with managers and remove it all on the last day.",
      workflows: ["Onboarding", "Access requests", "Offboarding"],
      photo: itPhoto,
      photoAlt: "An engineer with a laptop in a server room",
      chip: { app: "okta", title: "7 apps provisioned", detail: "Manager approved" },
    },
  ],
};

export const integrationsSection = {
  title: "Works with the tools you already pay for",
  lead: "Connect an app in a couple of clicks. Anything without a connector is one HTTP step away.",
  icons: [
    "hubspot",
    "salesforce",
    "slack",
    "gmail",
    "stripe",
    "xero",
    "zendesk",
    "intercom",
    "linear",
    "jira",
    "notion",
    "googlesheets",
    "okta",
    "snowflake",
    "github",
    "shopify",
  ],
  cta: { label: "Browse integrations", href: "/integrations/" },
};

export const storiesSection = {
  title: "Teams hand Flow the work nobody wants to do twice",
  cta: { label: "Read customer stories", href: "/customers/" },
};

export const security = {
  id: "security",
  title: "Built for teams who answer to auditors",
  lead: "Flow runs inside the guardrails your security team expects, with the records your auditors ask for.",
  badges: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA ready"],
  items: [
    {
      icon: "fingerprint",
      title: "SSO and SCIM",
      body: "Sign in with Okta, Entra ID or Google and provision users automatically.",
    },
    {
      icon: "users",
      title: "Roles and permissions",
      body: "Decide who can build, approve or only view each workflow.",
    },
    {
      icon: "scroll-text",
      title: "Audit log",
      body: "Every change and every run is recorded and can be exported.",
    },
    {
      icon: "globe-lock",
      title: "Data residency",
      body: "Keep run data in the US or the EU, with private cloud on request.",
    },
    {
      icon: "key-round",
      title: "Bring your own keys",
      body: "Use your own model provider keys, so prompts never leave your account.",
    },
    {
      icon: "git-branch",
      title: "Versions and rollback",
      body: "Every edit is a version. Compare, test and roll back in one click.",
    },
  ],
};

export const latestPosts = {
  title: "From the blog",
  cta: { label: "All posts", href: "/blog/" },
};

export const closing = {
  title: "Hand Flow the next process on your list",
  body: "Start free with three workflows, or book a demo and we'll build the first one with you.",
};

export const faq = {
  title: "Questions, answered",
  items: [
    {
      q: "Do I need to know how to code?",
      a: "No. You describe a process in plain words or build it on the canvas. Developers can add code steps or call any API when they want to.",
    },
    {
      q: "Which AI models does Flow use?",
      a: "Flow picks a suitable model for each step by default. On Business and Enterprise you can choose the model per step or bring your own provider keys.",
    },
    {
      q: "What happens when an agent isn't sure?",
      a: "It stops and asks. You set the limits, and anything above them goes to a person for approval in Slack, Teams or email.",
    },
    {
      q: "Is my data used to train models?",
      a: "No. Your data is never used to train models, ours or anyone else's, and model providers are contracted not to retain it.",
    },
    {
      q: "How long does it take to go live?",
      a: "Most teams run their first workflow on the day they sign up. Larger rollouts with approvals and SSO usually take one to two weeks.",
    },
  ],
};
