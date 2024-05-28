import { createStore } from "zustand/vanilla";

export type AppState = {
  level: number;
  useCases: { name: string; isSelected: boolean; value: string }[];
};

export type AppActions = {
  setLevel: (level: number) => void;
  selectUseCase: (name: string) => void;
};

//Initial state
export const initAppStore = (): AppState => ({
  level: 0,
  useCases: [
    { name: "Cart Abandoned", value: "cart-abandoned", isSelected: false },
    { name: "Welcome", isSelected: false, value: "welcome" },
    { name: "Winback", isSelected: false, value: "winback" },
    {
      name: "Nurture subscriber",
      isSelected: false,
      value: "nurture-subscriber",
    },
    { name: "Post purchase", isSelected: false, value: "post-purchase" },
    { name: "Shopify", isSelected: false, value: "shopify" },
  ],
});

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  level: 0,
  useCases: [],
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setLevel: (level) => set({ level }),
    selectUseCase: (value: string) => {
      console.log("value", value);
      set((state) => ({
        useCases: state.useCases.map((useCase) =>
          useCase.name === value
            ? { ...useCase, isSelected: !useCase.isSelected }
            : useCase,
        ),
      }));
    },
  }));
};
