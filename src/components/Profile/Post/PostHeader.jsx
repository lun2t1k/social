export default function PostHeader(props) {
    return (
        <div className="flex items-center mb-4">
            <div className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden bg-slate-400 mr-3">
                <img src={props.userAvatar} alt="" className="w-full h-full" />
            </div>
            <span className="text-xl">{props.userName}</span>
        </div>
    );
}
