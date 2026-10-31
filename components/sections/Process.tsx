
import {
    ArrowRight,
    CheckCircle2,
    ClipboardList,
    MessageCircle,
    Wrench,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
    {
        number: "01",
        title: "Konsultasikan Kendala",
        description:
            "Hubungi Bazun Service dan jelaskan masalah atau komponen HP yang ingin diganti.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Pemeriksaan Perangkat",
        description:
            "Kami membantu memeriksa kondisi HP dan menentukan kebutuhan penggantian komponen.",
        icon: ClipboardList,
    },
    {
        number: "03",
        title: "Proses Pengerjaan",
        description:
            "Teknisi melakukan penggantian atau pemasangan komponen dengan teliti dan presisi.",
        icon: Wrench,
    },
    {
        number: "04",
        title: "Pengecekan Hasil",
        description:
            "Perangkat diperiksa kembali untuk memastikan komponen yang dipasang berfungsi dengan baik.",
        icon: CheckCircle2,
    },
]

export function Process() {
    return (
        <section
            id="proses"
            className="px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                            <span className="size-2 rounded-full bg-primary" />
                            HOW IT WORKS
                        </div>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Proses Service HP yang{" "}
                            <span className="text-primary">
                                Mudah dan Terarah.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                            Kami membuat proses service lebih sederhana.
                            Mulai dari konsultasi hingga pengecekan akhir,
                            setiap tahap dilakukan agar kebutuhan perangkatmu
                            dapat ditangani dengan tepat.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute bottom-10 left-7 top-10 hidden w-px bg-border sm:block" />

                        <div className="space-y-4">
                            {steps.map((step) => {
                                const Icon = step.icon

                                return (
                                    <Card
                                        key={step.number}
                                        className="group relative rounded-2xl shadow-none transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                                    >
                                        <CardContent className="flex gap-5 p-5 sm:gap-6 sm:p-6">
                                            <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-background text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="size-5" />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                                                        STEP {step.number}
                                                    </span>

                                                    <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                                                </div>

                                                <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
