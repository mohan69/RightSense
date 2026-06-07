"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FounderImageProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
};

export function FounderImage({ src, alt, initials, className }: FounderImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 text-2xl font-semibold tracking-tight text-brand-700",
          className
        )}
        aria-hidden
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- plain img used for simple onError fallback
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
