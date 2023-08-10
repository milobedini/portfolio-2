import { create } from 'zustand'

export const useWorkStore = create((set) => ({
  inViewWork: null,
  setInViewWork: (work) => set({ inViewWork: work }),
  fullscreenWork: null,
  setFullscreenWork: (work) => {
    set({ fullscreenWork: work })
    if (work !== null) {
      set({ lastFullscreenWork: work })
    }
  },
  lastFullscreenWork: null,
  setLastFullscreenWork: (work) => set({ lastFullscreenWork: work }),
}))
