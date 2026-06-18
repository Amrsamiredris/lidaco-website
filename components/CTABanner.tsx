import { Button } from "./Button";
import { Divider } from "./Divider";
import { Eyebrow } from "./Eyebrow";

export function CTABanner() {
  return (
    <section className="bg-lid-brown-950 text-center py-[92px]">
      <div className="wrap">
        <Divider className="max-w-[200px] mx-auto mb-[26px]" />
        <Eyebrow onDark>Bulk enquiries welcome</Eyebrow>
        <h2 className="font-[family-name:var(--font-display)] font-semibold text-[46px] leading-[1.1] tracking-[0.02em] text-lid-cream mt-[18px] mb-[14px]">
          Let us quote your <em className="italic text-lid-gold-300">next shipment.</em>
        </h2>
        <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-[var(--color-on-dark-dim)] max-w-[520px] mx-auto mb-[34px]">
          Share your destination market, product and volume. Our export team
          replies within one business day.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="gold" href="/contact">
            Request a quote
          </Button>
          <Button variant="outline" onDark href="/export">
            Packaging & MOQ
          </Button>
        </div>
      </div>
    </section>
  );
}
