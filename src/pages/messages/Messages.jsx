import React from 'react';
import Chat from './chat/Chat';
import ChatsNav from "./chats/ChatsList";

class Messages extends React.Component {
    componentDidMount() {
        document.body.classList.add('overflow-hidden');
    }
    componentWillUnmount() {
        document.body.classList.remove('overflow-hidden');
    }
    render() {
        return (
            <div className="w-full flex bg-white rounded-3xl overflow-hidden min-h-[80vh] max-h-[80vh]">
                <div className="w-1/4">
                    <ChatsNav />
                </div>
                <div className="w-3/4">
                    <div className="border-l-2 h-full flex flex-col">
                        <Chat />
                    </div>
                </div>
            </div>
        );
    }
}

export default Messages;
