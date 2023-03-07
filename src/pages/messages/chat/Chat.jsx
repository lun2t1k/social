import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function Chat(props) {
    return (
        <>
            <ChatHeader />
            <ChatMessages />
            <ChatInput />
        </>
    );
}
