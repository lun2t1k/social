import { connect } from "react-redux";
import ChatsItem from "./ChatsItem";

const ChatsListContainer = (props) => {
    return (
        <div className="h-full overflow-scroll pb-[62px]">
            {props.chats.map((chat) => (
                <ChatsItem
                    key={chat.id}
                    userID={chat.id}
                    userName={chat.name}
                    userAvatar={chat.avatar}
                    lastMessage={chat.lastMessage}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        chats: state.messagesPage.chats,
    };
};

const ChatsList = connect(mapStateToProps)(ChatsListContainer);

export default ChatsList;
