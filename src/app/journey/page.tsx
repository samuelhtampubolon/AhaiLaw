"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Map as MapIcon, Lock, Unlock } from "lucide-react";
import { useGameStore } from "@/store/game-store";

// Dummy data for the islands based on the specs
const islands = [
  { id: 1, name: "Pulau Fondasi Filsafat", levelReq: 1, modules: "MOD-001 - MOD-040", unlocked: true },
  { id: 2, name: "Pulau Asas dan Penalaran", levelReq: 2, modules: "MOD-041 - MOD-080", unlocked: false },
  { id: 3, name: "Pulau Perdata Klasik", levelReq: 3, modules: "MOD-081 - MOD-130", unlocked: false },
  { id: 4, name: "Pulau Perdata Bisnis Modern", levelReq: 3, modules: "MOD-131 - MOD-160", unlocked: false },
  { id: 5, name: "Pulau Pidana dan Keadilan", levelReq: 4, modules: "MOD-161 - MOD-220", unlocked: false },
  { id: 6, name: "Pulau Acara dan Pembuktian", levelReq: 4, modules: "MOD-221 - MOD-260", unlocked: false },
  { id: 7, name: "Pulau Tata Negara & Admin", levelReq: 5, modules: "MOD-261 - MOD-310", unlocked: false },
  { id: 8, name: "Pulau Digital dan AI Law", levelReq: 5, modules: "MOD-311 - MOD-350", unlocked: false },
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
          <h1 className="text-2xl font-bold font-serif text-amber-400">Peta Perjalanan</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {islands.map((island) => {
          const isAccessible = currentLevel >= island.levelReq || island.unlocked;

          return (
            <div 
              key={island.id} 
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${isAccessible ? 'bg-slate-800/90 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:scale-105 cursor-pointer' : 'bg-slate-900/80 border-slate-700 opacity-70 grayscale'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-full ${isAccessible ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
                  {isAccessible ? <Unlock className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                </div>
                <span className="text-xs font-mono font-bold bg-slate-950 px-2 py-1 rounded text-slate-400">Level {island.levelReq}+</span>
              </div>
              
              <h2 className={`text-xl font-bold font-serif mb-2 ${isAccessible ? 'text-slate-100' : 'text-slate-500'}`}>
                {island.name}
              </h2>
              <p className="text-sm text-slate-400 mb-6">{island.modules}</p>
              
              {isAccessible ? (
                <Link href={`/journey/${island.id}`} className="block w-full py-2 text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors">
                  Jelajahi Pulau
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
