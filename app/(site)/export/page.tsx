import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Divider } from "@/components/Divider";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Export & Packaging | LIDACO",
  description:
    "Flexible packaging options, transparent MOQs and shipping to every market we serve. From one pallet to a full container.",
};

const packagingOptions = [
  {
    title: "Retail packs",
    description: "250 g – 1 kg cartons, private-label ready",
  },
  {
    title: "Bulk cartons",
    description: "5 / 10 kg telescopic export cartons",
  },
  {
    title: "Sacks & totes",
    description: "25 kg sacks; food-grade bulk totes",
  },
  {
    title: "Vacuum packs",
    description: "Kernels in vacuum-sealed 10 kg units",
  },
];

const markets = [
  "China",
  "United Arab Emirates",
  "India",
  "Germany",
  "Turkey",
  "Russia",
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & packaging"
        title="Built for the container, not the shelf"
        subtitle="Flexible packaging, transparent MOQs and shipping to every market we serve."
      />

      <section className="py-24">
        <div className="wrap">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <Eyebrow>Packaging options</Eyebrow>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-[40px] leading-[1.1] tracking-[0.03em] text-lid-brown-800 mt-[14px] mb-4">
              Packed to your specification
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {packagingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-lid-sand-100 border border-lid-sand-300 rounded-[3px] p-8"
              >
                <div className="font-[family-name:var(--font-display)] font-semibold text-[26px] tracking-[0.02em] text-lid-brown-800 mb-[10px]">
                  {option.title}
                </div>
                <p className="font-[family-name:var(--font-ui)] text-[15px] leading-[1.75] tracking-[0.04em] text-lid-sand-700 m-0">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lid-brown-900 text-center py-24">
        <div className="wrap">
          <Eyebrow onDark>Minimum order</Eyebrow>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[44px] leading-[1.1] tracking-[0.02em] text-lid-cream mt-[14px] mb-[10px]">
            From one pallet to a full container
          </h2>
          <p className="font-[family-name:var(--font-ui)] font-light text-[19px] leading-[1.7] tracking-[0.04em] text-[var(--color-on-dark-dim)] max-w-[560px] mx-auto mb-[14px]">
            Typical MOQ is 500 kg per variety; mixed containers are available.
            FCL and LCL both supported, CIF or FOB Bandar Abbas.
          </p>

          <Divider className="max-w-[300px] mx-auto my-10" />

          <Eyebrow onDark>Shipping markets</Eyebrow>
          <div className="flex flex-wrap gap-3 justify-center mt-[22px] mb-10">
            {markets.map((market) => (
              <Badge key={market} tone="gold">
                {market}
              </Badge>
            ))}
          </div>

          <Button variant="gold" href="/contact">
            Request a quote
          </Button>
        </div>
      </section>
    </>
  );
}
