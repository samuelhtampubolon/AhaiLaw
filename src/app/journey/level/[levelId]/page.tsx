"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Anchor, Lock, Trophy } from "lucide-react";
import { useGameStore } from "@/store/game-store";

// Dummy generator for 10 islands per level
const generateIslandsForLevel = (levelId: number) => {
  const islands = [];
  for (let i = 1; i <= 10; i++) {
    islands.push({
      id: `${levelId}-${i}`, // e.g. 1-1, 1-2
      globalIndex: (levelId - 1) * 10 + i,
      name: `Pulau Modul ${i}`,
      reqLevel: levelId,
    });
  }
  return islands;
};

export default function LevelPage() {
  const params = useParams();
  const levelId = parseInt(Array.isArray(params.levelId) ? params.levelId[0] : params.levelId || "1", 10);
  const islands = generateIslandsForLevel(levelId);
  const { currentLevel } = useGameStore();

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      <header className="flex justify-between items-center mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href="/journey" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Kembali ke Peta Liga</span>
        </Link>
        <div className="flex items-center gap-2">
          <Anchor className="w-6 h-6 text-amber-500" />
          <h1 className="text-2xl font-bold font-serif text-amber-400">Gugusan Pulau (Level {levelId})</h1>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {islands.map((island) => {
          // As a dummy rule, the user can access all islands in a level if they've reached that level
          const isAccessible = currentLevel >= island.reqLevel;

          return (
            <Link 
              key={island.id} 
              href={isAccessible ? `/journey/island/${island.id}` : '#'}
              className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${isAccessible ? 'bg-slate-800/90 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-105 cursor-pointer hover:border-cyan-400' : 'bg-slate-900/80 border-slate-700 opacity-70 grayscale cursor-not-allowed'}`}
            >
              <div className={`p-4 rounded-full mb-3 ${isAccessible ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                {isAccessible ? <Trophy className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
              </div>
              
              <h2 className={`text-center font-bold font-serif ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                {island.name}
              </h2>
              <p className="text-xs text-slate-400 mt-1">Total: 3 Kasus</p>
              
              <div className="absolute top-2 right-2 bg-slate-950 px-2 py-1 rounded text-xs font-mono font-bold text-slate-400 border border-slate-700">
                #{island.globalIndex}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
