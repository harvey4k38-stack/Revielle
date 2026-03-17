import SimplePage from "@/src/components/SimplePage";

export default function Sustainability() {
  return (
    <SimplePage
      title="Sustainability"
      subtitle="Our Planet"
      sections={[
        {
          heading: "Responsible Sourcing",
          body: "Every ingredient in Revielle products is sourced from certified ethical suppliers. We prioritize renewable, biodegradable raw materials and actively work to reduce our dependence on petrochemical derivatives.",
        },
        {
          heading: "Eco-Conscious Packaging",
          body: "Our packaging is made from at least 80% post-consumer recycled materials. All outer cartons are FSC-certified, and we are actively transitioning our primary packaging to fully recyclable glass and aluminum.",
        },
        {
          heading: "Carbon Commitment",
          body: "We have committed to achieving net-zero carbon emissions across our full supply chain by 2030. This includes partnering with reforestation programs and investing in renewable energy for our manufacturing facilities.",
        },
        {
          heading: "Cruelty-Free",
          body: "Revielle is certified cruelty-free. We never test on animals at any stage of development, and we require the same commitment from all of our ingredient suppliers and manufacturing partners.",
        },
      ]}
    />
  );
}
