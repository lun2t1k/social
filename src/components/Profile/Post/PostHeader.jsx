export default function PostHeader(props) {
    return (
        <div className="flex items-center mb-4">
            <div className="w-[60px] h-[60px] mr-3">
                <img
                    src={props.userAvatar}
                    alt=""
                    className="w-full h-full rounded-full bg-slate-400"
                />
            </div>
            <span className="text-xl">{props.userName}</span>
        </div>
    );
}
