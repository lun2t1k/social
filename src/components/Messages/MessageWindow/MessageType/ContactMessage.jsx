export default function ContactMessage(props) {
    return (
        <div
            id={props.messageID}
            className="contactMessage w-full flex justify-start py-2"
        >
            <div className="max-w-[400px] bg-gray-200 rounded-3xl rounded-bl-none py-2 px-4">
                <span className="">{props.messageText}</span>
            </div>
        </div>
    );
}
