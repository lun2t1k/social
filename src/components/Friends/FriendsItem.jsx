export default function FriendsItem(props) {
    return (
        <li className="flex items-center border-b-2 last:border-b-0 py-5 last:pb-0">
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden mr-3">
                <img
                    src={props.avatar}
                    alt={props.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h5 className="font-bold mb-1">{props.name}</h5>
                <p>{props.status}</p>
            </div>
        </li>
    );
}
