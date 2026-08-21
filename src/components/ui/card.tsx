import { cn } from "@/lib/utils/cn";

/**
 * Card — squared, bordered surface. No radius, no drop shadow by default;
 * structure comes from the 1px border. Pass `interactive` for hover affordance
 * (used by product / category / blog cards).
 */
export type CardProps = React.ComponentProps<"div"> & {
  interactive?: boolean;
};

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-surface",
        interactive &&
          "transition hover:border-navy-900 hover:shadow-md focus-within:border-navy-900",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("border-b border-border p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-lg font-semibold text-foreground", className)} {...props} />;
}

export function CardBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-3 border-t border-border p-6", className)}
      {...props}
    />
  );
}
