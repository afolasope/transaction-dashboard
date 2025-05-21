import { mockTransactions } from "@/lib/mockData";
type TransactionStatus = "pending" | "in_progress" | "completed";
type Transaction = {
    id: string;
    projectTitle: string;
    client: string;
    freelancer: string;
    amount: number;
    currency: string;
    userRole: "client" | "freelancer";
    status: "pending" | "in_progress" | "completed";
    isDisputed: boolean;
    reason?: "";
    timestamps: {
        paymentMade?: string;
        workStarted?: string;
        workDelivered?: string;
        fundsReleased?: string;
        disputeRaised?: string;
    };
};

export const fetchTransactions = async (): Promise<Transaction[]> => {
    return new Promise((resolve) => {
        console.log("Fetching transactions...");
        setTimeout(() => resolve(mockTransactions), 1000);
    });
};

export const releaseFunds = async (transactionId: string, newStatus: TransactionStatus): Promise<Transaction> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const transaction = mockTransactions.find((tx) => tx.id === transactionId);
            if (transaction) {
                transaction.status = newStatus;
                resolve(transaction);
            } else {
                throw new Error("Transaction not found");
            }
        }, 1000);
    });
};

export const disputeTransaction = async ({ id, reason }: { id: string; reason: string }): Promise<Transaction> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const transaction = mockTransactions.find((tx) => tx.id === id);
            if (transaction) {
                transaction.isDisputed = true;
                resolve(transaction);
            } else {
                throw new Error("Transaction not found");
            }
        }, 1000);
    });
};
export const requestFunds = async (transactionId: string): Promise<Transaction> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const transaction = mockTransactions.find((tx) => tx.id === transactionId);
            if (transaction) {
                transaction.status = "pending";
                resolve(transaction);
            } else {
                throw new Error("Transaction not found");
            }
        }, 1000);
    });
};
