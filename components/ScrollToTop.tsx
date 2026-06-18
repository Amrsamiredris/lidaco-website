"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(toggleVisibility);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-7 bottom-7 z-[80] w-11 h-11 rounded-full bg-lid-sand-300/80 text-lid-brown-800 grid place-items-center transition-all duration-[240ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-0.5 hover:bg-lid-sand-300"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp size={16} strokeWidth={2} />
    </button>
  );
}
