
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="inline-flex size-9 items-center justify-center rounded-md border bg-background shadow-xs transition-colors hover:bg-muted">
          <Menu className="size-4" />
          <span className="sr-only">Buka menu</span>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/#home"
                onClick={closeMenu}
                className="text-lg font-semibold tracking-tight"
              >
                Bazun Service
              </Link>
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-6 px-4">
            <Link
              href="/#home"
              onClick={closeMenu}
              className="text-base font-medium"
            >
              Beranda
            </Link>

            <Link
              href="/#services"
              onClick={closeMenu}
              className="text-base font-medium"
            >
              Layanan
            </Link>

            <Link
              href="/#why-us"
              onClick={closeMenu}
              className="text-base font-medium"
            >
              Kenapa Kami
            </Link>

            <Link
              href="/#location"
              onClick={closeMenu}
              className="text-base font-medium"
            >
              Lokasi
            </Link>

            <Link
              href="https://wa.me/6281382000575"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={buttonVariants({
                className: "mt-4",
              })}
            >
              Hubungi Kami
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
