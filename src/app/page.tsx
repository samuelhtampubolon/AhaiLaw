"use client";

import { useGameStore } from "@/store/game-store";
import { ObjectivityRadar } from "@/components/objectivity-radar";
import { Heart, Coins, ShieldAlert, GraduationCap, Map, Scale, Trophy, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { hp, xp, lexCoin, currentLevel, completedIslands, radarKeadilan, radarKepastian, radarKemanfaatan } = useGameStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-6 md:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      {/* Header Bar - Responsive for Smartphones */}
      <header className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-800/85 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-600/80 shadow-2xl mb-6">
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 shadow-inner">
              <Scale className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-serif tracking-wider text-amber-400 leading-tight">AhaiLaw</h1>
              <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Liga Hukum Objektif</p>
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 border border-slate-700 text-xs font-mono font-bold text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>{completedIslands.length}/80 Pulau</span>
          </div>
        </div>
        
        {/* Status Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto text-xs sm:text-sm font-mono">
          <div className="flex items-center gap-1.5 bg-red-950/60 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-red-800/60 text-red-300 font-bold shadow-sm">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>{hp}/100 HP</span>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-950/60 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-amber-800/60 text-amber-300 font-bold shadow-sm">
            <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{lexCoin} LexCoin</span>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-950/60 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-blue-800/60 text-blue-300 font-bold shadow-sm">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Liga #{currentLevel} ({xp} XP)</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 flex-1">
        
        {/* Left Col: Hero Card & Actions */}
        <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
          <section className="bg-slate-800/90 backdrop-blur-md p-5 sm:p-8 rounded-2xl border border-slate-600 shadow-2xl flex-1 flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulasi Sidang Dilema Peradilan</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif text-amber-400 font-bold mb-3 sm:mb-4 leading-tight">
              Selamat Datang di Liga Hukum AhaiLaw
            </h2>
            <p className="text-slate-300 mb-6 sm:mb-8 max-w-xl text-sm sm:text-base leading-relaxed">
              Jelajahi 8 Liga Hukum, taklukkan 80 pulau kasus, dan putuskan 240 perkara yurisprudensi nyata dengan menyeimbangkan asas kepastian, keadilan, dan kemanfaatan.
            </p>
            
            <Link 
              href="/journey" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 active:scale-95 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] text-base sm:text-lg"
            >
              <Map className="w-5 h-5 mr-2" />
              <span>Mulai Perjalanan Sidang</span>
            </Link>
          </section>

          {/* Age Warning Card */}
          <div className="bg-red-950/40 border border-red-800/60 p-4 rounded-xl flex items-start gap-3 shadow-md">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-300 text-xs sm:text-sm mb-0.5">Peringatan Usia 19+ (Kedewasaan Pola Pikir)</h3>
              <p className="text-xs text-red-200/80 leading-relaxed">
                Beberapa modul (seperti Hukum Pidana dan HAM) memuat studi kasus sensitif yang menuntut pertimbangan etis matang dan kebijaksanaan hukum.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Radar Chart */}
        <div className="bg-slate-800/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-600 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-400 mb-1 text-center">
              Radar Objektivitas Hakim
            </h3>
            <p className="text-xs text-slate-400 text-center mb-4">
              Keseimbangan Nilai Hukum (Formula Radbruch)
            </p>
          </div>
          
          <div className="flex-1 flex items-center justify-center my-2">
            <ObjectivityRadar 
              keadilan={radarKeadilan} 
              kepastian={radarKepastian} 
              kemanfaatan={radarKemanfaatan} 
            />
          </div>
          
          <div className="mt-3 text-xs text-slate-400 text-center bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/60 leading-normal">
            Putusan Anda akan memengaruhi tiga sumbu utama: <span className="text-amber-300 font-bold">Keadilan</span>, <span className="text-amber-300 font-bold">Kepastian</span>, dan <span className="text-amber-300 font-bold">Kemanfaatan</span>.
          </div>
        </div>

      </div>
    </main>
  );
}
