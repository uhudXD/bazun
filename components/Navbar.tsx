import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "@/components/MobileMenu"

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-3 flex h-14 items-center justify-between rounded-full border bg-background/80 px-4 shadow-sm backdrop-blur-xl">
          <Link
            href="/#home"
            className="text-lg font-semibold tracking-tight"
          >
            Bazun Service
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/#home">
                    Beranda
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/#services">
                    Layanan
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/#why-us">
                    Kenapa Kami
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/#location">
                    Lokasi
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button
            asChild
            className="hidden md:inline-flex"
          >
            <a
              href="https://wa.me/6281382000575"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </a>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}