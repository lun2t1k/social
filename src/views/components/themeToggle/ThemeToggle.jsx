import { useEffect, useState, useCallback } from 'react'
import options from './options'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    )
    const element = document.documentElement
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const onWindowMatch = useCallback(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && darkQuery.matches)
        ) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }, [darkQuery.matches, element.classList])

    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break
        }
    }, [theme, element, onWindowMatch])

    darkQuery.addEventListener('change', event => {
        if (!('theme' in localStorage)) {
            if (event.matches) {
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }
    })

    return (
        <ul className="flex items-center justify-center gap-2 p-1 mb-5 bg-white dark:bg-zinc-900 rounded-2xl">
            {
                options?.map(opt => (
                    <li key={ opt.theme }>
                        <button
                            onClick={ () => setTheme(opt.theme) }
                            className={ `p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 ${theme === opt.theme && 'text-violet-400'}` }
                        >
                            { opt.icon }
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}
