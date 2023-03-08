export default function ContactMessage(props) {
    return (
        <div
            id={props.messageID}
            className="contactMessage flex w-full justify-start py-2"
        >
            <div className="max-w-[250px] rounded-2xl rounded-bl-none bg-gray-200 py-2 px-3 text-xs sm:max-w-[400px]">
                <span className="">{props.messageText}</span>
            </div>
        </div>
    );
}
