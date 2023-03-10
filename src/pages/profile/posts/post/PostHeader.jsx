import UserDefaultAvatar from "../../../../components/UserDefaultAvatar"

export default function PostHeader(props) {
    return (
        <div className="mb-4 flex items-center">
            { props.userPhoto ? (
                <div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-slate-400">
                    <img
                        src={ props.userPhoto }
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : (
                <UserDefaultAvatar />
            ) }
            <span className="ml-3 font-semibold capitalize w-full">{ props.userName }</span>
        </div>
    )
}
