import ChatsItem from "./ChatsItem";

export default function ChatsList(props) {
    let chatsList = props.chats.map((chat) => (
        <ChatsItem
            key={chat.id}
            userID={chat.id}
            userName={chat.name}
            userAvatar={chat.avatar}
            lastMessage={chat.lastMessage}
        />
    ));

    return <div className="h-full overflow-scroll">{chatsList}</div>;
}
