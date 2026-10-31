"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="inline-flex size-9 items-center justify-center rounded-md border bg-background shadow-xs transition-colors hover:bg-muted">
          <Menu className="size-4" />
          <span className="sr-only">Buka menu</span>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/#home"
                className="text-lg font-semibold tracking-tight"
              >
                Bazun Service
              </Link>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-6 px-4">
            <Link
              href="/#home"
              className="text-base font-medium"
            >
              Beranda
            </Link>

            <Link
              href="/#services"
              className="text-base font-medium"
            >
              Layanan
            </Link>

            <Link
              href="/#why-us"
              className="text-base font-medium"
            >
              Kenapa Kami
            </Link>

            <Link
              href="/#location"
              className="text-base font-medium"
            >
              Lokasi
            </Link>

            <Button
              asChild
              className="mt-4"
            >
              <a
                href="https://wa.me/6281382000575"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}