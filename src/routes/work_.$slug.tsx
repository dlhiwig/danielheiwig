import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";
import { projectBySlug, projectSchema } from "@/lib/content";

export const Route = createFileRoute("/work_/$slug")({
  head: ({ params }) => {
    const project = projectBySlug(params.slug);
    const hidden = !project || project.slug === "citrati";
    return {
      meta: [
        { title: project ? `${project.title} · Daniel Heiwig` : "Work · Daniel Heiwig" },
        { name: "description", content: project?.summary ?? "Project" },
        ...(hidden ? [{ name: "robots", content: "noindex, follow" }] : []),
      ],
      links: project && !hidden
        ? [{ rel: "canonical", href: `https://www.danielheiwig.com/work/${project.slug}` }]
        : [],
      scripts:
        project && !hidden
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(projectSchema(project)),
              },
            ]
          : [],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const project = projectBySlug(slug);

  if (!project || project.slug === "citrati") {
    return (
      <Frame>
        <section className="mx-auto max-w-3xl px-5 py-20">
          <h1 className="font-display text-4xl text-ink">That case isn’t public.</h1>
          <Link to="/work" className="mt-6 inline-block text-sm text-ink underline">
            Back to work
          </Link>
        </section>
      </Frame>
    );
  }

  const blocks = [
    ["Problem", project.problem],
    ["What I built", project.approach],
    ["My contribution", project.role],
    ["What was checked", project.checked],
    ["What is unfinished", project.unfinished],
  ] as const;

  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <Eyebrow>
            {project.lane} · {project.status}
          </Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight">{project.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">{project.summary}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 py-14">
        {blocks.map(([label, body]) => (
          <section key={label} className="border-b border-sand py-8">
            <h2 className="text-xs tracking-wide text-gold uppercase">{label}</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink">{body}</p>
          </section>
        ))}
        <section className="border-b border-sand py-8">
          <h2 className="text-xs tracking-wide text-gold uppercase">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-sand px-3 py-2 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>
        {project.links && project.links.length > 0 ? (
          <section className="border-b border-sand py-8">
            <h2 className="text-xs tracking-wide text-gold uppercase">Evidence</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center rounded-full border border-sand px-4 text-sm text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <p className="mt-8 rounded-2xl bg-paper p-5 text-sm leading-relaxed text-slate">
          {project.boundary}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link to="/work" className="text-ink underline">
            All work
          </Link>
          <Link to="/connect" className="text-ink underline">
            Discuss this work
          </Link>
        </div>
      </article>
    </Frame>
  );
}
