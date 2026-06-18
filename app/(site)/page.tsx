import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { AboutExcerpt } from "@/components/AboutExcerpt";
import { CTABanner } from "@/components/CTABanner";
import { ProductCard } from "@/components/ProductCard";
import { Eyebrow } from "@/components/Eyebrow";
import { FEATURED } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="py-24">
        <div className="wrap">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <Eyebrow>Featured selection</Eyebrow>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-[40px] leading-[1.1] tracking-[0.03em] text-lid-brown-800 mt-[14px] mb-4">
              Our most-requested exports
            </h2>
            <p className="font-[family-name:var(--font-ui)] font-light text-[19px] leading-[1.7] tracking-[0.04em] text-lid-sand-700">
              A glimpse of the catalogue. Every variety ships graded, sorted and
              packed to your market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {FEATURED.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutExcerpt />
      <CTABanner />
    </>
  );
}
