import { connect } from "react-redux";
import MessageArea from "./MessageArea";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
    };
};

const MessageAreaContainer = connect(mapStateToProps)(MessageArea);

export default MessageAreaContainer;
