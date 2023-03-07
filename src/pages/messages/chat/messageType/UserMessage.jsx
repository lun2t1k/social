export default function UserMessage(props) {
    return (
        <div
            id={props.messageID}
            className="userMessage w-full flex justify-end py-2"
        >
            <div className="max-w-[400px] bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-3xl rounded-br-none py-3 px-4">
                <span className="text-white">{props.messageText}</span>
            </div>
        </div>
    );
}
