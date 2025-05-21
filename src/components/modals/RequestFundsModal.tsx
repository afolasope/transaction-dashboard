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
import { ChangeEvent, useState } from "react";

type RequestFundsModalProps = {
    onSubmit: (comments: string, file: File | null) => void;
    disabled?: boolean;
};

export default function RequestFundsModal({ onSubmit, disabled }: RequestFundsModalProps) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const handleSubmit = () => {
        if (comments.trim() || file) {
            onSubmit(comments, file);
            setOpen(false);
            setComments("");
            setFile(null);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='secondary' disabled={disabled}>
                    Request Funds
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-md'>
                <DialogHeader>
                    <DialogTitle>Request Funds</DialogTitle>
                    <DialogDescription>
                        Please provide comments and upload proof of work if available.
                    </DialogDescription>
                </DialogHeader>
                <Textarea
                    placeholder='Comments or details...'
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className='mb-4'
                    rows={4}
                />
                <input type='file' onChange={handleFileChange} className='mb-4' aria-label='Upload proof of work' />
                <DialogFooter>
                    <Button variant='outline' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={!comments.trim() && !file}>
                        Submit Request
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
