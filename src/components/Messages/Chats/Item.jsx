export default function Item() {
    return (
        <div className="px-2 py-3 border-b-2 last:border-b-0 flex items-center">
            <div className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden bg-slate-400 mr-3">
                <img src="" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col min-w-0">
                <span className="font-bold mb-1">User Name</span>
                <span className="text-gray-500 truncate">Last Message</span>
            </div>
        </div>
    );
}
