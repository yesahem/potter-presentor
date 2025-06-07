import { Slide } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


 interface SlideState {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}
 
export const slideStore = create(
  persist<SlideState>(
    (set, get) => ({
      slides: [],
      setSlides: (slides: Slide[]) => set({ slides }),
    }),
    {
      name: "slide-storage",
    }
  )
);
