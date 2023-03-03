import { createRef } from "react";

export default function MessageInput(props) {
    let newMessageInput = createRef();

    let onSubmitNewMessage = (event) => {
        event.preventDefault();
        props.sendNewMessage();
        newMessageInput.current.focus();
    };

    let onChangeNewMessageText = () => {
        let messageText = newMessageInput.current.value;
        props.updateNewMessageText(messageText);
    };

    return (
        <form
            onSubmit={onSubmitNewMessage}
            className="w-full flex items-end p-5"
        >
            <input
                type="text"
                name="newMessageText"
                id="newMessageText"
                placeholder="Message"
                autoComplete="off"
                ref={newMessageInput}
                value={props.newMessageText}
                onChange={onChangeNewMessageText}
                className="p-3 border-2 rounded-xl flex-auto mr-3 focus:border-violet-500"
                required
            />
            <button
                type="submit"
                className="px-6 py-3 h-fit rounded-xl text-xl text-white bg-violet-500 transition-all ease-in hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                Send
            </button>
        </form>
    );
}
