
import Link from "next/link"
import {
    ArrowRight,
    MessageCircle,
    MapPin,
    Wrench,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FinalCTA() {
    return (
        <section className="px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
                    <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl text-center">
                        <Badge
                            variant="outline"
                            className="gap-2 rounded-full px-3 py-1.5"
                        >
                            <span className="size-2 rounded-full bg-primary" />
                            SIAP MEMBANTU PERANGKATMU
                        </Badge>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            HP Bermasalah?{" "}
                            <span className="text-primary">
                                Percayakan Penanganannya kepada Kami.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Konsultasikan kebutuhan penggantian komponen
                            atau pemasangan sparepart HP bersama Bazun Service.
                            Kami siap membantu kebutuhan service HP di
                            Cikarang Barat dan sekitarnya.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="https://wa.me/6281382000575"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({
                                    size: "lg",
                                    className: "w-full sm:w-auto",
                                })}
                            >
                                <MessageCircle className="size-4" />
                                Konsultasi via WhatsApp
                                <ArrowRight className="size-4" />
                            </Link>

                            <Link
                                href="https://maps.app.goo.gl/R9mxCY6aeqXtBzHN7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({
                                    size: "lg",
                                    variant: "outline",
                                    className: "w-full sm:w-auto",
                                })}
                            >
                                <MapPin className="size-4" />
                                Kunjungi Lokasi
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground sm:text-sm">
                            <span className="flex items-center gap-2">
                                <Wrench className="size-4 text-primary" />
                                Layanan Service HP
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary" />
                                Cikarang Barat
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
