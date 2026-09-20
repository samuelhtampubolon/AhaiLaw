"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Scale, CheckCircle2, ArrowRight, Trophy, Sparkles } from "lucide-react";
import { useGameStore } from "@/store/game-store";
import { getQuestionsForIsland } from "@/data/cases";
import { getIslandMeta } from "@/data/islands-data";

export default function DilemmaEngine() {
  const params = useParams();
  const router = useRouter();
  const islandId = Array.isArray(params.islandId) ? params.islandId[0] : params.islandId || "1-1";
  const levelId = islandId.split('-')[0];
  const islandMeta = getIslandMeta(islandId);
  
  // State for sequential questions
  const [questions] = useState(() => getQuestionsForIsland(islandId));
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Store actions
  const { hp, updateRadar, updateAlignment, completeIsland } = useGameStore();
  
  // UI States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isIslandCompleted, setIsIslandCompleted] = useState(false);
  const [unlockedResult, setUnlockedResult] = useState<{ newlyUnlockedLevel: number | null; nextIslandId: string | null }>({
    newlyUnlockedLevel: null,
    nextIslandId: null,
  });

  const currentCase = questions[currentIndex] || questions[0];

  const handleSelect = (optId: string) => {
    if (!showFeedback) {
      setSelectedOption(optId);
    }
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    const option = currentCase.options.find((o: any) => o.id === selectedOption);
    if (option) {
      updateRadar(option.keadilan, option.kepastian, option.kemanfaatan);
      updateAlignment(option.alignmentShift);
      setShowFeedback(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      // Complete island and trigger progression
      const result = completeIsland(islandId);
      setUnlockedResult(result);
      setIsIslandCompleted(true);
    }
  };

  if (isIslandCompleted) {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-6 md:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="flex-1 flex items-center justify-center py-4">
          <section className="bg-slate-800/95 backdrop-blur-md p-5 sm:p-8 rounded-2xl border-2 border-amber-500 shadow-2xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in max-w-xl w-full">
            <div className="p-3 sm:p-4 rounded-2xl bg-amber-500/20 text-amber-400 mb-3 sm:mb-4 animate-bounce">
              <Trophy className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-400 mb-1 leading-snug">
              Pulau {islandMeta.islandIndex} Ditaklukkan!
            </h3>
            <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-3 px-2">{islandMeta.title}</p>
            <p className="text-xs sm:text-sm text-slate-300 mb-5 max-w-md leading-relaxed px-2">
              Anda telah mengadili 3 perkara hukum di pulau ini dengan pertimbangan nurani moral dan kepastian undang-undang.
            </p>

            {unlockedResult.newlyUnlockedLevel && (
              <div className="w-full mb-5 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-amber-600/30 via-amber-500/20 to-amber-600/30 border border-amber-400 flex items-center justify-center gap-2.5 animate-pulse">
                <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-bold text-amber-300 text-xs sm:text-sm">
                  LIGA BARU TERBUKA: Liga #{unlockedResult.newlyUnlockedLevel} Telah Terbuka!
                </span>
              </div>
            )}

            <div className="flex gap-3 mb-6">
              <div className="bg-slate-900 px-4 py-2 rounded-xl font-mono text-amber-400 border border-slate-700 text-sm sm:text-base font-bold">
                +100 XP
              </div>
              <div className="bg-slate-900 px-4 py-2 rounded-xl font-mono text-yellow-400 border border-slate-700 text-sm sm:text-base font-bold">
                +50 LexCoin
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full justify-center">
              {unlockedResult.nextIslandId && (
                <Link
                  href={`/journey/island/${unlockedResult.nextIslandId}`}
                  className="w-full sm:w-auto px-5 py-3 bg-amber-500 text-slate-900 font-bold text-sm rounded-xl hover:bg-amber-400 active:scale-98 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Lanjut ke Pulau Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <Link
                href={`/journey/level/${levelId}`}
                className="w-full sm:w-auto px-5 py-3 bg-slate-700 hover:bg-slate-600 active:scale-98 text-slate-100 font-bold text-sm rounded-xl transition-all text-center"
              >
                Kembali ke Gugusan Liga #{levelId}
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-6 md:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      
      {/* Responsive Header for Mobile */}
      <header className="flex justify-between items-center mb-4 sm:mb-6 bg-slate-800/85 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-600/80 shadow-xl">
        <Link href={`/journey/level/${levelId}`} className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-300 hover:text-amber-400 transition-colors p-1">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Kembali</span>
        </Link>
        <div className="text-center px-2">
          <span className="text-[10px] sm:text-xs font-mono uppercase text-amber-400 font-bold block">Liga #{levelId} • Pulau {islandMeta.islandIndex}</span>
          <h2 className="text-xs sm:text-sm font-bold text-slate-200 line-clamp-1 max-w-[200px] sm:max-w-md">{islandMeta.title}</h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-slate-200 text-[11px] sm:text-xs font-bold bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 font-mono">
            {currentIndex + 1}/3
          </div>
          <div className="font-mono text-[11px] sm:text-xs bg-red-950/60 px-2.5 py-1 rounded-lg text-red-400 border border-red-800 font-bold">
            {hp} HP
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full gap-4 sm:gap-5 pb-4">
        
        {/* Case Info Panel */}
        <section className="bg-slate-800/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-600/80 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
              Kasus #{islandMeta.globalIndex}.{currentIndex + 1}
            </span>
          </div>
          <h2 className="text-base sm:text-xl font-serif text-amber-400 font-bold mb-3 leading-snug">{currentCase.title}</h2>
          <div className="space-y-2.5 bg-slate-900/70 p-3.5 sm:p-4 rounded-xl border border-slate-700/70">
            <h3 className="font-bold text-[11px] font-mono uppercase text-slate-400 tracking-wider">Fakta-Fakta Persidangan:</h3>
            <ul className="list-disc pl-4 space-y-1.5 text-slate-200 text-xs sm:text-sm leading-relaxed">
              {currentCase.facts.map((fact: string, idx: number) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Options Panel */}
        <section className="bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-slate-600/80 shadow-xl flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 text-amber-400 font-serif flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Putusan Majelis Hakim:</span>
            </h3>
            
            <div className="space-y-3">
              {currentCase.options.map((opt: any) => (
                <button 
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  disabled={showFeedback}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all duration-200 active:scale-98 ${
                    selectedOption === opt.id 
                      ? 'border-amber-500 bg-amber-950/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                      : showFeedback ? 'border-slate-800 bg-slate-900/30 opacity-50' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2.5">
                      <span className="font-bold text-xs sm:text-sm leading-snug">{opt.action}</span>
                      {selectedOption === opt.id && <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />}
                    </div>
                    {showFeedback && selectedOption === opt.id && (
                      <div className="mt-1.5 text-xs text-amber-200 bg-amber-950/60 p-2.5 rounded-lg border border-amber-800/80 animate-in fade-in slide-in-from-top-1 leading-relaxed">
                        <span className="font-bold block mb-0.5 text-amber-400">Pertimbangan & Akibat Yuridis:</span>
                        {opt.consequence}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            {!showFeedback ? (
              <button 
                onClick={handleConfirm}
                disabled={!selectedOption}
                className={`w-full py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md active:scale-98 ${
                  selectedOption ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-amber-950/50' : 'bg-slate-700/60 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                Ketuk Palu Sidang (Jatuhkan Putusan)
              </button>
            ) : (
              <button 
                onClick={handleNextQuestion}
                className="w-full py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-950/50 active:scale-98 animate-in fade-in zoom-in"
              >
                {currentIndex < questions.length - 1 ? 'Lanjut ke Kasus Berikutnya' : 'Selesaikan dan Catat Sidang'}
              </button>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
