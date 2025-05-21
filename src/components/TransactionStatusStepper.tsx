"use client";

import { Progress } from "@/components/ui/progress";

const steps = ["pending", "in_progress", "completed"];

const getStepIndex = (status: string) => steps.indexOf(status);

export default function TransactionStatusStepper({ status }: { status: string }) {
    const activeIndex = getStepIndex(status);
    const progressPercentage = ((activeIndex + 1) / steps.length) * 100;

    return (
        <div className='mt-4'>
            <Progress value={progressPercentage} className='h-2 bg-muted' />

            {/* Step Labels */}
            <div className='flex justify-between text-xs mt-2'>
                {steps.map((step, index) => (
                    <span
                        key={step}
                        className={`capitalize ${
                            index === activeIndex ? "font-medium text-blue-600" : "text-muted-foreground"
                        }`}
                    >
                        {step.replace("_", " ")}
                    </span>
                ))}
            </div>
        </div>
    );
}
