import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Frame, Eyebrow } from "@/components/frame";
import { projects, type Area, type Lane, type Project } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · Daniel Heiwig" },
      {
        name: "description",
        content:
          "Selected public work by Daniel Heiwig: local AI, agent systems, live websites, and civic projects. Maturity is labeled. Nonpublic work is not described.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/work" }],
  }),
  component: Work,
});

const filters: Array<"All" | Area> = [
  "All",
  "AI & Agents",
  "Applications",
  "Robotics",
  "Civic",
  "Venture",
];

const lanes: Lane[] = ["Featured", "Lab", "Civic", "Venture"];

const laneCopy: Record<Lane, string> = {
  Featured: "The public work with the clearest evidence.",
  Lab: "Experiments, private code, and products that are not live.",
  Civic: "Public-interest work, kept separate from official duty.",
  Venture: "Commercial work, on its own page.",
};

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="md:col-span-8">
        <p className="text-xs tracking-wide text-gold uppercase">
          {project.area} · {project.status}
        </p>
        <h3 className="mt-2 font-display text-3xl text-ink">{project.title}</h3>
        <p className="mt-2 max-w-xl text-slate">{project.summary}</p>
      </div>
      <p className="text-sm text-ink md:col-span-4 md:text-right">Open the case</p>
    </>
  );
  const className =
    "grid gap-4 rounded-2xl border border-sand bg-cream p-6 md:grid-cols-12 md:items-center";
  if (project.slug === "citrati") {
    return (
      <Link to="/ventures" className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <Link to="/work/$slug" params={{ slug: project.slug }} className={className}>
      {inner}
    </Link>
  );
}

function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((item) => filter === "All" || item.area === filter);

  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">
            AI systems. Software products. Applied engineering.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            A portfolio of public systems, agents, and sites. Each case says what
            exists, what I did, and what is not finished. A repository is not a
            finished product.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={
                  active
                    ? "h-11 rounded-full bg-ink px-4 text-sm text-paper"
                    : "h-11 rounded-full border border-sand px-4 text-sm text-ink"
                }
              >
                {item}
              </button>
            );
          })}
        </div>
        {filter === "All" ? (
          <div className="mt-10 space-y-12">
            {lanes.map((lane) => {
              const items = visible.filter((item) => item.lane === lane);
              if (items.length === 0) return null;
              return (
                <div key={lane}>
                  <h2 className="font-display text-3xl text-ink">{lane}</h2>
                  <p className="mt-2 text-slate">{laneCopy[lane]}</p>
                  <div className="mt-6 grid gap-4">
                    {items.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
        <div className="mt-12 rounded-3xl border border-sand bg-paper p-6 md:flex md:items-center md:justify-between md:gap-6">
          <p className="max-w-xl text-ink">
            If a case is relevant to something you are building, write. GitHub and
            LinkedIn are the professional records. The rest of the public profiles
            stay on Connect.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <Link
              to="/connect"
              className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm text-paper"
            >
              Contact
            </Link>
            <a
              href="https://github.com/dlhiwig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-sand px-5 text-sm text-ink"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/danielheiwig"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-sand px-5 text-sm text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Frame>
  );
}
