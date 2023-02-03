import { createRef } from "react";
import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../redux/messagesPageReducer";

export default function MessageInput(props) {
    let newMessageInput = createRef();

    let sendNewMessage = (event) => {
        event.preventDefault();
        props.dispatch(sendNewMessageActionCreator());
        newMessageInput.current.focus();
    };

    let updateNewMessageText = () => {
        let messageText = newMessageInput.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messageText));
    };

    return (
        <form onSubmit={sendNewMessage} className="w-full flex items-end p-5">
            <input
                type="text"
                name="newMessageText"
                id="newMessageText"
                placeholder="Message"
                ref={newMessageInput}
                value={props.newMessageText}
                onChange={updateNewMessageText}
                className="p-3 border-2 rounded-xl flex-auto mr-3 focus:border-purple-accent"
                required
            />
            <button
                type="submit"
                className="px-6 py-3 h-fit rounded-xl text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                Send
            </button>
        </form>
    );
}
