
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://bazun.vercel.app/sitemap.xml",
        host: "https://bazun.vercel.app",
    }
}
