
export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://bazun.vercel.app/#business",
        name: "Bazun Service",
        url: "https://bazun.vercel.app",
        image: "https://bazun.vercel.app/images/hero-banner.webp",
        telephone: "+6281382000575",
        description:
            "Bazun Service melayani penggantian LCD, baterai, konektor charger, dan komponen HP di Cikarang Barat, Kabupaten Bekasi.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Cikarang Barat",
            addressRegion: "Jawa Barat",
            addressCountry: "ID",
        },
        areaServed: {
            "@type": "Place",
            name: "Cikarang Barat, Kabupaten Bekasi",
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "09:00",
            closes: "22:00",
        },
        priceRange: "Rp50.000 ke atas",
        currenciesAccepted: "IDR",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Bazun Service",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Ganti LCD HP",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Ganti Baterai HP",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Penggantian Konektor Charger",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Penggantian Komponen Mesin HP",
                    },
                },
            ],
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
        />
    )
}
