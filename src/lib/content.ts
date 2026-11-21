export const disclaimer =
  "This is a personal website. The views and opinions presented herein are those of the author and do not necessarily represent the views of the Department of Defense or the Army. Appearance of, or reference to, any commercial products or services does not constitute DoD or Army endorsement of those products or services. The appearance of external hyperlinks does not constitute DoD or Army endorsement of the linked websites, or the information, products or services therein.";

export const belief =
  "I believe technology should do more than introduce new capabilities. It should solve real problems, improve decisions, and make the organizations we depend on work better.";

export type Area = "Engineering" | "Civic" | "Venture";

export type Project = {
  slug: string;
  title: string;
  area: Area;
  status: string;
  summary: string;
  problem: string;
  approach: string;
  role: string;
  stack: string[];
  boundary: string;
};

export const projects: Project[] = [
  {
    slug: "local-ai-workbench",
    title: "Local AI Workbench",
    area: "Engineering",
    status: "Active",
    summary:
      "A personal lab for running models, tools, and evaluation on hardware I control.",
    problem:
      "Useful AI work often starts with a question that should not leave the room. Public APIs are convenient, but they are a poor default when the material is sensitive, the cost has to stay predictable, or the workflow has to be inspected.",
    approach:
      "The workbench keeps inference, tool permissions, and a simple evaluation loop on machines I operate. The point is not a bigger model. It is a setup I can reason about: what the system saw, what it was allowed to do, and whether the result was actually useful.",
    role: "I design and build it as personal technical work.",
    stack: ["Local inference", "Tool permissions", "Evaluation notes"],
    boundary:
      "Personal infrastructure only. It is not an official system and it does not process nonpublic government data.",
  },
  {
    slug: "reliable-agent-patterns",
    title: "Reliable Agent Patterns",
    area: "Engineering",
    status: "In progress",
    summary:
      "Small prototypes and notes that separate planning, tools, memory, and checks.",
    problem:
      "Agents get impressive and then fail quietly. The usual cause is not the model. It is a design that lets planning, tools, and memory collapse into one uninspectable loop.",
    approach:
      "Each prototype keeps four pieces distinct: an orchestrator with limits, narrow tools, working memory, and a check before the result is trusted. I write down what broke. The failures are the useful part.",
    role: "I architect the patterns and test them on small, public tasks.",
    stack: ["Agent orchestration", "Constrained tools", "Written evaluations"],
    boundary:
      "Public experiments and writing. Nothing here describes internal systems or operational workflows.",
  },
  {
    slug: "civic-briefs",
    title: "Civic Briefs",
    area: "Civic",
    status: "Concept",
    summary:
      "Ideas for turning public information into short briefs a person can actually use.",
    problem:
      "Governments already publish a great deal of information. Most of it is organized for the institution that produced it, not for the person who has to make a decision with it.",
    approach:
      "Civic Briefs is a design concept: one question, the public sources that answer it, what is known, what is missing, and what a reasonable next step would be. No scoreboards. No invented certainty.",
    role: "I am exploring the concept in a personal capacity.",
    stack: ["Public information", "Plain language", "Source notes"],
    boundary:
      "A personal concept for digital government. Not a government product, contract, or official recommendation.",
  },
  {
    slug: "citrati",
    title: "Citrati.ai",
    area: "Venture",
    status: "Independent",
    summary:
      "An independent venture. Kept separate from service and from this site’s civic writing.",
    problem:
      "A personal commercial project needs its own identity. Mixing it with public service makes both less clear.",
    approach:
      "Citrati.ai is introduced here only as an independent venture. Product claims will be published on their own site when they are ready, not folded into a biography.",
    role: "Founder, in a personal capacity.",
    stack: ["Separate brand", "Personal capacity", "Public when ready"],
    boundary:
      "Commercial activity is distinct from official duties. Nothing on this site implies endorsement.",
  },
];

export type Essay = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  minutes: string;
  paragraphs: string[];
};

export const essays: Essay[] = [
  {
    slug: "local-and-private-agentic-systems",
    title: "Practical patterns for local and private agentic systems",
    dek: "Reliability comes from limits you can see, not from a larger model.",
    date: "November 2026",
    minutes: "6 min",
    paragraphs: [
      "An agent that only answers a question is a chatbot with extra steps. An agent that plans, uses tools, and keeps context is a system. The moment that system touches private material, the architecture matters more than the benchmark.",
      "I keep four pieces separate. An orchestrator decides the next action and is required to stop. Tools are narrow and permissioned. Memory is working context, not a junk drawer of everything the model has ever seen. A check asks whether the result meets the job before anyone treats it as done.",
      "Local or private inference is not a moral position. It is a set of tradeoffs: where the data sits, what the run costs, and whether you can explain a failure a week later. Those tradeoffs are worth taking when the work is sensitive, repetitive, or expensive to get wrong.",
      "The failure mode I watch for is an agent that can call anything. It looks capable in a demo and becomes impossible to audit. A smaller tool surface is slower to build and much easier to trust.",
      "None of this requires a new slogan. It requires a written limit: what the system may see, what it may do, and what “good enough” means before it continues. I would rather publish that limit than another architecture diagram.",
    ],
  },
  {
    slug: "what-digital-government-should-feel-like",
    title: "What digital government should feel like",
    dek: "A service is working when a person can finish the job without learning the org chart.",
    date: "November 2026",
    minutes: "5 min",
    paragraphs: [
      "Most conversations about digital government start with a platform. The better starting point is a person who needs something specific: a status, a form, a record, a plain answer about what happens next.",
      "If they have to know which office owns the data, the service is still organized around the institution. That is understandable. It is also why so many “modernization” efforts ship a new front door onto the same maze.",
      "A useful service has a short path. It says what it can do, what it cannot do, and what the person should bring. It uses public language. It fails in a way that tells you where you are, not a code that only the help desk recognizes.",
      "Data belongs in that path only when it changes the decision. A dashboard that nobody acts on is decoration. A brief that names the source, the gap, and the next step is a tool.",
      "These are personal views about design, not a program and not a critique of any particular office. The standard I would hold a civic product to is simple: can a busy person complete the task, and can they tell what they just relied on?",
    ],
  },
  {
    slug: "technology-and-the-decision",
    title: "Technology is not the decision",
    dek: "New capability is cheap. A better decision is the part worth designing.",
    date: "November 2026",
    minutes: "5 min",
    paragraphs: [
      "Leaders are shown a great many tools that can generate, summarize, classify, and predict. Very few of those demonstrations include the decision the tool is supposed to improve, or what will happen if it is wrong.",
      "I start with the decision. Who needs it, by when, with what evidence, and what a bad answer would cost. Only then is it worth asking whether a model, a workflow, or a simpler report is the right instrument.",
      "This is less glamorous than a pilot. It is also how you avoid a pilot that cannot be evaluated. If you cannot say what changed for the person who had to choose, you do not have an outcome. You have a demo.",
      "The same habit applies to writing and to building. I would rather ship a small system with a visible limit than a broad promise. Limits are how other people learn to trust the work, and how you learn when to stop.",
      "That is the thread through the engineering, the civic ideas, and the venture work on this site. Different rooms. Same test: did it help someone decide, or did it only add another capability?",
    ],
  },
];

export const brandTitle = "Daniel Heiwig | Data. Insight. AI. Impact.";

export const brandDescription =
  "Daniel Heiwig — AI engineer and technology leader. Data. Insight. AI. Impact. Practical AI, digital government, and leadership, in a personal capacity.";

export const portraitSrc = "/daniel-heiwig-ai-engineering.jpg";

export const portraitAlt = "Daniel Heiwig, AI engineer and technology leader";

export const publicPage = "https://www.facebook.com/profile.php?id=61596691354369";

export const profiles = [
  { label: "Facebook", href: publicPage, note: "Public page", sameAs: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danielheiwig",
    note: "Professional profile",
    sameAs: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/dlhiwig",
    note: "Public code",
    sameAs: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/danielheiwig",
    note: "danielheiwig",
    sameAs: true,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@danielheiwig",
    note: "danielheiwig",
    sameAs: true,
  },
  {
    label: "X",
    href: "https://x.com/DanHeiwig",
    note: "DanHeiwig",
    sameAs: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@heiwig",
    note: "@heiwig",
    sameAs: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DanHiwig",
    note: "@DanHiwig",
    sameAs: true,
  },
  {
    label: "Heiwig.org",
    href: "https://heiwig.org",
    note: "Nonprofit, separate from this site",
    sameAs: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/13174321812",
    note: "Public page action",
    sameAs: true,
  },
];

export const sameAs = profiles.filter((item) => item.sameAs).map((item) => item.href);

export function personSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: pageUrl,
    mainEntity: {
      "@type": "Person",
      "@id": "https://www.danielheiwig.com/#person",
      name: "Daniel Heiwig",
      alternateName: "Daniel Louis Heiwig",
      description: brandDescription,
      jobTitle: "AI Engineer and Technology Leader",
      image: "https://www.danielheiwig.com/daniel-heiwig-ai-engineering.jpg",
      url: "https://www.danielheiwig.com/",
      sameAs,
    },
  };
}

export function projectBySlug(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function essayBySlug(slug: string) {
  return essays.find((item) => item.slug === slug);
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.danielheiwig.com/#website",
    url: "https://www.danielheiwig.com/",
    name: "Daniel Heiwig",
    description: brandDescription,
    publisher: { "@id": "https://www.danielheiwig.com/#person" },
  };
}

export function articleSchema(essay: Essay) {
  const url = `https://www.danielheiwig.com/writing/${essay.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: essay.title,
    description: essay.dek,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", "@id": "https://www.danielheiwig.com/#person", name: "Daniel Heiwig" },
    publisher: { "@type": "Person", "@id": "https://www.danielheiwig.com/#person", name: "Daniel Heiwig" },
    inLanguage: "en-US",
  };
}
