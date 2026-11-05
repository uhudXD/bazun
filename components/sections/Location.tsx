"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function Location() {
  return (
    <section id="lokasi" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Location Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="mb-3 text-sm font-semibold tracking-widest text-muted-foreground">
              TEMUKAN LOKASI KAMI
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tempat Service HP di Cibitung dan Cikarang Barat
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sedang mencari tempat service HP di Cibitung? Bazun Service
              melayani kebutuhan perbaikan HP, laptop, dan komputer untuk
              pelanggan di Cibitung, Cikarang Barat, dan area sekitarnya.
              <br />
              Konsultasikan masalah perangkat Anda atau kunjungi lokasi Bazun
              Service untuk mendapatkan informasi mengenai layanan perbaikan yang tersedia.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <MapPin className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold">Area Layanan</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cibitung, Cikarang Barat, dan sekitarnya, Bekasi.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Clock className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold">Jam Operasional</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Setiap hari, 09.00 – 22.00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href="https://maps.app.goo.gl/R9mxCY6aeqXtBzHN7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 size-4" />
                  Petunjuk Arah
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="https://wa.me/6281382000575"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="overflow-hidden border-0 bg-muted p-0 shadow-none">
              <div className="relative aspect-4/3 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Bazun+Service+Cikarang+Barat&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Lokasi Bazun Service"
                  className="absolute inset-0"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
