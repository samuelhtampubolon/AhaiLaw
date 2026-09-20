"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useGameStore } from "@/store/game-store";
import { caseData } from "@/data/cases";

export default function DilemmaEngine() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const currentCase = (caseData as any)[id || "1"] || caseData["1"];

  const { hp, decreaseHp, addXp, addLexCoin, updateRadar, updateAlignment } = useGameStore();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optId: string) => {
    setSelectedOption(optId);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    const option = currentCase.options.find((o: any) => o.id === selectedOption);
    if (option) {
      updateRadar(option.keadilan, option.kepastian, option.kemanfaatan);
      updateAlignment(option.alignmentShift);
      addXp(50);
      addLexCoin(20);
      setShowResult(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <header className="flex justify-between items-center mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href="/journey" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Kembali ke Peta</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="font-mono bg-red-950/50 px-3 py-1 rounded text-red-400 border border-red-800">{hp} HP</div>
          <Scale className="w-6 h-6 text-amber-500" />
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full gap-6">
        
        {/* Case Info Panel */}
        <section className="bg-slate-800/95 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl">
          <h2 className="text-2xl font-serif text-amber-500 font-bold mb-4">{currentCase.title}</h2>
          <div className="space-y-3">
            <h3 className="font-bold text-slate-300">Fakta Persidangan:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              {currentCase.facts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Options Panel */}
        {!showResult ? (
          <section className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-6 text-amber-400">Putusan Hakim:</h3>
            <div className="flex-1 space-y-4">
              {currentCase.options.map(opt => (
                <button 
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${selectedOption === opt.id ? 'border-amber-500 bg-amber-950/30' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{opt.action}</span>
                    {selectedOption === opt.id && <CheckCircle2 className="text-amber-500" />}
                  </div>
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleConfirm}
              disabled={!selectedOption}
              className={`mt-6 py-4 rounded-xl font-bold text-lg transition-all ${selectedOption ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
            >
              Ketuk Palu Sidang (Pilih Putusan)
            </button>
          </section>
        ) : (
          <section className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-amber-600 shadow-2xl flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
            <Scale className="w-16 h-16 text-amber-500 mb-4" />
            <h3 className="text-3xl font-serif font-bold text-amber-400 mb-4">Sidang Selesai</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {currentCase.options.find(o => o.id === selectedOption)?.consequence}
            </p>
            <div className="flex gap-4 mb-8">
              <div className="bg-slate-900 px-4 py-2 rounded-lg font-mono text-amber-400 border border-slate-700">+50 XP</div>
              <div className="bg-slate-900 px-4 py-2 rounded-lg font-mono text-yellow-400 border border-slate-700">+20 LexCoin</div>
            </div>
            <Link href="/journey" className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors">
              Lanjutkan Perjalanan
            </Link>
          </section>
        )}

      </div>
    </main>
  );
}
