export default function UserMessage({ message }) {
    return (
        <div
            id={ message.id }
            className='userMessage flex w-full justify-end py-2'
        >
            <div className='flex flex-wrap justify-end gap-2 max-w-[250px] sm:max-w-[400px] rounded-2xl rounded-br-none bg-gradient-to-tr from-violet-400 to-fuchsia-400 py-2 px-3 text-xs text-white'>
                <span>{ message.text }</span>
                <span>{ message.time }</span>
            </div>
        </div>
    )
}
