import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Frame, Eyebrow } from "@/components/frame";
import { profiles } from "@/lib/content";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect · Daniel Heiwig" },
      {
        name: "description",
        content: "Public profiles and a way to leave a note for Daniel Heiwig.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/connect" }],
  }),
  component: Connect,
});

function Connect() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const entry = { name: name.trim(), note: note.trim(), at: new Date().toISOString() };
    if (!entry.note) return;
    const prior = window.localStorage.getItem("dh-notes");
    let list: typeof entry[] = [];
    if (prior) {
      try {
        list = JSON.parse(prior) as typeof entry[];
      } catch {
        list = [];
      }
    }
    list.unshift(entry);
    window.localStorage.setItem("dh-notes", JSON.stringify(list.slice(0, 20)));
    setSaved(true);
    setName("");
    setNote("");
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
            The best next step is a public profile. A note stays in this browser only —
            there is no inbox wired up yet.
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
          <h2 className="font-display text-3xl text-ink">Leave a note</h2>
          <label className="mt-6 block text-sm text-slate" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-sand bg-cream px-4 text-ink"
            autoComplete="name"
          />
          <label className="mt-4 block text-sm text-slate" htmlFor="note">
            Note
          </label>
          <textarea
            id="note"
            required
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={5}
            className="mt-2 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-ink"
          />
          <button
            type="submit"
            className="mt-4 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            Save on this device
          </button>
          {saved ? (
            <p className="mt-4 text-sm text-ink" role="status">
              Saved in this browser. It was not sent anywhere.
            </p>
          ) : (
            <p className="mt-4 text-sm text-slate">Notes never leave this device.</p>
          )}
        </form>
      </section>
    </Frame>
  );
}
