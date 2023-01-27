export default function MessageHeader() {
    return (
        <div className="border-b-2 flex items-center justify-between pb-5 px-5">
            <span className="text-lg">Back</span>
            <span className="text-2xl">User Name</span>
            <div className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden bg-slate-400">
                <img src="" alt="" className="w-full h-full" />
            </div>
        </div>
    );
}
