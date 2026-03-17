import SimplePage from "@/src/components/SimplePage";

export default function TheScience() {
  return (
    <SimplePage
      title="The Science"
      subtitle="Clinically Proven"
      sections={[
        {
          heading: "Cellular Renewal Complex",
          body: "Our proprietary blend of peptides, retinoids, and growth-factor mimicking molecules accelerates the skin's natural cell turnover cycle — reducing the appearance of fine lines, uneven texture, and dullness at the source.",
        },
        {
          heading: "Collagen Architecture",
          body: "Revielle's formula targets dermal fibroblasts to stimulate natural collagen and elastin synthesis. Clinical studies show a measurable increase in skin firmness and elasticity after 4 weeks of consistent use.",
        },
        {
          heading: "Deep Delivery Technology",
          body: "Using micro-encapsulation technology, active ingredients are delivered precisely to the dermal layer where they are needed most — bypassing surface barriers to work deeper and more effectively than conventional creams.",
        },
        {
          heading: "Clinically Tested",
          body: "All Revielle formulations undergo independent clinical testing for both safety and efficacy. Results are measured using validated dermatological assessment tools, and we publish our data openly.",
        },
      ]}
    />
  );
}
