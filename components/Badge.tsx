type BadgeTone = "brown" | "olive" | "gold" | "sand";

interface BadgeProps {
  tone?: BadgeTone;
  children: React.ReactNode;
}

export function Badge({ tone = "sand", children }: BadgeProps) {
  const toneClasses = {
    brown: "bg-lid-brown-900 text-lid-cream",
    olive: "bg-lid-olive-600 text-[#F2F4EA]",
    gold: "bg-lid-gold-500 text-lid-brown-900",
    sand: "bg-lid-sand-100 text-lid-brown-800 border border-lid-sand-300",
  };

  return (
    <span
      className={`inline-block font-medium text-[9px] tracking-[0.18em] uppercase rounded-[2px] px-[11px] py-[6px] whitespace-nowrap ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
