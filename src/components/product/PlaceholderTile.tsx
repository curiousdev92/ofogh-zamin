import { cn } from "@/lib/utils/cn";

/**
 * Placeholder product / category thumbnail — stands in until real photography is
 * supplied. Squared navy tile with a large brass monogram and a corner tick that
 * echoes the logo. Uses logical `start-*` so the tick sits correctly in RTL.
 */
export function PlaceholderTile({ initial, className }: { initial: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative aspect-[4/3] overflow-hidden border-b border-border bg-navy-900",
        className,
      )}
    >
      <span className="absolute start-3 top-3 block h-4 w-1.5 bg-gold-500" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl  uppercase text-gold-500">{initial}</span>
      </span>
    </div>
  );
}
