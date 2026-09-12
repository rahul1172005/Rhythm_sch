import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppCTA from "@/components/WhatsAppCTA";

import { JsonLd, schoolLocalBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhythmpreschool.in"),
  title: {
    default: "Rhythm PreSchool | Top Preschool in Chennai & Thiruvallur",
    template: "%s | Rhythm PreSchool Chennai"
  },
  description:
    "Rhythm PreSchool at Melmanambedu, Vellavedu Post, Thiruvallur Dist, Chennai. Best play-based preschool offering Playgroup, Nursery, Junior KG & Senior KG in a safe, nurturing, joyful environment.",
  keywords: [
    "preschool in chennai",
    "best preschool in thiruvallur",
    "preschool in poonamallee",
    "nursery school melmanambedu",
    "preschool vellavedu post",
    "play school near thirumazhisai",
    "playgroup admissions chennai",
    "kindergarten in west chennai",
    "play based learning preschool",
    "rhythm preschool",
    "child care center thiruvallur"
  ],
  authors: [{ name: "Rhythm PreSchool", url: "https://rhythmpreschool.in" }],
  creator: "Rhythm PreSchool",
  publisher: "Rhythm PreSchool",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rhythmpreschool.in",
    siteName: "Rhythm PreSchool",
    title: "Rhythm PreSchool | Best Preschool in Chennai & Thiruvallur",
    description:
      "Nurturing early curiosity, creativity, and foundational confidence through joyful play-based learning at Melmanambedu, Chennai.",
    images: [
      {
        url: "/images/school_logo_favicon.png",
        width: 512,
        height: 512,
        alt: "Rhythm PreSchool Chennai Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm PreSchool | Best Preschool in Chennai & Thiruvallur",
    description:
      "Nurturing early curiosity, creativity, and foundational confidence through joyful play-based learning.",
    images: ["/images/school_logo_favicon.png"]
  },
  icons: {
    icon: [
      { url: "/images/school_logo_favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/images/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/school_logo_favicon.png",
    apple: [
      { url: "/images/school_logo_favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import { AdmissionsProvider } from "@/context/AdmissionsContext";
import AdmissionsDrawer from "@/components/AdmissionsDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/school_logo_favicon.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/images/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/images/school_logo_favicon.png" sizes="180x180" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Melmanambedu, Chennai, Thiruvallur" />
        <meta name="geo.position" content="13.0645;80.0385" />
        <meta name="ICBM" content="13.0645, 80.0385" />
        <JsonLd data={schoolLocalBusinessSchema} />
      </head>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <AdmissionsProvider>
          {children}
          <AdmissionsDrawer />
          <Toaster position="bottom-right" />
        </AdmissionsProvider>
        <WhatsAppCTA />
      </body>
    </html>
  );
}
