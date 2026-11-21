import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you · Daniel Heiwig" },
      {
        name: "description",
        content: "Your message to Daniel Heiwig is ready to send.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Thank you.</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
            Your email app should be open with the message addressed to me. Send it
            there, and I’ll read it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-medium text-ink"
            >
              Back to the homepage
            </Link>
            <Link
              to="/work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm text-paper"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </Frame>
  );
}
