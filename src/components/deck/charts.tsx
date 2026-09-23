import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const trajectory = [
  { h: 0, normal: 1.0, arrest: 1.0 },
  { h: 12, normal: 0.94, arrest: 0.95 },
  { h: 24, normal: 0.86, arrest: 0.88 },
  { h: 36, normal: 0.74, arrest: 0.82 },
  { h: 48, normal: 0.62, arrest: 0.81 },
  { h: 72, normal: 0.48, arrest: 0.83 },
  { h: 96, normal: 0.36, arrest: 0.86 },
  { h: 120, normal: 0.28, arrest: 0.88 },
];

export function TrajectoryChart() {
  return (
    <div className="h-56 w-full sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trajectory} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="h"
            tick={{ fill: "#8b9bb0", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="h"
          />
          <YAxis
            tick={{ fill: "#8b9bb0", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0.2, 1.05]}
          />
          <Tooltip
            contentStyle={{
              background: "#121a28",
              border: "1px solid #243044",
              borderRadius: 8,
              color: "#e8eef4",
              fontSize: 12,
            }}
            labelFormatter={(v) => `${v} hours`}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: "#8b9bb0" }} />
          <Line
            type="monotone"
            dataKey="normal"
            name="Healthy development"
            stroke="#2ee6c5"
            strokeWidth={2.4}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="arrest"
            name="Stalled development"
            stroke="#e05a6a"
            strokeWidth={2.4}
            strokeDasharray="5 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
