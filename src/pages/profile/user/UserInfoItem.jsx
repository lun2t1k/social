export default function UserInfoItem(props) {
    return (
        <li className="flex items-center gap-1 text-zinc-500">
            { props.icon }
            { props.info }
        </li>
    )
}
