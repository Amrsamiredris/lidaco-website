# LIDACO — Premium Iranian Agricultural Export Website

Production Next.js 14 website for LIDACO, a premium B2B agricultural export company sourcing dates and pistachios from Iran.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
Create `.env.local` and add:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key
NEXT_PUBLIC_WHATSAPP_NUMBER=989000000000
```

Get your Web3Forms key at: https://web3forms.com

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
lidaco-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx             # Home page
│   ├── products/page.tsx    # Products catalogue
│   ├── about/page.tsx       # About page
│   ├── export/page.tsx      # Export & packaging
│   ├── contact/page.tsx     # Contact form
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt
│   └── globals.css          # Design system tokens
├── components/
│   ├── Nav.tsx              # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── TrustStrip.tsx       # Trust badges
│   ├── ProductCard.tsx      # Product card component
│   ├── ProductFilter.tsx    # Client-side product filter
│   ├── AboutExcerpt.tsx     # About teaser
│   ├── CTABanner.tsx        # Call-to-action banner
│   ├── Footer.tsx           # Site footer
│   ├── WhatsAppFloat.tsx    # Floating WhatsApp button
│   ├── ContactForm.tsx      # Web3Forms contact form
│   ├── ScrollToTop.tsx      # Scroll to top button
│   ├── LanguageToggle.tsx   # Language toggle stub
│   └── ...                  # Primitive components
├── lib/
│   └── data.ts              # Product catalogue data
└── public/
    └── lidaco-mark.svg      # Brand logo
```

## 🎨 Design System

The entire design system is configured in `app/globals.css` using Tailwind CSS v4's `@theme` directive:

### Colors
- **Browns**: `lid-brown-{950,900,800,700,400}`
- **Sand**: `lid-sand-{50,100,300,700}`
- **Olive**: `lid-olive-{800,600,400}`
- **Gold**: `lid-gold-{700,500,300}`
- **Cream**: `lid-cream`

### Typography
- **Display**: Cormorant Garamond (600) for headings
- **UI**: DM Sans (300/400/500) for body and UI

### Brand Rules
- No exclamation marks
- No emoji
- No retail language (never "Shop", "Buy", "Sale")
- Use "Request a quote", "View products", "Enquire"
- Uppercase labels with wide tracking
- Minimal corner radius (2–4px)
- Gold used sparingly as accent

## 🔄 Updating Content

### Product Catalogue
Edit `lib/data.ts` to update products:
- `DATES` — Date varieties from Bam
- `PISTACHIOS` — Pistachio varieties from Rafsanjan
- `FEATURED` — Products shown on homepage

### Contact Information
Update environment variables in `.env.local`:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp contact number
- `NEXT_PUBLIC_WEB3FORMS_KEY` — Web3Forms access key

### Swapping Placeholder Images
Replace warm gradient placeholders with real product photos:
1. Add images to `public/` directory
2. Update `ProductCard.tsx` to use `<Image>` instead of gradient div
3. Update `AboutExcerpt.tsx` placeholder sections

## 🌐 Deployment to Vercel

### Option 1: Vercel Dashboard

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Add environment variables:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Set environment variables via Vercel dashboard under Project Settings → Environment Variables.

## 📦 Features

✅ 5 fully-responsive pages
✅ Sticky navigation with mobile hamburger menu
✅ Client-side product filtering (All / Dates / Pistachios)
✅ Web3Forms contact form integration
✅ WhatsApp floating button
✅ Scroll-to-top button
✅ Language toggle stub (EN / 中文 / عربي)
✅ SEO metadata for all pages
✅ Automatic sitemap & robots.txt
✅ Tailwind CSS v4 design system
✅ Next.js 14 App Router
✅ TypeScript (strict mode)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Google Fonts (Cormorant Garamond + DM Sans)
- **Icons**: Lucide React
- **Forms**: Web3Forms
- **Deployment**: Vercel

## 📄 License

© 2026 LIDACO Agricultural Export — From Iranian Farms to the World
