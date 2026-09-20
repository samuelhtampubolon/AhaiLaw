"use client";

import { useGameStore } from "@/store/game-store";
import { ObjectivityRadar } from "@/components/objectivity-radar";
import { Heart, Coins, ShieldAlert, GraduationCap, Map, Scale } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { hp, xp, lexCoin, currentLevel, radarKeadilan, radarKepastian, radarKemanfaatan } = useGameStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      {/* Header Info */}
      <header className="flex flex-wrap justify-between items-center gap-4 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl mb-8">
        <div className="flex items-center gap-3">
          <Scale className="w-8 h-8 text-amber-500" />
          <h1 className="text-2xl font-bold font-serif tracking-wider text-amber-400">AhaiLaw</h1>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm sm:text-base font-mono">
          <div className="flex items-center gap-2 bg-red-950/50 px-3 py-1.5 rounded-full border border-red-800/50">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="font-bold text-red-100">{hp}/100 HP</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-950/50 px-3 py-1.5 rounded-full border border-amber-800/50">
            <Coins className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-amber-100">{lexCoin} LexCoin</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-950/50 px-3 py-1.5 rounded-full border border-blue-800/50">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-blue-100">Level {currentLevel} ({xp} XP)</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        
        {/* Left Col: Menu & Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 shadow-2xl flex-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-amber-500 font-bold mb-4">Selamat Datang di Liga Hukum</h2>
            <p className="text-slate-300 mb-8 max-w-xl text-lg">
              Sebuah perjalanan mengeksplorasi ilmu hukum secara objektif, melalui simulasi dilema, kasus nyata, dan kuis Sokratik.
            </p>
            
            <Link href="/journey" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-amber-500 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
              <Map className="w-5 h-5 mr-2" />
              Mulai Journey
            </Link>
          </section>

          {/* Age Warning Card */}
          <div className="bg-red-950/40 border border-red-800/50 p-4 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-400 mb-1">Peringatan Usia 19+</h3>
              <p className="text-sm text-red-200/80">Beberapa modul (seperti Hukum Pidana atau Hak Asasi) memuat studi kasus sensitif yang memerlukan kedewasaan pola pikir. Kebijaksanaan pengguna sangat disarankan.</p>
            </div>
          </div>
        </div>

        {/* Right Col: Radar Chart */}
        <div className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 shadow-2xl flex flex-col">
          <h3 className="text-xl font-serif font-bold text-amber-500 mb-6 text-center">Objectivity Meter</h3>
          <div className="flex-1 flex items-center justify-center">
            <ObjectivityRadar 
              keadilan={radarKeadilan} 
              kepastian={radarKepastian} 
              kemanfaatan={radarKemanfaatan} 
            />
          </div>
          <div className="mt-6 text-sm text-slate-400 text-center bg-slate-900/50 p-3 rounded-lg">
            Sumbu ini mengukur kecenderungan putusan Anda dalam menyelesaikan dilema (Formula Radbruch).
          </div>
        </div>

      </div>
    </main>
  );
}
