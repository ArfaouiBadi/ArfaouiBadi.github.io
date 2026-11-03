interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/* Title left, note right: the two read as a pair on wide screens, stack on phones. */
export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="grid gap-3 border-t border-line pt-8 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-12">
      <h2 className="font-display text-3xl font-medium tracking-[-0.015em] text-balance sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[48ch] text-[15px] leading-relaxed text-zinc-400 md:justify-self-end">
          {subtitle}
        </p>
      )}
    </div>
  );
}
