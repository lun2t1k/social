import ChatsList from "./Chats/ChatsList";
import MessageHeader from "./MessageWindow/MessageHeader";
import MessageInput from "./MessageWindow/MessageInput";
import MessageArea from "./MessageWindow/MessageArea";

export default function Messages(props) {
    return (
        <div className="w-full flex bg-white rounded-3xl overflow-hidden min-h-[80vh] max-h-[80vh]">
            <div className="w-1/4">
                <ChatsList chatsData={props.state.chats} />
            </div>
            <div className="w-3/4">
                <div className="border-l-2 h-full flex flex-col min-h-[700px]">
                    <MessageHeader />
                    <MessageArea messagesData={props.state.messages} />
                    <MessageInput
                        dispatch={props.dispatch}
                        newMessageText={props.state.newMessageText}
                    />
                </div>
            </div>
        </div>
    );
}
