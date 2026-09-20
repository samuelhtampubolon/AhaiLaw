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
    <main className="min-h-screen bg-slate-900 text-slate-100 p-3 sm:p-6 md:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      {/* Mobile-Friendly Responsive Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 bg-slate-800/85 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-600/80 shadow-xl">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-amber-400 transition-colors p-1">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Beranda</span>
          </Link>
          <div className="sm:hidden flex items-center gap-2">
            <MapIcon className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-amber-400 text-base">Peta Liga</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <MapIcon className="w-6 h-6 text-amber-500" />
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-amber-400">Peta Liga Hukum AhaiLaw</h1>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
          <button
            onClick={toggleDevModeUnlockAll}
            className={`flex-1 sm:flex-none px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
              devModeUnlockAll 
                ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                : 'bg-slate-700/60 border-slate-600 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{devModeUnlockAll ? 'Mode Uji: Semua Terbuka' : 'Uji: Buka Semua Liga'}</span>
          </button>
          
          <button
            onClick={handleReset}
            title="Reset Progres"
            className="px-3 py-2 rounded-xl bg-red-950/40 border border-red-800 text-red-300 hover:bg-red-900/50 text-xs font-bold flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </header>

      {/* Grid of Leagues - 1 col on Mobile, 2 on Tablet, 4 on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {levels.map((level) => {
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
              className={`relative flex flex-col justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                isAccessible 
                  ? isFinished
                    ? 'bg-slate-800/95 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                    : 'bg-slate-800/90 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-slate-900/80 border-slate-700/80 opacity-60 grayscale'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    isAccessible 
                      ? isFinished ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isFinished ? <CheckCircle2 className="w-6 h-6" /> : isAccessible ? <Trophy className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-slate-300 border border-slate-700">
                      Liga #{level.id}
                    </span>
                    <div className="text-[11px] font-mono text-amber-400 font-bold mt-1">
                      {completedInLevel} / 10 Pulau
                    </div>
                  </div>
                </div>
                
                <h2 className={`text-lg sm:text-xl font-bold font-serif mb-1.5 leading-snug ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                  {level.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">{level.desc}</p>
              </div>

              <div>
                {/* Progress bar */}
                <div className="w-full bg-slate-950 rounded-full h-2 mb-4 overflow-hidden border border-slate-700">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${isFinished ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${(completedInLevel / 10) * 100}%` }}
                  />
                </div>
                
                {isAccessible ? (
                  <Link 
                    href={`/journey/level/${level.id}`} 
                    className={`block w-full py-3 text-center font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 ${
                      isFinished 
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-amber-950/40'
                    }`}
                  >
                    {isFinished ? 'Tinjau Liga (Tuntas 10/10)' : 'Masuki Liga'}
                  </Link>
                ) : (
                  <button disabled className="w-full py-3 text-center bg-slate-800/80 text-slate-500 font-bold text-xs rounded-xl cursor-not-allowed border border-slate-700">
                    Terkunci (Selesaikan Liga #{level.id - 1})
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
