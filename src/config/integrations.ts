export const integrationCategories = [
  "CRM and sales",
  "Finance",
  "Support",
  "Communication",
  "Engineering",
  "Data and docs",
  "Identity",
] as const;

export type IntegrationCategory = (typeof integrationCategories)[number];

export interface Integration {
  /** A file name in `src/assets/integrations`, without `.svg`. */
  icon: string;
  name: string;
  category: IntegrationCategory;
  /** The mark's colour on a white tile. */
  color: string;
  description: string;
}

/** Marks come from Simple Icons (CC0). Each brand belongs to its owner. */
export const integrations: Integration[] = [
  {
    icon: "hubspot",
    name: "HubSpot",
    category: "CRM and sales",
    color: "#ff7a59",
    description: "Trigger on deal stages, update contacts and log activity.",
  },
  {
    icon: "salesforce",
    name: "Salesforce",
    category: "CRM and sales",
    color: "#00a1e0",
    description: "Read and write any object, including custom fields.",
  },
  {
    icon: "docusign",
    name: "Docusign",
    category: "CRM and sales",
    color: "#2d2d2d",
    description: "Send envelopes and continue when they are signed.",
  },
  {
    icon: "mailchimp",
    name: "Mailchimp",
    category: "CRM and sales",
    color: "#241c15",
    description: "Add contacts to audiences and tag them by segment.",
  },
  {
    icon: "stripe",
    name: "Stripe",
    category: "Finance",
    color: "#635bff",
    description: "Create customers, issue refunds and react to failed payments.",
  },
  {
    icon: "quickbooks",
    name: "QuickBooks",
    category: "Finance",
    color: "#2ca01c",
    description: "Post invoices and bills, and match payments.",
  },
  {
    icon: "xero",
    name: "Xero",
    category: "Finance",
    color: "#13b5ea",
    description: "Reconcile transactions and chase overdue invoices.",
  },
  {
    icon: "zendesk",
    name: "Zendesk",
    category: "Support",
    color: "#03363d",
    description: "Tag, route and reply to tickets with full context.",
  },
  {
    icon: "intercom",
    name: "Intercom",
    category: "Support",
    color: "#0b6cff",
    description: "Read conversations and hand them to the right team.",
  },
  {
    icon: "shopify",
    name: "Shopify",
    category: "Support",
    color: "#5e8e3e",
    description: "Look up orders, issue refunds and update fulfilment.",
  },
  {
    icon: "slack",
    name: "Slack",
    category: "Communication",
    color: "#4a154b",
    description: "Post updates and collect approvals without leaving a channel.",
  },
  {
    icon: "gmail",
    name: "Gmail",
    category: "Communication",
    color: "#ea4335",
    description: "Start workflows from email and send replies as you.",
  },
  {
    icon: "googlecalendar",
    name: "Google Calendar",
    category: "Communication",
    color: "#4285f4",
    description: "Book meetings and react to new events.",
  },
  {
    icon: "twilio",
    name: "Twilio",
    category: "Communication",
    color: "#f22f46",
    description: "Send SMS and WhatsApp messages from any step.",
  },
  {
    icon: "linear",
    name: "Linear",
    category: "Engineering",
    color: "#5e6ad2",
    description: "Open issues and projects, and follow their status.",
  },
  {
    icon: "jira",
    name: "Jira",
    category: "Engineering",
    color: "#0052cc",
    description: "Create and transition issues across projects.",
  },
  {
    icon: "github",
    name: "GitHub",
    category: "Engineering",
    color: "#181717",
    description: "React to pull requests and releases.",
  },
  {
    icon: "gitlab",
    name: "GitLab",
    category: "Engineering",
    color: "#e24329",
    description: "Open merge requests and follow pipeline results.",
  },
  {
    icon: "pagerduty",
    name: "PagerDuty",
    category: "Engineering",
    color: "#06ac38",
    description: "Open incidents and page the on-call engineer.",
  },
  {
    icon: "asana",
    name: "Asana",
    category: "Data and docs",
    color: "#f06a6a",
    description: "Create tasks from templates and track them to done.",
  },
  {
    icon: "notion",
    name: "Notion",
    category: "Data and docs",
    color: "#000000",
    description: "Create pages from templates and update databases.",
  },
  {
    icon: "googlesheets",
    name: "Google Sheets",
    category: "Data and docs",
    color: "#34a853",
    description: "Append rows, look up values and watch for changes.",
  },
  {
    icon: "airtable",
    name: "Airtable",
    category: "Data and docs",
    color: "#18bfff",
    description: "Sync records both ways with any base.",
  },
  {
    icon: "snowflake",
    name: "Snowflake",
    category: "Data and docs",
    color: "#29b5e8",
    description: "Run queries and act on the rows they return.",
  },
  {
    icon: "googledrive",
    name: "Google Drive",
    category: "Data and docs",
    color: "#4285f4",
    description: "Read files and save generated documents.",
  },
  {
    icon: "okta",
    name: "Okta",
    category: "Identity",
    color: "#007dc1",
    description: "Provision accounts and assign groups on day one.",
  },
];

/** Copy for the integrations page. */
export const integrationsPage = {
  title: "Integrations",
  heading: "Connect Flow to the tools you already use",
  lead: "Flow connects to more than 120 apps out of the box, and to anything with an API through the HTTP step. These are the ones teams use most.",
  /** The last card in the grid. */
  request: {
    title: "Don't see your app?",
    body: "Call any REST or GraphQL API with the HTTP step, or tell us what to build next.",
    cta: { label: "Request an integration", href: "/contact/?topic=integrations" },
  },
};

const byIcon = new Map(integrations.map((item) => [item.icon, item]));

export const integration = (icon: string) => byIcon.get(icon);
