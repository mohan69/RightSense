"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const closeMenu = React.useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-ink-900"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white text-xs font-bold">
            R
          </span>
          <span>{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  active
                    ? "text-ink-900"
                    : "text-ink-600 hover:text-ink-900 hover:bg-canvas"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact">
            <Button size="sm">Book Diagnostic</Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink-700"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-canvas"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu} className="mt-2">
              <Button className="w-full">Book Diagnostic</Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
