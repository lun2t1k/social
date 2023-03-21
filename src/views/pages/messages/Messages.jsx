import { useEffect } from 'react'
import Chat from './chat/Chat'
import ChatsList from './chats/ChatsList'
import ChatsSearch from './chats/ChatsSearch'

const Messages = () => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return document.body.classList.remove('overflow-hidden')
    }, [])

    return (
        <div className='flex h-[75vh] overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 lg:h-[80vh]'>
            <div className='w-fit lg:min-w-[250px] lg:max-w-[250px]'>
                <ChatsSearch />
                <ChatsList />
            </div>
            <div className='flex h-full w-full flex-col border-l dark:border-l-zinc-800'>
                <Chat />
            </div>
        </div>
    )
}

export default Messages
