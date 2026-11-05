
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Lokasi", href: "#lokasi" },
];

const whatsappUrl = "https://wa.me/6281382000575";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "var(--background)"
            : "transparent",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "border-b transition-all duration-300",
          isScrolled
            ? "border-border/50 bg-background/70 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            Bazun<span className="text-muted-foreground">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Button
            size="sm"
            className="hidden rounded-full px-5 md:inline-flex"
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
          >
            Hubungi Kami
            <ArrowUpRight className="ml-1 size-4" />
          </Button>

          {/* Mobile Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 md:hidden"
                aria-label="Buka navigasi"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[280px] flex-col gap-0 border-l border-border bg-background px-6"
            >
              <SheetTitle className="mb-8 text-lg font-bold tracking-tight">
                Bazun<span className="text-muted-foreground">.</span>
              </SheetTitle>

              {/* Mobile Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block border-b border-border/60 py-4 text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <Button
                className="mt-8 w-full rounded-full"
                onClick={() => {
                  closeMenu();
                  window.open(
                    whatsappUrl,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                Hubungi Kami
                <ArrowUpRight className="ml-1 size-4" />
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    </header>
  );
}
