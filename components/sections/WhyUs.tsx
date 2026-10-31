import {
    BadgeCheck,
    ClipboardCheck,
    Coins,
    Cpu,
    Ruler,
    Wrench,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const advantages = [
    {
        number: "01",
        title: "Teknisi Berpengalaman",
        description:
            "Ditangani oleh teknisi yang memahami penanganan dan penggantian berbagai komponen smartphone.",
        icon: BadgeCheck,
    },
    {
        number: "02",
        title: "Pengerjaan Rapi dan Presisi",
        description:
            "Setiap proses pembongkaran dan pemasangan komponen dilakukan dengan teliti untuk menjaga kerapian hasil pengerjaan.",
        icon: Ruler,
    },
    {
        number: "03",
        title: "Mengutamakan Kualitas Pemasangan",
        description:
            "Memperhatikan kecocokan komponen dan ketepatan pemasangan agar perangkat dapat berfungsi sebagaimana mestinya.",
        icon: Wrench,
    },
    {
        number: "04",
        title: "Biaya Jasa Terjangkau",
        description:
            "Nikmati layanan pemasangan sparepart dengan biaya jasa mulai Rp50.000, sehingga kebutuhan perbaikan lebih mudah disesuaikan dengan budget.",
        icon: Coins,
    },
    {
        number: "05",
        title: "Fleksibilitas Sparepart",
        description:
            "Pelanggan dapat membawa LCD, baterai, atau komponen pengganti sendiri untuk dipasangkan oleh teknisi kami.",
        icon: Cpu,
    },
    {
        number: "06",
        title: "Konsultasi dan Penanganan Terarah",
        description:
            "Kami membantu memahami kendala perangkat serta kebutuhan penggantian komponen sebelum proses pengerjaan dilakukan.",
        icon: ClipboardCheck,
    },
]

export function WhyUs() {
    return (
        <section
            id="why-us"
            className="px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-muted-foreground">
                        <span className="size-2 rounded-full bg-primary" />
                        WHY CHOOSE BAZUN SERVICE
                    </div>

                    <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Mengapa Mempercayakan Perbaikan HP kepada{" "}
                        <span className="text-primary">
                            Bazun Service?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        Kami mengutamakan ketelitian dalam setiap proses
                        pengerjaan. Dengan penanganan yang terarah dan
                        layanan yang fleksibel, Bazun Service berupaya
                        memberikan pengalaman service HP yang profesional
                        dan nyaman bagi setiap pelanggan.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    {advantages.map((advantage) => {
                        const Icon = advantage.icon

                        return (
                            <Card
                                key={advantage.number}
                                className="group rounded-2xl shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            <Icon className="size-5" />
                                        </div>

                                        <span className="text-sm font-medium tabular-nums text-muted-foreground">
                                            {advantage.number}
                                        </span>
                                    </div>

                                    <CardTitle className="pt-4 text-lg leading-snug tracking-tight">
                                        {advantage.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm leading-7 text-muted-foreground">
                                        {advantage.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}