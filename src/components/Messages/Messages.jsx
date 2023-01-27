import List from "./Chats/List";
import MessageHeader from "./MessageWindow/MessageHeader";
import MessageInput from "./MessageWindow/MessageInput";
import MessageArea from "./MessageWindow/MessageArea";

export default function Messages() {
    return (
        <div className="w-full flex p-5 bg-white rounded-3xl overflow-hidden min-h-[80vh] max-h-[80vh]">
            <div className="w-1/4">
                <List />
            </div>
            <div className="w-3/4">
                <div className="py-5 border-2 h-full ml-5 rounded-xl flex flex-col min-h-[700px]">
                    <MessageHeader />
                    <MessageArea />
                    <MessageInput />
                </div>
            </div>
        </div>
    );
}
