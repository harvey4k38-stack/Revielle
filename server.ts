import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
            unit_amount: 1499, // $14.99
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

const PORT = 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
