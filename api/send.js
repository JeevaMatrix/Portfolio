// Vercel serverless function — runs on the server, so the Resend API key
// never reaches the browser. Deployed automatically when this project is
// hosted on Vercel (any file in /api at the project root becomes an endpoint at /api/<name>).
//
// Required environment variables (set in Vercel → Project → Settings →
// Environment Variables):
//   RESEND_API_KEY     – your Resend API key
//   CONTACT_TO_EMAIL   – the inbox that should receive enquiries
//   CONTACT_FROM_EMAIL – optional, e.g. "Jeeva Matrix <hello@jeevamatrix.me>"
//                        (needs a domain verified in Resend). Falls back to
//                        Resend's shared onboarding address if not set.

export default async function handler(req, res) {
    if (req.method === "OPTIONS") {
        res.setHeader("Allow", "POST, OPTIONS");
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        res.setHeader("Allow", "POST, OPTIONS");
        return res.status(405).json({ error: "Method not allowed" });
    }

    let body = req.body;
    if (typeof body === "string") {
        try {
            body = JSON.parse(body);
        } catch {
            body = {};
        }
    }

    const { name, email, phone, business, need, budget, timeline, description } =
        body || {};

    if (!name || !email || !need || !description) {
        return res.status(400).json({ error: "Missing required fields." });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email address." });
    }

    const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone && `Phone / WhatsApp: ${phone}`,
        business && `Business: ${business}`,
        `What they need: ${need}`,
        budget && `Budget: ${budget}`,
        timeline && `Timeline: ${timeline}`,
        "",
        "Project description:",
        description,
    ].filter(Boolean);

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
        console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.");
        return res.status(500).json({ error: "Email is not configured yet." });
    }

    try {
        const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: process.env.CONTACT_FROM_EMAIL || "Jeeva Matrix <onboarding@resend.dev>",
                to: process.env.CONTACT_TO_EMAIL,
                reply_to: email,
                subject: `New project enquiry — ${need}`,
                text: lines.join("\n"),
            }),
        });

        if (!resendRes.ok) {
            const errBody = await resendRes.text();
            console.error("Resend API error:", resendRes.status, errBody);
            return res.status(502).json({ error: "Could not send the email right now." });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("Send handler error:", err);
        return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
}
