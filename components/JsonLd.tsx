export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://bazun.vercel.app/#business",
        name: "Bazun Service",
        url: "https://bazun.vercel.app/",
        image: "https://bazun.vercel.app/images/social.webp",
        telephone: "+6281382000575",
        description:
            "Bazun Service melayani service HP di Cibitung dan sekitarnya, termasuk Cikarang Barat, serta perbaikan laptop dan komputer.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Telaga Asih, RT.06/RW.02, Telaga Asih",
            addressLocality: "Cikarang Barat",
            addressRegion: "Kabupaten Bekasi, Jawa Barat",
            postalCode: "17841",
            addressCountry: "ID",
        },
        areaServed: [
            {
                "@type": "Place",
                name: "Cibitung, Kabupaten Bekasi",
            },
            {
                "@type": "Place",
                name: "Cikarang Barat, Kabupaten Bekasi",
            },
        ],
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
        currenciesAccepted: "IDR",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan Bazun Service",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Service HP",
                    },
                },
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
                        name: "Perbaikan Konektor Charger",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Service Laptop",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Service Komputer",
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
