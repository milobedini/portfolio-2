import { create } from 'zustand'

export const useWorkStore = create((set) => ({
  inViewWork: null,
  setInViewWork: (work) => set({ inViewWork: work }),
}))
