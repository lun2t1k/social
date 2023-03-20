export const container = {
    size: {
        default: ' container mx-auto min-w-[320px] max-w-6xl px-3 '
    }
}

export const componentWrapper = {
    default: ' w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 '
}

export const userAvatar = {
    size: {
        sm: ' h-[30px] w-[30px] ',
        md: ' h-[40px] w-[40px] ',
        lg: ' h-[70px] w-[70px] ',
        xl: ' h-[180px] w-[180px] '
    }
}

export const error = {
    color: 'text-rose-600'
}

export const button = {
    type: {
        postAction: 'flex items-center gap-1 rounded-xl p-2 font-semibold transition-all ease-in bg-neutral-100 hover:bg-slate-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'
    },
    condition: {
        active: ' h-fit rounded-xl bg-violet-400 text-center font-semibold text-white transition-all ease-in hover:bg-violet-500 ',
        disabled: ' disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-400 '
    },
    size: {
        sm: ' py-1 px-2 ',
        md: ' py-2 px-3 ',
        lg: '',
        xl: ''
    }
}

export const textarea = {
    default: ' min-h-[52px] max-h-[250px] w-full rounded-xl rounded-tl-none border dark:border-zinc-700 bg-transparent p-3 focus:border-violet-400 dark:focus:border-violet-400 outline-none '
}

export const input = {
    default: ' w-full rounded-xl border dark:border-zinc-700 bg-transparent py-1 px-2 focus:border-violet-400 dark:focus:border-violet-400 outline-none ',
    error: ' border-rose-600 dark:border-rose-600 '
}

export const image = {
    size: {
        full: ' h-full w-full '
    },
    objectFit: {
        cover: ' object-cover '
    }
}
