import SimplePage from "@/src/components/SimplePage";

export default function OurStory() {
  return (
    <SimplePage
      title="Our Story"
      subtitle="Who We Are"
      sections={[
        {
          heading: "Founded on Science",
          body: "Revielle was born from a simple belief: that truly effective skincare should be rooted in clinical science without sacrificing the luxury experience. Our founders — a team of dermatologists and biochemists — spent years developing the proprietary cellular renewal complex that sits at the heart of every Revielle product.",
        },
        {
          heading: "A New Standard",
          body: "We set out to bridge the gap between clinical-grade efficacy and the sensorial pleasure of luxury beauty. Every formula is tested rigorously, every ingredient chosen with intention, and every texture crafted to feel as extraordinary as the results it delivers.",
        },
        {
          heading: "Our Commitment",
          body: "We are committed to transparency, sustainability, and inclusivity. Revielle is cruelty-free, formulated without parabens or sulfates, and produced in facilities that meet the highest standards of ethical manufacturing.",
        },
      ]}
    />
  );
}
