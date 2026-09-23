import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle = {
  background: "#0b0d11",
  border: "1px solid #262b34",
  borderRadius: 2,
  color: "#eceef2",
  fontSize: 12,
  fontFamily: "IBM Plex Mono, monospace",
};

const freq = [
  { f: 0.5, z: 1.0 },
  { f: 0.8, z: 0.96 },
  { f: 1.1, z: 0.88 },
  { f: 1.3, z: 0.72 },
  { f: 1.49, z: 0.48 },
  { f: 1.7, z: 0.7 },
  { f: 2.0, z: 0.86 },
  { f: 2.4, z: 0.92 },
];

export function FrequencyChart() {
  return (
    <div className="h-44 w-full sm:h-52">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={freq} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke="rgba(110,200,255,0.08)" vertical={false} />
          <XAxis dataKey="f" tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} unit=" MHz" />
          <YAxis tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} labelFormatter={(v) => `${v} MHz`} />
          <Line type="monotone" dataKey="z" name="Impedance (illustrative)" stroke="#6ec8ff" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const budget = [
  { name: "VNA", v: 10500 },
  { name: "Incubator", v: 25000 },
  { name: "Embryo run", v: 14500 },
  { name: "Bench eng.", v: 115000 },
];

export function BudgetChart() {
  return (
    <div className="h-48 w-full sm:h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={budget} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="rgba(110,200,255,0.08)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
          <Bar dataKey="v" radius={[2, 2, 0, 0]}>
            {budget.map((d) => (
              <Cell key={d.name} fill={d.name === "Bench eng." ? "#c9a36a" : "#6ec8ff"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const water = [
  { name: "Cassette", v: 85 },
  { name: "Score", v: 35 },
  { name: "Metrology", v: 120 },
  { name: "Avoided fail", v: 550 },
];

export function WaterfallChart() {
  return (
    <div className="h-44 w-full sm:h-52">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={water} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid stroke="rgba(110,200,255,0.08)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#8b919c", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}`, "cattle unit"]} />
          <Bar dataKey="v" radius={[2, 2, 0, 0]}>
            {water.map((d) => (
              <Cell key={d.name} fill={d.name === "Avoided fail" ? "#c9a36a" : "#6ec8ff"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Gantt() {
  const phases = [
    { t: "Weeks 1–4", d: "Materials and test coupons", w: "w-full" },
    { t: "Weeks 5–8", d: "Cassette and electrical acquisition", w: "w-full" },
    { t: "Weeks 9–12", d: "Blinded cattle run · fifty embryos", w: "w-full" },
  ];
  return (
    <ol className="grid gap-3 sm:grid-cols-3">
      {phases.map((p, i) => (
        <li key={p.t} className="bg-panel p-4 shadow-[var(--shadow-border)]">
          <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">0{i + 1}</p>
          <p className="mt-2 font-display text-lg font-semibold text-fg">{p.t}</p>
          <p className="mt-2 text-sm text-muted">{p.d}</p>
          <div className="mt-4 h-px bg-border">
            <div className={`h-px bg-primary ${p.w}`} />
          </div>
        </li>
      ))}
    </ol>
  );
}
