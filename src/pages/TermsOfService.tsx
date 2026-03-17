import SimplePage from "@/src/components/SimplePage";

export default function TermsOfService() {
  return (
    <SimplePage
      title="Terms of Service"
      subtitle="Legal"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: "By accessing or using the Revielle website or purchasing our products, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.",
        },
        {
          heading: "Products & Pricing",
          body: "All prices are listed in USD and are subject to change without notice. We reserve the right to limit quantities and refuse orders at our discretion. Sale prices are valid for the duration of the promotion only.",
        },
        {
          heading: "Intellectual Property",
          body: "All content on this website — including text, images, logos, and design — is the property of Revielle Skincare and may not be reproduced or used without prior written permission.",
        },
        {
          heading: "Limitation of Liability",
          body: "Revielle Skincare is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the amount paid for the relevant order.",
        },
        {
          heading: "Governing Law",
          body: "These terms are governed by the laws of the State of New York, without regard to conflict of law provisions. Any disputes will be resolved in the courts of New York County.",
        },
      ]}
    />
  );
}
