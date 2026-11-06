import type { ImageMetadata } from "astro";
import clara from "@/assets/images/people/clara-novak.jpg";
import jun from "@/assets/images/people/jun-seo.jpg";
import lena from "@/assets/images/people/lena-fischer.jpg";
import nadia from "@/assets/images/people/nadia-mensah.jpg";
import owen from "@/assets/images/people/owen-brooks.jpg";

export const topics = ["Product", "Engineering", "Guides", "Customers", "Company"] as const;

export type Topic = (typeof topics)[number];

export const topicSlug = (topic: string) => topic.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const topicDescriptions: Record<Topic, string> = {
  Product: "What shipped, what changed and why.",
  Engineering: "How Flow runs millions of steps a day, reliably.",
  Guides: "Step-by-step recipes for the workflows teams build first.",
  Customers: "How operations teams use Flow, in their own words.",
  Company: "News, hiring and the occasional opinion.",
};

export interface Author {
  role: string;
  /** Portrait for the byline and the author card. */
  photo?: ImageMetadata;
  credit?: { name: string; url: string };
}

/**
 * Keyed by the `author` value in post frontmatter. Names with no entry still
 * build, with the role left off.
 */
export const authors: Record<string, Author> = {
  "Nadia Mensah": {
    role: "Co-founder and CEO",
    photo: nadia,
    credit: { name: "Ifeyinka Adeyemo / Pexels", url: "https://www.pexels.com/photo/29852895/" },
  },
  "Clara Novak": {
    role: "Head of Product",
    photo: clara,
    credit: { name: "Michael Obstoj / Pexels", url: "https://www.pexels.com/photo/31853114/" },
  },
  "Jun Seo": {
    role: "Staff Engineer",
    photo: jun,
    credit: {
      name: "ANTONI SHKRABA production / Pexels",
      url: "https://www.pexels.com/photo/8278872/",
    },
  },
  "Lena Fischer": {
    role: "Head of Customer Success",
    photo: lena,
    credit: {
      name: "Augusto Carneiro Junior / Pexels",
      url: "https://www.pexels.com/photo/30468665/",
    },
  },
  "Owen Brooks": {
    role: "Solutions Engineer",
    photo: owen,
    credit: { name: "Vitaly Gariev / Pexels", url: "https://www.pexels.com/photo/39205059/" },
  },
};

/** The intro on the blog index. */
export const blogDescription =
  "Product news, engineering notes and workflow guides from the team building Flow.";

/** The call to action under every post. Its button is `siteConfig.actions.primary`. */
export const postCta = {
  title: "Build your first workflow with us",
  body: "Bring one process your team runs by hand. We'll build it in Flow together on a 30-minute call.",
};

/** Posts per page on the blog index and topic archives. */
export const POSTS_PER_PAGE = 9;
