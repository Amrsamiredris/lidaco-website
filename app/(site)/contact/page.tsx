import dynamic from "next/dynamic";
import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

const ContactForm = dynamic(
  () => import("@/components/ContactForm").then((mod) => mod.ContactForm),
  {
    loading: () => (
      <section className="py-24" aria-busy="true" aria-label="Loading contact form">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-[60px]">
            <div className="space-y-[22px]">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[72px] rounded-[3px] bg-lid-sand-100 border border-lid-sand-300 animate-pulse"
                />
              ))}
            </div>
            <div className="h-[520px] rounded-[4px] bg-lid-brown-900/20 animate-pulse" />
          </div>
        </div>
      </section>
    ),
  }
);

export const metadata: Metadata = {
  title: "Contact LIDACO Export Team",
  description:
    "Get in touch with LIDACO for bulk enquiries. Share your destination market, product and volume. Our export team replies within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our export team"
        subtitle="Tell us your market, product and volume. We reply within one business day."
      />
      <ContactForm />
    </>
  );
}
