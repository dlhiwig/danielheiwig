import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";
import { essays } from "@/lib/content";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing · Daniel Heiwig" },
      {
        name: "description",
        content: "Essays on AI systems, digital government, and decisions by Daniel Heiwig.",
      },
    ],
  }),
  component: Writing,
});

function Writing() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Writing & insights</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Practical notes, not a content calendar.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Three pieces to start. Each one is something I would hand to a colleague.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-12">
        <ol className="space-y-4">
          {essays.map((essay, index) => (
            <li key={essay.slug}>
              <Link
                to="/writing/$slug"
                params={{ slug: essay.slug }}
                className="block rounded-2xl border border-sand bg-cream p-6 hover:border-gold"
              >
                <p className="text-xs tracking-wide text-gold uppercase">
                  0{index + 1} · {essay.date} · {essay.minutes}
                </p>
                <h2 className="mt-3 font-display text-3xl text-ink">{essay.title}</h2>
                <p className="mt-2 text-slate">{essay.dek}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </Frame>
  );
}
