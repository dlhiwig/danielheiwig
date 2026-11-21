import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Frame, Eyebrow, Portrait } from "@/components/frame";
import {
  belief,
  brandDescription,
  brandTitle,
  essays,
  websiteSchema,
  projects,
  publicPage,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: brandTitle },
      { name: "description", content: brandDescription },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema()),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.filter((item) => item.slug !== "citrati").slice(0, 3);

  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="min-w-0">
            <Eyebrow>AI engineering / Digital government / Leadership / Entrepreneurship</Eyebrow>
            <h1 className="mt-5 font-display text-5xl leading-none text-paper md:text-7xl">
              Daniel Heiwig
            </h1>
            <p className="mt-6 max-w-xl font-display text-3xl leading-tight text-paper md:text-4xl">
              Turning data into decisions. Ideas into impact.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              I’m an Army officer, AI engineer, and builder exploring how intelligent
              technology can solve real-world problems.
            </p>
            <p className="mt-4 text-sm tracking-wide text-cyan">Data. Insight. AI. Impact.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/work"
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-medium text-ink"
              >
                Explore my work
              </Link>
              <a
                href={publicPage}
                target="_blank"
                rel="me noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm text-paper"
              >
                Follow my public page
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border border-line bg-deep shadow-2xl">
              <Portrait priority className="h-112 w-full object-cover object-top md:h-128" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-sand bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12">
          <p className="font-display text-3xl leading-tight text-ink md:col-span-7 md:text-4xl">
            {belief}
          </p>
          <div className="md:col-span-5 md:border-l md:border-sand md:pl-8">
            <p className="text-sm tracking-wide text-gold uppercase">Personal capacity</p>
            <p className="mt-3 leading-relaxed text-slate">
              I serve as a U.S. Army officer. This site is mine. It does not speak for
              the Army or the Department of Defense, and it does not describe nonpublic work.
            </p>
            <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
              Read the story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ink">What I’m actually building</h2>
          </div>
          <Link to="/work" className="hidden text-sm text-slate hover:text-ink sm:inline">
            All work
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="flex min-h-64 flex-col justify-between rounded-2xl border border-sand bg-cream p-6 hover:border-gold"
            >
              <div>
                <p className="text-xs tracking-wide text-gold uppercase">{project.area}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{project.summary}</p>
              </div>
              <p className="mt-6 text-sm text-ink">{project.status}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-deep text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <Eyebrow>Digital government</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">Services people can finish</h2>
            <p className="mt-4 max-w-md leading-relaxed text-mist">
              Ideas for public services that are easier to use, honest about what they
              know, and organized around a decision instead of an org chart.
            </p>
            <Link
              to="/government"
              className="mt-6 inline-flex h-12 items-center rounded-full border border-line px-5 text-sm"
            >
              Read the civic notes
            </Link>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Plain language over platform theater",
              "Name the source and the gap",
              "A path a busy person can finish",
              "Kept strictly separate from official duties",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-panel px-5 py-4 text-mist">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Eyebrow>Writing</Eyebrow>
        <h2 className="mt-3 font-display text-4xl text-ink">Notes worth keeping</h2>
        <div className="mt-8 divide-y divide-sand border-y border-sand">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              to="/writing/$slug"
              params={{ slug: essay.slug }}
              className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline"
            >
              <p className="text-sm text-slate md:col-span-3">
                {essay.date} · {essay.minutes}
              </p>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl text-ink">{essay.title}</h3>
                <p className="mt-1 text-slate">{essay.dek}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-sand bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-xs tracking-wide text-gold uppercase">Independent venture</p>
            <h2 className="mt-2 font-display text-3xl text-ink">Citrati.ai</h2>
            <p className="mt-2 max-w-xl text-slate">
              Commercial work lives on its own page, with a hard line between a personal
              venture and anything official. Official links stay off this site until the
              venture’s public site is confirmed.
            </p>
          </div>
          <Link
            to="/ventures"
            className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            See the separation
          </Link>
        </div>
      </section>
    </Frame>
  );
}
