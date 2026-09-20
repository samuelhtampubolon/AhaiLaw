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
    <div className="w-full h-[240px] sm:h-[280px] md:h-[300px] flex justify-center items-center bg-slate-900/90 rounded-xl shadow-inner border border-slate-700/80 p-2">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="68%" data={data}>
          <PolarGrid stroke="#475569" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: "#fbbf24", fontSize: 12, fontWeight: "bold" }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Objektivitas"
            dataKey="A"
            stroke="#f59e0b"
            strokeWidth={2}
            fill="#f59e0b"
            fillOpacity={0.5}
            isAnimationActive={true}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
