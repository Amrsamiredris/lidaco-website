import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

export function AboutExcerpt() {
  return (
    <section className="py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-center">
          {/* Placeholder Image */}
          <div className="aspect-[4/3] rounded-[4px] bg-gradient-to-br from-lid-brown-800 to-lid-brown-950 grid place-items-center">
            <span className="text-[30px] opacity-40 text-lid-gold-500">
              &#10022;
            </span>
          </div>

          {/* Content */}
          <div>
            <Eyebrow>Our origins</Eyebrow>
            <h2 className="font-[family-name:var(--font-display)] font-semibold text-[40px] leading-[1.1] tracking-[0.03em] text-lid-brown-800 mt-4 mb-5">
              A trading house rooted in Iranian soil.
            </h2>
            <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-lid-sand-700 mb-4">
              For three generations our partner growers have cultivated the date
              palms of Bam and the pistachio orchards of Rafsanjan. LIDACO brings
              that harvest to the world — sorted, graded and packed to the
              standard each market demands.
            </p>

            {/* Stats Row */}
            <div className="flex gap-11 mt-[34px] mb-[34px]">
              <div>
                <div className="font-[family-name:var(--font-display)] font-semibold text-[38px] text-lid-gold-700">
                  2
                </div>
                <div className="text-[11px] tracking-[0.16em] uppercase text-lid-sand-700 mt-1">
                  Sourcing regions
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] font-semibold text-[38px] text-lid-gold-700">
                  3
                </div>
                <div className="text-[11px] tracking-[0.16em] uppercase text-lid-sand-700 mt-1">
                  Continents served
                </div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] font-semibold text-[38px] text-lid-gold-700">
                  10+
                </div>
                <div className="text-[11px] tracking-[0.16em] uppercase text-lid-sand-700 mt-1">
                  Product varieties
                </div>
              </div>
            </div>

            <Button variant="outline" href="/about" icon>
              Read our story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
