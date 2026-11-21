import { createServerFn } from "@tanstack/react-start";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

function cleanLine(value: string, max: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

export const sendContact = createServerFn({ method: "POST" })
  .validator((input: ContactInput): ContactInput => ({
    name: cleanLine(String(input?.name ?? ""), 80),
    email: cleanLine(String(input?.email ?? ""), 120),
    message: String(input?.message ?? "")
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 4000),
    website: String(input?.website ?? ""),
  }))
  .handler(async ({ data }): Promise<ContactResult> => {
    const recipient = "0cc470bcbc6426585359d8aaf7c81fc3";
    if ((data.website ?? "").trim()) return { ok: true };
    if (data.name.length < 1) return { ok: false, error: "Add your name." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { ok: false, error: "Add an email address so I can reply." };
    }
    if (data.message.length < 2) return { ok: false, error: "Write a short message." };

    let response: Response;
    try {
      response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.danielheiwig.com",
          Referer: "https://www.danielheiwig.com/connect",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Website contact from ${data.name}`,
          _replyto: data.email,
          _template: "box",
          _captcha: "false",
        }),
      });
    } catch {
      return { ok: false, error: "It didn't send. Try again in a moment." };
    }

    const payload = (await response.json().catch(() => null)) as {
      success?: string | boolean;
    } | null;
    if (!response.ok || (payload?.success !== "true" && payload?.success !== true)) {
      return { ok: false, error: "It didn't send. Try again in a moment." };
    }
    return { ok: true };
  });
