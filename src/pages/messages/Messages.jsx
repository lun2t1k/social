import React from "react";
import Chat from "./chat/Chat";
import ChatsList from "./chats/ChatsList";
import ChatsSearch from "./chats/ChatsSearch";

class Messages extends React.Component {
    componentDidMount() {
        document.body.classList.add("overflow-hidden");
    }
    componentWillUnmount() {
        document.body.classList.remove("overflow-hidden");
    }
    render() {
        return (
            <div className="flex h-[75vh] lg:h-[80vh] overflow-hidden rounded-3xl bg-white dark:bg-zinc-900">
                <div className="w-fit lg:min-w-[250px] lg:max-w-[250px]">
                    <ChatsSearch />
                    <ChatsList />
                </div>
                <div className="flex h-full w-full flex-col border-l dark:border-l-zinc-800">
                    <Chat />
                </div>
            </div>
        );
    }
}

export default Messages;
