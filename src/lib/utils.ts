import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getBadgeClass(status: string, isDisputed = false): string {
    if (isDisputed) return "text-red-600 border-red-600 bg-red-100";

    switch (status) {
        case "pending":
            return "text-yellow-600 border-yellow-600 bg-yellow-100";
        case "in_progress":
            return "text-blue-600 border-blue-600 bg-blue-100";
        case "completed":
            return "text-green-600 border-green-600 bg-green-100";
        default:
            return "text-muted border border-gray-300";
    }
}

export const formatCurrency = (amount: number | bigint, currency: string) => {
    if (!currency) {
        console.warn("Currency is required for formatting.");
        return amount;
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(amount);
};
