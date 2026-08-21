import { cn } from "@/lib/utils/cn";

export type BadgeVariant = "default" | "accent" | "outline" | "muted";

const base =
  "inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide";

const variants: Record<BadgeVariant, string> = {
  default: "bg-navy-900 text-white",
  accent: "bg-gold-500 text-navy-900",
  outline: "border border-navy-900 text-navy-900",
  muted: "bg-steel-100 text-steel-700",
};

export type BadgeProps = React.ComponentProps<"span"> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <span className={cn(base, variants[variant], className)} {...props} />;
}
