import { create } from "zustand";

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => Promise<void>;
  decrementAsync: () => Promise<void>;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  incrementAsync: async () => {
    await sleep(1000);
    set((state) => ({ count: state.count + 1 }));
  },
  decrementAsync: async () => {
    await sleep(1000);
    set((state) => ({ count: state.count - 1 }));
  },
}));
