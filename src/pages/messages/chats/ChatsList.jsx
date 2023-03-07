import { connect } from "react-redux";
import ChatsItem from "./ChatsItem";

const ChatsListContainer = (props) => {
    let chats = props.chats.map((chat) => (
        <ChatsItem
            key={chat.id}
            userID={chat.id}
            userName={chat.name}
            userAvatar={chat.avatar}
            lastMessage={chat.lastMessage}
        />
    ));

    return <div className="h-full overflow-scroll">{chats}</div>;
}

const mapStateToProps = (state) => {
    return {
        chats: state.messagesPage.chats,
    };
};

const ChatsList = connect(mapStateToProps)(ChatsListContainer);

export default ChatsList;
