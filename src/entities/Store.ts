import page from "@/app/page";
import { create } from "zustand";

interface Store {
    page: number;
    setPage: (newPage: number) => void;
}

export const useStore = create<Store>((set) => ({
    page: 1,
    setPage: (newPage) => {
        setTimeout(() => {
            set({ page: newPage });
        }, 1000);
    },
}))