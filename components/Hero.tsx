import Image from "next/image";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <header className="bg-lid-brown-900 relative overflow-hidden">
      {/* Subtle gold vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_90%_at_80%_20%,rgba(201,168,76,0.07),transparent_60%)]"></div>

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-[50px] items-center py-24 md:py-[96px_0_104px]">
          {/* Left Content */}
          <div>
            <Eyebrow onDark>Premium Iranian Agricultural Export</Eyebrow>
            <h1 className="font-[family-name:var(--font-display)] font-semibold text-[46px] md:text-[68px] leading-[1.04] tracking-[0.02em] text-lid-cream mt-[22px] mb-[26px]">
              From Iranian farms
              <br />
              <em className="italic text-lid-gold-300">to the world.</em>
            </h1>
            <p className="font-[family-name:var(--font-ui)] font-light text-[19px] leading-[1.7] tracking-[0.04em] text-[var(--color-on-dark-dim)] max-w-[480px]">
              LIDACO sources dates and pistachios directly from growers in Bam
              and Rafsanjan, supplying bulk buyers across China, the Middle East
              and Europe.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mt-[38px]">
              <Button variant="gold" href="/products" icon>
                View products
              </Button>
              <Button variant="outline" onDark href="/contact">
                Request a quote
              </Button>
            </div>
          </div>

          {/* Right Mark */}
          <div className="hidden md:grid place-items-center">
            <Image
              src="/lidaco-mark.svg"
              alt="LIDACO date palm mark"
              width={340}
              height={340}
              className="opacity-95"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
