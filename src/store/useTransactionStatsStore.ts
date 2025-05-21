import { TransactionStats } from "@/types";
import { create } from "zustand";

type TransactionStatsStore = {
    stats: TransactionStats;
    setStats: (newStats: Partial<TransactionStats>) => void;
    resetStats: () => void;
};

export const useTransactionStatsStore = create<TransactionStatsStore>((set) => ({
    stats: {
        completed: 0,
        disputed: 0,
        inProgress: 0,
    },
    setStats: (newStats) =>
        set((state) => ({
            stats: { ...state.stats, ...newStats },
        })),
    resetStats: () =>
        set({
            stats: {
                completed: 0,
                disputed: 0,
                inProgress: 0,
            },
        }),
}));
