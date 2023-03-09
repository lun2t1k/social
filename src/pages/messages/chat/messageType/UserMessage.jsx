export default function UserMessage(props) {
    return (
        <div
            id={props.messageID}
            className="userMessage flex w-full justify-end py-2"
        >
            <div className="max-w-[250px] rounded-2xl rounded-br-none bg-gradient-to-tr from-violet-400 to-fuchsia-400 py-2 px-3 text-xs sm:max-w-[400px]">
                <span className="text-white">{props.messageText}</span>
            </div>
        </div>
    );
}
