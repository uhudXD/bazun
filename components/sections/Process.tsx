
"use client";

import { motion } from "motion/react";
import {
  MessageCircle,
  Search,
  Wrench,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultasi Kerusakan",
    description:
      "Sampaikan kendala HP, laptop, atau komputer Anda melalui WhatsApp untuk mendapatkan informasi awal mengenai layanan yang dibutuhkan.",
  },
  {
    number: "02",
    icon: Search,
    title: "Pemeriksaan Perangkat",
    description:
      "Perangkat diperiksa untuk mengetahui kondisi dan kemungkinan penyebab kerusakan sebelum menentukan tindakan perbaikan.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Pengerjaan Service",
    description:
      "Perbaikan dilakukan setelah tindakan dan estimasi biaya disetujui oleh pelanggan.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Pengecekan dan Pengambilan",
    description:
      "Perangkat diperiksa kembali sebelum diserahkan kepada pelanggan setelah proses perbaikan selesai.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Process() {
  return (
    <section id="proses" className="py-20 md:py-28">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              BAGAIMANA KAMI BEKERJA
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Proses Service yang Mudah dan Transparan
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:pb-1">
            Mulai dari konsultasi hingga perangkat selesai diperbaiki, setiap
            tahap dilakukan dengan jelas agar Anda mengetahui proses penanganan perangkat.
          </p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div key={step.number} variants={itemVariants}>
                <Card className="h-full border-0 bg-muted shadow-none">
                  <CardContent className="flex h-full flex-col p-5">

                    {/* Number and Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-4xl font-semibold tracking-tighter text-muted-foreground/40">
                        {step.number}
                      </span>

                      <Icon className="size-6 stroke-[1.5] text-muted-foreground" />
                    </div>

                    {/* Separator */}
                    <Separator className="mb-5" />

                    {/* Content */}
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
