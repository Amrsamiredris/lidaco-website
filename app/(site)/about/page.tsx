import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CTABanner } from "@/components/CTABanner";
import { ProductImage } from "@/components/ProductImage";

export const metadata: Metadata = {
  title: "About LIDACO — Iranian Agricultural Export House",
  description:
    "Learn about LIDACO's farmer-direct sourcing from Bam and Rafsanjan, our quality standards, and our commitment to Iranian agricultural exports.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="An export house, grown from the orchard"
        subtitle="Provenance, grading and reliability — the three things a bulk buyer needs, and the three things we built LIDACO around."
      />

      <section className="py-24">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-center">
            <div>
              <Eyebrow>Farming origins</Eyebrow>
              <h2 className="font-[family-name:var(--font-display)] font-semibold text-[40px] leading-[1.1] tracking-[0.03em] text-lid-brown-800 mt-4 mb-5">
                Bam dates. Rafsanjan pistachios.
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-lid-sand-700 mb-4">
                Our supply begins in two of Iran&apos;s most storied growing regions.
                The oasis groves of Bam yield the soft, dark Mazafati date; the
                high desert orchards of Rafsanjan produce pistachios prized for
                their size and flavour. We work directly with the families who
                farm them.
              </p>
              <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-lid-sand-700">
                By shortening the chain between grower and buyer, we hold
                quality and price steady across the season — and keep
                traceability intact from orchard to container.
              </p>
            </div>
            <ProductImage
              kind="orchard"
              alt="Date and pistachio orchards in Bam and Rafsanjan"
              className="aspect-[4/3] rounded-[4px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-0 pb-24">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-center">
            <ProductImage
              kind="quality"
              alt="Quality grading and export inspection at LIDACO"
              className="aspect-[4/3] rounded-[4px] order-2 md:order-1"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="order-1 md:order-2">
              <Eyebrow>Quality standards</Eyebrow>
              <h2 className="font-[family-name:var(--font-display)] font-semibold text-[40px] leading-[1.1] tracking-[0.03em] text-lid-brown-800 mt-4 mb-5">
                Graded, sorted, certified.
              </h2>
              <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-lid-sand-700 mb-8">
                Every lot is cleaned, calibrated and inspected before packing.
                Cold-chain dates are held in refrigerated storage; pistachios are
                moisture-controlled. Documentation, phytosanitary certification
                and custom labelling are arranged per destination market.
              </p>

              <div className="flex gap-11">
                <div>
                  <div className="font-[family-name:var(--font-display)] font-semibold text-[38px] text-lid-gold-700">
                    100%
                  </div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-lid-sand-700 mt-1">
                    Farmer-direct
                  </div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] font-semibold text-[38px] text-lid-gold-700">
                    EU / CN
                  </div>
                  <div className="text-[11px] tracking-[0.16em] uppercase text-lid-sand-700 mt-1">
                    Market compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
