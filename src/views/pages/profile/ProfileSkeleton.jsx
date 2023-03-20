import styles from './Profile.module.css'

export default function ProfileSkeleton() {
    return (
        <>
            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
                <div className="animate-pulse h-[250px] w-full bg-slate-400 dark:bg-zinc-600"></div>
                <div className="relative flex p-5">
                    <div className={ styles.userAvatar + " absolute -top-[70px] md:!left-5 border-[5px] border-white dark:border-zinc-900 bg-white dark:bg-zinc-900 rounded-full" }>
                        <div className="animate-pulse h-[180px] w-[180px] bg-slate-400 dark:bg-zinc-600 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-center md:items-start w-full pt-[110px] md:pt-0 md:pl-[200px]">
                        <div className="animate-pulse mb-2 h-[32px] w-[70%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="animate-pulse mb-4 h-[20px] w-[50%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="flex justify-center md:justify-start w-full gap-2">
                            <div className="animate-pulse h-[20px] w-[15%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                            <div className="animate-pulse h-[20px] w-[30%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                            <div className="animate-pulse h-[20px] w-[25%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                            <div className="animate-pulse h-[20px] w-[20%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
                <div className="p-5 flex flex-auto gap-3">
                    <div className='animate-pulse flex-[1_0_auto] h-[40px] w-[40px] bg-slate-400 dark:bg-zinc-600 rounded-full'></div>
                    <div className='animate-pulse h-[66px] w-full rounded-xl rounded-tl-none border dark:border-zinc-700 bg-transparent'></div>
                </div>
            </div>

            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
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

            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
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

            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
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
        </>
    )
}
