
"use client";

import { motion } from "motion/react";
import {
  Smartphone,
  Laptop,
  Monitor,
  MessageCircle,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/6281382000575";
  const mapsUrl = "https://maps.app.goo.gl/R9mxCY6aeqXtBzHN7";

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
      y: 25,
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

  return (
    <section id="beranda" className="relative isolate flex min-h-162.5 w-full items-center justify-center overflow-hidden bg-background md:min-h-187.5">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.webp')",
        }}
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col items-center px-6 py-24 text-center md:py-32"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <Badge
            variant="secondary"
            className="mb-6 gap-2 px-4 py-2 text-sm font-medium"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex items-center gap-1.5"
            >
              {[Smartphone, Laptop, Monitor].map((Icon, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 5,
                      scale: 0.7,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Icon className="size-3.5" />
                </motion.span>
              ))}
            </motion.div>

            Bazun Service • Cibitung & Cikarang Barat
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Service HP Cibitung
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl"
        >
          Laptop & Komputer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          Bazun Service melayani service HP di Cibitung dan sekitarnya,
          termasuk Cikarang Barat. Kami juga menyediakan layanan perbaikan
          laptop dan komputer, mulai dari penggantian LCD, baterai, konektor
          charger, hingga perbaikan hardware dan software. Biaya jasa pasang
          mulai Rp50.000.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="px-8 py-6"
          >
            <MessageCircle />
            Hubungi Sekarang
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(mapsUrl, "_blank")}
            className="px-8 py-6"
          >
            <MapPin />
            Lihat Lokasi
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
