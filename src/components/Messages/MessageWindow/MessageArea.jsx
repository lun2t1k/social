import ContactMessage from "./MessageType/ContactMessage";
import UserMessage from "./MessageType/UserMessage";

export default function MessageArea() {
    let messagesData = [
        {
            id: 1,
            messageType: "contact",
            messageText: "Lorem ipsum",
        },
        {
            id: 2,
            messageType: "contact",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
        },
        {
            id: 3,
            messageType: "user",
            messageText: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            id: 4,
            messageType: "contact",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 5,
            messageType: "user",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
        {
            id: 6,
            messageType: "contact",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
        },
        {
            id: 7,
            messageType: "user",
            messageText: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            id: 8,
            messageType: "Contact",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 9,
            messageType: "user",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis. Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
        {
            id: 10,
            messageType: "contact",
            messageText: "Lorem ipsum",
        },
        {
            id: 11,
            messageType: "user",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui odit unde corporis.",
        },
        {
            id: 12,
            messageType: "contact",
            messageText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
            id: 13,
            messageType: "user",
            messageText:
                "Perspiciatis culpa, magnam corrupti obcaecati repellendus quidem velit voluptatum iure, deserunt cupiditate.",
        },
    ];

    let messagesElements = messagesData.map((message) => {
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
