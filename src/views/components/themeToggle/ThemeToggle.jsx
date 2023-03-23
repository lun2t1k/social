import { useEffect, useState, useCallback } from 'react'
import options from './options'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    )
    const element = document.documentElement

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    const setMetaThemeColor = useCallback(theme => {
        if (theme === 'dark') {
            metaThemeColor.setAttribute('content', '#18181b') // zinc-900
        } else {
            metaThemeColor.setAttribute('content', '#ffffff') // white
        }
    }, [metaThemeColor])
    
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const onWindowMatch = useCallback(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && darkQuery.matches)
        ) {
            element.classList.add('dark')
            setMetaThemeColor('dark')
        } else {
            element.classList.remove('dark')
            setMetaThemeColor('light')
        }
    }, [darkQuery.matches, element.classList, setMetaThemeColor])

    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'light':
                element.classList.remove('dark')
                setMetaThemeColor('light')
                localStorage.setItem('theme', 'light')
                break
            case 'dark':
                element.classList.add('dark')
                setMetaThemeColor('dark')
                localStorage.setItem('theme', 'dark')
                break
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break
        }
    }, [theme, element, onWindowMatch, setMetaThemeColor])

    darkQuery.addEventListener('change', event => {
        if (!('theme' in localStorage)) {
            if (event.matches) {
                element.classList.add('dark')
                setMetaThemeColor('dark')
            } else {
                element.classList.remove('dark')
                setMetaThemeColor('light')
            }
        }
    })

    return (
        <ul className='mb-5 flex items-center justify-center gap-2 rounded-2xl bg-white p-1 dark:bg-zinc-900'>
            { options?.map(opt => (
                <li key={ opt.theme }>
                    <button
                        onClick={ () => setTheme(opt.theme) }
                        className={
                            'rounded-lg p-2 md:hover:bg-slate-100 dark:md:hover:bg-zinc-800 ' +
                            (theme === opt.theme && 'text-violet-400')
                        }
                    >
                        { opt.icon }
                    </button>
                </li>
            )) }
        </ul>
    )
}
