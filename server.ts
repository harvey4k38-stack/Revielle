import express from "express";
import Stripe from "stripe";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);
const OWNER_EMAIL = process.env.OWNER_EMAIL!;

// ── Stripe webhook (raw body required) ──────────────────────────────────────
app.post("/api/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"]!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature failed:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email ?? "Unknown";
    const name = session.customer_details?.name ?? "Unknown";
    const amount = ((session.amount_total ?? 0) / 100).toFixed(2);
    const shipping = session.shipping_details?.address;

    await resend.emails.send({
      from: "Revielle Orders <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      subject: `New Order — $${amount} from ${name}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Shipping:</strong><br/>
          ${shipping?.line1 ?? ""}<br/>
          ${shipping?.city ?? ""}, ${shipping?.state ?? ""} ${shipping?.postal_code ?? ""}<br/>
          ${shipping?.country ?? ""}
        </p>
        <p><strong>Session ID:</strong> ${session.id}</p>
      `,
    });

    console.log(`Order email sent for session ${session.id}`);
  }

  res.json({ received: true });
});

app.use(express.json());

// ── Stripe checkout session ──────────────────────────────────────────────────
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Revielle Age-Defying Cream",
              description: "Clinically inspired anti-aging cream — smooth, firm, and restore your skin.",
            },
            unit_amount: 1499,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/order-success`,
      cancel_url: `${req.headers.origin}/product`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "FR", "DE", "JP", "NZ", "IE", "NL"],
      },
    });

    res.json({ url: session.url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// ── Contact form ─────────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !email || !message) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  try {
    await resend.emails.send({
      from: "Revielle Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      subject: `New message from ${firstName} ${lastName ?? ""}`.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName ?? ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
