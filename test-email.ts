import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY!);

const { data, error } = await resend.emails.send({
  from: "Revielle <onboarding@resend.dev>",
  to: process.env.OWNER_EMAIL!,
  subject: "Revielle — Test Email",
  html: "<h2>It works!</h2><p>Your Resend integration is set up correctly.</p>",
});

if (error) {
  console.error("Failed:", error);
} else {
  console.log("Email sent successfully:", data);
}
