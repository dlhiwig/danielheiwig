import { createFileRoute, Link } from "@tanstack/react-router";
import { Signup } from "@/components/signup";
import { Frame, Eyebrow } from "@/components/frame";
import { disclaimer } from "@/lib/content";

export const Route = createFileRoute("/heiwig-press")({
  head: () => ({
    meta: [
      { title: "Heiwig Press · Daniel Heiwig" },
      {
        name: "description",
        content:
          "Heiwig Press is Daniel Heiwig’s personal publishing imprint. The first book is The Reasons Why.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/heiwig-press" }],
  }),
  component: Press,
});

function Press() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Publishing imprint</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Heiwig Press</h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            A personal imprint for books I am willing to put my own name on. It is not
            the Army, not the Department of Defense, and not Heiwig.org.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <article className="rounded-3xl border border-sand bg-cream p-6">
          <p className="text-xs tracking-wide text-gold uppercase">Book 1 · Coming soon</p>
          <h2 className="mt-3 font-display text-4xl text-ink">The Reasons Why</h2>
          <p className="mt-4 leading-relaxed text-slate">
            A leadership instrument rebuilt from a 1984 Army War College anthology.
            Courage, command, and sacrifice, set up so a leader can use the chapter
            rather than only admire it.
          </p>
          <Link
            to="/the-reasons-why"
            className="mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            Read the book page
          </Link>
        </article>
        <Signup
          intent="newsletter"
          heading="The press list"
          note="A short note when a book is actually available. Not a weekly letter."
          button="Join the list"
        />
      </section>
      <p className="mx-auto max-w-3xl px-5 pb-12 text-sm leading-relaxed text-slate">
        {disclaimer}
      </p>
    </Frame>
  );
}
