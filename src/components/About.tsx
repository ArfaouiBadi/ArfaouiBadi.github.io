import SectionHeading from "./ui/SectionHeading";
import { aboutParagraph } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading title="Software for the financial sector" />

      <p className="mt-8 max-w-3xl text-base leading-[1.85] text-zinc-300">
        {aboutParagraph}
      </p>
    </section>
  );
}
