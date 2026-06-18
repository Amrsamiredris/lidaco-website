"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./Button";

const MobileMenu = dynamic(
  () => import("./MobileMenu").then((mod) => mod.MobileMenu),
  { ssr: false }
);

const LanguageToggle = dynamic(
  () => import("./LanguageToggle").then((mod) => mod.LanguageToggle),
  { ssr: false }
);

export function Nav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Export", href: "/export" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-lid-brown-900">
      <div className="wrap">
        <div className="flex items-center justify-between h-[78px]">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="/lidaco-mark.svg"
              alt="LIDACO"
              width={40}
              height={40}
              priority
              className="transition-transform group-hover:scale-105"
            />
            <span className="font-[family-name:var(--font-ui)] font-medium text-[22px] tracking-[0.14em] text-lid-cream">
              LIDACO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-[family-name:var(--font-ui)] font-medium text-[12px] tracking-[0.16em] uppercase py-1 transition-colors ${
                    isActive
                      ? "text-lid-gold-500"
                      : "text-[var(--color-on-dark-dim)] hover:text-lid-cream"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-lid-gold-500"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop: Language Toggle + CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle />
            <Button variant="gold" href="/contact">
              Request a quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
