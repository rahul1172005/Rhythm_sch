import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Rhythm Preschool | Where Every Little Step Creates a Bright Future",
  description: "A nurturing preschool where children learn through play, creativity, exploration, and meaningful experiences in a safe and joyful environment.",
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
