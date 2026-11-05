
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function IntroductionSection() {
  return (
    <section
      id="tentang-kami"
      className="relative bg-background py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Sticky Image - Left */}
          <div className="relative w-full lg:sticky lg:top-28">

            <div
              aria-hidden="true"
              className="absolute inset-10 -z-10 rounded-full bg-primary/10 blur-3xl"
            />

            <Image
              src="/images/introduction.webp"
              alt="Bazun Service melayani service HP, laptop, dan komputer dengan biaya jasa pemasangan mulai Rp50 ribu"
              title="Bazun Service Cibitung - Service HP, Laptop dan Komputer"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />

          </div>

          {/* Content - Right */}
          <div className="max-w-2xl">

            <Badge
              variant="outline"
              className="gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-primary"
            >
              <MapPin className="size-3.5" />
              Tentang Bazun Service
            </Badge>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Solusi Service HP, Laptop & Komputer
              <span className="text-primary"> di Cibitung</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              <p>
                Bazun Service hadir untuk membantu kebutuhan
                service perangkat elektronik masyarakat
                Cibitung dan sekitarnya. Kami melayani berbagai
                jenis service HP, laptop, dan komputer untuk
                mendukung aktivitas sehari-hari Anda.
              </p>

              <p>
                Mulai dari penggantian LCD, baterai, konektor
                charger, hingga service komponen perangkat.
                Kami juga menerima pemasangan sparepart yang
                dibawa sendiri oleh pelanggan.
              </p>

              <p>
                Kami memahami bahwa setiap perangkat memiliki
                kebutuhan service yang berbeda. Karena itu,
                Anda dapat berkonsultasi terlebih dahulu untuk
                mengetahui pilihan layanan dan estimasi biaya
                sesuai kondisi perangkat.
              </p>
            </div>

            {/* Information */}
            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wrench className="size-5" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Beragam Solusi Service
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Layanan service untuk HP, laptop, dan
                    komputer sesuai kebutuhan perangkat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Buka Setiap Hari
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Senin - Minggu, pukul 09.00 - 22.00 WIB.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#layanan"
                className={buttonVariants({
                  size: "lg",
                  className: "h-12 rounded-full px-7",
                })}
              >
                Jelajahi Layanan
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="https://wa.me/6281382000575"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "h-12 rounded-full px-7",
                })}
              >
                Hubungi Kami
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
