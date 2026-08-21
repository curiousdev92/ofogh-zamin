/**
 * cn — tiny, dependency-free className combiner.
 *
 * Joins truthy class values (strings, arrays, conditionals) into one string.
 * This intentionally does NOT de-duplicate conflicting Tailwind utilities.
 * If we later hit conflicts (e.g. passing `p-2` to override a component's `p-4`),
 * upgrade to `clsx` + `tailwind-merge`:
 *
 *   import { clsx, type ClassValue } from "clsx";
 *   import { twMerge } from "tailwind-merge";
 *   export const cn = (...i: ClassValue[]) => twMerge(clsx(i));
 */
export type ClassValue = string | number | null | false | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      out.push(String(input));
    }
  }
  return out.join(" ");
}
