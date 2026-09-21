import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  whatsapp: z.string().trim().min(1, "WhatsApp number is required").max(50),
  handle: z.string().trim().max(100).optional().default(""),
  msg: z.string().trim().min(1, "Please tell me a bit about your practice").max(2000),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "Email is not configured yet. Please message on WhatsApp directly." };
    }

    const html = `
      <h2>New practice enquiry — astrologymarketing.in</h2>
      <p><strong>Name:</strong> ${esc(data.name)}</p>
      <p><strong>WhatsApp:</strong> ${esc(data.whatsapp)}</p>
      <p><strong>Instagram Handle:</strong> ${esc(data.handle || "—")}</p>
      <p><strong>Message:</strong></p>
      <p>${esc(data.msg).replace(/\n/g, "<br/>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Astrology Marketing <noreply@astrologymarketing.in>",
        to: ["info@astrologymarketing.in"],
        subject: `New practice enquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return { ok: false as const, error: "Could not send right now. Please message on WhatsApp directly." };
    }
    return { ok: true as const };
  });
