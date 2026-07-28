import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  brand: z.string().trim().max(120).optional().default(""),
  sign: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().max(80).optional().default(""),
  msg: z.string().trim().min(1, "Please tell us a bit").max(2000),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "Email is not configured yet." };
    }

    const html = `
      <h2>New enquiry — astrologymarketing.in</h2>
      <p><strong>Name:</strong> ${esc(data.name)}</p>
      <p><strong>Email:</strong> ${esc(data.email)}</p>
      <p><strong>Brand / Handle:</strong> ${esc(data.brand || "—")}</p>
      <p><strong>Sun sign:</strong> ${esc(data.sign || "—")}</p>
      <p><strong>Service:</strong> ${esc(data.service || "—")}</p>
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
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return { ok: false as const, error: "Could not send right now. Please email us directly." };
    }
    return { ok: true as const };
  });
