import { BudgetChart, FrequencyChart, Gantt, WaterfallChart } from "@/components/deck/diagrams";
import { REG } from "@/data/registrations";

function Kicker({ children }: { children: string }) {
  return (
    <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.28em] text-primary uppercase">{children}</p>
  );
}

function Caption() {
  return <p className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Concept render</p>;
}

function Plate({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="cad-frame relative min-h-44 overflow-hidden bg-surface">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-bg/40 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <Caption />
      </div>
    </div>
  );
}

export function CoverSlide() {
  return (
    <div className="relative isolate flex min-h-full overflow-hidden">
      <img src="/images/slide-cover.jpg" alt="Cutaway of a dual-sided culture well" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/80 to-bg/15" />
      <div className="cad-frame relative z-10 flex h-full w-full max-w-2xl flex-col justify-end gap-5 p-6 sm:justify-center sm:p-10 lg:p-14">
        <Kicker>{REG.legalName}</Kicker>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] text-fg sm:text-6xl">
          ScanIQ Livestock Embryo Intelligence
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Viability scoring for cattle and horse embryo transfer. Printed sensors. Continuous electrical measurement.
          Nothing touches the embryo.
        </p>
        <p className="text-sm text-fg/80">Montana ScanIQ Biotech Park proposal, September 2026.</p>
        <dl className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-1 font-mono text-[11px] text-muted sm:grid-cols-3">
          <div>
            <dt className="text-gold">SAM.gov</dt>
            <dd className="text-fg">{REG.samStatus}</dd>
          </div>
          <div>
            <dt className="text-gold">UEI</dt>
            <dd className="text-fg">{REG.uei}</dd>
          </div>
          <div>
            <dt className="text-gold">CAGE</dt>
            <dd className="text-fg">{REG.cage}</dd>
          </div>
          <div>
            <dt className="text-gold">Renews</dt>
            <dd className="text-fg">{REG.samRenews}</dd>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <dt className="text-gold">Reps & certs</dt>
            <dd className="text-fg">On file in SAM (ORCA retired)</dd>
          </div>
        </dl>
        <Caption />
      </div>
    </div>
  );
}

export function ChallengeSlide() {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-problem.jpg" alt="Microscope view of an embryo beside an open recipient cow" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>The problem</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
            Embryo selection in cattle and horses is still done by eye.
          </h2>
        </header>
        <p className="text-base leading-relaxed text-muted">
          Grading is visual, subjective, and happens once. Failure is detected only after arrest. Every non-viable
          transfer costs a recipient cycle, synchronization drugs, and 30 to 60 days of a producer’s calendar—totaling
          $450 to $650 per failed bovine recipient and over $2,200 per open recipient mare.
        </p>
        <div className="mt-auto grid grid-cols-2 gap-3">
          <article className="bg-panel p-4 shadow-[var(--shadow-border)]">
            <p className="font-mono text-xs tracking-[0.16em] text-gold uppercase">Cattle</p>
            <p className="mt-1 font-display text-2xl font-semibold text-fg">$450–$650</p>
            <p className="mt-1 text-xs text-muted">per failed recipient</p>
          </article>
          <article className="bg-panel p-4 shadow-[var(--shadow-border)]">
            <p className="font-mono text-xs tracking-[0.16em] text-gold uppercase">Horses</p>
            <p className="mt-1 font-display text-2xl font-semibold text-fg">$2,200+</p>
            <p className="mt-1 text-xs text-muted">per open recipient mare</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export function AnchorsSlide() {
  return (
    <div className="grid h-full overflow-y-auto lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-5 sm:p-8">
        <header>
          <Kicker>What exists today</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
            The physics is published; the instrument isn’t.
          </h2>
        </header>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Cattle embryos show a measurable electrical shift near 1.49 MHz that tracks cell mass (IEEE EMBC 2024).
          Time-lapse cameras already give independent stage labels. Silk sensors shift when the well’s contents change.
          Nobody has put those together into a sensor that sits in a culture dish and watches continuously. That’s the
          gap.
        </p>
        <FrequencyChart />
        <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          Illustrative impedance curve · marker at 1.49 MHz
        </p>
      </div>
      <Plate src="/images/slide-exists.jpg" alt="Network analyzer bench with a culture well" />
    </div>
  );
}

export function CassetteSlide() {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-cassette.jpg" alt="Cross-section of the multi-well culture cassette" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>What ScanIQ builds</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg">
            A culture cassette that watches the embryo electrically, continuously, without touching it.
          </h2>
        </header>
        <p className="text-base leading-relaxed text-muted">
          The cassette records electrical impedance, how the sensor’s peak moves, how sharp that peak is, and how the
          embryo looks under the camera. Those readings stay in time with incubator temperature and humidity. Software
          watches the path over hours and flags a stall before the cells look wrong. Measurement only. Nothing is driven
          into the embryo.
        </p>
      </div>
    </div>
  );
}

export function MobiusSlide() {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-mobius.jpg" alt="Printed Möbius resonator" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>Why the resonator matters</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg">Manufactured geometry becomes the sensor.</h2>
        </header>
        <p className="text-base leading-relaxed text-muted">
          We design the sensor, print it, measure what we printed, and redesign. The Möbius shape is the first geometry
          we try. It is a hypothesis. The twelve-week sprint tests it against ordinary electrodes. If it does not add
          signal, we stop.
        </p>
      </div>
    </div>
  );
}

export function SpeciesSlide() {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-species.jpg" alt="Cattle micro-wells beside a larger horse culture capsule" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>Order of work</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg">Cattle first. Horses second.</h2>
        </header>
        <p className="text-base leading-relaxed text-muted">
          Cattle have published electrical data, high cycle volume, and Montana’s herd. Horses have no published
          electrical atlas, larger embryos, and high value per transfer. Cattle is the proof. Horses are the first
          dataset nobody else holds.
        </p>
      </div>
    </div>
  );
}

export function MontanaSlide() {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-montana.jpg" alt="Montana map from Bozeman through the Yellowstone corridor" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>Why Montana</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg">
            The herd, the lab, and the customer are in the same state.
          </h2>
        </header>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Animal-use rules, not human reproductive regulation. MSU Department of Animal and Range Sciences and the
          Montana Agricultural Experiment Station. Working embryo-transfer barns as first customers and data partners.
          State money that does not take equity: Growth Through Agriculture. SCANIQ LLC is already active in SAM.gov.
        </p>
      </div>
    </div>
  );
}

export function SprintSlide() {
  return (
    <div className="flex h-full flex-col gap-5 p-5 sm:p-8 lg:p-10">
      <header>
        <Kicker>The 12-week sprint</Kicker>
        <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
          One question, twelve weeks: does a printed sensor beat plain electrodes?
        </h2>
      </header>
      <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Weeks 1–4: materials and test coupons. Weeks 5–8: cassette and electrical acquisition. Weeks 9–12: blinded
        cattle run, fifty embryos, stage prediction checked against time-lapse labels. Exit: reproduce the 1.49 MHz
        curve and beat electrodes-alone on held-out embryos, or stop.
      </p>
      <Gantt />
      <p className="mt-auto bg-surface px-4 py-3 font-mono text-sm text-fg shadow-[var(--shadow-border)]">
        <span className="mr-2 text-gold">PASS / FAIL</span>
        Reproduce 1.49 MHz and beat electrodes-alone, or stop.
      </p>
    </div>
  );
}

export function RoadmapSlide() {
  const rows = [
    { n: "01", t: "Lab phantom", d: "Can the sensor see controlled changes in the fluid?" },
    { n: "02", t: "Beads and models", d: "Do microspheres and organoids give repeatable signatures?" },
    { n: "03", t: "Cattle, then horses", d: "Do the readings track stage, cell mass, and arrest when the labels are hidden?" },
    { n: "04", t: "Combined score", d: "Does electrical plus camera beat the camera alone on held-out embryos?" },
    { n: "05", t: "Montana ET field trials", d: "Score embryos in a working barn. Confirm against pregnancy." },
  ];
  return (
    <div className="grid h-full overflow-y-auto lg:grid-cols-2">
      <Plate src="/images/slide-roadmap.jpg" alt="Five-station validation bench" />
      <div className="flex flex-col gap-3 p-5 sm:p-8">
        <header>
          <Kicker>Validation roadmap</Kicker>
          <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">Five gates.</h2>
        </header>
        <ol className="grid gap-1.5">
          {rows.map((r) => (
            <li key={r.n} className="grid grid-cols-[auto_1fr] gap-3 bg-panel px-3 py-2.5 shadow-[var(--shadow-border)]">
              <span className="font-mono text-sm text-gold">{r.n}</span>
              <div>
                <p className="text-sm font-semibold text-fg">{r.t}</p>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">{r.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function MarketSlide() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-5 sm:p-8 lg:p-10">
      <header>
        <Kicker>Business model</Kicker>
        <h2 className="font-display text-3xl font-semibold text-fg">Cassette per transfer, software per score.</h2>
      </header>
      <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Disposable cassette ($85 cattle / $275 horse). Recurring score ($35 cattle / $75 horse). Hardware sits in the
        ET lab. One avoided cattle failure saves $450 to $650 — about four times the sensing fee.
      </p>
      <WaterfallChart />
      <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
        Cattle unit economics · cassette + score vs one avoided fail
      </p>
    </div>
  );
}

export function IPSlide() {
  const pillars = [
    "Design the sensor and the print together",
    "Culture fixture that senses without touching",
    "Score development from electrical and camera readings",
    "Print, measure, feed the result into the next design",
  ];
  return (
    <div className="grid h-full lg:grid-cols-2">
      <Plate src="/images/slide-ip.jpg" alt="Core geometry feeding four patent boundaries" />
      <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-8">
        <header>
          <Kicker>Intellectual property</Kicker>
          <h2 className="font-display text-3xl font-semibold text-fg">Four filings, one kernel.</h2>
        </header>
        <p className="text-sm leading-relaxed text-muted">
          Four claims around one engine. Manufacturing provisional filed 15 June 2026. Embryo-sensing provisional to
          be filed before this deck circulates.
        </p>
        <ol className="grid gap-2">
          {pillars.map((p, i) => (
            <li key={p} className="bg-panel px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)]">
              <span className="mr-2 font-mono text-gold">0{i + 1}</span>
              {p}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function CloseSlide() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-5 sm:p-8 lg:p-10">
      <header>
        <Kicker>The ask</Kicker>
        <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
          Lab space, a herd partner, and a sprint budget.
        </h2>
      </header>
      <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Park incubator space with an incubator and an impedance bench. An MSU embryology collaborator. An ET operator
        supplying embryos and outcomes. Sprint funding of $165,000 — $10,500 network analyzer, $25,000 benchtop
        incubator, $14,500 embryo run, remainder for bench engineering.
      </p>
      <BudgetChart />
      <p className="font-mono text-[11px] text-muted">
        {REG.legalName} · UEI {REG.uei} · CAGE {REG.cage} · SAM.gov {REG.samStatus} through {REG.samRenews}
      </p>
    </div>
  );
}

export const SLIDES = [
  { id: "cover", title: "Cover", node: CoverSlide },
  { id: "problem", title: "The problem", node: ChallengeSlide },
  { id: "exists", title: "What exists", node: AnchorsSlide },
  { id: "builds", title: "What we build", node: CassetteSlide },
  { id: "resonator", title: "The resonator", node: MobiusSlide },
  { id: "species", title: "Cattle then horses", node: SpeciesSlide },
  { id: "montana", title: "Why Montana", node: MontanaSlide },
  { id: "sprint", title: "12-week sprint", node: SprintSlide },
  { id: "path", title: "Validation", node: RoadmapSlide },
  { id: "market", title: "Business", node: MarketSlide },
  { id: "ip", title: "IP", node: IPSlide },
  { id: "ask", title: "The ask", node: CloseSlide },
] as const;
