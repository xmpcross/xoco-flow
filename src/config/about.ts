import teamPhoto from "@/assets/images/about.jpg";
import amira from "@/assets/images/people/amira-haddad.jpg";
import clara from "@/assets/images/people/clara-novak.jpg";
import jun from "@/assets/images/people/jun-seo.jpg";
import lena from "@/assets/images/people/lena-fischer.jpg";
import nadia from "@/assets/images/people/nadia-mensah.jpg";
import theo from "@/assets/images/people/theo-marchetti.jpg";

export const about = {
  title: "We build the software that does the busywork",
  lead: "Flow started with a spreadsheet of 64 month-end tasks and a question: why is a person doing most of these? Today our agents run 48 million steps a month for more than 2,400 teams.",
  photo: teamPhoto,
  photoAlt: "Colleagues working together around a desk in a bright office",
  photoCredit: { name: "Kampus Production / Pexels", url: "https://www.pexels.com/photo/6248967/" },
  story: {
    title: "Why we started",
    paragraphs: [
      "Before Flow, Nadia ran operations at a payments company and Theo led its platform team. Every quarter they automated a few more processes, and every quarter the automation broke in a new way, usually at the step where someone had to read something and decide.",
      "Agents changed that. For the first time, the judgement steps could be automated too, as long as a person stayed in charge of the rules and could see every decision.",
      "That is still the whole company. Everything we ship has to help an agent finish real work, or make it easier for a team to trust it.",
    ],
  },
  facts: [
    { value: "2023", label: "founded in New York" },
    { value: "2,400+", label: "teams in production" },
    { value: "48M", label: "steps run every month" },
    { value: "90", label: "people in 16 countries" },
  ],
  principlesTitle: "What we believe",
  principles: [
    {
      icon: "user-check",
      title: "People stay in charge",
      body: "Agents work inside rules that people write, and ask when they're unsure. Automation should never be a black box.",
    },
    {
      icon: "eye",
      title: "Show the working",
      body: "Every run is recorded step by step. If you can't see why something happened, you can't trust it to happen again.",
    },
    {
      icon: "layers",
      title: "Small beats clever",
      body: "The workflows that last are short and focused. We build the product to make small workflows easy.",
    },
  ],
  milestonesTitle: "How we got here",
  milestones: [
    {
      year: "2023",
      title: "First workflow live",
      body: "A month-end checklist for one finance team, run by three people from a kitchen table.",
    },
    {
      year: "2024",
      title: "Seed round",
      body: "$18M to build the canvas, the run log and our first twenty connectors.",
    },
    {
      year: "2025",
      title: "Agents in beta",
      body: "Sixty teams put agent steps into production, with approvals on every one.",
    },
    {
      year: "2026",
      title: "Series B",
      body: "$40M to bring agents to every operations team, and a new hub in Lisbon.",
    },
  ],
  teamTitle: "The people behind Flow",
  team: [
    {
      name: "Nadia Mensah",
      role: "Co-founder and CEO",
      photo: nadia,
      credit: { name: "Ifeyinka Adeyemo / Pexels", url: "https://www.pexels.com/photo/29852895/" },
    },
    {
      name: "Theo Marchetti",
      role: "Co-founder and CTO",
      photo: theo,
      credit: { name: "Uiliam Nörnberg / Pexels", url: "https://www.pexels.com/photo/30767572/" },
    },
    {
      name: "Clara Novak",
      role: "Head of Product",
      photo: clara,
      credit: { name: "Michael Obstoj / Pexels", url: "https://www.pexels.com/photo/31853114/" },
    },
    {
      name: "Amira Haddad",
      role: "Head of Design",
      photo: amira,
      credit: { name: "Kampus Production / Pexels", url: "https://www.pexels.com/photo/8636645/" },
    },
    {
      name: "Lena Fischer",
      role: "Head of Customer Success",
      photo: lena,
      credit: {
        name: "Augusto Carneiro Junior / Pexels",
        url: "https://www.pexels.com/photo/30468665/",
      },
    },
    {
      name: "Jun Seo",
      role: "Staff Engineer",
      photo: jun,
      credit: {
        name: "ANTONI SHKRABA production / Pexels",
        url: "https://www.pexels.com/photo/8278872/",
      },
    },
  ],
  investorsTitle: "Backed by",
  /** Fictional firms. Replace with your own. */
  investors: [
    "Harbourline Ventures",
    "Northgate Capital",
    "Fieldwork",
    "Altamira Partners",
    "Second Street",
  ],
  closing: {
    title: "Come build it with us",
    body: "We're hiring across engineering, design, customer success and sales, remote across Europe and the Americas.",
    cta: { label: "See open roles", href: "/careers/" },
  },
};
