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
      <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="flex-1 flex items-center justify-center">
          <section className="bg-slate-800/95 backdrop-blur-md p-8 rounded-2xl border-2 border-amber-500 shadow-2xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in max-w-2xl w-full">
            <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 mb-4 animate-bounce">
              <Trophy className="w-16 h-16" />
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-2">
              Pulau {islandMeta.islandIndex} Ditaklukkan!
            </h3>
            <p className="text-sm font-mono text-cyan-400 mb-4">{islandMeta.title}</p>
            <p className="text-slate-300 mb-6 max-w-md">
              Anda telah mengadili 3 perkara hukum dengan pertimbangan moral dan kepastian hukum yang berimbang.
            </p>

            {unlockedResult.newlyUnlockedLevel && (
              <div className="w-full mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-600/30 via-amber-500/20 to-amber-600/30 border border-amber-400 flex items-center justify-center gap-3 animate-pulse">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <span className="font-bold text-amber-300 text-base sm:text-lg">
                  LIGA BARU TERBUKA: Liga #{unlockedResult.newlyUnlockedLevel} Telah Terbuka!
                </span>
              </div>
            )}

            <div className="flex gap-4 mb-8">
              <div className="bg-slate-900 px-5 py-2.5 rounded-lg font-mono text-amber-400 border border-slate-700 text-lg font-bold">
                +100 XP
              </div>
              <div className="bg-slate-900 px-5 py-2.5 rounded-lg font-mono text-yellow-400 border border-slate-700 text-lg font-bold">
                +50 LexCoin
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              {unlockedResult.nextIslandId && (
                <Link
                  href={`/journey/island/${unlockedResult.nextIslandId}`}
                  className="px-6 py-3 bg-amber-500 text-slate-900 font-bold text-base rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-900/40 flex items-center justify-center gap-2"
                >
                  <span>Lanjut ke Pulau Berikutnya</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
              <Link
                href={`/journey/level/${levelId}`}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold text-base rounded-xl transition-colors"
              >
                Peta Gugusan Liga #{levelId}
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <header className="flex justify-between items-center mb-6 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href={`/journey/level/${levelId}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold text-sm sm:text-base">Kembali</span>
        </Link>
        <div className="text-center hidden sm:block">
          <span className="text-xs font-mono uppercase text-amber-400">Liga #{levelId} • Pulau {islandMeta.islandIndex}</span>
          <h2 className="text-sm font-bold text-slate-200 line-clamp-1">{islandMeta.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-slate-200 text-xs sm:text-sm font-bold bg-slate-900 px-3 py-1 rounded-md border border-slate-700">
            Kasus {currentIndex + 1} / {questions.length}
          </div>
          <div className="font-mono text-xs sm:text-sm bg-red-950/60 px-3 py-1 rounded text-red-400 border border-red-800 font-bold">
            {hp} HP
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full gap-5">
        
        {/* Case Info Panel */}
        <section className="bg-slate-800/95 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800">
              Perkara Pidana / Perdata #{islandMeta.globalIndex}.{currentIndex + 1}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif text-amber-400 font-bold mb-4">{currentCase.title}</h2>
          <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-700/70">
            <h3 className="font-bold text-xs font-mono uppercase text-slate-400">Fakta-Fakta Persidangan:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-200 text-sm sm:text-base leading-relaxed">
              {currentCase.facts.map((fact: string, idx: number) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Options Panel */}
        <section className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl flex-1 flex flex-col transition-all relative overflow-hidden">
          <h3 className="text-lg font-bold mb-4 text-amber-400 font-serif flex items-center gap-2">
            <Scale className="w-5 h-5" />
            <span>Pilihan Putusan Majelis Hakim:</span>
          </h3>
          <div className="flex-1 space-y-4 relative z-10">
            {currentCase.options.map((opt: any) => (
              <button 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedOption === opt.id 
                    ? 'border-amber-500 bg-amber-950/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                    : showFeedback ? 'border-slate-800 bg-slate-900/30 opacity-50' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-bold text-sm sm:text-base leading-snug">{opt.action}</span>
                    {selectedOption === opt.id && <CheckCircle2 className="text-amber-400 flex-shrink-0 mt-0.5" />}
                  </div>
                  {showFeedback && selectedOption === opt.id && (
                    <div className="mt-2 text-xs sm:text-sm text-amber-200 bg-amber-950/60 p-3 rounded-lg border border-amber-800 animate-in fade-in slide-in-from-top-2 leading-relaxed">
                      <span className="font-bold block mb-1 text-amber-400">Dampak & Konsekuensi Yuridis:</span>
                      {opt.consequence}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {!showFeedback ? (
            <button 
              onClick={handleConfirm}
              disabled={!selectedOption}
              className={`mt-6 py-3.5 rounded-xl font-bold text-base transition-all z-10 ${selectedOption ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
            >
              Ketuk Palu Sidang (Jatuhkan Putusan)
            </button>
          ) : (
            <button 
              onClick={handleNextQuestion}
              className="mt-6 py-3.5 rounded-xl font-bold text-base transition-all z-10 bg-cyan-600 text-white hover:bg-cyan-500 shadow-[0_0_15px_rgba(8,145,178,0.5)] animate-in fade-in zoom-in"
            >
              {currentIndex < questions.length - 1 ? 'Lanjut ke Kasus Berikutnya' : 'Selesaikan dan Catat Sidang Pulau'}
            </button>
          )}
        </section>

      </div>
    </main>
  );
}

