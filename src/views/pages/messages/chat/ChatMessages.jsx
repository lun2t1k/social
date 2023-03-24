import { useLayoutEffect, useRef } from 'react'
import { connect } from 'react-redux'
import ContactMessage from './messageType/ContactMessage'
import UserMessage from './messageType/UserMessage'

const ChatMessages = ({ messages }) => {
    const messagesWindow = useRef(null)
    useLayoutEffect(() => {
        messagesWindow.current.scrollTo(0, 1000)
    }, [messages])

    return (
        <div
            ref={ messagesWindow }
            className='flex flex-auto flex-col overflow-scroll border-y p-2 dark:border-y-zinc-800 md:px-5 md:py-3'
        >
            { messages.map(message => {
                if (message.type === 'contact') {
                    return <ContactMessage key={ message.id } message={ message } />
                } else {
                    return <UserMessage key={ message.id } message={ message } />
                }
            }) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages
    }
}

export default connect(mapStateToProps, null)(ChatMessages)
