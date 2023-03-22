export default function ContactMessage({ message }) {
    return (
        <div
            id={ message.id }
            className='contactMessage flex w-full justify-start py-2'
        >
            <div className='flex flex-wrap items-end gap-2 max-w-[250px] sm:max-w-[400px] rounded-2xl rounded-bl-none bg-gray-200 py-2 px-3 text-xs dark:bg-zinc-700'>
                <span className='flex-[1_1_auto]'>{ message.text }</span>
                <span className='italic uppercase text-2xs'>{ message.time }</span>
            </div>
        </div>
    )
}
