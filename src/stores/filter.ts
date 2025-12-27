import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Cycle = 'Today' | 'Week' | 'Month' | 'Quarter' | 'Year' | 'Custom Date'

type FilterStore = {
  cycle: Cycle;
  setCycle: (value: Cycle) => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      cycle: "Week",
      setCycle: (value) => set({ cycle: value }),
    }),
    {
      name: "dashboard-cycle", // clave en localStorage
    }
  )
);
