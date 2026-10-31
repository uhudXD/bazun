import Image from "next/image"
import Link from "next/link"
import {
    ArrowUpRight,
    Battery,
    CircuitBoard,
    Cpu,
    Monitor,
    Smartphone,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

const services = [
    {
        number: "01",
        title: "Ganti LCD HP",
        description:
            "Mengatasi layar HP pecah, retak, bergaris, blank, atau touchscreen yang tidak responsif.",
        icon: Smartphone,
    },
    {
        number: "02",
        title: "Ganti Baterai HP",
        description:
            "Solusi untuk baterai cepat habis, kembung, sulit mengisi daya, atau HP sering mati sendiri.",
        icon: Battery,
    },
    {
        number: "03",
        title: "Perbaikan Konektor Charger",
        description:
            "Memperbaiki port charger yang longgar, rusak, atau mengalami masalah saat pengisian daya.",
        icon: CircuitBoard,
    },
    {
        number: "04",
        title: "Service Mesin HP",
        description:
            "Pemeriksaan dan perbaikan HP mati total, tidak bisa menyala, atau mengalami kerusakan komponen.",
        icon: Cpu,
    },
    {
        number: "05",
        title: "Perbaikan Software HP",
        description:
            "Mengatasi bootloop, sistem error, HP lemot, Lupa Sandi, dan berbagai masalah perangkat lunak lainnya.",
        icon: Monitor,
    },
]

export function Services() {
    return (
        <section
            id="layanan"
            className="px-4 py-20 sm:px-6 sm:py-28 lg:py-36"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                    <div className="border-t">
                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <div
                                    key={service.number}
                                    className="group grid grid-cols-[36px_1fr_36px] items-center gap-3 border-b py-6 transition-colors hover:bg-muted/40 sm:grid-cols-[48px_1fr_48px] sm:gap-5 sm:py-8"
                                >
                                    <span className="self-start pt-1 text-xs font-medium tabular-nums text-muted-foreground">
                                        {service.number}
                                    </span>

                                    <div>
                                        <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-2 max-w-md text-xs leading-6 text-muted-foreground sm:text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex size-9 items-center justify-center rounded-full border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:size-11">
                                        <Icon className="size-4 sm:size-5" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex flex-col">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="size-2 rounded-full bg-primary" />
                                <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                                    LAYANAN BAZUN SERVICE
                                </span>
                            </div>

                            <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
                                Jasa Service HP
                                <span className="mt-1 block text-primary">
                                    Cikarang Barat.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                                Butuh perbaikan HP? Bazun Service melayani
                                berbagai kerusakan handphone, mulai dari ganti
                                LCD, baterai, konektor charger, hingga
                                perbaikan mesin dan software di Cikarang Barat
                                dan sekitarnya.
                            </p>
                        </div>

                        <Image
                            src="/images/sparepart.webp"
                            alt="Sparepart dan komponen handphone untuk layanan service HP Bazun Service"
                            title="Sparepart HP - Bazun Service"
                            width={566}
                            height={377}
                            loading="lazy"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="mt-6 h-auto w-full max-w-lg object-contain"
                        />

                        <Link
                            href="https://wa.me/6281382000575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                                variant: "default",
                                size: "lg",
                                className: "mt-8 w-full rounded-full",
                            })}
                        >
                            Konsultasi Service HP
                            <ArrowUpRight className="size-4" />
                        </Link>
                    </div>
                </div>

                <div className="relative mt-16 overflow-hidden rounded-3xl border bg-muted/40 p-6 sm:mt-24 sm:p-10 lg:p-14">
                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                                LAYANAN PEMASANGAN SPAREPART
                            </span>

                            <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                                Punya Sparepart Sendiri?
                                <span className="block text-primary">
                                    Kami Bantu Pasangkan.
                                </span>
                            </h3>

                            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                                Bawa LCD, baterai, atau komponen HP yang sudah
                                kamu beli. Bazun Service menyediakan jasa
                                pemasangan dengan biaya mulai Rp50.000.
                            </p>
                        </div>

                        <div className="flex items-end justify-between gap-5 lg:flex-col lg:items-start">
                            <div>
                                <span className="text-xs font-medium text-muted-foreground">
                                    BIAYA JASA PEMASANGAN MULAI
                                </span>

                                <p className="mt-1 text-5xl font-black tracking-tighter sm:text-6xl">
                                    Rp50K
                                </p>
                            </div>

                            <Link
                                href="https://wa.me/6281382000575"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({
                                    size: "icon",
                                    className: "size-12 shrink-0 rounded-full",
                                })}
                                aria-label="Konsultasi pemasangan sparepart"
                            >
                                <ArrowUpRight className="size-5" />
                            </Link>
                        </div>
                    </div>

                    <span className="pointer-events-none absolute -bottom-16 -right-4 text-[180px] font-black leading-none tracking-tighter text-foreground/[0.03] sm:text-[260px]">
                        50K
                    </span>
                </div>
            </div>
        </section>
    )
}