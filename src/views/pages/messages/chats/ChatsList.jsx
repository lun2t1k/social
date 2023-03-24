import { connect } from 'react-redux'
import ChatsItem from './ChatsItem'

const ChatsList = ({ chats }) => {
    return (
        <div className='h-full divide-y overflow-scroll dark:divide-zinc-800 lg:pb-[62px]'>
            { chats.map(chat => (
                <ChatsItem key={ chat.id } chat={ chat } />
            )) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chats: state.messages.chats
    }
}

export default connect(mapStateToProps, null)(ChatsList)
