import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectChat } from '../../../redux/ducks/messages'
import Chat from './chat/Chat'
import ChatsList from './chats/ChatsList'
import ChatsSearch from './chats/ChatsSearch'
import { componentWrapper } from '../../../helpers/theme'

const Messages = ({ selectChat, selectedChat }) => {
    useEffect(() => {
        document.title = 'Messages'
    }, [])

    let params = useParams()

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return document.body.classList.remove('overflow-hidden')
    }, [])

    useEffect(() => {
        let userID = params.userID
        selectChat(userID)
    }, [params.userID, selectChat])

    return (
        <div className={ componentWrapper.default + 'flex h-[75vh] lg:h-[80vh]' }>
            <div className='w-fit lg:min-w-[250px] lg:max-w-[250px]'>
                <ChatsSearch />
                <ChatsList />
            </div>
            <div className='flex h-full w-full flex-col border-l dark:border-l-zinc-800'>
                {
                    selectedChat ? (
                        <Chat />
                    ) : (
                        <div className='flex items-center justify-center h-full p-5'>
                            <h2 className='text-center'>Select a chat to start messaging</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedChat: state.messages.selectedChat
    }
}

export default connect(mapStateToProps, { selectChat })(Messages)
