import {create} from "zustand";

type MacroKey = "protein" | "fats" | "carbs" | "calories";
type Macro = { goal: number; actual: number };

interface NutritionState {
  protein: Macro;
  fats: Macro;
  carbs: Macro;
  calories: Macro;

  setGoal: (key: MacroKey, value: number) => void;
  setActual: (key: MacroKey, value: number) => void;
  setAll: (newState: Partial<NutritionState>) => void;
}

const defaultState = {
  protein: { goal: 200, actual: 0 },
  fats: { goal: 60, actual: 0 },
  carbs: { goal: 200, actual: 0 },
  calories: { goal: 2000, actual: 0 },
};

const useNutritionStore = create<NutritionState>((set) => ({
  ...defaultState,
  

  setGoal: (key, value) =>
    set((state) => ({
      [key]: { ...state[key], goal: value },
    })),

  setActual: (key, value) =>
    set((state) => ({
      [key]: { ...state[key], actual: value },
    })),
      setAll: (newState: Partial<NutritionState>) =>
    set((state) => ({
      ...state,
      ...newState,
    }))

}));

export default useNutritionStore;