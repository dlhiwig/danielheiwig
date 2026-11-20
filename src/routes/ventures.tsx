import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures · Daniel Heiwig" },
      {
        name: "description",
        content: "Citrati.ai and other personal commercial work, kept separate from public service.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/ventures" }],
  }),
  component: Ventures,
});

function Ventures() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Independent venture</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Citrati.ai</h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            A personal commercial project. It is not part of my official duties, and
            nothing about it is endorsed by the Department of Defense or the Army.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-lg leading-relaxed text-slate">
        <p className="text-ink">
          I keep venture work on this page so a visitor can tell the difference between
          a public-interest idea, a piece of engineering, and a company.
        </p>
        <p>
          Citrati.ai is early. I am not going to invent product claims to fill a
          homepage. When there is something public to show — a product, a customer, a
          document — it will live with the venture, labeled as commercial, and linked
          from here.
        </p>
        <div className="rounded-2xl border border-sand bg-paper p-6 text-base">
          <h2 className="font-display text-2xl text-ink">The line</h2>
          <ul className="mt-4 space-y-3">
            <li>Service stays service. This page does not speak for it.</li>
            <li>Civic notes stay civic. They are not a sales deck.</li>
            <li>Commercial work stays named, separate, and personal.</li>
          </ul>
        </div>
        <Link to="/connect" className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper">
          Talk about a collaboration
        </Link>
      </section>
    </Frame>
  );
}
