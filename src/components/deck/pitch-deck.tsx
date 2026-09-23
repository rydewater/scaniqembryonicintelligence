import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppChrome } from "@/components/app-chrome";
import { SLIDES } from "@/components/deck/slides";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PitchDeck() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const last = SLIDES.length - 1;

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(last, next)));
    },
    [last],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(last);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, last]);

  const Slide = SLIDES[index].node;

  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <AppChrome view="deck" />
      <div
        className="relative min-h-0 flex-1 overflow-hidden"
        onTouchStart={(e) => {
          touchX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
          touchX.current = null;
          if (dx < -48) go(index + 1);
          if (dx > 48) go(index - 1);
        }}
      >
        <div key={SLIDES[index].id} className="h-full animate-in fade-in duration-200">
          <Slide />
        </div>
      </div>
      <footer className="no-print flex items-center gap-2 border-t border-border bg-bg px-3 py-2 sm:px-5">
        <Button variant="ghost" size="icon" aria-label="Previous slide" onClick={() => go(index - 1)} disabled={index === 0}>
          <ChevronLeft className="size-5" />
        </Button>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-x-auto py-1">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to ${s.title}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={cn(
                "size-2.5 shrink-0 rounded-full transition-colors",
                i === index ? "bg-primary" : "bg-border hover:bg-muted",
              )}
            />
          ))}
        </div>
        <p className="hidden tabular-nums text-xs text-muted sm:block">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </p>
        <Button variant="ghost" size="icon" aria-label="Next slide" onClick={() => go(index + 1)} disabled={index === last}>
          <ChevronRight className="size-5" />
        </Button>
      </footer>
    </div>
  );
}
