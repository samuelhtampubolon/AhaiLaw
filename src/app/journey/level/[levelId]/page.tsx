"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Anchor, Lock, Trophy, CheckCircle2, Play } from "lucide-react";
import { useGameStore } from "@/store/game-store";
import { getIslandsForLevel } from "@/data/islands-data";

export default function LevelPage() {
  const params = useParams();
  const levelId = parseInt(Array.isArray(params.levelId) ? params.levelId[0] : params.levelId || "1", 10);
  const islands = getIslandsForLevel(levelId);
  const { completedIslands, unlockedLevels, currentLevel, devModeUnlockAll } = useGameStore();

  const isLevelAccessible = devModeUnlockAll || unlockedLevels.includes(levelId) || currentLevel >= levelId;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      <header className="flex justify-between items-center mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href="/journey" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Kembali ke Peta Liga</span>
        </Link>
        <div className="flex items-center gap-2">
          <Anchor className="w-6 h-6 text-amber-500" />
          <h1 className="text-2xl font-bold font-serif text-amber-400">Gugusan Pulau (Liga #{levelId})</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {islands.map((island) => {
          const isCompleted = completedIslands.includes(island.id);
          // Island 1 is open if level is accessible. Island K is open if Island K-1 is completed.
          const isAccessible =
            devModeUnlockAll ||
            (isLevelAccessible &&
              (island.islandIndex === 1 || completedIslands.includes(`${levelId}-${island.islandIndex - 1}`)));

          return (
            <div
              key={island.id}
              className={`relative flex flex-col justify-between p-5 rounded-2xl border-2 transition-all duration-300 min-h-[220px] ${
                isCompleted
                  ? 'bg-slate-800/95 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-105'
                  : isAccessible
                  ? 'bg-slate-800/90 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:scale-105 hover:border-cyan-400'
                  : 'bg-slate-900/80 border-slate-700 opacity-60 grayscale'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-3 rounded-full ${
                    isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : isAccessible
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isAccessible ? <Play className="w-6 h-6 fill-current" /> : <Lock className="w-6 h-6" />}
                  </div>
                  <div className="bg-slate-950 px-2.5 py-1 rounded text-xs font-mono font-bold text-slate-300 border border-slate-700">
                    #{island.globalIndex}
                  </div>
                </div>

                <div className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400 mb-1">
                  Pulau {island.islandIndex}
                </div>
                <h2 className={`font-serif font-bold text-base leading-snug line-clamp-3 mb-2 ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                  {island.title}
                </h2>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60">
                {isAccessible ? (
                  <Link
                    href={`/journey/island/${island.id}`}
                    className={`block w-full py-2 text-center text-xs font-bold rounded-lg transition-colors ${
                      isCompleted
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-900/30'
                    }`}
                  >
                    {isCompleted ? 'Sidang Ulang (3/3 Selesai)' : 'Mulai Sidang (3 Kasus)'}
                  </Link>
                ) : (
                  <div className="py-2 text-center text-xs text-slate-500 font-bold bg-slate-950/60 rounded-lg border border-slate-800">
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

