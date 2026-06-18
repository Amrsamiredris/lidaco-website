interface EyebrowProps {
  onDark?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ onDark = false, children, className = "" }: EyebrowProps) {
  const colorClass = onDark ? "text-lid-gold-300" : "text-lid-gold-700";

  return (
    <div
      className={`font-[family-name:var(--font-ui)] text-[12px] tracking-[0.30em] uppercase font-normal ${colorClass} ${className}`}
    >
      {children}
    </div>
  );
}
