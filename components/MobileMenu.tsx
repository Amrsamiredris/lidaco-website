"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Export", href: "/export" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-lid-cream p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="md:hidden fixed top-[78px] left-0 right-0 min-h-screen bg-lid-brown-900 z-40 border-t border-[rgba(201,168,76,0.22)] animate-in slide-in-from-top duration-200">
          <div className="wrap flex flex-col py-8 gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-[family-name:var(--font-ui)] font-medium text-[12px] tracking-[0.16em] uppercase transition-colors py-3 ${
                    isActive
                      ? "text-lid-gold-500"
                      : "text-[var(--color-on-dark-dim)] hover:text-lid-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button variant="gold" href="/contact" className="w-fit">
              Request a quote
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
