import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  /** `panel` is the default spec-sheet surface; `glass` is for anything that
   *  genuinely sits over other content. */
  variant?: "default" | "card" | "glass";
}

export function GlassContainer({
  children,
  className,
  variant = "default",
}: GlassContainerProps) {
  const variantClasses = {
    default: "panel",
    card: "panel",
    glass: "glass-card",
  };

  return (
    <div className={cn(variantClasses[variant], className)}>{children}</div>
  );
}
