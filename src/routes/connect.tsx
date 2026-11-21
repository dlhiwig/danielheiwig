import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Frame, Eyebrow } from "@/components/frame";
import { sendContact } from "@/lib/contact";
import { profiles } from "@/lib/content";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect · Daniel Heiwig" },
      {
        name: "description",
        content: "Public profiles and a contact form for Daniel Heiwig.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/connect" }],
  }),
  component: Connect,
});

function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const result = await sendContact({ data: { name, email, message, website } });
      if (!result.ok) {
        setStatus("error");
        setError(result.error);
        return;
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("It didn't send. Try again in a moment.");
    }
  }

  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Connect</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Follow the public work. Write if it’s useful.
          </h1>
          <p className="mt-5 text-lg text-mist">
            A message sent here comes to me. This site is personal. It does not speak
            for the Army or the Department of Defense.
          </p>
        </div>
      </section>
      <section id="profiles" className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-ink">Public pages</h2>
          <ul className="mt-6 divide-y divide-sand border-y border-sand">
            {profiles.map((profile) => (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="font-medium text-ink">{profile.label}</span>
                  <span className="text-sm text-slate">{profile.note}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            These are the public profiles on the Daniel Heiwig page. Private accounts
            stay off this site. Citrati.ai is not linked until its public site is confirmed.
          </p>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl border border-sand bg-paper p-6">
          <h2 className="font-display text-3xl text-ink">Contact</h2>
          <label className="mt-6 block text-sm text-slate" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-xl border border-sand bg-cream px-4 text-ink"
          />
          <label className="mt-4 block text-sm text-slate" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-xl border border-sand bg-cream px-4 text-ink"
          />
          <label className="mt-4 block text-sm text-slate" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className="mt-2 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-ink"
          />
          <label className="sr-only" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper disabled:opacity-60"
          >
            {status === "sending" ? "Sending" : "Send"}
          </button>
          {status === "sent" ? (
            <p className="mt-4 text-sm text-ink" role="status">
              Sent. I’ll read it in my inbox.
            </p>
          ) : status === "error" ? (
            <p className="mt-4 text-sm text-ink" role="alert">
              {error}
            </p>
          ) : (
            <p className="mt-4 text-sm text-slate">Your email is only used to reply.</p>
          )}
        </form>
      </section>
    </Frame>
  );
}
