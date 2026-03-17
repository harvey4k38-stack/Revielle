import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);
const OWNER_EMAIL = process.env.OWNER_EMAIL!;

export const config = { api: { bodyParser: false } };

async function getRawBody(req: VercelRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers["stripe-signature"]!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
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
  }

  res.json({ received: true });
}
