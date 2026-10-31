
import Link from "next/link"
import {
    ArrowUpRight,
    Clock,
    MapPin,
    Navigation,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Location() {
    return (
        <section
            id="location"
            className="px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                            <span className="size-2 rounded-full bg-primary" />
                            TEMUKAN LOKASI KAMI
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Butuh Service HP di{" "}
                            <span className="text-primary">
                                Cikarang Barat?
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Bazun Service siap membantu kebutuhan penggantian
                            komponen dan pemasangan sparepart HP. Kunjungi
                            lokasi kami untuk mendapatkan layanan sesuai
                            kebutuhan perangkatmu.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <MapPin className="size-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Lokasi Bazun Service
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Cikarang Barat, Kabupaten Bekasi,
                                        Jawa Barat
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Clock className="size-5" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Jam Operasional
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Hubungi kami untuk informasi jam
                                        operasional dan ketersediaan layanan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="https://maps.app.goo.gl/R9mxCY6aeqXtBzHN7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({
                                    size: "lg",
                                    className: "w-full sm:w-auto",
                                })}
                            >
                                <Navigation className="size-4" />
                                Petunjuk Lokasi
                                <ArrowUpRight className="size-4" />
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
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>

                    <Card className="overflow-hidden rounded-2xl shadow-none">
                        <CardContent className="p-0">
                            <iframe
                                src="https://maps.google.com/maps?q=-6.2675569,107.1010112&z=18&output=embed"
                                title="Lokasi Bazun Service di Google Maps"
                                width="100%"
                                height="420"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="block w-full border-0"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
