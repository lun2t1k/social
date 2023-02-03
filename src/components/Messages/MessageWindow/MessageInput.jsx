import { createRef } from "react";
import {
    sendNewMessage,
    updateNewMessageText,
} from "../../../redux/messagesPageReducer";

export default function MessageInput(props) {
    let newMessageInput = createRef();

    let sendMessage = (event) => {
        event.preventDefault();
        props.dispatch(sendNewMessage());
        newMessageInput.current.focus();
    };

    let updateMessageText = () => {
        let messageText = newMessageInput.current.value;
        props.dispatch(updateNewMessageText(messageText));
    };

    return (
        <form onSubmit={sendMessage} className="w-full flex items-end p-5">
            <input
                type="text"
                name="newMessageText"
                id="newMessageText"
                placeholder="Message"
                ref={newMessageInput}
                value={props.newMessageText}
                onChange={updateMessageText}
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
