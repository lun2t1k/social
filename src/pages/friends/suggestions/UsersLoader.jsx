export default function UsersLoader(props) {
    let usersLoaderSkeletons = [];
    for (let i = 0; i < 5; i++) {
        usersLoaderSkeletons.push(i);
    }

    return (
        <>
            {usersLoaderSkeletons.map((skeleton) => {
                return (
                    <div
                        key={skeleton}
                        className="w-full border-b-2 py-2 last:border-b-0 last:pb-0"
                    >
                        <div className="animate-pulse flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-[40px] h-[40px] bg-slate-400 rounded-full overflow-hidden mr-3"></div>
                                <div className="w-20 h-3 bg-slate-400 rounded"></div>
                            </div>
                            <div className="w-[56px] h-[28px] bg-slate-400 rounded-xl text-white"></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
