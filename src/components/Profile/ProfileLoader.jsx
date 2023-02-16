export default function ProfileLoader(props) {
    return (
        <div className="animate-pulse w-full bg-white rounded-3xl overflow-hidden">
            <div className="w-full h-[200px] bg-slate-400"></div>
            <div className="flex p-5 relative">
                <div className="absolute -top-[70px]">
                    <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full overflow-hidden bg-slate-400"></div>
                </div>
                <div className="w-full pt-[140px] lg:pt-0 lg:pl-[230px]">
                    <div className="w-[50%] h-[30px] bg-slate-400 rounded-full mb-2"></div>
                    <div className="w-[35%] h-[20px] bg-slate-400 rounded-full mb-4"></div>

                    <div className="flex gap-2 mb-2">
                        <div className="w-[15%] h-[15px] bg-slate-400 rounded-full"></div>
                        <div className="w-[20%] h-[15px] bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <div className="w-[15%] h-[15px] bg-slate-400 rounded-full"></div>
                        <div className="w-[22%] h-[15px] bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <div className="w-[18%] h-[15px] bg-slate-400 rounded-full"></div>
                        <div className="w-[25%] h-[15px] bg-slate-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 mb-2">
                        <div className="w-[10%] h-[15px] bg-slate-400 rounded-full"></div>
                        <div className="w-[20%] h-[15px] bg-slate-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
