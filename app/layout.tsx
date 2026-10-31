
import type { Metadata } from "next"
import { Geist_Mono, Roboto, Montserrat } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bazun.vercel.app"),

  verification: {
    google: "mhqW4_C1IVgJbsUGMswL-zTEI0qp7g5FzFxKU95PTaM",
  },

  title: {
    default: "Service HP Cikarang Barat | Bazun Service",
    template: "%s | Bazun Service",
  },

  description:
    "Bazun Service melayani service HP di Cikarang Barat dan sekitarnya. Penggantian LCD, baterai, konektor charger, dan komponen HP dengan biaya jasa pasang mulai Rp50.000.",

  authors: [
    {
      name: "Bazun Service",
    },
  ],

  creator: "Bazun Service",
  publisher: "Bazun Service",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Service HP Cikarang Barat | Bazun Service",
    description:
      "Butuh service HP di Cikarang Barat? Bazun Service melayani penggantian LCD, baterai, konektor charger, dan pemasangan sparepart mulai Rp50.000.",
    url: "https://bazun.vercel.app/",
    siteName: "Bazun Service",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.webp",
        width: 1329,
        height: 748,
        alt: "Bazun Service - Layanan Service HP Cikarang Barat",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Service HP Cikarang Barat | Bazun Service",
    description:
      "Layanan penggantian komponen dan pemasangan sparepart HP di Cikarang Barat. Biaya jasa mulai Rp50.000.",
    images: ["/images/hero-banner.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable,
        montserratHeading.variable,
      )}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
