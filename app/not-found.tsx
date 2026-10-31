import Link from "next/link"
import { Home, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute top-20 left-[15%] size-24 rounded-full bg-primary/10 blur-2xl" />

        <div className="absolute right-[15%] bottom-20 size-32 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="flex w-full max-w-xl flex-col items-center text-center">

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[clamp(7rem,25vw,13rem)] font-black leading-none tracking-[-0.08em] text-primary">
            404
          </h1>

          <span className="absolute -top-3 -right-2 rotate-12 text-2xl">
            ✦
          </span>

          <span className="absolute bottom-3 -left-5 -rotate-12 text-xl">
            ✦
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Waduh, halaman ini hilang!
          </h2>

          <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            Sepertinya halaman yang kamu cari sedang tidak ditemukan.
            Mungkin URL-nya salah atau halamannya sudah dipindahkan.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/">
              <Home />
              Kembali ke Beranda
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">
              <Search />
              Butuh Bantuan?
            </Link>
          </Button>
        </div>

        {/* Small footer message */}
        <div className="mt-12 flex items-center gap-2 text-xs text-muted-foreground">
          <span>🐾</span>
          <span>Bazun Service siap membantu</span>
        </div>
      </div>
    </main>
  )
}