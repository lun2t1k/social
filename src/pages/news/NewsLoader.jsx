export default function NewsLoader(props) {
    let newsLoaderSkeletons = [];
    for (let i = 0; i < 5; i++) {
        newsLoaderSkeletons.push(i);
    }

    return (
        <>
            {newsLoaderSkeletons.map((skeleton) => {
                return (
                    <div
                        key={skeleton}
                        className="mb-5 w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-5"
                    >
                        <div className="flex animate-pulse flex-col">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="h-[40px] w-[40px] overflow-hidden rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                                <div className="h-3 w-60 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                            </div>
                            <div className="flex flex-col mb-4">
                                <div className="mb-2 h-2 w-60 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                                <div className="h-2 w-40 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                                <div className="h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                                <div className="h-[36px] w-[36px] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
