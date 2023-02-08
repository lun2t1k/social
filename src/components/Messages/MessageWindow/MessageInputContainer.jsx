import { connect } from "react-redux";
import {
    sendNewMessage,
    updateNewMessageText,
} from "../../../redux/messagesPageReducer";
import MessageInput from "./MessageInput";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageText(messageText));
        },
        sendNewMessage: () => {
            dispatch(sendNewMessage());
        },
    };
};

const MessageInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageInput);

export default MessageInputContainer;
