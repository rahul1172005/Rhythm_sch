import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Taste of Trio's | Legendry Trio Burgers & Street Food",
  description: "Experience the power of Trio's. Trendy, bold, and delicious burgers, shawarmas, and more. Ordered fresh, delivered fast.",
};

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
