export default function UsersLoader() {
    let usersLoaderSkeletons = []
    for (let i = 0; i < 5; i++) {
        usersLoaderSkeletons.push(i)
    }

    return (
        <>
            { usersLoaderSkeletons.map(skeleton => {
                return (
                    <div
                        key={ skeleton }
                        className="w-full border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800"
                    >
                        <div className="flex animate-pulse">
                            <div className="flex">
                                <div className="mr-3 h-[70px] w-[70px] overflow-hidden rounded-full bg-slate-400 dark:bg-zinc-600"></div>
                                <div>
                                    <div>
                                        <div className="mb-2 h-3 w-60 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                                        <div className="mb-4 h-2 w-40 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                                    </div>
                                    <div>
                                        <div className="h-2 w-20 max-w-xs rounded bg-slate-400 dark:bg-zinc-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) }
        </>
    )
}
