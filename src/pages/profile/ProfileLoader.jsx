export default function ProfileLoader(props) {
    return (
        <div className="w-full animate-pulse overflow-hidden rounded-3xl bg-white dark:bg-zinc-900">
            <div className="h-[200px] w-full bg-slate-400 dark:bg-zinc-600"></div>
            <div className="relative flex p-5">
                <div className="absolute -top-[70px]">
                    <div className="flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                </div>
                <div className="w-full pt-[140px] lg:pt-0 lg:pl-[230px]">
                    <div className="mb-2 h-[30px] w-[50%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                    <div className="mb-4 h-[20px] w-[35%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>

                    <div className="mb-2 flex gap-2">
                        <div className="h-[15px] w-[15%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="h-[15px] w-[20%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                    </div>
                    <div className="mb-2 flex gap-2">
                        <div className="h-[15px] w-[15%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="h-[15px] w-[22%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                    </div>
                    <div className="mb-2 flex gap-2">
                        <div className="h-[15px] w-[18%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="h-[15px] w-[25%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                    </div>
                    <div className="mb-2 flex gap-2">
                        <div className="h-[15px] w-[10%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                        <div className="h-[15px] w-[20%] rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
