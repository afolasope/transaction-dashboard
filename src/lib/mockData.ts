export type Transaction = {
    id: string;
    projectTitle: string;
    client: string;
    freelancer: string;
    amount: number;
    currency: string;
    userRole: "client" | "freelancer";
    status: "pending" | "in_progress" | "completed";
    isDisputed: boolean;
    timestamps: {
        paymentMade?: string;
        workStarted?: string;
        workDelivered?: string;
        fundsReleased?: string;
        disputeRaised?: string;
    };
};

export const mockTransactions: Transaction[] = [
    {
        id: "tx001",
        projectTitle: "Website Redesign for Startup",
        client: "Acme Corp",
        freelancer: "Jane Doe",
        amount: 1200,
        currency: "USD",
        userRole: "client",
        status: "in_progress",
        isDisputed: false,
        timestamps: {
            paymentMade: "2025-04-20T10:30:00Z",
            workStarted: "2025-04-22T08:00:00Z",
        },
    },
    {
        id: "tx002",
        projectTitle: "Logo Design",
        client: "John Smith",
        freelancer: "Alex Freelance",
        amount: 500,
        currency: "USD",
        userRole: "freelancer",
        status: "pending",
        isDisputed: false,
        timestamps: {
            paymentMade: "2025-04-15T14:00:00Z",
            workStarted: "2025-04-16T09:00:00Z",
            workDelivered: "2025-04-25T18:30:00Z",
        },
    },
    {
        id: "tx003",
        projectTitle: "Mobile App Development",
        client: "Tech Innovations",
        freelancer: "Sam Developer",
        amount: 3000,
        currency: "USD",
        userRole: "client",
        status: "completed",
        isDisputed: false,
        timestamps: {},
    },
    {
        id: "tx004",
        projectTitle: "SEO Optimization",
        client: "Green Gardens",
        freelancer: "Emily SEO",
        amount: 800,
        currency: "USD",
        userRole: "freelancer",
        status: "pending",
        isDisputed: false,
        timestamps: {
            paymentMade: "2025-03-30T11:00:00Z",
            workStarted: "2025-04-01T10:00:00Z",
            workDelivered: "2025-04-10T15:00:00Z",
            fundsReleased: "2025-04-12T12:00:00Z",
        },
    },
    {
        id: "tx005",
        projectTitle: "Content Writing",
        client: "Bright Media",
        freelancer: "Lara Writer",
        amount: 350,
        currency: "USD",
        userRole: "client",
        status: "in_progress",
        isDisputed: false,
        timestamps: {
            paymentMade: "2025-04-01T09:00:00Z",
            workStarted: "2025-04-02T09:30:00Z",
            workDelivered: "2025-04-08T17:00:00Z",
            disputeRaised: "2025-04-09T08:00:00Z",
        },
    },
];

export const activityData = [
    { date: "2025-04-15", completed: 2 },
    { date: "2025-04-20", completed: 5 },
    { date: "2025-04-25", completed: 3 },
    { date: "2025-05-01", completed: 6 },
];
