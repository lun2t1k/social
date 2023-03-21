import { connect } from 'react-redux'
import ContactMessage from './messageType/ContactMessage'
import UserMessage from './messageType/UserMessage'

const ChatsMessagesContainer = props => {
    let messages = props.messages.map(message => {
        if (message.type === 'contact') {
            return (
                <ContactMessage
                    key={message.id}
                    messageID={message.id}
                    messageText={message.text}
                />
            )
        } else {
            return (
                <UserMessage
                    key={message.id}
                    messageID={message.id}
                    messageText={message.text}
                />
            )
        }
    })

    return (
        <div className='flex flex-auto flex-col overflow-scroll border-y p-2 dark:border-y-zinc-800 md:px-5 md:py-3'>
            {messages}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

const ChatMessages = connect(mapStateToProps)(ChatsMessagesContainer)

export default ChatMessages
