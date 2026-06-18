import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "gold";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  onDark?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  onDark = false,
  icon = false,
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-[9px] font-[family-name:var(--font-ui)] font-medium text-[12px] tracking-[0.16em] uppercase rounded-[2px] px-[28px] py-[14px] cursor-pointer border-[1.5px] border-transparent transition-all duration-[240ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] active:translate-y-[1px] whitespace-nowrap no-underline";

  const variantClasses = {
    primary:
      "bg-lid-brown-900 text-lid-cream hover:bg-lid-brown-800",
    outline: onDark
      ? "bg-transparent text-lid-cream border-[rgba(251,246,238,0.5)] hover:bg-lid-cream hover:text-lid-brown-900 hover:border-lid-cream"
      : "bg-transparent text-lid-brown-800 border-lid-brown-800 hover:bg-lid-brown-900 hover:text-lid-cream hover:border-lid-brown-900",
    gold: "bg-lid-gold-500 text-lid-brown-900 hover:bg-lid-gold-300",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-[15px] h-[15px]" strokeWidth={1.5} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} {...props}>
      {content}
    </a>
  );
}
