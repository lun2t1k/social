export default function UserInfo(props) {
    return (
        <div className="w-full pt-[140px] lg:pt-0 lg:pl-[230px]">
            <h2 className="block w-full mb-4 text-5xl">{props.name}</h2>
            <ul>
                <li>
                    <span className="text-xl text-gray-500">Birthday: </span>
                    <span className="text-xl">{props.birthday}</span>
                </li>
                <li>
                    <span className="text-xl text-gray-500">Location: </span>
                    <span className="text-xl">{props.location}</span>
                </li>
                <li>
                    <span className="text-xl text-gray-500">Education: </span>
                    <span className="text-xl">{props.education}</span>
                </li>
                <li>
                    <span className="text-xl text-gray-500">URL: </span>
                    <span className="text-xl">
                        <a
                            href={props.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="hover:text-purple-accent"
                        >
                            {props.site}
                        </a>
                    </span>
                </li>
            </ul>
        </div>
    );
}
