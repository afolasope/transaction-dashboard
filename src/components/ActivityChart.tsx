"use client";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ActivityDataPoint {
    date: string;
    completed: number;
}

interface EscrowActivityChartProps {
    data: ActivityDataPoint[];
}

export default function ActivityChart({ data }: EscrowActivityChartProps) {
    const chartData = {
        labels: data.map((d) => d.date),
        datasets: [
            {
                label: "Completed Transactions",
                data: data.map((d) => d.completed),
                fill: false,
                borderColor: "#22c55e",
                backgroundColor: "#22c55e",
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "#4b5563",
                    font: { size: 13 },
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: { color: "#6b7280" },
                grid: { display: false },
            },
            y: {
                ticks: { color: "#6b7280", stepSize: 1 },
                grid: { borderDash: [4, 4], color: "#e5e7eb" },
                beginAtZero: true,
            },
        },
    };

    return (
        <Card className='w-full lg:max-w-lg mx-auto p-4 h-min shadow-sm border rounded-2xl bg-white dark:bg-zinc-900'>
            <CardHeader>
                <CardTitle className='text-lg sm:text-xl font-semibold'>Escrow Activity</CardTitle>
                <CardDescription className='text-sm text-muted-foreground'>
                    A summary of your completed escrow transactions over time.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='relative w-full' style={{ height: "300px" }}>
                    <Line data={chartData} options={chartOptions} />
                </div>
            </CardContent>
        </Card>
    );
}
