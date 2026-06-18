"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { Mail, Phone, MapPin, Truck, MessageCircle, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("Web3Forms access key not found");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        e.currentTarget.reset();
      } else {
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "989000000000";

  return (
    <section className="py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[60px]">
          {/* Form Column */}
          <div>
            {isSent ? (
              <div className="bg-lid-sand-100 border border-lid-gold-500 rounded-[3px] p-10 text-center">
                <div className="text-[28px] text-lid-gold-500">&#10022;</div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[28px] text-lid-brown-800 my-3">
                  Enquiry received
                </h3>
                <p className="font-[family-name:var(--font-ui)] text-[16px] leading-[1.75] tracking-[0.04em] text-lid-sand-700 m-0">
                  Thank you. Our export team will reply to your enquiry within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-lid-brown-700 mb-[9px]">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    required
                    className="w-full font-[family-name:var(--font-ui)] text-[15px] tracking-[0.02em] text-lid-brown-800 bg-lid-cream border border-lid-sand-300 rounded-[3px] px-[15px] py-[13px] outline-none transition-colors focus:border-lid-gold-500"
                  />
                </div>

                <div className="mb-[22px]">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-lid-brown-700 mb-[9px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full font-[family-name:var(--font-ui)] text-[15px] tracking-[0.02em] text-lid-brown-800 bg-lid-cream border border-lid-sand-300 rounded-[3px] px-[15px] py-[13px] outline-none transition-colors focus:border-lid-gold-500"
                  />
                </div>

                <div className="mb-[22px]">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-lid-brown-700 mb-[9px]">
                    Destination market
                  </label>
                  <select
                    name="market"
                    defaultValue=""
                    required
                    className="w-full font-[family-name:var(--font-ui)] text-[15px] tracking-[0.02em] text-lid-brown-800 bg-lid-cream border border-lid-sand-300 rounded-[3px] px-[15px] py-[13px] outline-none transition-colors focus:border-lid-gold-500"
                  >
                    <option value="" disabled>
                      Select a market
                    </option>
                    <option>China</option>
                    <option>India</option>
                    <option>Middle East</option>
                    <option>Europe</option>
                    <option>Turkey</option>
                    <option>Russia</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-[22px]">
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-lid-brown-700 mb-[9px]">
                    Product & volume
                  </label>
                  <textarea
                    name="message"
                    placeholder="e.g. 2 × 20ft container, Bam Mazafati, 10 kg cartons"
                    className="w-full font-[family-name:var(--font-ui)] text-[15px] tracking-[0.02em] text-lid-brown-800 bg-lid-cream border border-lid-sand-300 rounded-[3px] px-[15px] py-[13px] outline-none transition-colors focus:border-lid-gold-500 resize-vertical min-h-[110px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-[9px] font-[family-name:var(--font-ui)] font-medium text-[12px] tracking-[0.16em] uppercase rounded-[2px] px-[28px] py-[14px] cursor-pointer border-[1.5px] border-transparent transition-all duration-[240ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] active:translate-y-[1px] whitespace-nowrap no-underline bg-lid-brown-900 text-lid-cream hover:bg-lid-brown-800 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                  <ArrowRight className="w-[15px] h-[15px]" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="bg-lid-brown-900 rounded-[4px] p-10">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-[26px] tracking-[0.03em] text-lid-cream mb-6">
              Export office
            </h3>

            <div className="flex gap-[13px] items-start mb-[22px]">
              <Mail className="w-[18px] h-[18px] text-lid-gold-500 flex-shrink-0 mt-[1px]" strokeWidth={1.5} />
              <div>
                <b className="text-[11px] tracking-[0.16em] uppercase text-lid-cream font-medium block mb-[3px]">
                  Email
                </b>
                <a
                  href="mailto:export@lidaco.com"
                  className="text-[14px] tracking-[0.03em] leading-[1.5] text-[var(--color-on-dark-dim)] hover:text-lid-gold-300 transition-colors"
                >
                  export@lidaco.com
                </a>
              </div>
            </div>

            <div className="flex gap-[13px] items-start mb-[22px]">
              <MessageCircle className="w-[18px] h-[18px] text-lid-gold-500 flex-shrink-0 mt-[1px]" strokeWidth={1.5} />
              <div>
                <b className="text-[11px] tracking-[0.16em] uppercase text-lid-cream font-medium block mb-[3px]">
                  WhatsApp
                </b>
                <span className="text-[14px] tracking-[0.03em] leading-[1.5] text-[var(--color-on-dark-dim)]">
                  +98 000 000 0000
                </span>
              </div>
            </div>

            <div className="flex gap-[13px] items-start mb-[22px]">
              <MapPin className="w-[18px] h-[18px] text-lid-gold-500 flex-shrink-0 mt-[1px]" strokeWidth={1.5} />
              <div>
                <b className="text-[11px] tracking-[0.16em] uppercase text-lid-cream font-medium block mb-[3px]">
                  Sourcing
                </b>
                <span className="text-[14px] tracking-[0.03em] leading-[1.5] text-[var(--color-on-dark-dim)]">
                  Bam & Rafsanjan, Iran
                </span>
              </div>
            </div>

            <div className="flex gap-[13px] items-start mb-[30px]">
              <Truck className="w-[18px] h-[18px] text-lid-gold-500 flex-shrink-0 mt-[1px]" strokeWidth={1.5} />
              <div>
                <b className="text-[11px] tracking-[0.16em] uppercase text-lid-cream font-medium block mb-[3px]">
                  Shipping
                </b>
                <span className="text-[14px] tracking-[0.03em] leading-[1.5] text-[var(--color-on-dark-dim)]">
                  FOB Bandar Abbas · CIF worldwide
                </span>
              </div>
            </div>

            <Button
              variant="gold"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello, I am interested in your export products."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} strokeWidth={1.5} />
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
