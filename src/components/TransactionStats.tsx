import { useTransactionStatsStore } from "@/store/useTransactionStatsStore";

const TransactionStats: React.FC = () => {
    const stats = useTransactionStatsStore((state) => state.stats);

    return (
        <div className='flex gap-4'>
            <div className='flex gap-2 items-center'>
                <span className='text-sm text-gray-500'>Completed:</span>
                <span className='text-sm font-semibold'>{stats.completed}</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span className='text-sm text-gray-500'>Disputed:</span>
                <span className='text-sm font-semibold'>{stats.disputed}</span>
            </div>
            <div className='flex gap-2 items-center'>
                <span className='text-sm text-gray-500'>In Progress:</span>
                <span className='text-sm font-semibold'>{stats.inProgress}</span>
            </div>
        </div>
    );
};

export default TransactionStats;
