import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";
import { essayBySlug, articleSchema } from "@/lib/content";

export const Route = createFileRoute("/writing_/$slug")({
  head: ({ params }) => {
    const essay = essayBySlug(params.slug);
    return {
      meta: [
        { title: essay ? `${essay.title} · Daniel Heiwig` : "Writing · Daniel Heiwig" },
        { name: "description", content: essay?.dek ?? "Essay" },
        ...(!essay ? [{ name: "robots", content: "noindex, follow" }] : []),
      ],
      links: essay
        ? [{ rel: "canonical", href: `https://www.danielheiwig.com/writing/${essay.slug}` }]
        : [],
      scripts: essay
        ? [{ type: "application/ld+json", children: JSON.stringify(articleSchema(essay)) }]
        : [],
    };
  },
  component: EssayPage,
});

function EssayPage() {
  const { slug } = Route.useParams();
  const essay = essayBySlug(slug);

  if (!essay) {
    return (
      <Frame>
        <section className="mx-auto max-w-3xl px-5 py-20">
          <h1 className="font-display text-4xl">That essay isn’t here.</h1>
          <Link to="/writing" className="mt-6 inline-block underline">
            All writing
          </Link>
        </section>
      </Frame>
    );
  }

  return (
    <Frame>
      <article className="bg-cream">
        <header className="bg-navy text-paper">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <Eyebrow>
              {essay.date} · {essay.minutes}
            </Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{essay.title}</h1>
            <p className="mt-5 text-lg text-mist">{essay.dek}</p>
          </div>
        </header>
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 text-lg leading-relaxed text-ink">
          {essay.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className="text-sm text-slate">
            Written in a personal capacity. Not an official position.
          </p>
          <Link to="/writing" className="inline-block text-sm underline">
            All writing
          </Link>
        </div>
      </article>
    </Frame>
  );
}
