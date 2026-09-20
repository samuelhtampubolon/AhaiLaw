"use client";

import Link from "next/link";
import { ArrowLeft, Map as MapIcon, Lock, Unlock, Trophy } from "lucide-react";
import { useGameStore } from "@/store/game-store";

// Data untuk 8 Level (Liga Utama)
const levels = [
  { id: 1, name: "Liga Pemula (Fondasi)", reqLevel: 1, desc: "Filsafat, Asas, dan Pengantar Ilmu Hukum" },
  { id: 2, name: "Liga Amatir (Perdata 1)", reqLevel: 2, desc: "Hukum Perdata, Keluarga, dan Benda" },
  { id: 3, name: "Liga Semi-Pro (Perdata 2)", reqLevel: 3, desc: "Hukum Bisnis, Perusahaan, dan Kontrak" },
  { id: 4, name: "Liga Profesional (Pidana 1)", reqLevel: 4, desc: "Asas Pidana, Delik, dan Pembelaan" },
  { id: 5, name: "Liga Ahli (Pidana 2)", reqLevel: 5, desc: "Hukum Acara Pidana & Pembuktian" },
  { id: 6, name: "Liga Master (Tata Negara)", reqLevel: 6, desc: "Hukum Tata Negara & Administrasi Negara" },
  { id: 7, name: "Liga Grandmaster (Internasional)", reqLevel: 7, desc: "Hukum Internasional & Humaniter" },
  { id: 8, name: "Liga Legenda (Hukum Modern)", reqLevel: 8, desc: "Hukum Siber, AI, dan Medis" },
];

export default function JourneyPage() {
  const { currentLevel } = useGameStore();

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      <header className="flex justify-between items-center mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Kembali ke Beranda</span>
        </Link>
        <div className="flex items-center gap-2">
          <MapIcon className="w-6 h-6 text-amber-500" />
          <h1 className="text-2xl font-bold font-serif text-amber-400">Peta Liga Hukum</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {levels.map((level) => {
          const isAccessible = currentLevel >= level.reqLevel;

          return (
            <div 
              key={level.id} 
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${isAccessible ? 'bg-slate-800/90 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:scale-105 cursor-pointer' : 'bg-slate-900/80 border-slate-700 opacity-70 grayscale'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-full ${isAccessible ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
                  {isAccessible ? <Trophy className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                </div>
                <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-1 rounded text-slate-400">Min. Lvl {level.reqLevel}</span>
              </div>
              
              <h2 className={`text-xl font-bold font-serif mb-2 ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                {level.name}
              </h2>
              <p className="text-sm text-slate-400 mb-6">{level.desc}</p>
              
              {isAccessible ? (
                <Link href={`/journey/level/${level.id}`} className="block w-full py-2 text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
                  Masuki Liga
                </Link>
              ) : (
                <button disabled className="w-full py-2 text-center bg-slate-800 text-slate-500 font-bold rounded-lg cursor-not-allowed">
                  Terkunci
                </button>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
