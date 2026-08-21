import { cn } from "@/lib/utils/cn";

export type SectionSpacing = "sm" | "md" | "lg";

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
};

export type SectionProps = React.ComponentProps<"section"> & {
  spacing?: SectionSpacing;
};

/**
 * Section — vertical rhythm wrapper for page bands.
 * Pair with <Container> for horizontal bounds.
 */
export function Section({ className, spacing = "md", ...props }: SectionProps) {
  return <section className={cn(spacingClasses[spacing], className)} {...props} />;
}
