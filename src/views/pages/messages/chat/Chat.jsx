import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

export default function Chat({ activeChat }) {
    return (
        <>
            <ChatHeader userName={ activeChat.name } userAvatar={ activeChat.avatar } />
            <ChatMessages />
            <ChatInput />
        </>
    )
}
