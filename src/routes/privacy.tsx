import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame, Eyebrow } from "@/components/frame";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy · Daniel Heiwig" },
      {
        name: "description",
        content:
          "How danielheiwig.com handles a message, a visit, and links to other sites.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.danielheiwig.com/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Frame>
      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Eyebrow>Privacy</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Privacy policy</h1>
          <p className="mt-5 text-lg text-mist">
            This is the personal site of Daniel Heiwig. It is not a Department of
            Defense or Army website. Updated 20 November 2026.
          </p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-14 text-lg leading-relaxed text-slate">
        <section>
          <h2 className="font-display text-3xl text-ink">What this site stores</h2>
          <p className="mt-3">
            The pages are published so anyone can read them. The site does not ask
            you to create an account, and it does not run its own analytics or
            advertising cookies.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-ink">Contact</h2>
          <p className="mt-3">
            The contact form does not save your message on this website. Send opens
            your email application with the note addressed to daniel.heiwig@outlook.com.
            Your email provider delivers it. Once it arrives, I keep it in that
            mailbox so I can reply. I do not sell it or use it for a mailing list.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-ink">Hosting</h2>
          <p className="mt-3">
            The site is hosted on Vercel. The host may process technical logs,
            including an IP address, the browser, and the page requested, in order
            to deliver and protect the site. That processing is the host’s, under
            its own terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-ink">Other sites</h2>
          <p className="mt-3">
            Links to GitHub, LinkedIn, Facebook, and the other public profiles leave
            this site. Those sites have their own policies. A link is not an
            endorsement by the Department of Defense or the Army.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-ink">Children</h2>
          <p className="mt-3">
            This site is not directed at children, and it does not knowingly collect
            their information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-ink">Questions</h2>
          <p className="mt-3">
            Write through the <Link to="/connect" className="text-ink underline">contact form</Link>{" "}
            or to daniel.heiwig@outlook.com. Ask to see or delete a message you sent,
            and I will do that in the mailbox I control.
          </p>
        </section>
      </article>
    </Frame>
  );
}
