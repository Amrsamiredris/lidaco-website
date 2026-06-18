import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LazyScrollToTop } from "@/components/LazyScrollToTop";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <LazyScrollToTop />
    </>
  );
}
