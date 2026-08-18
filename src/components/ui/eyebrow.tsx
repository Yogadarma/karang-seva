import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: "primary" | "accent";
  className?: string;
}) {
  const toneClasses =
    tone === "accent"
      ? "border-accent-soft bg-accent-soft text-accent"
      : "border-primary-soft bg-primary-soft text-primary-dark";

  return (
    <span
      className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-wider ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
