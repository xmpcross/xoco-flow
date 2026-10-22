# Customization Guide

Use this guide when adapting Flow for a real product.

## Site Settings

Edit [src/config/site.ts](./src/config/site.ts) first. It controls the product name (used in page titles, the feed, the structured data, and wherever the copy names the product), tagline, default metadata, canonical domain, language and date locale, the `email` used as the author address in the RSS feed, the calls to action, the announcement link, the contact and newsletter forms, the footer status line, and social links.

Update `siteConfig.siteUrl` before building for production. Canonical URLs, social image URLs, RSS, robots, sitemap, and JSON-LD all depend on it.

`siteConfig.actions` holds the calls to action used across the site:

- `primary` is the "Book a demo" button in the header, the hero, the mobile menu, the solution pages, the closing panel, and the post call-to-action. It ships pointing at the contact page; point it at a booking page if you use one.
- `secondary` is the "Start free" button beside it.
- `signIn` is the "Log in" link in the header and the mobile menu. Replace it with your app's login URL.

`siteConfig.announcement` is the small link above the hero headline, with a `badge`, a `text`, and an `href`. Set `enabled: false` to remove it.

`siteConfig.status` is the line with a green dot in the footer. Point `href` at your status page, leave it empty to show the line without a link, or clear `label` to remove it.

`siteConfig.socials` are the icon links in the footer, each with a `label` and an `href`. The label picks the icon through [src/lib/socials.ts](./src/lib/socials.ts), which knows Bluesky, Facebook, GitHub, Instagram, LinkedIn, Mastodon, RSS, Threads, X, and YouTube; any other label shows a generic link icon until you add it there. Links that start with `http` are also listed as `sameAs` in the structured data.

The logo and logomark are SVGs in [src/assets/brand](./src/assets/brand): `logo.svg` is the wordmark and `logomark.svg` the "f" on its own, both drawn in `currentColor`. [src/components/ui/Wordmark.astro](./src/components/ui/Wordmark.astro) inlines the wordmark in the header and footer, where it takes the ink on light grounds and the light text colour in the footer. [src/components/ui/Logomark.astro](./src/components/ui/Logomark.astro) sets the "f" in mint on an ink tile as the app icon in the product UI. Replace the files with your own and keep `fill="currentColor"` on the root `<svg>`. The downloadable copy from the logo menu is filled with `#0a2a2e` in `LogoMenu.astro`; change it there if you change `--ink`. Right-clicking the logo opens a small menu, [src/components/chrome/LogoMenu.astro](./src/components/chrome/LogoMenu.astro), to copy the logo as SVG or download it. The favicon is [public/favicon.svg](./public/favicon.svg), the "f" in ink that switches to mint in dark mode.

## Navigation and Mega Menu

The header, its mega menus, and the mobile menu all read `navigation` in [src/config/site.ts](./src/config/site.ts). Each entry is either a plain link or a menu:

```ts
{ label: "Pricing", href: "/pricing/" },
{
  label: "Product",
  feature: "product",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Workflow builder", href: "/#how-it-works", description: "Describe a process and get a workflow", icon: "workflow" },
      ],
    },
  ],
  footer: [{ label: "Status", href: "https://status.example.com/", icon: "activity" }],
},
```

- `columns` takes two columns, each with an optional `title`.
- A link with a `description` renders with an icon tile and a second line; a link without one renders as a plain row, which suits a list of shortcuts. `icon` is a file name from [src/icons/lucide](./src/icons/lucide), or `social-<name>` for a mark from [src/icons/bootstrap](./src/icons/bootstrap).
- `feature` picks the panel on the right: `product` shows a small workflow canvas, `story` the first story in [src/config/customers.ts](./src/config/customers.ts), and `latest` the newest blog post.
- `footer` is the row of small links along the bottom of the panel. Leave it out to remove the row.

The menus open full width under the header, on click and on hover with a short intent delay. `Arrow Down` on a trigger opens a menu and focuses its first link, and `Escape`, a click outside, or tabbing away closes it. The header gains a hairline once you scroll, slides away as you scroll down, and returns as soon as you scroll up. Below `64rem` the same entries render as a full-screen menu, each menu as an expandable group.

The footer columns are `footerNavigation` in the same file.

## Homepage

The homepage is assembled in [src/pages/index.astro](./src/pages/index.astro) from independent sections in [src/components/home](./src/components/home). Reorder or remove them freely. The copy lives in [src/config/home.ts](./src/config/home.ts):

| Section       | Component            | Config key            |
| ------------- | -------------------- | --------------------- |
| Hero          | `Hero.astro`         | `hero`                |
| Logo row      | `LogoRow.astro`      | `logoRow`             |
| How it works  | `HowItWorks.astro`   | `howItWorks`          |
| Stats         | `Stats.astro`        | `stats`               |
| Agents        | `Agents.astro`       | `agents`              |
| Teams         | `Teams.astro`        | `teams`               |
| Integrations  | `Integrations.astro` | `integrationsSection` |
| Stories       | `Stories.astro`      | `storiesSection`      |
| Security      | `Security.astro`     | `security`            |
| FAQ           | `Faq.astro`          | `faq`                 |
| Latest posts  | `LatestPosts.astro`  | `latestPosts`         |
| Closing panel | `Closing.astro`      | `closing`             |

A few sections are worth knowing in more detail:

- **Hero.** `hero.photo` fills the stage behind the product window, with `photoAlt` and `photoCredit`. Pick a bright photo with its subject on the right, since the window covers the left half. `hero.approval` is the Slack message that floats over the photo. `hero.notes` are the checked lines under the buttons. Below `64rem` the photo and the Slack message are left out and the stage shows the product window alone.
- **How it works.** Three `steps`, each a tab with a unique `id`, a `label`, a `title`, and a `body`. The panels show the composer, the canvas, and the run log, in that order. The tabs advance on their own every seven seconds while the section is on screen, pause on hover, and stop for good once someone picks a tab. They are ARIA tabs with arrow-key, `Home`, and `End` support, and nothing advances under reduced motion.
- **Stats.** Each item is a `value` and a `label`. `Stats.astro` takes any list through its `items` prop, so the about, careers, and solution pages reuse it with their own figures; three items lay out in three columns, four in four.
- **Agents.** The dark section beside the agent panel. `points` are the three columns underneath, each with an `icon`, a `title`, and a `body`.
- **Teams.** Each item in `teams.items` is a tab with a unique `id`, a `label`, a `title`, a `body`, three `workflows`, an `href` to its solution page, a `photo` with `photoAlt`, and a `chip`, the small run card over the photo (an integration `app`, a `title`, and a `detail`). Its button reads "Flow for revenue", built from `siteConfig.name` and the `label`.
- **Integrations.** `icons` are file names from [src/assets/integrations](./src/assets/integrations), each with an entry in [src/config/integrations.ts](./src/config/integrations.ts) that gives the tile its name and colour.
- **Stories.** `Stories.astro` shows one story large and three as cards, picked by company name through its `featured` and `cards` props (Tidewater, then Fernway, Northbeam and Halden by default). The heading and link are `storiesSection`; the stories themselves live in [src/config/customers.ts](./src/config/customers.ts).
- **Security.** `badges` are the standards beside the heading; only list ones the product actually meets. `items` are the six features, each with an `icon`, a `title`, and a `body`.
- **Latest posts.** The three newest posts. The section is left out when there are no posts.
- **Closing panel.** `closing` holds the heading and body. The four run rows beside them are demo data written in `Closing.astro`.

## Product UI

The product visuals are HTML and CSS, not images, so they stay sharp at every size and zoom level and follow the theme's tokens. They live in [src/components/product](./src/components/product):

- `AppWindow.astro` is the app frame: a title bar with the logomark, a breadcrumb `trail`, and an optional `status` pill.
- `FlowNode.astro` is one workflow step: an integration `app` icon or a Lucide `icon` on a `tone` tile (`mint`, `amber`, `violet`, `blue`, or `ink`), a `kind` label, a `title`, a `sub`, and a `status` of `done` or `waiting`.
- `Canvas.astro` is the workflow graph in the hero and the "Review" tab, with a branch and its condition labels. Its nodes are written out in the component; edit them there. `animate` plays the nodes in one by one on load.
- `Composer.astro`, `RunLog.astro`, and `AgentPanel.astro` are the describe box, the run history, and the collections agent. Their demo data sits at the top of each file.

Replace them with screenshots of your own product if you prefer: put a PNG in `src/assets/images` and swap the component for an `<Image>`.

## Customers

[src/config/customers.ts](./src/config/customers.ts) holds the fictional `companies` and the `stories`. Each company's logo is an SVG in [src/assets/logos](./src/assets/logos), named after the company in lowercase and drawn in `currentColor`; [src/components/ui/CompanyLogo.astro](./src/components/ui/CompanyLogo.astro) inlines it at `1.5em` tall. To use a real customer's logo, with their permission, drop their SVG in that folder under the same name. For a new company, add its name to `companies` as well; the logo row, the stories, and `CompanyLogo` are typed against that list, so a name missing from it fails the type check. Each story has a `company`, an `industry`, a `team` (the `slug` of a solution page), a person's `name`, `role`, `photo` and `photoCredit`, a `quote`, a `metric` with a `value` and a `label`, and a one-line `summary`.

The customers page, [src/pages/customers.astro](./src/pages/customers.astro), shows the fifth story large and the rest as cards. Its headline, intro, logo-row line, and section heading are `customersPage` in the same file. Stories also appear on the homepage, in the Solutions menu, and on each solution page. Replace them with real quotes from real customers, each with their permission, and swap the marks for their logos.

## Solution Pages

[src/pages/solutions/[slug].astro](./src/pages/solutions/[slug].astro) builds one page per entry in `solutionPages` in [src/config/solutions.ts](./src/config/solutions.ts). The demo ships four: revenue operations, finance, customer support, and IT and people. To add one, copy an entry, give it a new `slug`, and link to `/solutions/<slug>/` from `navigation`.

Each entry holds:

- **Header.** `name`, `title`, `lead`, a `photo` with `photoAlt` and `photoCredit`, and a `chip` laid over the photo.
- **Metrics.** Three `metrics`, shown with `Stats.astro`.
- **Workflows.** A `title`, a `lead`, and `items`, the cards, each with a `title`, a `body`, and `apps`, the integration icons drawn as a chain.
- **Featured workflow.** A `title`, a `lead`, `steps`, the numbered steps beside the window, and `featured.nodes` the steps inside it, each with the same fields as `FlowNode.astro`. `featured.window` names the workflow in the title bar.
- **Story, apps, FAQ, and closing.** `story` is a company from `src/config/customers.ts`. `apps` are integration file names, shown under `solutionAppsTitle`, which every solution page shares. `faq` has its own `title` and `items`, and `closing` is the `title` and `body` of the panel at the foot of the page.

## Integrations

[src/config/integrations.ts](./src/config/integrations.ts) lists every integration with an `icon` (a file name in [src/assets/integrations](./src/assets/integrations)), a `name`, a `category`, a `color` for its mark, and a `description`. `integrationCategories` sets the filters on the integrations page, [src/pages/integrations.astro](./src/pages/integrations.astro), which also has a search box. The page's headline, intro, and the "Don't see your app?" card at the end of the grid are `integrationsPage` in the same file. The filters and search only appear when JavaScript runs; without it the full list shows.

To add an integration, drop its SVG from [Simple Icons](https://simpleicons.org/) into `src/assets/integrations` and add an entry. [src/components/ui/AppIcon.astro](./src/components/ui/AppIcon.astro) draws any of them in its colour on a white tile, or bare with `bare`.

## Pricing Page

[src/pages/pricing.astro](./src/pages/pricing.astro) shows the plan cards, the logo row, the comparison table, an FAQ, and the closing panel. The logo row and the closing panel come from [src/config/home.ts](./src/config/home.ts); everything else lives in [src/config/pricing.ts](./src/config/pricing.ts):

- **Plans.** Each plan has an `id`, a `name`, a `description`, an optional `includes` line above its `highlights`, and a `cta`. Set `monthly` and `annual` to monthly amounts in dollars, or both to `null` for a "Custom" plan. `featured: true` makes one card dark and highlights its column in the table. The billing toggle is two native radio buttons and updates the cards and the table together. `annualSaving` is the label on the annual option, and `notes` are the checked lines under the cards.
- **Comparison table.** `groups` are the sections of the table, each with a `name` and `rows`. A row has a `name`, an optional `hint` under it, and `values`, one per plan in plan order: `true` shows a check, `false` a dash, and a string is shown as written. The plan header stays pinned under the site header while the table scrolls. On phones the table shows one plan at a time, the featured one first, and a switcher above it picks another.
- **FAQ.** `faq` has its own `title` and `items`, rendered by the same `Faq.astro` as the homepage.

Prices are formatted as US dollars by the `money` helper in [src/components/pricing/Price.astro](./src/components/pricing/Price.astro); change it for another currency. The "per month" and "per month, billed yearly" labels are set in [src/components/pricing/BillingToggle.astro](./src/components/pricing/BillingToggle.astro).

## Images

Photographs live in [src/assets/images](./src/assets/images) and are imported in the config for their page ([src/config/home.ts](./src/config/home.ts), [src/config/customers.ts](./src/config/customers.ts), [src/config/solutions.ts](./src/config/solutions.ts), [src/config/about.ts](./src/config/about.ts), [src/config/careers.ts](./src/config/careers.ts), [src/config/blog.ts](./src/config/blog.ts)), so Astro resizes them and serves responsive sources. Replace a file in place, or import a new one and point the config at it. Portraits are stored at 960x1200 and shown with `object-top`, so keep faces in the upper half. Keep the `credit` and `photoCredit` fields up to date for anything that needs attribution.

## Blog

Posts live in [src/content/blog](./src/content/blog), one folder per post. The folder name is the URL. Frontmatter is validated by [src/content.config.ts](./src/content.config.ts):

```yaml
---
title: "Build lead routing in an afternoon"
description: "Between 40 and 220 characters, used on cards, in search, and as the meta description."
date: 2026-08-27
updated: 2026-09-02 # optional
topic: Guides
author: Owen Brooks
coauthors: [Lena Fischer] # optional, more names on the byline
cover: ./cover.jpg
coverAlt: "A laptop, a sheet of paper and a pencil on a clean white desk"
coverCredit: # optional, printed under the cover
  name: "Yan Krukau / Pexels"
  url: "https://www.pexels.com/photo/5793964/"
tags: [revops, recipe]
cta: # optional, see below
  after: 2
featured: true # optional, pins the post to the lead slot
draft: false # optional
---
```

- `topic` must be one of the topics in [src/config/blog.ts](./src/config/blog.ts). Add, remove, or rename topics there, with a one-line description each; the topic pages, the topic tabs, and the schema all follow.
- `author` is looked up in `authors` in the same file for a role and an optional `photo`, shown in the byline and in the author card at the foot of the post. The `credit` beside each photo is kept for attribution and not displayed. The byline shows the role only when a post has a single author. A name with no entry still builds, with the logomark in place of a portrait.
- `coauthors` adds more names after `author`, each looked up the same way.
- `draft: true` keeps a post out of every listing, feed, search index, and route in production. Drafts still show in `npm run dev`.
- `POSTS_PER_PAGE` in `src/config/blog.ts` sets the page size for the index and topic archives. The first page of the blog index opens with the featured post, or the newest if none is flagged; topic archives are a plain grid. The intro under the blog heading is `blogDescription`.

Every post carries a dark call-to-action panel, [src/components/blog/PostCta.astro](./src/components/blog/PostCta.astro). Its copy is `postCta` in `src/config/blog.ts` and its button is `siteConfig.actions.primary`. By default it closes the post; a `cta` block in frontmatter moves it and changes its copy for that post:

```yaml
cta:
  after: 3 # below the third ## section
  title: See the close checklist in Flow
  body: We'll walk through the workflows and map them onto your own month-end.
  label: Book a walkthrough
  href: /contact/
```

Every field is optional, and `cta: false` removes the panel.

On the post page, every `##` heading becomes an entry in the table of contents and every `###` nests under the `##` before it; the list tracks the reader's position. Code blocks get a language label and a copy button. Tables, blockquotes, and lists are styled in `.prose` in [src/styles/global.css](./src/styles/global.css).

## Blog Covers

The demo posts use landscape photos from [Pexels](https://www.pexels.com/), saved as `cover.jpg` in each post's folder with a `coverCredit` that prints under the image on the post. Use any landscape photo around 2000 pixels wide. The cover is also the post's share image, cropped to 1200x630 at build time. Write a `coverAlt` that describes the picture.

## Sharing

Every post has a Share button beside the byline and in the sidebar. Both open one share sheet, [src/components/blog/ShareSheet.astro](./src/components/blog/ShareSheet.astro), a native `<dialog>` with X, LinkedIn, Facebook, email, WhatsApp, Telegram, and Threads, plus Bluesky, Mastodon, Reddit, and Pinterest behind "More", and the page link with a copy button. Add or remove networks in the `targets` and `extraTargets` lists at the top of the file.

## Search

Search covers the blog, so it only appears there: the search field in the blog header, `Ctrl + K` or `Command + K`, or `/` outside a form field opens the palette in [src/components/chrome/SearchDialog.astro](./src/components/chrome/SearchDialog.astro), and `/blog/search/` is a full results page that lists every post without JavaScript and filters as you type. Both rank results with the same function in [src/lib/search.ts](./src/lib/search.ts): title matches first, then topic and tags, then everything else, matched on word starts.

The index is served from [src/pages/search-index.json.ts](./src/pages/search-index.json.ts) and fetched the first time search is opened. It carries each post's title, description, topic, author, date, tags, and URL, but not its body. For full-text search across a large archive, consider [Pagefind](https://pagefind.app/).

## Contact

The contact page is [src/pages/contact.astro](./src/pages/contact.astro), with its copy in [src/config/contact.ts](./src/config/contact.ts): the headline, the `steps` under the intro, the `topics` in the "I'd like to…" select, the `teamSizes`, the `messageLabel` above the message field, the `routes` under `routesTitle` (each with a `label`, a `detail`, and an `email`), and the `offices` under `officesTitle`, each with a `city` and an `address` given as an array of lines.

Link to `/contact/?topic=<value>` to preselect a topic; the pricing and integrations pages do this. The form posts `topic`, `name`, `email`, `company`, `company_size`, and `message` to `siteConfig.contact`:

```ts
contact: {
  enabled: true,
  action: "https://example.com/contact",
  method: "post",
}
```

It only submits when `enabled` is `true` and `action` is set. Until then the fields can be filled in but the send button is disabled, and a note says so.

## About

The about page is [src/pages/about.astro](./src/pages/about.astro), with all its content in [src/config/about.ts](./src/config/about.ts): the headline, the team photo, the story, four facts, the principles, the milestones, the team portraits (each with a `photo` and `credit`), the investors, and the closing call to careers, whose button counts the open roles in [src/config/careers.ts](./src/config/careers.ts).

## Careers

The careers page is [src/pages/careers.astro](./src/pages/careers.astro), with all its content in [src/config/careers.ts](./src/config/careers.ts): the headline, the photo, three facts, the values, the benefits, the open roles, and the closing prompt.

Each role has a `title`, a `team`, a `location`, a `type`, and an `applyUrl`. Roles are grouped by team in the order they first appear, and a filter above the list shows one team at a time. `applyUrl` is where the row links; the demo leaves it empty, so rows render without a link until you point each one at its posting.

## Feeds and Social Cards

`/rss.xml` carries the twenty newest posts. Posts share their own cover and solution, about, and careers pages their photo, cropped to 1200x630 at build time; every other page uses `public/og-image.png`, a 1200x630 card showing the homepage hero. Replace it with your own card at the same size after rebranding.

Structured data is built in [src/lib/schema.ts](./src/lib/schema.ts): `Organization` and `WebSite` on every page except posts, which carry `BlogPosting` (with the organization as its publisher) and a `BreadcrumbList`.

## Newsletter

The footer signup is provider-neutral. Configure `siteConfig.newsletter`:

```ts
newsletter: {
  enabled: true,
  action: "https://example.com/subscribe",
  method: "post",
  emailFieldName: "email",
  title: "Get the Flow monthly",
  description: "New features, workflow ideas and what operations teams are automating. One email a month.",
}
```

The form only submits when `enabled` is `true` and `action` is set. Until then the field and button are disabled, and a note says so.

## Adding Pages

To add a page such as `/press/`, create `src/pages/press.astro`, wrap it in `BaseLayout`, and reuse the pieces already in the theme: `.shell` for the page width, `.section` for vertical spacing, `text-display-xl`, `text-display-lg` and `text-lead` for headings and intros, `bg-wash` for a grey section, `on-night` for dark sections, `card` for a bordered surface, `btn btn-primary` and `btn btn-secondary` for buttons, and `SectionHead` for a section heading. [src/pages/careers.astro](./src/pages/careers.astro) is a good starting point. Then link to it from `navigation` or `footerNavigation`.

## Icons

Interface icons come from [Lucide](https://lucide.dev/) in [src/icons/lucide](./src/icons/lucide) and social and share marks from Bootstrap Icons in [src/icons/bootstrap](./src/icons/bootstrap), each folder with its license notice. [src/components/ui/Icon.astro](./src/components/ui/Icon.astro) loads both by file name: `<Icon name="arrow-right" />` for a Lucide outline, and `<Icon name="social-linkedin" />` for a Bootstrap mark. To add an icon, drop its SVG into the right folder and use its file name. Integration marks are separate, in [src/assets/integrations](./src/assets/integrations).

## Theme Tokens

Colours, radii, type sizes, and the page width are custom properties at the top of [src/styles/global.css](./src/styles/global.css), exposed to Tailwind as utilities (`bg-page`, `bg-wash`, `text-muted`, `bg-ink`, `bg-mint`, `bg-night`, `rounded-card`, and so on).

- `--page` and `--surface` are white; `--wash` is the pale grey for alternate sections and `--sunken` a step darker.
- `--ink` is the deep spruce used for text and primary buttons, with `--ink-soft` for hover. `--muted` is secondary text.
- `--mint` is the accent, used for buttons on dark grounds, badges, selected states, and the app icon, with `--mint-strong` for hover and `--mint-soft` for tinted backgrounds. `--green` marks success.
- `--night` is the dark ground for the agents section, the closing panel, and the footer, with `--night-raised` for cards on it and `--night-ink` and `--night-muted` for text. Add `on-light` to a white card inside a dark section to restore the light-theme muted colour.
- `--violet`, `--blue`, and `--amber` (each with a `-soft` tint) colour the small status chips and node tiles in the product UI.
- `--radius-card`, `--radius-panel`, and `--radius-control` are the corner sizes for cards, inner panels, and buttons.
- `--measure` is the content width and `--gutter` the side padding, used by `.shell`.

To change the accent, set `--mint`, `--mint-strong`, and `--mint-soft`, update the dark-mode colour in `public/favicon.svg`, and replace `public/og-image.png`.

## Fonts

Flow self-hosts **Host Grotesk**, an OFL-licensed variable sans, in [public/fonts/host-grotesk](./public/fonts/host-grotesk), split into Latin and Latin Extended files. Code uses the system monospace stack.

To swap typefaces, replace the `@font-face` rules and the `--font-sans` token at the top of `global.css`, and update the font preload in [src/layouts/BaseLayout.astro](./src/layouts/BaseLayout.astro).

## Motion

- Page headers rise in once on load with a short stagger (the `rise` class, delayed by `--i`).
- Sections below the fold carry `reveal`, which animates on a CSS view timeline where supported and falls back to a small IntersectionObserver in `BaseLayout.astro` elsewhere.
- The hero canvas plays its steps in once, the composer caret blinks, and the "How it works" tabs advance on a timer. All of them settle into a final frame under `prefers-reduced-motion: reduce`.
