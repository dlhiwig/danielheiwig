import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";
import { belief, brandDescription, personSchema, portraitAlt, portraitSrc } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Daniel Heiwig" },
      { name: "description", content: brandDescription },
    ],
    links: [{ rel: "canonical", href: "https://danielheiwig.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema("https://danielheiwig.com/about")),
      },
    ],
  }),
  component: About,
});

const chapters = [
  {
    label: "Service",
    text: "I serve as a U.S. Army officer. That fact is relevant to who I am. It is not a sponsorship of this website. I do not publish nonpublic work, internal systems, or anything that would need a formal release.",
  },
  {
    label: "Engineering",
    text: "I build with a bias toward systems I can explain: local and private AI, narrow tools, and evaluations that say whether the result helped. Demos are easy. A decision that gets better is the bar.",
  },
  {
    label: "Civic interest",
    text: "I care about digital government as a design problem. Public services should be understandable, finishable, and honest about their sources. Those are personal ideas, not an office’s position.",
  },
  {
    label: "Ventures",
    text: "Entrepreneurial work, including Citrati.ai, stays in its own lane. If a project is commercial, it is labeled that way. It does not borrow the authority of public service.",
  },
];

function About() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Eyebrow>About Daniel</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              A builder who still answers for the decision.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-mist">
            I’m Daniel Heiwig. I work at the intersection of artificial intelligence,
            leadership, and the unglamorous question of whether a tool actually helped.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-12">
        <img
          src={portraitSrc}
          alt={portraitAlt}
          width={1254}
          height={1254}
          className="h-128 w-full rounded-3xl object-cover object-top md:col-span-5"
        />
        <div className="md:col-span-7">
          <p className="text-xs tracking-wide text-gold uppercase">A few words</p>
          <h2 className="mt-3 font-display text-4xl text-ink">The story behind the work.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate">
            <p>
              I didn’t come to this work because software was fashionable. I came to it
              because decisions get made with incomplete information, and most tools make
              more text instead of a clearer choice.
            </p>
            <p>
              The engineering I care about is practical: models you can run with a known
              boundary, agents that stop, and writing that a serious person can use. The
              leadership I care about is the same habit in a different room. Name the
              decision. Name the evidence. Name what happens if you’re wrong.
            </p>
            <p>{belief}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-sand bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl text-ink">How the pieces fit</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {chapters.map((chapter) => (
              <article key={chapter.label} className="rounded-2xl border border-sand bg-cream p-6">
                <h3 className="font-display text-2xl text-ink">{chapter.label}</h3>
                <p className="mt-3 leading-relaxed text-slate">{chapter.text}</p>
              </article>
            ))}
          </div>
          <Link
            to="/work"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            See the work
          </Link>
        </div>
      </section>
    </Frame>
  );
}
