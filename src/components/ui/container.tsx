import { cn } from "@/lib/utils/cn";

/**
 * Container — centers content and applies responsive horizontal padding.
 * Padding uses physical px-* utilities, which are symmetric, so they are RTL-safe.
 */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
