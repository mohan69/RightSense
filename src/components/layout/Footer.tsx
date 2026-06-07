import Link from "next/link";
import { siteConfig, platforms, primaryNav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-ink-900"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white text-xs font-bold">
              R
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <p className="mt-3 max-w-md text-sm text-ink-600">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Platforms
          </h4>
          <ul className="mt-3 space-y-2">
            {platforms.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-ink-700 hover:text-ink-900"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Site
          </h4>
          <ul className="mt-3 space-y-2">
            {primaryNav.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-700 hover:text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-500">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
