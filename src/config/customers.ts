import type { ImageMetadata } from "astro";
import ananya from "@/assets/images/people/ananya-rao.jpg";
import grant from "@/assets/images/people/grant-holloway.jpg";
import hana from "@/assets/images/people/hana-weber.jpg";
import imani from "@/assets/images/people/imani-clarke.jpg";
import kwame from "@/assets/images/people/kwame-asante.jpg";
import rafael from "@/assets/images/people/rafael-costa.jpg";
import sofia from "@/assets/images/people/sofia-ortega.jpg";

/** Where a demo photo came from, for the credits in the README. */
export interface Credit {
  name: string;
  url: string;
}

/** Fictional companies for logo rows and stories. Each has a logo in `src/assets/logos`. */
export const companies = [
  "Fernway",
  "Northbeam",
  "Corvid",
  "Halden",
  "Quillo",
  "Tidewater",
  "Kitebird",
  "Arbor",
  "Lumio",
  "Stackwell",
] as const;

export type CompanyName = (typeof companies)[number];

export interface Story {
  company: CompanyName;
  industry: string;
  /** The `slug` of a page in `src/config/solutions.ts`. */
  team: string;
  name: string;
  role: string;
  photo: ImageMetadata;
  photoCredit: Credit;
  quote: string;
  metric: { value: string; label: string };
  /** One line for cards: what the team handed to Flow. */
  summary: string;
}

/** Demo stories with fictional companies and people. Replace them with your own. */
export const stories: Story[] = [
  {
    company: "Fernway",
    industry: "Logistics software",
    team: "revenue-operations",
    name: "Sofia Ortega",
    role: "VP Revenue Operations",
    photo: sofia,
    photoCredit: { name: "Zoe Galarza / Pexels", url: "https://www.pexels.com/photo/34381970/" },
    quote:
      "Every inbound lead used to wait for someone to notice it. Now Flow enriches it, picks the right rep and books the call while the prospect is still on our site.",
    metric: { value: "3 min", label: "median lead response, down from 4 hours" },
    summary: "Lead routing, enrichment and meeting booking across HubSpot and Slack.",
  },
  {
    company: "Northbeam",
    industry: "Fintech",
    team: "finance",
    name: "Rafael Costa",
    role: "Head of Finance Operations",
    photo: rafael,
    photoCredit: { name: "Italo Melo / Pexels", url: "https://www.pexels.com/photo/2379004/" },
    quote:
      "Our close was nine days of spreadsheets and reminders. Flow chases the missing receipts, matches payments and leaves us the exceptions. We close in three.",
    metric: { value: "3 days", label: "to close the books, from 9" },
    summary: "Collections, reconciliation and month-end checklists in Xero and Stripe.",
  },
  {
    company: "Quillo",
    industry: "B2B software",
    team: "customer-support",
    name: "Hana Weber",
    role: "Director of Support Operations",
    photo: hana,
    photoCredit: { name: "Vitaly Gariev / Pexels", url: "https://www.pexels.com/photo/23496671/" },
    quote:
      "Flow reads every new ticket, pulls the account history and routes it with a summary attached. Our agents start on the answer instead of the investigation.",
    metric: { value: "62%", label: "of tickets triaged with no manual step" },
    summary: "Ticket triage, refunds and escalations across Zendesk and Stripe.",
  },
  {
    company: "Halden",
    industry: "Healthcare",
    team: "it-and-people",
    name: "Kwame Asante",
    role: "IT Lead",
    photo: kwame,
    photoCredit: { name: "Ivan S / Pexels", url: "https://www.pexels.com/photo/8498701/" },
    quote:
      "New hires used to wait two days for accounts. Flow provisions everything from the HR record, asks managers to confirm access, and logs it all for our auditors.",
    metric: { value: "20 min", label: "to provision a new hire, from 2 days" },
    summary: "Onboarding, access requests and offboarding with Okta and Slack.",
  },
  {
    company: "Tidewater",
    industry: "Retail",
    team: "customer-support",
    name: "Grant Holloway",
    role: "Chief Operating Officer",
    photo: grant,
    photoCredit: { name: "Wolf Art / Pexels", url: "https://www.pexels.com/photo/17390732/" },
    quote:
      "We started with one refund workflow. A year later Flow runs forty processes across four teams, and every one of them has an owner and an audit trail.",
    metric: { value: "11,000", label: "hours a year handed back to the team" },
    summary: "Forty workflows across support, finance and store operations.",
  },
  {
    company: "Kitebird",
    industry: "Marketing software",
    team: "revenue-operations",
    name: "Ananya Rao",
    role: "Revenue Operations Manager",
    photo: ananya,
    photoCredit: { name: "Kindel Media / Pexels", url: "https://www.pexels.com/photo/7688183/" },
    quote:
      "Ninety days before a renewal, Flow builds the account brief, flags usage drops and opens the task for the CSM. Nothing slips through any more.",
    metric: { value: "$1.4M", label: "in at-risk renewals flagged early" },
    summary: "Renewal prep and usage alerts across Salesforce and Snowflake.",
  },
  {
    company: "Lumio",
    industry: "Education technology",
    team: "finance",
    name: "Imani Clarke",
    role: "Financial Controller",
    photo: imani,
    photoCredit: {
      name: "Christina Morillo / Pexels",
      url: "https://www.pexels.com/photo/1181688/",
    },
    quote:
      "Failed card payments used to be a monthly spreadsheet. Flow retries them on the right day, emails the customer and only asks us about the ones that need a call.",
    metric: { value: "$212k", label: "recovered from failed payments in a year" },
    summary: "Failed payment recovery and dunning across Stripe and Gmail.",
  },
];

/** Copy for the customers page. The featured story is the fifth in `stories`. */
export const customersPage = {
  title: "Customers",
  heading: "Teams that put their operations on autopilot",
  lead: "Operations teams in finance, revenue, support and IT use Flow to hand off the work nobody wants to do twice. Here is what they handed off.",
  logoTitle: "A few of the 2,400 teams running Flow in production",
  storiesTitle: "More stories",
};

export const storyFor = (company: CompanyName) =>
  stories.find((story) => story.company === company);
