
"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Wallet,
  Wrench,
  PackageCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Penanganan Sesuai Kebutuhan",
    description:
      "Setiap perangkat diperiksa terlebih dahulu untuk mengetahui kendala dan menentukan tindakan perbaikan yang sesuai.",
  },
  {
    icon: Wallet,
    title: "Biaya Lebih Transparan",
    description:
      "Estimasi biaya disampaikan sebelum pengerjaan sehingga Anda dapat mempertimbangkan layanan yang dibutuhkan.",
  },
  {
    icon: Wrench,
    title: "Layanan Hardware & Software",
    description:
      "Melayani berbagai kebutuhan perbaikan HP, laptop, dan komputer, baik masalah komponen maupun perangkat lunak.",
  },
  {
    icon: PackageCheck,
    title: "Bisa Membawa Sparepart Sendiri",
    description:
      "Sudah memiliki LCD, baterai, atau komponen pengganti? Kami juga menerima jasa pemasangan sparepart yang dibawa pelanggan.",
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

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-20 md:py-28">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            MENGAPA MEMILIH KAMI
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Service HP Cibitung dengan Penanganan yang Tepat
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Memilih tempat service perangkat bukan hanya soal memperbaiki
            kerusakan. Bazun Service mengutamakan pemeriksaan yang teliti,
            informasi biaya yang jelas, dan pengerjaan sesuai kebutuhan perangkat.
          </p>
        </motion.div>

        {/* Advantages Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={itemVariants}>
                <Card className="h-full border-0 bg-muted shadow-none">
                  <CardContent className="flex h-full flex-col items-center p-5 text-center">

                    {/* Icon */}
                    <Icon className="mb-5 size-7 stroke-[1.8]" />

                    {/* Separator */}
                    <Separator className="mb-5" />

                    {/* Content */}
                    <h3 className="text-sm font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-55 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
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
