"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useGameStore } from "@/store/game-store";
import { getQuestionsForIsland } from "@/data/cases";

export default function DilemmaEngine() {
  const params = useParams();
  const router = useRouter();
  const islandId = Array.isArray(params.islandId) ? params.islandId[0] : params.islandId || "1-1";
  const levelId = islandId.split('-')[0];
  
  // State for sequential questions
  const [questions] = useState(() => getQuestionsForIsland(islandId));
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Store actions
  const { hp, addXp, addLexCoin, updateRadar, updateAlignment } = useGameStore();
  
  // UI States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isIslandCompleted, setIsIslandCompleted] = useState(false);

  const currentCase = questions[currentIndex];

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
      // Island Completed
      addXp(150); // Total XP for completing 3 questions
      addLexCoin(50);
      setIsIslandCompleted(true);
    }
  };

  if (isIslandCompleted) {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <div className="flex-1 flex items-center justify-center">
          <section className="bg-slate-800/90 backdrop-blur-md p-8 rounded-2xl border border-amber-600 shadow-2xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in max-w-2xl w-full">
            <Scale className="w-20 h-20 text-amber-500 mb-6" />
            <h3 className="text-4xl font-serif font-bold text-amber-400 mb-4">Pulau Ditaklukkan!</h3>
            <p className="text-xl text-slate-300 mb-8">
              Anda telah menyelesaikan 3 kasus dengan bijaksana di pulau ini.
            </p>
            <div className="flex gap-6 mb-10">
              <div className="bg-slate-900 px-6 py-3 rounded-lg font-mono text-amber-400 border border-slate-700 text-xl font-bold">+150 XP</div>
              <div className="bg-slate-900 px-6 py-3 rounded-lg font-mono text-yellow-400 border border-slate-700 text-xl font-bold">+50 LexCoin</div>
            </div>
            <Link href={`/journey/level/${levelId}`} className="px-8 py-4 bg-amber-500 text-slate-900 font-bold text-lg rounded-full hover:bg-amber-400 transition-colors">
              Kembali ke Peta Gugusan
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8" style={{ backgroundImage: "url('/courtroom-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <header className="flex justify-between items-center mb-8 bg-slate-800/80 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-xl">
        <Link href={`/journey/level/${levelId}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-bold">Batal (Kembali)</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="text-slate-300 font-bold bg-slate-900 px-3 py-1 rounded-md border border-slate-700">
            Kasus {currentIndex + 1} / 3
          </div>
          <div className="font-mono bg-red-950/50 px-3 py-1 rounded text-red-400 border border-red-800">{hp} HP</div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full gap-6">
        
        {/* Case Info Panel */}
        <section className="bg-slate-800/95 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl transition-all">
          <h2 className="text-2xl font-serif text-amber-500 font-bold mb-4">{currentCase.title}</h2>
          <div className="space-y-3">
            <h3 className="font-bold text-slate-300">Fakta Persidangan:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              {currentCase.facts.map((fact: string, idx: number) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Options Panel */}
        <section className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-600 shadow-2xl flex-1 flex flex-col transition-all relative overflow-hidden">
          <h3 className="text-xl font-bold mb-6 text-amber-400">Putusan Hakim:</h3>
          <div className="flex-1 space-y-4 relative z-10">
            {currentCase.options.map((opt: any) => (
              <button 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedOption === opt.id 
                    ? 'border-amber-500 bg-amber-950/30' 
                    : showFeedback ? 'border-slate-800 bg-slate-900/30 opacity-50' : 'border-slate-700 bg-slate-900/50 hover:border-slate-500'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{opt.action}</span>
                    {selectedOption === opt.id && <CheckCircle2 className="text-amber-500" />}
                  </div>
                  {showFeedback && selectedOption === opt.id && (
                    <div className="mt-2 text-sm text-amber-300 bg-amber-950/50 p-3 rounded-lg border border-amber-900 animate-in fade-in slide-in-from-top-2">
                      <span className="font-bold block mb-1">Konsekuensi:</span>
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
              className={`mt-6 py-4 rounded-xl font-bold text-lg transition-all z-10 ${selectedOption ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
            >
              Ketuk Palu Sidang (Pilih Putusan)
            </button>
          ) : (
            <button 
              onClick={handleNextQuestion}
              className="mt-6 py-4 rounded-xl font-bold text-lg transition-all z-10 bg-cyan-600 text-slate-100 hover:bg-cyan-500 shadow-[0_0_15px_rgba(8,145,178,0.5)] animate-in fade-in zoom-in"
            >
              {currentIndex < questions.length - 1 ? 'Kasus Selanjutnya' : 'Akhiri Sidang Pulau'}
            </button>
          )}
        </section>

      </div>
    </main>
  );
}
