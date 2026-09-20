"use client";

import { ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart } from "recharts";

export function ObjectivityRadar({
  keadilan,
  kepastian,
  kemanfaatan,
}: {
  keadilan: number;
  kepastian: number;
  kemanfaatan: number;
}) {
  const data = [
    { subject: "Keadilan", A: keadilan, fullMark: 100 },
    { subject: "Kepastian", A: kepastian, fullMark: 100 },
    { subject: "Kemanfaatan", A: kemanfaatan, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[300px] flex justify-center items-center bg-slate-900 rounded-lg shadow-inner border border-slate-700">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 14, fontWeight: "bold" }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Objectivity"
            dataKey="A"
            stroke="#d97706"
            fill="#f59e0b"
            fillOpacity={0.6}
            isAnimationActive={true}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
