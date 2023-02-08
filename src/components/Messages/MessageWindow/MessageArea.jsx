import ContactMessage from "./MessageType/ContactMessage";
import UserMessage from "./MessageType/UserMessage";

export default function MessageArea(props) {
    let messagesElements = props.messages.map((message) => {
        if (message.type === "contact") {
            return (
                <ContactMessage
                    key={message.id}
                    messageID={message.id}
                    messageText={message.text}
                />
            );
        } else {
            return (
                <UserMessage
                    key={message.id}
                    messageID={message.id}
                    messageText={message.text}
                />
            );
        }
    });

    return (
        <div className="flex flex-col flex-auto px-5 py-3 border-y-2 overflow-scroll">
            {messagesElements}
        </div>
    );
}
