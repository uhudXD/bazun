import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/#home"
              className="text-2xl font-bold tracking-tight"
            >
              Bazun Service
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 opacity-80">
              Service HP, laptop, dan komputer di Cikarang
              Barat dan Cibitung.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">
              Navigasi
            </h2>

            <nav className="mt-4 flex flex-col gap-3 text-sm opacity-80">
              <Link href="/#home">
                Beranda
              </Link>

              <Link href="/#services">
                Layanan
              </Link>

              <Link href="/#why-us">
                Kenapa Kami
              </Link>

              <Link href="/#location">
                Lokasi
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="font-semibold">
              Hubungi Kami
            </h2>

            <div className="mt-4 flex flex-col gap-4 text-sm opacity-80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />

                <address className="not-italic leading-6">
                  Jl. Telaga Asih, RT.06/RW.02,
                  <br />
                  Telaga Asih, Kec. Cikarang Bar.,
                  <br />
                  Kabupaten Bekasi, Jawa Barat 17841
                </address>
              </div>

              <a
                href="https://wa.me/6281382000575"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Phone className="size-4 shrink-0" />
                <span>+62 813-8200-0575</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-6">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Bazun Service.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}