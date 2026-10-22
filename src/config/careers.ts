import teamPhoto from "@/assets/images/careers.jpg";

export interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  /** Link to the posting on your applicant tracking system. Left empty, the row renders without a link. */
  applyUrl: string;
}

export const careers = {
  title: "Help every team hand off the busywork",
  lead: "We're a team of engineers, designers and operators building agents that thousands of companies trust with real work. The problems are hard in the right ways, and every release is measured.",
  photo: teamPhoto,
  photoAlt: "A team gathered around a table of laptops, discussing their work",
  photoCredit: { name: "Kindel Media / Pexels", url: "https://www.pexels.com/photo/7651804/" },
  facts: [
    { value: "90", label: "people in 16 countries" },
    { value: "3", label: "hubs: New York, London and Lisbon" },
    { value: "2×", label: "a year, the whole company in one place" },
  ],
  valuesTitle: "How we work",
  values: [
    {
      title: "Read the runs",
      body: "Everyone, including leadership, reviews real customer runs every week. It's where most of the roadmap comes from.",
    },
    {
      title: "Write it down",
      body: "Decisions live in documents anyone can read, so people in any time zone can do their best work without another meeting.",
    },
    {
      title: "Ship small, measure everything",
      body: "Every change ships with a number that says whether it worked. Opinions are welcome, and evidence decides.",
    },
    {
      title: "Own it end to end",
      body: "The rule we build into the product applies to us too. Every project has one owner who sees it through.",
    },
  ],
  benefitsTitle: "Benefits",
  benefits: [
    {
      icon: "banknote",
      title: "Salary and equity",
      body: "Published bands for every role, reviewed twice a year.",
    },
    {
      icon: "clock",
      title: "Flexible hours",
      body: "Three hours of team overlap. The rest of the day is yours.",
    },
    {
      icon: "book-open",
      title: "Learning budget",
      body: "$2,000 a year for courses, conferences and books.",
    },
    {
      icon: "heart",
      title: "Health cover",
      body: "Medical, dental and vision for you and your family.",
    },
    {
      icon: "laptop",
      title: "Your own setup",
      body: "A laptop of your choice and $1,500 for your home office.",
    },
    { icon: "users", title: "Parental leave", body: "Twenty weeks fully paid for every parent." },
  ],
  rolesTitle: "Open roles",
  roles: [
    {
      title: "Senior Backend Engineer, Runtime",
      team: "Engineering",
      location: "Remote, Americas",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Staff Engineer, Agents",
      team: "Engineering",
      location: "New York or remote",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Frontend Engineer, Canvas",
      team: "Engineering",
      location: "Lisbon or remote",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Integrations Engineer",
      team: "Engineering",
      location: "Remote, Europe",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Senior Product Designer",
      team: "Product and design",
      location: "London or remote",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Product Manager, Approvals",
      team: "Product and design",
      location: "New York",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Solutions Engineer",
      team: "Customers",
      location: "London",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Customer Success Manager",
      team: "Customers",
      location: "Remote, Americas",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Enterprise Account Executive",
      team: "Customers",
      location: "New York",
      type: "Full-time",
      applyUrl: "",
    },
  ] as Role[],
  closing: {
    title: "Don't see your role?",
    body: "We hire for people as much as for openings. Tell us what you would build here.",
    cta: { label: "Write to us", href: "mailto:careers@example.com" },
  },
};
