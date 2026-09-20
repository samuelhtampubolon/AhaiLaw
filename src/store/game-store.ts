import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  hp: number;
  xp: number;
  lexCoin: number;
  currentLevel: number;
  completedIslands: string[];
  unlockedLevels: number[];
  devModeUnlockAll: boolean;
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
  completeIsland: (islandId: string) => { newlyUnlockedLevel: number | null; nextIslandId: string | null };
  toggleDevModeUnlockAll: () => void;
  resetProgress: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      hp: 100,
      xp: 0,
      lexCoin: 0,
      currentLevel: 1,
      completedIslands: [],
      unlockedLevels: [1],
      devModeUnlockAll: false,
      alignmentScore: 0,
      radarKeadilan: 0,
      radarKepastian: 0,
      radarKemanfaatan: 0,

      decreaseHp: (amount) => set((state) => ({ hp: Math.max(0, state.hp - amount) })),
      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
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
      restoreHp: () => set({ hp: 100 }),
      levelUp: () => set((state) => ({ currentLevel: state.currentLevel + 1, hp: 100 })),

      completeIsland: (islandId: string) => {
        const state = get();
        const newCompleted = state.completedIslands.includes(islandId)
          ? state.completedIslands
          : [...state.completedIslands, islandId];

        const [lvlStr, islStr] = islandId.split('-');
        const lvl = parseInt(lvlStr, 10);
        const isl = parseInt(islStr, 10);

        // Check if all 10 islands in this level are completed
        let allLevelIslandsDone = true;
        for (let i = 1; i <= 10; i++) {
          if (!newCompleted.includes(`${lvl}-${i}`)) {
            allLevelIslandsDone = false;
            break;
          }
        }

        let newlyUnlockedLevel: number | null = null;
        let newUnlockedLevels = [...state.unlockedLevels];
        let newCurrentLevel = state.currentLevel;

        if (allLevelIslandsDone && lvl < 8) {
          const nextLvl = lvl + 1;
          if (!newUnlockedLevels.includes(nextLvl)) {
            newUnlockedLevels.push(nextLvl);
            newlyUnlockedLevel = nextLvl;
            newCurrentLevel = Math.max(newCurrentLevel, nextLvl);
          }
        }

        // Determine next island
        let nextIslandId: string | null = null;
        if (isl < 10) {
          nextIslandId = `${lvl}-${isl + 1}`;
        } else if (lvl < 8) {
          nextIslandId = `${lvl + 1}-1`;
        }

        set({
          completedIslands: newCompleted,
          unlockedLevels: newUnlockedLevels,
          currentLevel: newCurrentLevel,
          xp: state.xp + 100,
          lexCoin: state.lexCoin + 50,
          hp: 100, // Full heal upon island completion
        });

        return { newlyUnlockedLevel, nextIslandId };
      },

      toggleDevModeUnlockAll: () =>
        set((state) => ({
          devModeUnlockAll: !state.devModeUnlockAll,
          unlockedLevels: !state.devModeUnlockAll ? [1, 2, 3, 4, 5, 6, 7, 8] : [1],
        })),

      resetProgress: () =>
        set({
          hp: 100,
          xp: 0,
          lexCoin: 0,
          currentLevel: 1,
          completedIslands: [],
          unlockedLevels: [1],
          devModeUnlockAll: false,
          alignmentScore: 0,
          radarKeadilan: 0,
          radarKepastian: 0,
          radarKemanfaatan: 0,
        }),
    }),
    {
      name: 'ahailaw-game-storage',
    }
  )
);

