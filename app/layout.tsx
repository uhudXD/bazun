
import type { Metadata } from "next"
import { Roboto, Montserrat } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { JsonLd } from "@/components/JsonLd"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const montserratHeading = Montserrat({
    subsets: ["latin"],
    variable: "--font-heading",
})

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-sans",
})

const siteUrl = "https://bazun.vercel.app/"

const siteTitle = "Service HP Cibitung | Bazun Service"

const siteDescription =
    "Bazun Service melayani service HP di Cibitung dan Cikarang Barat. Perbaikan LCD, baterai, konektor charger, laptop, dan komputer. Biaya jasa pasang mulai Rp50.000."

const socialImage = "/images/social.webp"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    verification: {
        google: "mhqW4_C1IVgJbsUGMswL-zTEI0qp7g5FzFxKU95PTaM",
    },

    title: siteTitle,
    description: siteDescription,

    keywords: [
        "service HP Cibitung",
        "tempat service HP Cibitung",
        "tukang service HP Cibitung",
        "service LCD HP Cibitung",
        "service laptop Cibitung",
        "service komputer Cibitung",
        "service HP Cikarang Barat",
    ],

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
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: "Bazun Service",
        locale: "id_ID",
        type: "website",
        images: [
            {
                url: socialImage,
                width: 1536,
                height: 1024,
                alt: "Bazun Service - Layanan Service HP Cibitung",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: [socialImage],
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
                "font-sans",
                roboto.variable,
                montserratHeading.variable,
            )}
        >
            <body>
                <JsonLd />
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    )
}
