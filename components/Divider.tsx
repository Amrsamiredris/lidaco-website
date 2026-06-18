interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      <span className="flex-1 h-[1px] bg-lid-gold-500 opacity-50"></span>
      <span className="text-lid-gold-500 text-[16px] leading-none">&#10022;</span>
      <span className="flex-1 h-[1px] bg-lid-gold-500 opacity-50"></span>
    </div>
  );
}
