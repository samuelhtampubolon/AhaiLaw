"use client";

import Link from "next/link";
import { ArrowLeft, Map as MapIcon, Lock, Trophy, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";
import { useGameStore } from "@/store/game-store";

// Data untuk 8 Level (Liga Utama)
const levels = [
  { id: 1, name: "Liga Pemula (Fondasi)", desc: "Filsafat, Asas, dan Pengantar Ilmu Hukum" },
  { id: 2, name: "Liga Amatir (Perdata 1)", desc: "Hukum Perdata, Keluarga, dan Benda" },
  { id: 3, name: "Liga Semi-Pro (Perdata 2)", desc: "Hukum Bisnis, Perusahaan, dan Kontrak" },
  { id: 4, name: "Liga Profesional (Pidana 1)", desc: "Asas Pidana, Delik, dan Pembelaan" },
  { id: 5, name: "Liga Ahli (Pidana 2)", desc: "Hukum Acara Pidana & Pembuktian" },
  { id: 6, name: "Liga Master (Tata Negara)", desc: "Hukum Tata Negara & Administrasi Negara" },
  { id: 7, name: "Liga Grandmaster (Internasional)", desc: "Hukum Internasional & Humaniter" },
  { id: 8, name: "Liga Legenda (Hukum Modern)", desc: "Hukum Siber, AI, dan Medis" },
];

export default function JourneyPage() {
  const { currentLevel, completedIslands, unlockedLevels, devModeUnlockAll, toggleDevModeUnlockAll, resetProgress } = useGameStore();

  const handleReset = () => {
    if (confirm("Apakah Anda yakin ingin mengatur ulang semua progres permainan?")) {
      resetProgress();
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      <header className="flex flex-wrap justify-between items-center gap-4 mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Kembali ke Beranda</span>
        </Link>
        <div className="flex items-center gap-2">
          <MapIcon className="w-6 h-6 text-amber-500" />
          <h1 className="text-2xl font-bold font-serif text-amber-400">Peta Liga Hukum AhaiLaw</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDevModeUnlockAll}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors flex items-center gap-1 ${
              devModeUnlockAll 
                ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                : 'bg-slate-700/50 border-slate-600 text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            {devModeUnlockAll ? 'Mode Uji Aktif (Semua Terbuka)' : 'Uji: Buka Semua Liga'}
          </button>
          <button
            onClick={handleReset}
            title="Reset Progres"
            className="p-1.5 rounded-lg bg-red-950/40 border border-red-800 text-red-400 hover:bg-red-900/50 text-xs flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {levels.map((level) => {
          // Count completed islands in this level (e.g. 1-1 to 1-10)
          let completedInLevel = 0;
          for (let i = 1; i <= 10; i++) {
            if (completedIslands.includes(`${level.id}-${i}`)) {
              completedInLevel++;
            }
          }

          const isAccessible = devModeUnlockAll || unlockedLevels.includes(level.id) || currentLevel >= level.id;
          const isFinished = completedInLevel === 10;

          return (
            <div 
              key={level.id} 
              className={`relative flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 ${
                isAccessible 
                  ? isFinished
                    ? 'bg-slate-800/95 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:scale-105'
                    : 'bg-slate-800/90 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:scale-105'
                  : 'bg-slate-900/80 border-slate-700 opacity-60 grayscale'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-full ${
                  isAccessible 
                    ? isFinished ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {isFinished ? <CheckCircle2 className="w-6 h-6" /> : isAccessible ? <Trophy className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-1 rounded text-slate-300 border border-slate-700">
                    Liga #{level.id}
                  </span>
                  <div className="text-[11px] font-mono text-amber-400 mt-1">
                    {completedInLevel} / 10 Pulau Selesai
                  </div>
                </div>
              </div>
              
              <h2 className={`text-xl font-bold font-serif mb-2 ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                {level.name}
              </h2>
              <p className="text-sm text-slate-400 mb-4 flex-1">{level.desc}</p>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-2.5 mb-6 overflow-hidden border border-slate-700">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-500 ${isFinished ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${(completedInLevel / 10) * 100}%` }}
                />
              </div>
              
              {isAccessible ? (
                <Link 
                  href={`/journey/level/${level.id}`} 
                  className={`block w-full py-2.5 text-center font-bold rounded-lg transition-colors shadow-lg ${
                    isFinished 
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-amber-900/30'
                  }`}
                >
                  {isFinished ? 'Tinjau Liga (Tuntas)' : 'Masuki Liga'}
                </Link>
              ) : (
                <button disabled className="w-full py-2.5 text-center bg-slate-800 text-slate-500 font-bold rounded-lg cursor-not-allowed">
                  Terkunci (Selesaikan Liga #{level.id - 1})
                </button>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

