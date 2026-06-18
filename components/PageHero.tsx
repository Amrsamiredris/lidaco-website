import { Eyebrow } from "./Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <header className="bg-lid-brown-900 text-center py-[84px_0_80px]">
      <div className="wrap">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="font-[family-name:var(--font-display)] font-semibold text-[52px] leading-[1.05] tracking-[0.02em] text-lid-cream mt-[14px] mb-4">
          {title}
        </h1>
        <p className="font-[family-name:var(--font-ui)] font-light text-[19px] leading-[1.7] tracking-[0.04em] text-[var(--color-on-dark-dim)] max-w-[560px] mx-auto">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
