import { createFileRoute, Link } from "@tanstack/react-router";
import { BookCover, Signup } from "@/components/signup";
import { Frame, Eyebrow, Portrait } from "@/components/frame";
import { disclaimer } from "@/lib/content";

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Reasons Why",
  alternateName: "The Reasons Why: A Leadership Instrument for the Sword and the Spirit",
  url: "https://www.danielheiwig.com/the-reasons-why",
  author: { "@type": "Person", name: "Daniel Heiwig", url: "https://www.danielheiwig.com/about" },
  publisher: {
    "@type": "Organization",
    name: "Heiwig Press",
    url: "https://www.danielheiwig.com/heiwig-press",
  },
  description:
    "A leadership instrument rebuilt from a 1984 Army War College anthology on courage, command, and sacrifice. Coming soon.",
  inLanguage: "en",
};

const steps = [
  ["Context", "Where the leader and the people actually are."],
  ["The Reason Why", "The belief that makes the hard thing worth doing."],
  ["What It Costs", "What the choice asks of a person, without the gloss."],
  ["Practice", "How the idea is used when the day is ordinary or ugly."],
  ["Questions for the Reader", "The work is left with the reader, not finished for them."],
];

const audiences = [
  ["Officers and NCOs", "A field-ready tool for character-based leadership."],
  [
    "Cadets, ROTC, OCS, and PME",
    "Each chapter is written to be taught, with doctrine connection boxes for ADP 6-22 and FM 6-22.",
  ],
  ["Civilian leaders", "For anyone who has to ask people to do hard things."],
];

const stories = [
  ["Sullivan Ballou", "A letter that treats love and duty as the same decision."],
  ["Torpedo Eight at Midway", "A squadron that went in knowing the cost."],
  ["Stockdale in Hoa Lo", "Command sustained inside a prison."],
  ["Benavidez at Loc Ninh", "A rescue that did not stop when the body failed."],
  ["Patton’s Third Army speech", "A commander telling soldiers why the fight is theirs."],
];

export const Route = createFileRoute("/the-reasons-why")({
  head: () => ({
    meta: [
      { title: "The Reasons Why: A Military Leadership Book by Daniel Heiwig" },
      {
        name: "description",
        content:
          "The Reasons Why rebuilds a 1984 Army War College anthology into a leadership instrument for officers, NCOs, cadets, and civilian leaders. Coming soon from Heiwig Press.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/the-reasons-why" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(bookSchema) }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
          <BookCover />
          <div>
            <Eyebrow>Book 1 · Coming soon</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">The Reasons Why</h1>
            <p className="mt-5 text-xl leading-snug text-paper">
              Armies rarely collapse for lack of ammunition. They collapse when soldiers
              stop believing their leaders.
            </p>
            <p className="mt-4 text-gold">
              A Leadership Instrument for the Sword and the Spirit
            </p>
            <p className="mt-4 text-sm text-mist">Daniel Heiwig · Heiwig Press</p>
            <p className="mt-6 max-w-xl text-mist">
              Kindle and paperback are not linked yet. The buttons will go to Amazon
              when the listing is live. Until then, leave an email and I will send the
              link.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#notify"
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-medium text-ink"
              >
                Kindle — coming soon
              </a>
              <a
                href="#notify"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm text-paper"
              >
                Paperback — coming soon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <Eyebrow>Origin</Eyebrow>
        <h2 className="mt-3 font-display text-4xl text-ink">A book that survived in a bag</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate">
          <p>
            In 1984, two students at the Army War College put together an anthology on
            courage, command, and sacrifice. It was not a commercial book. It was a
            binder of reasons.
          </p>
          <p>
            A brigadier general carried that binder in waterproof bags for decades. The
            pages were used, not shelved. I rebuilt the anthology into a working
            instrument: the same stories, set inside a structure a leader can teach
            and reuse.
          </p>
          <p>
            I have not posted the original inscription. A scan belongs here only after
            it is cleared to be public.
          </p>
        </div>
      </section>

      <section className="border-y border-sand bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl text-ink">Who it is for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-sand bg-cream p-6">
                <h3 className="font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl text-ink">How a chapter works</h2>
        <p className="mt-3 max-w-2xl text-slate">
          This is not only a book of quotations. Each chapter moves through five steps.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map(([title, body], index) => (
            <li key={title} className="rounded-2xl border border-sand p-4">
              <p className="text-sm text-gold">0{index + 1}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-sand bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="font-display text-4xl text-ink">Stories readers will know</h2>
          <p className="mt-3 text-slate">
            The book is organized in six parts. The part titles will be listed here
            when the table of contents is final. These are stories already in the work.
          </p>
          <ul className="mt-8 divide-y divide-sand border-y border-sand">
            {stories.map(([title, body]) => (
              <li key={title} className="py-4">
                <h3 className="font-medium text-ink">{title}</h3>
                <p className="mt-1 text-slate">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="notify" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
        <Signup
          intent="sample"
          heading="Read the framework"
          note="Ask for the 2:00 AM Courage Framework. I will send the sample when it is ready to share. I do not paste an unpublished excerpt on the open web."
          button="Request the sample"
        />
        <Signup
          intent="newsletter"
          heading="The Heiwig Press list"
          note="Notes when the book is available, and almost nothing else. No schedule I cannot keep."
          button="Join the list"
        />
      </section>

      <section className="border-t border-sand bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-ink">For units and classrooms</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Bulk orders, a discussion guide, or a request to speak with a unit or a
              class. One adoption is more useful than a pile of single clicks. This is
              a personal request. It is not an official Army program.
            </p>
          </div>
          <Signup
            intent="bulk"
            heading="Ask about a group"
            note="Say who the group is and what you need. I will answer from my own inbox."
            button="Write about a group"
            messageLabel="What you need"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-3xl border border-sand">
            <Portrait className="h-80 w-full object-cover object-top" />
          </div>
        </div>
        <div className="md:col-span-8">
          <Eyebrow>The author</Eyebrow>
          <h2 className="mt-3 font-display text-4xl text-ink">Daniel Heiwig</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            He still packs the bag. The book is personal work, written under his own
            name, and it does not speak for the Army.
          </p>
          <Link to="/about" className="mt-5 inline-block text-sm text-ink underline">
            About Daniel
          </Link>
        </div>
      </section>

      <section className="border-t border-sand bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-wide text-gold uppercase">Coming next</p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Book 1 of the Leadership Instrument series
            </h2>
            <p className="mt-4 text-slate">
              Book 2 is not written. The only promise is a note if it is published.
            </p>
            <p className="mt-8 text-sm leading-relaxed text-slate">
              Praise will be added when a person has agreed to be quoted. There are no
              blurbs on this page yet.
            </p>
            <p className="mt-4 text-sm">
              <Link to="/heiwig-press" className="text-ink underline">
                Heiwig Press
              </Link>
            </p>
          </div>
          <Signup
            intent="book-2"
            heading="Get notified about Book 2"
            note="One note, later, if a second book exists."
            button="Notify me"
          />
        </div>
      </section>

      <p className="mx-auto max-w-3xl px-5 py-10 text-sm leading-relaxed text-slate">
        Views are the author’s own and do not reflect the official position of the
        Department of the Army, DoD, or the U.S. Government. {disclaimer}
      </p>
    </Frame>
  );
}
