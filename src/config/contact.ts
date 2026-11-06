export const contact = {
  title: "Talk to the Flow team",
  lead: "Tell us about the process you want to hand off and we'll show you Flow running it. A person reads every message, usually the same day.",
  /** Shown under the intro: what happens after the form is sent. */
  steps: [
    "We reply within one working day",
    "A 30-minute call about your process and tools",
    "Your first workflow, built with you on the call",
  ],
  /**
   * Read as "I'd like to <label>". `value` is what the form sends; link to
   * `/contact/?topic=<value>` to preselect one.
   */
  topics: [
    { value: "demo", label: "book a demo" },
    { value: "sales", label: "talk about pricing" },
    { value: "security", label: "start a security review" },
    { value: "integrations", label: "request an integration" },
    { value: "support", label: "get help with my account" },
    { value: "press", label: "ask a press question" },
  ],
  messageLabel: "What would you like Flow to handle?",
  teamSizes: ["1 to 50 people", "51 to 200", "201 to 1,000", "More than 1,000"],
  routesTitle: "Or write to a team",
  routes: [
    { label: "Sales", detail: "Demos, trials and pricing", email: "sales@example.com" },
    { label: "Support", detail: "Help for existing customers", email: "support@example.com" },
    {
      label: "Security",
      detail: "Questionnaires, DPAs and reports",
      email: "security@example.com",
    },
    { label: "Press", detail: "Interviews and brand assets", email: "press@example.com" },
  ],
  officesTitle: "Offices",
  offices: [
    { city: "New York", address: ["55 Water Street, Floor 9", "New York, NY 10041"] },
    { city: "London", address: ["12 Hatton Garden", "London EC1N 8AN"] },
    { city: "Lisbon", address: ["Avenida da Liberdade 110", "1250-146 Lisboa"] },
  ],
};
