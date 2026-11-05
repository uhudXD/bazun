"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  MessageCircle,
  Smartphone,
  Laptop,
  Monitor,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Lokasi", href: "#lokasi" },
];

const services = [
  { label: "Service HP Cibitung", icon: Smartphone },
  { label: "Service Laptop", icon: Laptop },
  { label: "Service Komputer", icon: Monitor },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="#beranda"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"
            >
              Bazun Service
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Solusi service HP di Cibitung untuk berbagai kebutuhan
              perbaikan smartphone, laptop, dan komputer. Melayani pelanggan
              di Cibitung, Cikarang Barat, dan sekitarnya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-semibold">Navigasi</h2>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold">Layanan</h2>

            <ul className="mt-5 space-y-3">
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon className="size-4" />
                      {item.label}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold">Hubungi Kami</h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <address className="text-sm leading-relaxed text-muted-foreground not-italic">
                  Jl. Telaga Asih, RT.06/RW.02, Telaga Asih, Kec. Cikarang
                  Barat, Kabupaten Bekasi, Jawa Barat 17841
                </address>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Setiap hari, 09.00 – 22.00 WIB
                </p>
              </div>

              <a
                href="https://wa.me/6281382000575"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
              >
                <MessageCircle className="size-4" />
                +62 813-8200-0575
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Bazun Service. All rights reserved.
          </p>

          <p>Service HP, Laptop & Komputer</p>
        </div>
      </div>
    </footer>
  );
}
