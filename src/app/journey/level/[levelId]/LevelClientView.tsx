"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Anchor, Lock, CheckCircle2, Play } from "lucide-react";
import { useGameStore } from "@/store/game-store";
import { getIslandsForLevel } from "@/data/islands-data";

export default function LevelClientView({ initialLevelId }: { initialLevelId?: string }) {
  const params = useParams();
  const paramLevel = Array.isArray(params?.levelId) ? params.levelId[0] : params?.levelId;
  const levelId = parseInt(paramLevel || initialLevelId || "1", 10);
  const islands = getIslandsForLevel(levelId);
  const { completedIslands, unlockedLevels, currentLevel, devModeUnlockAll } = useGameStore();

  const isLevelAccessible = devModeUnlockAll || unlockedLevels.includes(levelId) || currentLevel >= levelId;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-3 sm:p-6 md:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      {/* Responsive Header */}
      <header className="flex justify-between items-center mb-6 bg-slate-800/85 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-600/80 shadow-xl">
        <Link href="/journey" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-amber-400 transition-colors p-1">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Peta Liga</span>
        </Link>
        <div className="flex items-center gap-2">
          <Anchor className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
          <h1 className="text-base sm:2xl font-bold font-serif text-amber-400">Gugusan Pulau (Liga #{levelId})</h1>
        </div>
      </header>

      {/* Grid of Islands - 1 col on small phones, 2 on phablets, up to 5 on wide screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
        {islands.map((island) => {
          const isCompleted = completedIslands.includes(island.id);
          const isAccessible =
            devModeUnlockAll ||
            (isLevelAccessible &&
              (island.islandIndex === 1 || completedIslands.includes(`${levelId}-${island.islandIndex - 1}`)));

          return (
            <div
              key={island.id}
              className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 min-h-[190px] sm:min-h-[220px] ${
                isCompleted
                  ? 'bg-slate-800/95 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : isAccessible
                  ? 'bg-slate-800/90 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900/80 border-slate-700/80 opacity-60 grayscale'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2.5">
                  <div className={`p-2 sm:p-2.5 rounded-xl ${
                    isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : isAccessible
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" /> : isAccessible ? <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" /> : <Lock className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                  <div className="bg-slate-950 px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono font-bold text-slate-300 border border-slate-700">
                    #{island.globalIndex}
                  </div>
                </div>

                <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-amber-400 mb-1">
                  Pulau {island.islandIndex} / 10
                </div>
                <h2 className={`font-serif font-bold text-sm sm:text-base leading-snug line-clamp-3 mb-2 ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                  {island.title}
                </h2>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-700/60">
                {isAccessible ? (
                  <Link
                    href={`/journey/island/${island.id}`}
                    className={`block w-full py-2.5 text-center text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm active:scale-98 ${
                      isCompleted
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-950/40'
                    }`}
                  >
                    {isCompleted ? 'Sidang Ulang (Selesai)' : 'Mulai Sidang (3 Kasus)'}
                  </Link>
                ) : (
                  <div className="py-2.5 text-center text-xs text-slate-500 font-bold bg-slate-950/60 rounded-xl border border-slate-800">
                    Terkunci
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
