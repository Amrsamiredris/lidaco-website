import dynamic from "next/dynamic";
import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const ProductFilter = dynamic(
  () => import("@/components/ProductFilter").then((mod) => mod.ProductFilter),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7" aria-hidden>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-[420px] rounded-[3px] bg-lid-sand-100 border border-lid-sand-300 animate-pulse"
          />
        ))}
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "Iranian Dates & Pistachios — Export Catalogue | LIDACO",
  description:
    "Browse our full range of Iranian dates from Bam and pistachios from Rafsanjan. Export-grade products available in bulk with custom packaging.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The catalogue"
        title="Dates & pistachios, export-ready"
        subtitle="Sourced farmer-direct from Bam and Rafsanjan. All varieties available in bulk with custom packaging."
      />

      <section className="py-24">
        <div className="wrap">
          <ProductFilter />
        </div>
      </section>
    </>
  );
}
