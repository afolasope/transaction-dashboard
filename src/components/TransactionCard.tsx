"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { disputeTransaction, releaseFunds, requestFunds } from "@/lib/api"; // Ensure this exists and is imported correctly
import { formatCurrency, getBadgeClass } from "@/lib/utils";
import { useTransactionStatsStore } from "@/store/useTransactionStatsStore";
import { Transaction } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import TransactionStatusStepper from "./TransactionStatusStepper";
import DisputeModal from "./modals/DIsputeModal";
import RequestFundsModal from "./modals/RequestFundsModal";

export default function TransactionCard({ transaction }: { transaction: Transaction }) {
    const setStats = useTransactionStatsStore((state) => state.setStats);
    const currentStats = useTransactionStatsStore.getState().stats;

    const { client, freelancer, amount, status, isDisputed, userRole, currency } = transaction;

    const queryClient = useQueryClient();

    const { mutate: releaseFundsMutation, isPending } = useMutation({
        mutationFn: () => releaseFunds(transaction.id, "completed"),
        onSuccess: () => {
            Swal.fire("Funds released!", "", "success");
            setStats({
                ...currentStats,
                completed: (currentStats.completed || 0) + 1,
            });
        },
        onError: () => {
            Swal.fire("Error", "Failed to release funds.", "error");
        },
    });

    const { mutate: raiseDisputeMutation, isPending: isRaisingDispute } = useMutation({
        mutationFn: () => disputeTransaction({ id: transaction.id, reason: "" }),
        onSuccess: async () => {
            await Swal.fire("Dispute raised!", "", "success");

            setStats({
                ...currentStats,
                disputed: (currentStats.disputed || 0) + 1,
            });
        },
        onError: async () => {
            await Swal.fire("Error", "Failed to raise dispute.", "error");
        },
    });

    const { mutate: requestFundsMutation, isPending: isRequestingFunds } = useMutation({
        mutationFn: () => requestFunds(transaction.id),
        onSuccess: () => {
            Swal.fire("Funds requested!", "", "success");
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
        },
        onError: () => {
            Swal.fire("Error", "Failed to request funds.", "error");
        },
    });

    const handleReleaseFunds = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to release the funds?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, release it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                releaseFundsMutation();
            }
        });
    };

    const canTakeAction = !isDisputed && status !== "completed";

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg'>Project: {transaction.projectTitle}</CardTitle>
                <div className='flex flex-row justify-between items-start'>
                    <div>
                        <p className='text-sm text-muted-foreground'>
                            Client:{" "}
                            {userRole === "client" ? (
                                <span className='bg-blue-600 text-white font-semibold text-xs px-1 rounded uppercase ml-1 select-none'>
                                    YOU
                                </span>
                            ) : (
                                client
                            )}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                            Freelancer:{" "}
                            {userRole === "freelancer" ? (
                                <span className='bg-blue-600 text-white font-semibold text-xs px-1 rounded uppercase ml-1 select-none'>
                                    YOU
                                </span>
                            ) : (
                                freelancer
                            )}
                        </p>
                    </div>
                    <div className='text-right'>
                        <Badge className={`capitalize border ${getBadgeClass(status, isDisputed)}`}>
                            {isDisputed ? "Disputed" : status.replace("_", " ")}
                        </Badge>

                        <p className='text-xl font-bold text-blue-600'>{formatCurrency(amount, currency)}</p>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <TransactionStatusStepper status={status} />

                {canTakeAction && (
                    <div className='mt-4 flex gap-2 flex-wrap'>
                        {userRole === "client" && (
                            <Button variant='default' disabled={isPending} onClick={handleReleaseFunds}>
                                {isPending ? "Releasing..." : "Release Funds"}
                            </Button>
                        )}
                        {userRole === "freelancer" && (
                            <RequestFundsModal
                                disabled={isRequestingFunds}
                                onSubmit={(comments, file) => {
                                    console.log(comments, file);
                                    requestFundsMutation();
                                }}
                            />
                        )}

                        <DisputeModal disabled={isRaisingDispute} onSubmit={() => raiseDisputeMutation()} />
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
