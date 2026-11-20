import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Frame, Eyebrow } from "@/components/frame";
import { projects, type Area, type Project } from "@/lib/content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · Daniel Heiwig" },
      { name: "description", content: "Public projects and concepts by Daniel Heiwig." },
    ],
  }),
  component: Work,
});

const filters: Array<"All" | Area> = ["All", "Engineering", "Civic", "Venture"];

function ProjectRow({ project }: { project: Project }) {
  return (
    <>
      <div className="md:col-span-8">
        <p className="text-xs tracking-wide text-gold uppercase">
          {project.area} · {project.status}
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">{project.title}</h2>
        <p className="mt-2 max-w-xl text-slate">{project.summary}</p>
      </div>
      <p className="text-sm text-ink md:col-span-4 md:text-right">Open the case</p>
    </>
  );
}

function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((item) => filter === "All" || item.area === filter);

  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Eyebrow>Projects & engineering</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">
            Evidence, not a list of interests.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
            These are public, personal efforts. Each one says what problem it is for,
            what I actually did, and where the boundary is.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
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
        <div className="mt-8 grid gap-4">
          {visible.map((project) =>
            project.slug === "citrati" ? (
              <Link
                key={project.slug}
                to="/ventures"
                className="grid gap-4 rounded-2xl border border-sand bg-cream p-6 md:grid-cols-12 md:items-center"
              >
                <ProjectRow project={project} />
              </Link>
            ) : (
              <Link
                key={project.slug}
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="grid gap-4 rounded-2xl border border-sand bg-cream p-6 md:grid-cols-12 md:items-center"
              >
                <ProjectRow project={project} />
              </Link>
            ),
          )}
        </div>
      </section>
    </Frame>
  );
}
