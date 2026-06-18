"use client";

import { useState } from "react";

export function LanguageToggle() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (lang: string) => {
    if (lang !== "en") {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="relative hidden md:flex items-center gap-2">
      <button
        onClick={() => handleClick("en")}
        className="font-[family-name:var(--font-ui)] text-[11px] tracking-[0.10em] text-lid-cream transition-colors"
      >
        EN
      </button>
      <span className="text-[var(--color-on-dark-dim)] text-[11px]">·</span>
      <button
        onClick={() => handleClick("zh")}
        className="font-[family-name:var(--font-ui)] text-[11px] tracking-[0.10em] text-[var(--color-on-dark-dim)] hover:text-lid-cream transition-colors"
      >
        中文
      </button>
      <span className="text-[var(--color-on-dark-dim)] text-[11px]">·</span>
      <button
        onClick={() => handleClick("ar")}
        className="font-[family-name:var(--font-ui)] text-[11px] tracking-[0.10em] text-[var(--color-on-dark-dim)] hover:text-lid-cream transition-colors"
      >
        عربي
      </button>

      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-lid-brown-800 text-lid-cream text-[11px] rounded-[2px] whitespace-nowrap shadow-[var(--shadow-hover)] animate-in fade-in slide-in-from-top-1 duration-200">
          Coming soon
        </div>
      )}
    </div>
  );
}
