import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function DisputeModal({ onSubmit }: { onSubmit: (reason: string) => void }) {
    const [open, setOpen] = useState(false);
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        if (reason.trim()) {
            onSubmit(reason);
            setOpen(false);
            setReason("");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='destructive'>Raise Dispute</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>Raise a Dispute</DialogTitle>
                    <DialogDescription>Please briefly explain why you are raising this dispute.</DialogDescription>
                </DialogHeader>
                <Textarea
                    placeholder='Describe the issue here...'
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
                <DialogFooter>
                    <Button variant='outline' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Submit Dispute</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
