import { connect } from 'react-redux'
import ChatsItem from './ChatsItem'

const ChatsList = ({ chats }) => {
    return (
        <div className='h-full overflow-scroll lg:pb-[62px] divide-y dark:divide-zinc-800'>
            { chats.map(chat => (
                <ChatsItem
                    key={ chat.id }
                    chat={ chat }
                />
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
