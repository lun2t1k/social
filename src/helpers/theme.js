export const container = {
    size: {
        default: ' container mx-auto min-w-[320px] max-w-6xl px-3 '
    }
}

export const componentWrapper = {
    default:
        ' relative w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 '
}

export const userAvatar = {
    size: {
        sm: ' h-[30px] w-[30px] ',
        md: ' h-[40px] w-[40px] ',
        '2md': ' h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] ',
        lg: ' h-[70px] w-[70px] ',
        '2lg': ' h-[100px] w-[100px] ',
        '3lg': ' h-[130px] w-[130px] ',
        xl: ' h-[180px] w-[180px] '
    }
}

export const errorStyles = {
    color: 'text-rose-600'
}

export const button = {
    type: {
        postAction:
            'flex items-center gap-1 rounded-xl p-2 font-semibold transition-all ease-in bg-neutral-100 md:hover:bg-slate-100 dark:bg-zinc-800 dark:md:hover:bg-zinc-700'
    },
    pagination: {
        default:
            ' flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 p-1 text-center transition-all ease-in md:hover:bg-gray-200 dark:border-zinc-800 dark:md:hover:bg-zinc-800 select-none ',
        active: ' border-violet-400 bg-violet-400 text-white md:hover:bg-violet-400 dark:border-violet-400 dark:md:hover:bg-violet-400 ',
        disabled:
            ' !bg-gray-200 hover:!bg-gray-200 dark:!bg-zinc-800 dark:hover:!bg-zinc-800 opacity-50 cursor-not-allowed '
    },
    default:
        ' h-fit rounded-xl bg-violet-400 text-center font-semibold text-white transition-all ease-in md:hover:bg-violet-500 ',
    disabled:
        ' disabled:cursor-not-allowed disabled:opacity-50 disabled:md:hover:bg-violet-400 ',
    size: {
        sm: ' py-1 px-2 ',
        md: ' py-2 px-3 '
    }
}

export const textarea = {
    default:
        ' min-h-[52px] max-h-[250px] w-full rounded-xl rounded-tl-none border dark:border-zinc-700 bg-transparent p-3 focus:border-violet-400 dark:focus:border-violet-400 outline-none '
}

export const input = {
    default:
        ' w-full rounded-xl border dark:border-zinc-700 bg-transparent focus:border-violet-400 dark:focus:border-violet-400 outline-none ',
    error: ' border-rose-600 focus:border-rose-600 dark:border-rose-600 dark:focus:border-rose-600',
    size: {
        md: ' py-1 px-2 ',
        lg: ' py-2 px-3 '
    }
}

export const imageStyles = {
    size: {
        full: ' h-full w-full '
    },
    objectFit: {
        cover: ' object-cover '
    }
}

export const spinner = {
    default:
        ' animate-spin block rounded-full border-transparent border-t-white ',
    size: {
        sm: ' h-4 w-4 border ',
        md: ' h-5 w-5 border ',
        lg: ' h-10 w-10 border-2 '
    }
}

export const skeleton = {
    circle: ' animate-pulse flex-[0_0_auto] rounded-full bg-slate-400 dark:bg-zinc-600 ',
    square: ' animate-pulse rounded-xl bg-slate-400 dark:bg-zinc-600 ',
    line: ' animate-pulse rounded bg-slate-400 dark:bg-zinc-600 '
}

export const linkStyles = {
    navBar: ' flex w-full items-center gap-2 rounded-lg p-2 transition-all ease-in md:hover:bg-slate-100 dark:md:hover:bg-zinc-800 ',
    hub: ' flex w-full items-center gap-2 rounded-2xl py-3 px-4 text-md transition-all ease-in bg-white dark:bg-zinc-900 md:hover:bg-slate-100 dark:md:hover:bg-zinc-800 ',
    footer: ' text-xs text-zinc-500 md:hover:underline md:hover:underline-offset-2 '
}
