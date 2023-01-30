import ContactMessage from "./MessageType/ContactMessage";
import UserMessage from "./MessageType/UserMessage";

export default function MessageArea(props) {
    let messagesElements = props.messagesData.map((message) => {
        if (message.messageType === "contact") {
            return (
                <ContactMessage key={message.id} text={message.messageText} />
            );
        } else {
            return <UserMessage key={message.id} text={message.messageText} />;
        }
    });

    return (
        <div className="flex flex-col flex-auto px-5 py-3 border-y-2 overflow-scroll">
            {messagesElements}
        </div>
    );
}
