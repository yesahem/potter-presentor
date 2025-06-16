import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type page = "create" | "creative-ai" | "create-scratch"

interface PromptStore {
    page: page;
    setPage: (page: page) => void;
}

export const promptStore = create<PromptStore>()(persist((set) => ({
    page: "create",
    setPage: (page: page) => set({ page }),
}), {
    name: "prompt-store",
}));