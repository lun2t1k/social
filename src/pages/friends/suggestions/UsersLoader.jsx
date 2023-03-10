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
                        className="w-full border-b py-2 last:border-b-0 last:pb-0 dark:border-zinc-800"
                    >
                        <div className="flex animate-pulse items-center justify-between">
                            <div className="flex items-center">
                                <div className="dark:bg-zink-600 mr-2 h-[40px] w-[40px] overflow-hidden rounded-full bg-slate-400"></div>
                                <div className="dark:bg-zink-600 h-3 w-20 rounded bg-slate-400"></div>
                            </div>
                            <div className="dark:bg-zink-600 h-[24px] w-[56px] rounded-xl bg-slate-400"></div>
                        </div>
                    </div>
                )
            }) }
        </>
    )
}
