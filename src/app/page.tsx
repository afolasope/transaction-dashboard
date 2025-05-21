"use client";

import ActivityChart from "@/components/ActivityChart";
import TransactionCard from "@/components/TransactionCard";
import TransactionStats from "@/components/TransactionStats";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchTransactions } from "@/lib/api";
import { activityData } from "@/lib/mockData";
import { useTransactionStatsStore } from "@/store/useTransactionStatsStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Dashboard() {
    const setStats = useTransactionStatsStore((state) => state.setStats);
    const { data, isLoading, isError } = useQuery({
        queryKey: ["transactions"],
        queryFn: fetchTransactions,
    });

    useEffect(() => {
        if (data) {
            const completed = data.filter((tx) => tx.status === "completed").length;
            const disputed = data.filter((tx) => tx.isDisputed === true).length;
            const inProgress = data.filter((tx) => tx.status === "in_progress").length;

            setStats({ completed, disputed, inProgress });
        }
    }, [data]);

    return (
        <div className='px-4'>
            {isLoading ? (
                <div>
                    <div className='grid gap-4 p-4'>
                        <Skeleton className='h-56 w-full' />
                        <Skeleton className='h-56 w-full' />
                        <Skeleton className='h-56 w-full' />
                    </div>
                </div>
            ) : isError || !data ? (
                <p className='text-red-600 p-4'>Something went wrong.</p>
            ) : (
                <div className='flex flex-col gap-4 py-8'>
                    <h1 className='text-3xl'>Active Transactions</h1>
                    <div className='px-4 w-full flex-1'>
                        <TransactionStats />
                    </div>
                    {data.length > 0 ? (
                        <div className='flex flex-col gap-4 lg:flex-row w-full'>
                            <div className='grid gap-4 flex-1'>
                                {data.map((transaction) => (
                                    <TransactionCard key={transaction.id} transaction={transaction} />
                                ))}
                            </div>
                            <ActivityChart data={activityData} />
                        </div>
                    ) : (
                        <div className=''>
                            <h2 className='text-2xl font-semibold mb-4'>No transactions yet.</h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
