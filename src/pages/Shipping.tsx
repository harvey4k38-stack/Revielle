import SimplePage from "@/src/components/SimplePage";

export default function Shipping() {
  return (
    <SimplePage
      title="Shipping"
      subtitle="Delivery Information"
      sections={[
        {
          heading: "Free Worldwide Shipping",
          body: "Every Revielle order ships free, anywhere in the world. No minimum order required. We believe exceptional skincare should be accessible without hidden fees.",
        },
        {
          heading: "Delivery Times",
          body: "United States: 3–5 business days. Europe: 5–8 business days. Rest of World: 7–14 business days. Expedited options are available at checkout for most regions.",
        },
        {
          heading: "Order Tracking",
          body: "Once your order ships, you will receive a confirmation email with a tracking number. You can monitor your delivery in real time through our courier partner's portal.",
        },
        {
          heading: "Customs & Duties",
          body: "For international orders, any applicable customs duties or import taxes are the responsibility of the recipient and are not included in the order total. We recommend checking your country's import regulations before ordering.",
        },
      ]}
    />
  );
}
