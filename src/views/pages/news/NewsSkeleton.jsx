export default function NewsSkeleton() {
    return (
        <>
            {
                Array(5).fill(0).map((item, index) => {
                    return (
                        <div
                            key={ `${index}-post-skeleton` }
                            className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
                            <div className='p-5'>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="animate-pulse flex-[0_0_auto] h-[40px] w-[40px] bg-slate-400 dark:bg-zinc-600 rounded-full"></div>
                                    <div className="animate-pulse h-[20px] w-[50%] md:w-[30%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                                </div>

                                <div className="mb-4">
                                    <div className="animate-pulse h-[20px] w-[65%] rounded-full bg-slate-400 dark:bg-zinc-600 mb-1"></div>
                                    <div className="animate-pulse h-[20px] w-full rounded-full bg-slate-400 dark:bg-zinc-600 mb-1"></div>
                                    <div className="animate-pulse h-[20px] w-full rounded-full bg-slate-400 dark:bg-zinc-600 mb-1"></div>
                                    <div className="animate-pulse h-[20px] w-full rounded-full bg-slate-400 dark:bg-zinc-600 mb-1"></div>
                                    <div className="animate-pulse h-[20px] w-full rounded-full bg-slate-400 dark:bg-zinc-600 mb-1"></div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="animate-pulse h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                                    <div className="animate-pulse h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                                    <div className="animate-pulse h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
