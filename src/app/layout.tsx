import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "@/lib/CartContext";
import { I18nProvider } from "@/lib/I18nContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Azimut | L'univers de l'aventure et de l'exploration",
    template: "%s | Azimut"
  },
  description: "Découvrez Azimut, créateur d'univers et de jeux d'aventure uniques. Explorez nos mondes, de la montagne à la jungle.",
  keywords: ["jeux de société", "azimut", "ludique", "divertissement", "exploration", "aventure", "boussole"],
  authors: [{ name: "Azimut Team" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://azimut-games.com",
    siteName: "Azimut Games",
    title: "Azimut Games | Créateur de mondes ludiques",
    description: "Rejoignez l'aventure Azimut Games et découvrez nos nouveaux jeux.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white flex flex-col`}
      >
        <CartProvider>
          <I18nProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieBanner />
          </I18nProvider>
        </CartProvider>
      </body>
    </html>
  );
}
