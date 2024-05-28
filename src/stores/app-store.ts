import { createStore } from "zustand/vanilla";

export type AppState = {
  level: number;
};

export type AppActions = {
  setLevel: (level: number) => void;
};

export const initAppStore = (): AppState => ({
  level: 0,
});

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  level: 0,
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setLevel: (level) => set({ level }),
  }));
};
