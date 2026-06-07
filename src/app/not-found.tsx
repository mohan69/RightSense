import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">
        Page not found
      </h1>
      <p className="mt-3 text-ink-600">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>Return home</Button>
        </Link>
      </div>
    </section>
  );
}
