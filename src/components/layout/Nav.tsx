"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const marketNav = primaryNav.filter((item) => ["/manufacturing-use-cases", "/48-hour-diagnostic", "/about"].includes(item.href));
const productNav = primaryNav.filter((item) => ["/pulseiq", "/winsproposal"].includes(item.href));

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const closeMenu = React.useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink-900">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white text-xs font-bold">R</span>
          <span>{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {marketNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  active ? "text-ink-900" : "text-ink-600 hover:text-ink-900 hover:bg-canvas"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <details className="group relative">
            <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-canvas hover:text-ink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
              Products <span aria-hidden="true" className="ml-1 inline-block transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 min-w-48 rounded-lg border border-line bg-white p-2 shadow-lg">
              {productNav.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-canvas hover:text-ink-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <a href="https://advaitha.tech/" className="rounded-md px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-canvas hover:text-ink-900">
            Advaitha
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact?source=48-hour-diagnostic"><Button size="sm">Start the Diagnostic</Button></Link>
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
            {marketNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-canvas"
              >
                {item.label}
              </Link>
            ))}
            <span className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-ink-500">Products</span>
            {productNav.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-canvas">
                {item.label}
              </Link>
            ))}
            <a href="https://advaitha.tech/" onClick={closeMenu} className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-canvas">
              Advaitha
            </a>
            <Link href="/contact?source=48-hour-diagnostic" onClick={closeMenu} className="mt-2">
              <Button className="w-full">Start the Diagnostic</Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
