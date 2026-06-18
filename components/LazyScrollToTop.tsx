"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(
  () => import("./ScrollToTop").then((mod) => mod.ScrollToTop),
  { ssr: false }
);

export function LazyScrollToTop() {
  return <ScrollToTop />;
}
