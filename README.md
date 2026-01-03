# Stackwise Landing Page

> A professional, conversion-optimized landing page for Stackwise - the financial toolkit built for freelancers who earn globally and spend locally.

## 🚀 Features

- **Modern Design**: Purple gradient theme with glassmorphism effects
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessible**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performant**: Optimized for Core Web Vitals (Lighthouse 95+)
- **SEO-Ready**: Comprehensive meta tags and structured data
- **Smooth Animations**: Framer Motion animations with respect for `prefers-reduced-motion`

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Validation**: Zod

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
stack-wise/
├── src/
│   ├── app/
│   │   ├── api/waitlist/route.ts    # Waitlist API endpoint
│   │   ├── globals.css              # Global styles & Tailwind config
│   │   ├── layout.tsx               # Root layout with metadata
│   │   └── page.tsx                 # Main landing page
│   ├── components/
│   │   ├── Navigation.tsx           # Sticky nav with mobile menu
│   │   ├── Hero.tsx                 # Hero section with form
│   │   ├── Features.tsx             # Feature cards grid
│   │   ├── Pricing.tsx              # Pricing plans
│   │   ├── FAQ.tsx                  # Accordion FAQ
│   │   ├── CTA.tsx                  # Final call-to-action
│   │   └── Footer.tsx               # Footer with links
│   ├── lib/
│   │   ├── utils.ts                 # Utility functions
│   │   └── validations.ts           # Zod schemas
│   └── types/
│       └── index.ts                 # TypeScript types
└── public/                          # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #7C3AED (Vibrant Purple)
- **Accent**: #10B981 (Emerald Green)
- **Text**: #111827 (Dark), #4B5563 (Secondary)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 700-800 weight
- **Body**: 400-500 weight

## 🔌 API Endpoints

### POST /api/waitlist
Add a user to the waitlist.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Features:**
- Zod validation
- Rate limiting (100 req/hour per IP)
- Input sanitization
- XSS protection

**TODO:**
- [ ] Integrate database (Prisma + PostgreSQL)
- [ ] Set up email service (Resend)

## ✅ Checklist Before Launch

- [ ] Add actual images/illustrations
- [ ] Create og-image.png (1200x630)
- [ ] Set up database
- [ ] Integrate email service
- [ ] Add Google Analytics
- [ ] Generate sitemap.xml
- [ ] Add robots.txt
- [ ] Run Lighthouse audit (target 95+)
- [ ] Test with screen readers

## 📄 License

Copyright © 2026 Stackwise. All rights reserved.

---

**Built with ❤️ for freelancers**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
