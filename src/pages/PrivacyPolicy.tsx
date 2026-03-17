import SimplePage from "@/src/components/SimplePage";

export default function PrivacyPolicy() {
  return (
    <SimplePage
      title="Privacy Policy"
      subtitle="Your Data"
      sections={[
        {
          heading: "Information We Collect",
          body: "We collect information you provide directly to us, such as your name, email address, shipping address, and payment details when you place an order or sign up for our newsletter.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use your information to process orders, send shipping updates, provide customer support, and — with your consent — send marketing communications about new products and offers.",
        },
        {
          heading: "Data Sharing",
          body: "We do not sell your personal data. We share information only with trusted third-party service providers (payment processors, shipping carriers) who are contractually required to keep it confidential.",
        },
        {
          heading: "Cookies",
          body: "Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences at any time.",
        },
        {
          heading: "Your Rights",
          body: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, email us at privacy@revielle.com.",
        },
      ]}
    />
  );
}
