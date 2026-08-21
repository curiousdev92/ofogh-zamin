import { cn } from "@/lib/utils/cn";

/**
 * Text wordmark for Ofogh Zamin (no logo asset yet). A gold tick + the brand
 * name in tracked, uppercase navy. `tone="light"` for use on the dark footer.
 */
export function Logo({
  name,
  tone = "dark",
  className,
}: {
  name: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span aria-hidden className="block h-5 w-1.5 bg-gold-500" />
      <span
        className={cn(
          "text-base font-bold uppercase tracking-[0.2em]",
          tone === "light" ? "text-white" : "text-navy-900",
        )}
      >
        {name}
      </span>
    </span>
  );
}
