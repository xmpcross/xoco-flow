export const siteConfig = {
  name: "Flow",
  tagline: "AI agents for the work between your tools",
  title: "Flow - An Astro theme for SaaS and product sites",
  description:
    "Flow turns the processes your team runs by hand into workflows that AI agents carry out across your CRM, billing, inbox and Slack, with approvals where you want them.",
  siteUrl: "https://flow.xocoweb.workers.dev",
  language: "en",
  locale: "en_US",
  dateLocale: "en-US",
  socialImage: "/og-image.png",
  email: "hello@example.com",
  /** The calls to action in the header, the hero and the closing panel. */
  actions: {
    primary: { label: "Book a demo", href: "/contact/" },
    secondary: { label: "Start free", href: "/pricing/" },
    signIn: { label: "Log in", href: "https://app.example.com/" },
  },
  /** The link above the hero headline. Set `enabled: false` to remove it. */
  announcement: {
    enabled: true,
    badge: "New",
    text: "Flow Agents can now work across 120+ apps",
    href: "/blog/introducing-flow-agents/",
  },
  /** The contact page form. It stays disabled until `enabled` is true and `action` is set. */
  contact: {
    enabled: false,
    action: "",
    method: "post",
  },
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get the Flow monthly",
    description:
      "New features, workflow ideas and what operations teams are automating. One email a month.",
  },
  /** The status line in the footer. Leave `href` empty to show it without a link. */
  status: { label: "All systems normal", href: "https://status.example.com/" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** A file name from `src/icons/lucide`, shown beside the link in the menu. */
  icon?: string;
}

export interface MenuColumn {
  title?: string;
  links: NavLink[];
}

/**
 * The panel on the right of a mega menu. `product` shows a small workflow
 * canvas, `story` the first customer story from `src/config/customers.ts`,
 * `latest` the newest blog post.
 */
export type MenuFeature = "product" | "story" | "latest";

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      columns: MenuColumn[];
      feature?: MenuFeature;
      /** Small links along the bottom of the panel. */
      footer?: NavLink[];
    };

export const navigation: NavItem[] = [
  {
    label: "Product",
    feature: "product",
    columns: [
      {
        title: "Platform",
        links: [
          {
            label: "Workflow builder",
            href: "/#how-it-works",
            description: "Describe a process and get a workflow",
            icon: "workflow",
          },
          {
            label: "Agents",
            href: "/#agents",
            description: "Steps that read, decide and write back",
            icon: "bot",
          },
          {
            label: "Approvals",
            href: "/#how-it-works",
            description: "A person signs off where it matters",
            icon: "user-check",
          },
          {
            label: "Run history",
            href: "/#how-it-works",
            description: "Every step logged and replayable",
            icon: "history",
          },
        ],
      },
      {
        title: "Connect",
        links: [
          {
            label: "Integrations",
            href: "/integrations/",
            description: "120+ apps, plus any REST API",
            icon: "plug",
          },
          {
            label: "Triggers",
            href: "/integrations/",
            description: "Events, schedules, webhooks and email",
            icon: "webhook",
          },
          {
            label: "Security",
            href: "/#security",
            description: "SSO, audit log and data residency",
            icon: "shield-check",
          },
          {
            label: "Pricing",
            href: "/pricing/",
            description: "Free to start, priced by runs",
            icon: "coins",
          },
        ],
      },
    ],
    footer: [
      { label: "What's new", href: "/blog/topic/product/", icon: "megaphone" },
      { label: "Status", href: "https://status.example.com/", icon: "activity" },
      { label: "Book a demo", href: "/contact/", icon: "calendar-check" },
    ],
  },
  {
    label: "Solutions",
    feature: "story",
    columns: [
      {
        title: "By team",
        links: [
          {
            label: "Revenue operations",
            href: "/solutions/revenue-operations/",
            description: "Routing, handoffs and renewals",
            icon: "trending-up",
          },
          {
            label: "Finance",
            href: "/solutions/finance/",
            description: "Collections, close and spend",
            icon: "banknote",
          },
          {
            label: "Customer support",
            href: "/solutions/customer-support/",
            description: "Triage, refunds and escalations",
            icon: "life-buoy",
          },
          {
            label: "IT and people",
            href: "/solutions/it-and-people/",
            description: "Access, onboarding and offboarding",
            icon: "key-round",
          },
        ],
      },
      {
        title: "Popular workflows",
        links: [
          { label: "Lead routing", href: "/solutions/revenue-operations/#workflows" },
          { label: "Invoice follow-ups", href: "/solutions/finance/#workflows" },
          { label: "Ticket triage", href: "/solutions/customer-support/#workflows" },
          { label: "Employee onboarding", href: "/solutions/it-and-people/#workflows" },
          { label: "Renewal prep", href: "/solutions/revenue-operations/#workflows" },
        ],
      },
    ],
    footer: [
      { label: "Customer stories", href: "/customers/", icon: "heart-handshake" },
      { label: "Talk to sales", href: "/contact/?topic=sales", icon: "message-square" },
    ],
  },
  {
    label: "Resources",
    feature: "latest",
    columns: [
      {
        title: "Learn",
        links: [
          {
            label: "Blog",
            href: "/blog/",
            description: "Everything we publish",
            icon: "newspaper",
          },
          {
            label: "Guides",
            href: "/blog/topic/guides/",
            description: "Step-by-step workflow recipes",
            icon: "book-open",
          },
          {
            label: "Engineering",
            href: "/blog/topic/engineering/",
            description: "How Flow runs millions of steps",
            icon: "code",
          },
          {
            label: "Customer stories",
            href: "/customers/",
            description: "What teams hand to Flow",
            icon: "heart-handshake",
          },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about/", description: "Who we are and why", icon: "building" },
          {
            label: "Careers",
            href: "/careers/",
            description: "Open roles, remote friendly",
            icon: "briefcase",
          },
          {
            label: "Contact",
            href: "/contact/",
            description: "Sales, support and press",
            icon: "mail",
          },
        ],
      },
    ],
    footer: [
      { label: "Search the blog", href: "/blog/search/", icon: "search" },
      { label: "RSS", href: "/rss.xml", icon: "social-rss" },
    ],
  },
  { label: "Customers", href: "/customers/" },
  { label: "Pricing", href: "/pricing/" },
];

export const footerNavigation: MenuColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Workflow builder", href: "/#how-it-works" },
      { label: "Agents", href: "/#agents" },
      { label: "Integrations", href: "/integrations/" },
      { label: "Security", href: "/#security" },
      { label: "Pricing", href: "/pricing/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Revenue operations", href: "/solutions/revenue-operations/" },
      { label: "Finance", href: "/solutions/finance/" },
      { label: "Customer support", href: "/solutions/customer-support/" },
      { label: "IT and people", href: "/solutions/it-and-people/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Guides", href: "/blog/topic/guides/" },
      { label: "Customer stories", href: "/customers/" },
      { label: "Search", href: "/blog/search/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
      { label: "RSS", href: "/rss.xml" },
    ],
  },
];
