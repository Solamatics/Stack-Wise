import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Stackwise - Expense Tracker & Invoicing for Freelancers",
  description: "Track expenses, generate professional invoices, and stay tax-compliant. The financial toolkit built for freelancers who earn globally and spend locally.",
  keywords: [
    "expense tracker",
    "freelancer",
    "invoicing",
    "tax compliance",
    "multi-currency",
    "Nigerian freelancers",
    "financial management",
    "receipt tracking",
  ],
  authors: [{ name: "Stackwise" }],
  creator: "Stackwise",
  publisher: "Stackwise",
  metadataBase: new URL("https://stackwise.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stackwise - Expense Tracker & Invoicing for Freelancers",
    description: "Track expenses, generate professional invoices, and stay tax-compliant. Built for freelancers who earn globally and spend locally.",
    url: "https://stackwise.io",
    siteName: "Stackwise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stackwise - Financial toolkit for freelancers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackwise - Expense Tracker & Invoicing for Freelancers",
    description: "Track expenses, generate professional invoices, and stay tax-compliant. Built for freelancers.",
    images: ["/og-image.png"],
    creator: "@stackwise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stackwise.io/#organization",
      name: "Stackwise",
      url: "https://stackwise.io",
      logo: {
        "@type": "ImageObject",
        url: "https://stackwise.io/logo.png",
      },
      sameAs: [
        "https://twitter.com/stackwise",
        "https://linkedin.com/company/stackwise",
        "https://github.com/stackwise",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@stackwise.io",
        contactType: "Customer Support",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://stackwise.io/#software",
      name: "Stackwise",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NGN",
        availability: "https://schema.org/PreOrder",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        ratingCount: "500",
      },
      description: "Track expenses, generate professional invoices, and stay tax-compliant. Built for freelancers who earn globally and spend locally.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* TODO: Add Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
