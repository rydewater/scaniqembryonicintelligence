import { AppChrome } from "@/components/app-chrome";
import { capitalPartners, eduPartners, herdPartners, type Partner } from "@/data/partners";

function Group({ title, kicker, items }: { title: string; kicker: string; items: Partner[] }) {
  return (
    <section className="mb-12">
      <p className="text-[11px] font-medium tracking-[0.2em] text-primary uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-fg">{title}</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((p) => (
          <article key={p.name} className="rounded-lg bg-panel p-5 shadow-[var(--shadow-border)]">
            <h3 className="text-base font-semibold text-fg">{p.name}</h3>
            <p className="mt-1 text-xs tracking-[0.12em] text-gold uppercase">{p.where}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.why}</p>
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                Open public page
              </a>
            ) : (
              <p className="mt-4 text-xs text-muted">No public site used here. Ask locally.</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export function PartnersView() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <AppChrome view="partners" />
      <article className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.22em] text-primary uppercase">Outreach list</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-fg sm:text-5xl">
            Who to call in Montana
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Public organizations named in the Montana dossier. Pages are linked. None have signed. Do not write
            “partnered with” until they have.
          </p>
        </header>
        <Group kicker="Herd" title="Embryo transfer labs and donor barns" items={herdPartners} />
        <Group kicker="Education" title="Labs that already work on livestock embryos" items={eduPartners} />
        <Group kicker="Capital" title="Money that does not require a coastal Series A" items={capitalPartners} />
        <p className="pb-12 text-sm text-muted">
          Failed-recipient dollars on slide 2 are $450–$650 cattle and $2,200+ horse. Confirm against a Sitz, ORIGen,
          or Montana Equine invoice before the deck leaves the room.
        </p>
      </article>
    </div>
  );
}
