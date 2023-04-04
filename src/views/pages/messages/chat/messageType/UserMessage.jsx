export default function UserMessage({message}) {
    return (
        <div
            id={message.id}
            className='userMessage flex w-full justify-end py-2'
        >
            <div className='flex max-w-[250px] flex-wrap items-end justify-end gap-2 rounded-2xl rounded-br-none bg-gradient-to-tr from-violet-400 to-fuchsia-400 py-2 px-3 text-xs text-white sm:max-w-[400px]'>
                <span className='flex-[1_1_auto]'>{message.text}</span>
                <span className='text-2xs uppercase italic'>
                    {message.time}
                </span>
            </div>
        </div>
    )
}
