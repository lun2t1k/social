import ChatsListContainer from "./Chats/ChatsListContainer";
import MessageHeader from "./MessageWindow/MessageHeader";
import MessageAreaContainer from "./MessageWindow/MessageAreaContainer";
import MessageInputContainer from "./MessageWindow/MessageInputContainer";

export default function Messages(props) {
    return (
        <div className="w-full flex bg-white rounded-3xl overflow-hidden min-h-[80vh] max-h-[80vh]">
            <div className="w-1/4">
                <ChatsListContainer />
            </div>
            <div className="w-3/4">
                <div className="border-l-2 h-full flex flex-col min-h-[700px]">
                    <MessageHeader />
                    <MessageAreaContainer />
                    <MessageInputContainer />
                </div>
            </div>
        </div>
    );
}
