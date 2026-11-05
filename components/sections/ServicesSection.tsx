
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Service HP Cibitung",
    description:
      "Melayani perbaikan HP berbagai merek, mulai dari ganti LCD, baterai, konektor charger, perbaikan mesin, hingga penanganan masalah software.",
    image: "/images/service-phone.webp",
    alt: "Smartphone untuk layanan service HP",
  },
  {
    title: "Service Laptop",
    description:
      "Melayani service laptop untuk pelanggan di Cibitung, termasuk kerusakan hardware, masalah software, upgrade komponen, dan instalasi ulang sistem operasi.",
    image: "/images/service-laptop.webp",
    alt: "Laptop untuk layanan service laptop",
  },
  {
    title: "Service Komputer",
    description:
      "Melayani service komputer di Cibitung, mulai dari pemeriksaan dan perbaikan PC hingga upgrade hardware serta instalasi ulang sistem operasi.",
    image: "/images/service-computer.webp",
    alt: "Desktop PC untuk layanan service komputer",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_2.5fr] lg:items-center">

          {/* Section Introduction */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-sm"
          >
            <p className="mb-3 text-sm font-semibold tracking-widest text-muted-foreground">
              LAYANAN KAMI
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Layanan Service HP, Laptop & Komputer
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Butuh tempat service HP di Cibitung? Bazun Service menyediakan
              berbagai layanan perbaikan perangkat dengan pemeriksaan sesuai
              kondisi kerusakan dan kebutuhan Anda.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
              >
                <Card className="group overflow-hidden rounded-2xl border bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  {/* Product Image */}
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-muted/30 p-4">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {service.title}
                      </h3>

                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
