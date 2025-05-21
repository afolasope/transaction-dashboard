export type TransactionStatus = "pending" | "in_progress" | "completed";

export type Transaction = {
    id: string;
    projectTitle: string;
    client: string;
    freelancer: string;
    amount: number;
    currency: string;
    userRole: "client" | "freelancer";
    status: TransactionStatus;
    timestamps: {
        paymentMade?: string;
        workStarted?: string;
        workDelivered?: string;
        fundsReleased?: string;
        disputeRaised?: string;
    };
    isDisputed: boolean;
};

export type TransactionStats = {
    completed: number;
    disputed: number;
    inProgress: number;
};
