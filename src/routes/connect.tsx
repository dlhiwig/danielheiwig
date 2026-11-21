import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Frame, Eyebrow } from "@/components/frame";
import { profiles } from "@/lib/content";

const INBOX = "daniel.heiwig@outlook.com";

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
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n${name.trim()}\n${email.trim()}`);
    const anchor = document.createElement("a");
    anchor.href = `mailto:${INBOX}?subject=${subject}&body=${body}`;
    anchor.click();
    void navigate({ to: "/thank-you" });
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
            Send opens your email app with the note addressed to me. It is not delivered
            until you send it from there. This site is personal. It does not speak for
            the Army or the Department of Defense.
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
          <button
            type="submit"
            className="mt-4 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            Send
          </button>
          <p className="mt-4 text-sm text-slate">
            Send opens your email app, then a confirmation page.
          </p>
        </form>
      </section>
    </Frame>
  );
}
