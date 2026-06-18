import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-lid-brown-950 pt-[72px] pb-10">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-14">
          {/* Brand Column */}
          <div>
            <Image
              src="/lidaco-mark.svg"
              alt="LIDACO"
              width={46}
              height={46}
            />
            <div className="font-[family-name:var(--font-ui)] font-medium text-[22px] tracking-[0.14em] text-lid-cream my-[14px]">
              LIDACO
            </div>
            <p className="text-[var(--color-on-dark-dim)] text-[14px] leading-[1.6] max-w-[260px]">
              Premium Iranian dates and pistachios, exported farmer-direct from
              Bam and Rafsanjan to the world.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-lid-gold-500 font-medium mb-5 mt-1">
              Products
            </h4>
            <Link
              href="/products"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Bam Mazafati
            </Link>
            <Link
              href="/products"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Piarom Dates
            </Link>
            <Link
              href="/products"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Akbari Pistachio
            </Link>
            <Link
              href="/products"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Pistachio Kernels
            </Link>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-lid-gold-500 font-medium mb-5 mt-1">
              Company
            </h4>
            <Link
              href="/about"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              About LIDACO
            </Link>
            <Link
              href="/export"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Export & Packaging
            </Link>
            <Link
              href="/contact"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-lid-gold-500 font-medium mb-5 mt-1">
              Contact
            </h4>
            <a
              href="mailto:export@lidaco.com"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              export@lidaco.com
            </a>
            <Link
              href="/contact"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              WhatsApp enquiry
            </Link>
            <Link
              href="/export"
              className="block text-[var(--color-on-dark-dim)] text-[14px] tracking-[0.03em] mb-[13px] hover:text-lid-gold-300 transition-colors"
            >
              Bam & Rafsanjan, Iran
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[rgba(201,168,76,0.22)] pt-7">
          <span className="text-[var(--color-on-dark-dim)] text-[12px] tracking-[0.06em]">
            © 2026 LIDACO Agricultural Export
          </span>
          <span className="text-[var(--color-on-dark-dim)] text-[12px] tracking-[0.06em]">
            From Iranian Farms to the World
          </span>
        </div>
      </div>
    </footer>
  );
}
