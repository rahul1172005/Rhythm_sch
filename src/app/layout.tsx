import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Rhythm Preschool | Where Every Little Step Creates a Bright Future",
  description: "A nurturing preschool where children learn through play, creativity, exploration, and meaningful experiences in a safe and joyful environment.",
};

import { AdmissionsProvider } from "@/context/AdmissionsContext";
import AdmissionsDrawer from "@/components/AdmissionsDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
