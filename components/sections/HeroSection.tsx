import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    MapPin,
    Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section id="home" className="overflow-hidden">
            <div className="px-4 pt-20 sm:px-6 lg:pt-24">
                <div className="mx-auto max-w-5xl text-center">
                    <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5">
                        <MapPin className="size-3.5" />
                        Service HP Cikarang Barat
                    </Badge>

                    <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
                        SERVICE HP{" "}
                        <span className="block text-primary">
                            CIKARANG BARAT.
                        </span>
                    </h1>

                    <h2 className="mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                        Bazun Service – Solusi Perbaikan HP yang Praktis dan Terjangkau
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        Punya LCD, baterai, atau sparepart HP sendiri? Bawa
                        saja ke Bazun Service! Kami siap bantu pemasangannya
                        dengan biaya jasa mulai Rp50.000. Melayani berbagai
                        perbaikan HP di Cikarang Barat dan sekitarnya.
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                        <Link
                            href="#layanan"
                            className={buttonVariants({
                                size: "lg",
                                className: "w-full sm:w-auto",
                            })}
                        >
                            Lihat Layanan
                            <ArrowRight className="size-4" />
                        </Link>

                        <Link
                            href="https://wa.me/6281382000575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                                size: "lg",
                                variant: "outline",
                                className: "w-full sm:w-auto",
                            })}
                        >
                            Konsultasi via WhatsApp
                        </Link>
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
                        <span className="flex items-center gap-1.5">
                            <Wrench className="size-3.5 text-primary" />
                            Sparepart Sendiri
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Wrench className="size-3.5 text-primary" />
                            Pasang Mulai Rp50 Ribu
                        </span>
                    </div>
                </div>

                <div className="relative mt-2 w-full sm:-mt-8 lg:-mt-12">
                    <Image
                        src="/images/hero-banner.webp"
                        alt="Bazun Service - Tempat service HP Cikarang Barat"
                        title="Bazun Service - Tempat service HP Cikarang Barat"
                        width={1329}
                        height={748}
                        priority
                        loading="eager"
                        fetchPriority="high"
                        sizes="100vw"
                        className="h-auto w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}