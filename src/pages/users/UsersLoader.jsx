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
                        className="w-full border-b-2 py-5 last:border-b-0 last:pb-0"
                    >
                        <div className="animate-pulse flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-[70px] h-[70px] bg-slate-400 rounded-full overflow-hidden mr-3"></div>
                                <div>
                                    <div className="w-60 h-2 bg-slate-400 rounded max-w-xs mb-2"></div>
                                    <div className="w-40 h-2 bg-slate-400 rounded max-w-xs"></div>
                                </div>
                            </div>
                            <div className="w-[68px] h-[40px] bg-slate-400 rounded-xl text-white"></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
