export interface Plan {
  /** Used as the column key in the comparison table. */
  id: string;
  name: string;
  /** Monthly prices in dollars. `null` on both shows "Custom". */
  monthly: number | null;
  annual: number | null;
  description: string;
  /** A line above the highlights, such as "Everything in Team, plus". */
  includes?: string;
  /** The short list on the plan card. */
  highlights: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

/**
 * A comparison cell: `true` is included, `false` is not, and a string is
 * shown as written (a limit, a period, a support level).
 */
export type Cell = boolean | string;

export interface FeatureRow {
  name: string;
  /** A short explanation under the feature name. */
  hint?: string;
  /** One value per plan, in plan order. */
  values: Cell[];
}

export const pricing = {
  title: "Simple pricing that grows with your runs",
  lead: "Every plan includes the workflow builder, agents and all integrations. You pay for the runs you use, never for seats.",
  annualSaving: "2 months free",
  plans: [
    {
      id: "free",
      name: "Free",
      monthly: 0,
      annual: 0,
      description: "For trying Flow on one process.",
      highlights: [
        "3 active workflows",
        "500 runs a month",
        "Agents with a monthly allowance",
        "Community support",
      ],
      cta: { label: "Start free", href: "https://app.example.com/signup" },
    },
    {
      id: "team",
      name: "Team",
      monthly: 49,
      annual: 39,
      description: "For a team automating its everyday work.",
      includes: "Everything in Free, plus",
      highlights: [
        "20 active workflows",
        "5,000 runs a month",
        "Approvals in Slack and Teams",
        "Replay on 30 days of runs",
      ],
      cta: { label: "Start a free trial", href: "https://app.example.com/signup?plan=team" },
    },
    {
      id: "business",
      name: "Business",
      monthly: 399,
      annual: 319,
      description: "For several teams running Flow in production.",
      includes: "Everything in Team, plus",
      highlights: [
        "Unlimited workflows",
        "50,000 runs a month",
        "SSO, roles and audit log",
        "Bring your own model keys",
      ],
      cta: { label: "Start a free trial", href: "https://app.example.com/signup?plan=business" },
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthly: null,
      annual: null,
      description: "For companies with security and scale needs.",
      includes: "Everything in Business, plus",
      highlights: [
        "Volume run pricing",
        "SCIM and data residency",
        "Private cloud deployment",
        "99.95% uptime SLA",
      ],
      cta: { label: "Talk to sales", href: "/contact/?topic=sales" },
    },
  ] as Plan[],

  /** Short reassurances under the plan cards. */
  notes: ["14-day free trial on paid plans", "No card needed for Free", "Cancel any time"],

  compareTitle: "Compare plans",
  groups: [
    {
      name: "Usage",
      rows: [
        {
          name: "Runs per month",
          hint: "One run is one start of a workflow",
          values: ["500", "5,000", "50,000", "Custom"],
        },
        { name: "Active workflows", values: ["3", "20", "Unlimited", "Unlimited"] },
        {
          name: "Members",
          hint: "Never billed per seat",
          values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        },
        { name: "Agent steps", values: ["Monthly allowance", "Included", "Included", "Included"] },
        { name: "Extra runs", values: [false, "$8 per 1,000", "$6 per 1,000", "Custom"] },
      ],
    },
    {
      name: "Building",
      rows: [
        { name: "Workflow builder and composer", values: [true, true, true, true] },
        { name: "All integrations", values: [true, true, true, true] },
        { name: "HTTP and code steps", values: [false, true, true, true] },
        { name: "Replay on past runs", values: [false, "30 days", "1 year", "Custom"] },
        { name: "Versions and rollback", values: ["7 days", "90 days", "Unlimited", "Unlimited"] },
        { name: "Choose the model per step", values: [false, false, true, true] },
      ],
    },
    {
      name: "Running",
      rows: [
        {
          name: "Approvals",
          hint: "Slack, Teams and email",
          values: ["Email only", true, true, true],
        },
        { name: "Schedules and webhooks", values: [true, true, true, true] },
        { name: "Automatic retries", values: [true, true, true, true] },
        { name: "Run history", values: ["7 days", "30 days", "1 year", "Custom"] },
        {
          name: "Failure alerts",
          values: ["Email", "Email and Slack", "Email, Slack and PagerDuty", "Any channel"],
        },
      ],
    },
    {
      name: "Security and admin",
      rows: [
        { name: "Workflow owners", values: [true, true, true, true] },
        { name: "Roles and permissions", values: [false, "Basic", "Advanced", "Advanced"] },
        { name: "Single sign-on", hint: "SAML and OIDC", values: [false, false, true, true] },
        { name: "SCIM provisioning", values: [false, false, false, true] },
        { name: "Audit log export", values: [false, false, true, true] },
        { name: "Bring your own model keys", values: [false, false, true, true] },
        { name: "Data residency", values: ["US", "US or EU", "US or EU", "Any region"] },
        { name: "Private cloud", values: [false, false, false, true] },
      ],
    },
    {
      name: "Support",
      rows: [
        { name: "Support", values: ["Community", "Email", "Priority chat", "Named engineer"] },
        { name: "Onboarding", values: ["Self-serve", "Self-serve", "Guided", "Dedicated team"] },
        { name: "Uptime SLA", values: [false, false, "99.9%", "99.95%"] },
      ],
    },
  ] as { name: string; rows: FeatureRow[] }[],

  faq: {
    title: "Pricing questions",
    items: [
      {
        q: "What counts as a run?",
        a: "A run is one start of a workflow, however many steps it has. A workflow that triggers on every new lead uses one run per lead. Steps inside the run, including agent steps, are not counted separately.",
      },
      {
        q: "What happens if we go over our runs?",
        a: "Nothing stops. On Team and Business, extra runs are billed at the end of the month at your plan's rate. On Free, workflows pause until the next month and we let you know before they do.",
      },
      {
        q: "Do you charge per seat?",
        a: "No. Every plan includes unlimited members, so builders, approvers and viewers never need a licence.",
      },
      {
        q: "Are model costs included?",
        a: "Yes. Agent steps are included in every paid plan. If you bring your own model provider keys on Business or Enterprise, you pay the provider directly and we don't mark it up.",
      },
      {
        q: "Can we change plans later?",
        a: "At any time. Upgrades apply straight away and are prorated. Downgrades take effect at the next billing date.",
      },
    ],
  },
};
