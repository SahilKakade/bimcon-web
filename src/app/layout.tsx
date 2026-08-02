import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Full Production SEO Metadata for Google Ranking
export const metadata: Metadata = {
  title: {
    default: "Bimcon Associates | Industrial Engineering & Plant Maintenance Nashik",
    template: "%s | Bimcon Associates",
  },
  description:
    "Bimcon Associates, Nashik is a premier industrial engineering provider specializing in thermal power plant maintenance, turbine valve overhauls, pump overhauling, actuators, and cooling tower architectures across India.",
  keywords: [
    "Bimcon Associates",
    "Bimcon Associates Nashik",
    "Bimcon Associates Engineering",
    "Thermal Power Plant Maintenance Nashik",
    "Turbine Valve Servicing India",
    "Boiler Feed Pump Servicing",
    "Industrial Piping Fabrication Maharashtra",
    "Cooling Tower Overhaul Nashik",
  ],
  authors: [{ name: "Bimcon Associates" }],
  creator: "Bimcon Associates",
  publisher: "Bimcon Associates",
  metadataBase: new URL("https://www.bimconassociates.com"), // Replace with your actual deployed domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bimcon Associates | Engineering Reliable Industrial Solutions",
    description:
      "Delivering high-performance shutdown execution, advanced mechanical reconditioning, and project oversight frameworks for thermal power plants and process industries.",
    url: "https://www.bimconassociates.com",
    siteName: "Bimcon Associates",
    images: [
      {
        url: "/og-image.jpg", // Place a 1200x630 preview image in your /public folder
        width: 1200,
        height: 630,
        alt: "Bimcon Associates Industrial Engineering Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimcon Associates | Industrial Engineering Solutions",
    description:
      "Comprehensive mechanical maintenance and shutdown execution for thermal power plants across India.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Local Business Structured Data for Google Search & Maps
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bimcon Associates",
    "image": "https://www.bimconassociates.com/logo.png",
    "@id": "https://www.bimconassociates.com",
    "url": "https://www.bimconassociates.com",
    "telephone": "+919822971089",
    "email": "bimconassociates@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No.5, Jerin Villa, Adke Nagar-1, Jaibhavani Road, Nashik Road",
      "addressLocality": "Nashik",
      "addressRegion": "Maharashtra",
      "postalCode": "422102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.951547781441825,
      "longitude": 73.82327767522773
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Injecting Structured Data into HTML Head for Googlebot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}