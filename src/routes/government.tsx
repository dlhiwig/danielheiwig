import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";

export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [
      { title: "Digital government · Daniel Heiwig" },
      {
        name: "description",
        content:
          "Personal notes on public services that are easier to finish and honest about their sources.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/government" }],
  }),
  component: Government,
});

const principles = [
  {
    title: "Finishable",
    text: "A person should be able to complete the task without learning which office owns which database. If the path requires an insider, the service is not done.",
  },
  {
    title: "Plain",
    text: "Use the words a resident would use. Status, deadline, and what happens next beat a brand name for a portal.",
  },
  {
    title: "Sourced",
    text: "When a number or a claim is shown, name where it came from and what it does not cover. False precision is a design bug.",
  },
  {
    title: "Decisions, not dashboards",
    text: "Publish the brief someone can act on. A wall of charts that nobody uses is not modernization.",
  },
];

function Government() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Digital government</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Make the public thing easier to finish.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            These are personal design notes. They are not a proposal to any agency,
            not an official recommendation, and not a description of systems I work on
            in uniform.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <div className="space-y-10">
          {principles.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-sand pb-10 md:grid-cols-12">
              <p className="font-display text-3xl text-gold md:col-span-2">0{index + 1}</p>
              <div className="md:col-span-10">
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-slate">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-paper p-6">
          <h2 className="font-display text-2xl text-ink">What I will not put here</h2>
          <p className="mt-3 leading-relaxed text-slate">
            Official systems, internal data, nonpublic architectures, and anything that
            could be read as an endorsement. Civic Briefs, the concept on the work page,
            stays at the level of public information and plain language.
          </p>
          <Link
            to="/work/$slug"
            params={{ slug: "civic-briefs" }}
            className="mt-4 inline-block text-sm font-medium text-ink underline"
          >
            Read the Civic Briefs concept
          </Link>
        </div>
      </section>
    </Frame>
  );
}
