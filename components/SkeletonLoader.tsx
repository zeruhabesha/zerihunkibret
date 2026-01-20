export default function SkeletonLoader() {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-8 bg-blue-100 dark:bg-slate-800 rounded w-3/4"></div>
            <div className="space-y-3">
                <div className="h-4 bg-blue-100 dark:bg-slate-800 rounded"></div>
                <div className="h-4 bg-blue-100 dark:bg-slate-800 rounded w-5/6"></div>
                <div className="h-4 bg-blue-100 dark:bg-slate-800 rounded w-4/6"></div>
            </div>
        </div>
    )
}
