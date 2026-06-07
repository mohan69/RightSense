import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-ink-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
