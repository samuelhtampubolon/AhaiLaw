import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  hp: number;
  xp: number;
  lexCoin: number;
  currentLevel: number;
  alignmentScore: number;
  radarKeadilan: number;
  radarKepastian: number;
  radarKemanfaatan: number;
  // Actions
  decreaseHp: (amount: number) => void;
  addXp: (amount: number) => void;
  addLexCoin: (amount: number) => void;
  updateRadar: (keadilan: number, kepastian: number, kemanfaatan: number) => void;
  updateAlignment: (shift: number) => void;
  restoreHp: () => void;
  levelUp: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      hp: 100,
      xp: 0,
      lexCoin: 0,
      currentLevel: 1,
      alignmentScore: 0,
      radarKeadilan: 0,
      radarKepastian: 0,
      radarKemanfaatan: 0,

      decreaseHp: (amount) => set((state) => ({ hp: Math.max(0, state.hp - amount) })),
      addXp: (amount) => set((state) => {
        const newXp = state.xp + amount;
        let newLevel = state.currentLevel;
        
        // Simple XP Thresholds for Levels:
        if (newXp >= 500) newLevel = 5;
        else if (newXp >= 250) newLevel = 4;
        else if (newXp >= 100) newLevel = 3;
        else if (newXp >= 50) newLevel = 2;
        else newLevel = 1;

        // Restore HP if leveled up
        const newHp = newLevel > state.currentLevel ? 100 : state.hp;

        return { xp: newXp, currentLevel: newLevel, hp: newHp };
      }),
      addLexCoin: (amount) => set((state) => ({ lexCoin: state.lexCoin + amount })),
      updateRadar: (keadilan, kepastian, kemanfaatan) =>
        set((state) => ({
          radarKeadilan: Math.max(0, Math.min(100, state.radarKeadilan + keadilan)),
          radarKepastian: Math.max(0, Math.min(100, state.radarKepastian + kepastian)),
          radarKemanfaatan: Math.max(0, Math.min(100, state.radarKemanfaatan + kemanfaatan)),
        })),
      updateAlignment: (shift) =>
        set((state) => ({
          alignmentScore: Math.max(-100, Math.min(100, state.alignmentScore + shift)),
        })),
      restoreHp: () => set({ hp: 100 }), // Safepoint per level
      levelUp: () => set((state) => ({ currentLevel: state.currentLevel + 1, hp: 100 })),
    }),
    {
      name: 'ahailaw-game-storage',
    }
  )
);
