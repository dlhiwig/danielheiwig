export const disclaimer =
  "This is a personal website. The views and opinions presented herein are those of the author and do not necessarily represent the views of the Department of Defense or the Army. Appearance of, or reference to, any commercial products or services does not constitute DoD or Army endorsement of those products or services. The appearance of external hyperlinks does not constitute DoD or Army endorsement of the linked websites, or the information, products or services therein.";

export const belief =
  "I believe technology should do more than introduce new capabilities. It should solve real problems, improve decisions, and make the organizations we depend on work better.";

export type Area = "AI & Agents" | "Applications" | "Robotics" | "Civic" | "Venture";

export type Lane = "Featured" | "Lab" | "Civic" | "Venture";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  area: Area;
  lane: Lane;
  status: string;
  summary: string;
  problem: string;
  approach: string;
  role: string;
  stack: string[];
  boundary: string;
  checked: string;
  unfinished: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "local-ai-workbench",
    title: "Local AI Workbench",
    area: "AI & Agents",
    lane: "Featured",
    status: "Active",
    summary:
      "A personal lab for running models and tools on hardware I control, instead of treating a cloud API as the default.",
    problem:
      "Useful AI work often starts with a question that should not leave the room. A public API is convenient, and it is a poor default when the material is sensitive, the cost has to stay predictable, or the run has to be inspected later.",
    approach:
      "The workbench keeps inference and tool permissions on machines I operate. The useful record is small: what the system saw, what it was allowed to call, and whether the result was actually usable. Private experiments sit behind this description. They are not published here.",
    role: "I design and operate it as personal technical work.",
    stack: ["Local inference", "Narrow tool permissions", "Written evaluation notes"],
    boundary:
      "Personal infrastructure only. It is not an official system, and it does not process nonpublic government data.",
    checked:
      "This page describes the operating rule, not a published benchmark. I have not posted model names, token costs, or accuracy numbers because those notes are not in a public report.",
    unfinished:
      "A public evaluation log, with the model, the task, the limit, and the failure, is the next useful artifact. It is not on this site yet.",
  },
  {
    slug: "vso-agent",
    title: "VSO Agent",
    area: "AI & Agents",
    lane: "Featured",
    status: "Public code",
    summary:
      "An open-source copilot that drafts a review packet for a Veteran Service Officer. It does not file a claim.",
    problem:
      "A VSO conversation can produce a pile of notes and still miss the structure a reviewer needs: the issue, the public authority, and the evidence index.",
    approach:
      "The public Python package assembles a draft packet from a case file, can retrieve public VA and regulatory excerpts with their URLs, and labels every draft for human review. A model is optional. The packet command runs without one. The hard rule in the repository is that the software never files with VA.gov or any claims system.",
    role: "I wrote the public repository and its operating limits.",
    stack: ["Python", "CLI packet assembler", "Public-source retrieval", "unittest"],
    boundary:
      "Not affiliated with, endorsed by, or a product of the VFW or the Department of Veterans Affairs. An accredited person reviews and files. This site does not describe any real veteran's case.",
    checked:
      "The repository documents the assembler, a synthetic sample case, and a test command. I am not publishing a count of passing tests from this page.",
    unfinished:
      "Chat is optional and not the product. Filing, ratings advice, and any official representation are out of scope on purpose.",
    links: [{ label: "GitHub", href: "https://github.com/dlhiwig/vso-agent" }],
  },
  {
    slug: "sbm-volleyball",
    title: "SBM Volleyball Academy",
    area: "Applications",
    lane: "Featured",
    status: "Live",
    summary: "A public website for SBM Volleyball Academy.",
    problem:
      "A training program needs a public front door that says what it is, without turning a community site into a software résumé.",
    approach:
      "The evidence is the site itself: sbm-volleyball.base44.app was responding on 20 November 2026, titled “SBM Volleyball Academy | Train | Develop | Compete.” I am not listing registration, scheduling, or coaching workflows here until those screens are checked and approved for this page.",
    role: "I built the public site.",
    stack: ["Public web application"],
    boundary:
      "A community sports site. It is not a military project, and it is not an AI product.",
    checked: "The public URL returned a page with that title on 20 November 2026.",
    unfinished:
      "Screenshots and a feature list stay off this case until they are taken from the live product and cleared for publication.",
    links: [{ label: "Live site", href: "https://sbm-volleyball.base44.app" }],
  },
  {
    slug: "reciprocal-commerce",
    title: "Reciprocal Commerce Community",
    area: "Applications",
    lane: "Featured",
    status: "Live",
    summary:
      "A live site for Reciprocal Commerce Community. The business is not this website, and it is not Citrati.ai.",
    problem:
      "A professional-services organization needed a public explanation of what it connects: business, technology, and requirements.",
    approach:
      "The live site describes RCC in its own words: it connects business, technology, and professional capabilities with commercial and federal requirements. The source repository is in my GitHub account. Its contact line names Brandon, not this personal site.",
    role: "I hold the public repository and the deployment. I do not speak for the company.",
    stack: ["Public website", "Vercel"],
    boundary:
      "Client or partner work stays labeled as theirs. Nothing here is a Department of Defense endorsement, a contract claim, or a past-performance statement.",
    checked:
      "reciprocalcc.vercel.app was up on 20 November 2026 and carried that description.",
    unfinished:
      "No case metrics, customer names, or proposal claims are published here.",
    links: [
      { label: "Live site", href: "https://reciprocalcc.vercel.app" },
      { label: "GitHub", href: "https://github.com/dlhiwig/reciprocalcc" },
    ],
  },
  {
    slug: "mesht-credits",
    title: "Mesht Credits",
    area: "Applications",
    lane: "Lab",
    status: "In development",
    summary:
      "A public design for a small cooperative ledger: integer mutual credit, signed transactions, and mesh delivery later.",
    problem:
      "A closed group that wants to record who provided value cannot use a bank, a token sale, or a float stored in a text file.",
    approach:
      "The public repository specifies one authoritative ledger, integer units, Ed25519 signatures, and an append-only log. Meshtastic is the intended transport. The README is explicit that radio hardware is deferred. This page does not claim a field deployment or a completed hundred-transaction trial.",
    role: "I am writing the public design and the repository.",
    stack: ["Python", "Mutual credit", "Ed25519", "Meshtastic, later"],
    boundary:
      "Not a cryptocurrency, not a bank, and not cash. Credits are obligations inside a closed group. Not an official financial system.",
    checked:
      "The public README, checked 20 November 2026, is the source for this description. Hardware is documented as a later phase.",
    unfinished: "Radios, a finished license, and a published test log are not done.",
    links: [{ label: "GitHub", href: "https://github.com/dlhiwig/mesht-credits" }],
  },
  {
    slug: "osint-interview-agent",
    title: "Public-source interview notes",
    area: "AI & Agents",
    lane: "Lab",
    status: "Public code",
    summary:
      "A Python agent that drafts a sourced note from public records. It is not a background check.",
    problem:
      "Public records are scattered. A draft that does not cite a URL is not usable, and a draft used as an employment report is the wrong product.",
    approach:
      "The repository searches only the public sources whose keys are configured, writes each claim to an evidence ledger with a URL, and states in the README that the output is not a consumer report under the Fair Credit Reporting Act.",
    role: "I published the repository, including the limits.",
    stack: ["Python", "CLI", "Evidence ledger", "Public-record APIs"],
    boundary:
      "Not for hiring, housing, credit, or insurance decisions. Not a surveillance tool. The operator is responsible for a lawful purpose. This page does not include a sample report about any real person.",
    checked:
      "The README documents a dry run, mocked tests, and the sources it will not touch, including breach data and facial recognition.",
    unfinished: "No web application. No claim that every public source is wired without an API key.",
    links: [{ label: "GitHub", href: "https://github.com/dlhiwig/osint-interview-agent" }],
  },
  {
    slug: "reliable-agent-patterns",
    title: "Reliable Agent Patterns",
    area: "AI & Agents",
    lane: "Lab",
    status: "In development",
    summary: "Notes and small prototypes that keep planning, tools, memory, and a check in separate pieces.",
    problem:
      "An agent fails quietly when planning, tools, and memory collapse into one loop that nobody can replay.",
    approach:
      "Each prototype is required to show four pieces: an orchestrator that can stop, narrow tools, working memory, and a check before the result is trusted. I write down what broke.",
    role: "I design the patterns and try them on small public tasks.",
    stack: ["Orchestration limits", "Constrained tools", "Written checks"],
    boundary: "Public experiments only. Nothing here describes an internal or operational system.",
    checked: "These are working notes, not a released library and not a scored benchmark.",
    unfinished: "A single public repository with the failing cases is not linked yet.",
  },
  {
    slug: "swai",
    title: "SWAI",
    area: "AI & Agents",
    lane: "Lab",
    status: "In development",
    summary: "A private orchestrator for multi-agent software work. There is no public demo.",
    problem:
      "Handing a coding task to several agents without a durable record of what each one did makes the result impossible to review.",
    approach:
      "SWAI is a private codebase for that orchestration problem. I am not publishing the repository, the topology, or a performance number.",
    role: "Personal engineering. Not a product for sale on this site.",
    stack: ["Private repository", "Agent orchestration"],
    boundary:
      "Private implementation. No claim of an autonomous software engineer, and no government system.",
    checked: "The repository exists and is private. That is the check. The code is not public.",
    unfinished: "A public architecture note, if one is ever appropriate, is not written.",
  },
  {
    slug: "desk-robot",
    title: "Desk robot",
    area: "Robotics",
    lane: "Lab",
    status: "Concept",
    summary: "Research toward a small desktop robot with a software personality. No public prototype is linked.",
    problem:
      "A physical assistant is a different problem from a chat window: the hardware, the motion, and the software each fail on their own.",
    approach:
      "I am collecting a modular desktop-robot design in a private repository. Until there is a photograph of a working unit and a measured behavior, this entry stays a concept.",
    role: "Personal research.",
    stack: ["Desktop robotics", "Private notes"],
    boundary: "Not a product. Not a military robot. No performance claim.",
    checked: "No public demonstration was available to link on 20 November 2026.",
    unfinished: "A working unit, a photo, and a measured task.",
  },
  {
    slug: "defit",
    title: "DEFIT",
    area: "Applications",
    lane: "Lab",
    status: "Paused",
    summary: "A fitness product effort. The public site was not available when this page was checked.",
    problem: "A fitness challenge needs a public site only when the product is actually up.",
    approach:
      "defit.me returned an unavailable response on 20 November 2026. A public source repository exists. I am not calling the product live.",
    role: "Personal product work.",
    stack: ["Web application", "Public repository"],
    boundary: "Not a medical device and not an official fitness program.",
    checked: "The domain check failed with HTTP 503 on 20 November 2026.",
    unfinished: "A live deployment and a feature description worth publishing.",
    links: [{ label: "GitHub", href: "https://github.com/dlhiwig/defit-challenge-2026-4105f20e" }],
  },
  {
    slug: "digital-gov-ai",
    title: "Digital Gov AI",
    area: "Civic",
    lane: "Civic",
    status: "Public code",
    summary:
      "A public collection of open data, civic-tech notes, and a roadmap for AI in digital government.",
    problem:
      "Civic AI talk usually starts with a platform. A public index of sources is more honest and more useful.",
    approach:
      "The repository is an open collection and a living roadmap. It is not a government system and it does not score agencies.",
    role: "I maintain the public repository in a personal capacity.",
    stack: ["Python", "Open data notes", "Public roadmap"],
    boundary:
      "Personal research. Not an official recommendation, contract, or agency product.",
    checked: "The public repository and its description were available on 20 November 2026.",
    unfinished: "It is a collection, not a service a resident can complete a task in.",
    links: [{ label: "GitHub", href: "https://github.com/dlhiwig/digital-gov-ai" }],
  },
  {
    slug: "civic-briefs",
    title: "Civic Briefs",
    area: "Civic",
    lane: "Civic",
    status: "Concept",
    summary: "A design for short briefs made only from public information.",
    problem:
      "Governments publish a great deal. Most of it is organized for the office that produced it, not for the person who has to decide.",
    approach:
      "One question, the public sources, what is known, what is missing, and a reasonable next step. No scoreboard and no invented certainty.",
    role: "I am exploring the concept in a personal capacity.",
    stack: ["Public information", "Plain language", "Source notes"],
    boundary: "Not a government product, contract, or official recommendation.",
    checked: "There is no prototype linked on this site.",
    unfinished: "A worked example from public records, with the gaps left visible.",
  },
  {
    slug: "heiwig-org",
    title: "Heiwig.org",
    area: "Civic",
    lane: "Civic",
    status: "Separate organization",
    summary:
      "A nonprofit site about open-source AI as a civil liberty. It is a different organization from this personal site.",
    problem:
      "A personal engineering page and a nonprofit should not be written as if they are the same voice.",
    approach:
      "Heiwig.org speaks for the organization. This entry only points to it and keeps the names apart.",
    role: "I am associated with the organization. This personal site does not speak for it.",
    stack: ["Separate website"],
    boundary: "Not a Department of Defense program. Not Citrati.ai.",
    checked: "heiwig.org was up on 20 November 2026.",
    unfinished: "Organizational claims belong on that site, not in this case study.",
    links: [{ label: "heiwig.org", href: "https://www.heiwig.org" }],
  },
  {
    slug: "citrati",
    title: "Citrati.ai",
    area: "Venture",
    lane: "Venture",
    status: "Independent venture",
    summary: "An independent commercial venture. Kept off the engineering cases until there is a public product.",
    problem: "A company and a personal portfolio get less clear when they share a page.",
    approach:
      "Citrati.ai has its own page on this site. Product claims wait for a public product site.",
    role: "Founder, in a personal capacity.",
    stack: ["Separate brand"],
    boundary: "Commercial activity is not official duty. No endorsement is implied.",
    checked: "There is no public product URL on this site yet.",
    unfinished: "A product, a customer, or a document that can be linked.",
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

export function projectSchema(project: Project) {
  const page = `https://www.danielheiwig.com/work/${project.slug}`;
  const code = project.links?.find((item) => item.href.includes("github.com"));
  const site = project.links?.find((item) => item.label === "Live site" || item.label === "heiwig.org");
  return {
    "@context": "https://schema.org",
    "@type": code ? "SoftwareSourceCode" : "CreativeWork",
    name: project.title,
    description: project.summary,
    url: page,
    author: { "@id": "https://www.danielheiwig.com/#person" },
    ...(code ? { codeRepository: code.href } : {}),
    ...(site ? { sameAs: site.href } : {}),
  };
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
