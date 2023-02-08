import { connect } from "react-redux";
import ChatsList from "./ChatsList";

const mapStateToProps = (state) => {
    return {
        chats: state.messagesPage.chats,
    };
};

const ChatsListContainer = connect(mapStateToProps)(ChatsList);

export default ChatsListContainer;
