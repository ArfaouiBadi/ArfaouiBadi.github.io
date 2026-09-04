import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="border-t border-line pt-8">
        <p className="label">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
