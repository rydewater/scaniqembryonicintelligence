import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { REG } from "@/data/registrations";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", view: "deck", label: "Deck" },
  { to: "/partners", view: "partners", label: "Partners" },
  { to: "/patent", view: "patent", label: "Patent" },
] as const;

export function AppChrome({ view }: { view: "deck" | "patent" | "partners" }) {
  return (
    <header className="no-print relative z-20 flex items-center justify-between gap-3 border-b border-border/80 bg-bg/85 px-4 py-3 backdrop-blur-md sm:px-6">
      <Logo />
      <nav className="flex items-center gap-1 rounded-md bg-surface p-1 shadow-[var(--shadow-border)]">
        {TABS.map((t) => (
          <Link
            key={t.view}
            to={t.to}
            className={cn(
              "min-h-10 rounded-sm px-3 text-sm font-medium leading-10 sm:px-3.5",
              view === t.view ? "bg-panel text-fg" : "text-muted hover:text-fg",
            )}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <p className="hidden font-mono text-[10px] tracking-[0.14em] text-muted uppercase lg:block">
        {REG.legalName} · CAGE {REG.cage} · UEI {REG.uei}
      </p>
    </header>
  );
}
