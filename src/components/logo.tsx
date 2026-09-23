import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true">
        <rect x="3" y="3" width="6" height="1" className="fill-primary/70" />
        <rect x="3" y="3" width="1" height="6" className="fill-primary/70" />
        <rect x="23" y="28" width="6" height="1" className="fill-gold/80" />
        <rect x="28" y="23" width="1" height="6" className="fill-gold/80" />
        <path
          d="M8 21c1-7 15-3 16-10"
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M24 11c-1 7-15 3-16 10"
          fill="none"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-fg">SCANIQ</span>
    </span>
  );
}
