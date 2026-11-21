import { useState } from "react";

const INBOX = "daniel.heiwig@outlook.com";

const subjects = {
  newsletter: "Newsletter signup — Daniel Heiwig",
  sample: "Send the sample from The Reasons Why",
  "book-2": "Notify me about Book 2",
  bulk: "The Reasons Why — unit, classroom, or bulk order",
} as const;

export function Signup({
  intent,
  heading,
  note,
  button,
  messageLabel,
}: {
  intent: keyof typeof subjects;
  heading: string;
  note: string;
  button: string;
  messageLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const body = [
      heading,
      "",
      `Name: ${name.trim() || "(not given)"}`,
      `Email: ${email.trim()}`,
      messageLabel ? `${messageLabel}: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const anchor = document.createElement("a");
    anchor.href = `mailto:${INBOX}?subject=${encodeURIComponent(subjects[intent])}&body=${encodeURIComponent(body)}`;
    anchor.click();
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-sand bg-paper p-6">
      <h2 className="font-display text-3xl text-ink">{heading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate">{note}</p>
      <label className="mt-5 block text-sm text-slate" htmlFor={`${intent}-name`}>
        Name
      </label>
      <input
        id={`${intent}-name`}
        value={name}
        onChange={(event) => setName(event.target.value)}
        autoComplete="name"
        className="mt-2 h-12 w-full rounded-xl border border-sand bg-cream px-4 text-ink"
      />
      <label className="mt-4 block text-sm text-slate" htmlFor={`${intent}-email`}>
        Email
      </label>
      <input
        id={`${intent}-email`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
        className="mt-2 h-12 w-full rounded-xl border border-sand bg-cream px-4 text-ink"
      />
      {messageLabel ? (
        <>
          <label className="mt-4 block text-sm text-slate" htmlFor={`${intent}-message`}>
            {messageLabel}
          </label>
          <textarea
            id={`${intent}-message`}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            className="mt-2 w-full rounded-xl border border-sand bg-cream px-4 py-3 text-ink"
          />
        </>
      ) : null}
      <button
        type="submit"
        className="mt-4 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm text-paper"
      >
        {button}
      </button>
      <p className="mt-4 text-sm text-slate" role="status">
        {opened
          ? "Your email app should be open. The request is not received until you send that note."
          : "This opens your email app. Nothing is added to a list until that note is sent."}
      </p>
    </form>
  );
}

export function BookCover() {
  return (
    <img
      src="/the-reasons-why-cover-700w.webp"
      srcSet="/the-reasons-why-cover-700w.webp 700w, /the-reasons-why-cover.webp 971w"
      alt="Cover of The Reasons Why by Daniel Heiwig. A navy field, gold title, and a gold sword crossed with a quill. First edition, Heiwig Press."
      width={971}
      height={1619}
      className="mx-auto w-full max-w-sm rounded-sm shadow-2xl"
    />
  );
}
