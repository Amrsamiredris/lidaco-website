import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "LIDACO — Premium Iranian Dates & Pistachio Export",
  description:
    "Direct supplier of Bam Mazafati dates and Iranian pistachios. Bulk export to China, Middle East and Europe. B2B wholesale enquiries welcome.",
  keywords: [
    "Iranian dates",
    "Iranian pistachios",
    "Bam Mazafati",
    "Rafsanjan pistachios",
    "bulk export",
    "agricultural export",
  ],
  icons: {
    icon: "/lidaco-mark.svg",
  },
  metadataBase: new URL("https://lidaco.com"),
  openGraph: {
    title: "LIDACO — Premium Iranian Dates & Pistachio Export",
    description:
      "Direct supplier of Bam Mazafati dates and Iranian pistachios. Bulk export to China, Middle East and Europe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
