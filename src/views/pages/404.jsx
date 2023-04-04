import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {componentWrapper, button} from '../../helpers/theme'
import ExclamationTriangleIcon from '../components/icons/ExclamationTriangleIcon'

export default function PageNotFound() {
    useEffect(() => {
        document.title = 'Page not found'
    }, [])

    const navigate = useNavigate()

    return (
        <div className={componentWrapper.default + 'h-full'}>
            <div className='flex h-full flex-col items-center justify-center gap-5 p-5'>
                <ExclamationTriangleIcon classes='h-10 w-10' />
                <h1 className='text-2xl'>404</h1>
                <h2 className='text-xl'>Page not found</h2>
                <ul className='mb-5 list-disc pl-5'>
                    <p>
                        The page you are looking for doesn&apos;t exist or an
                        other error occured:
                    </p>
                    <li>A misspelled URL</li>
                    <li>
                        The page has been moved or deleted and there&apos;s no
                        redirect set up
                    </li>
                    <li>
                        The URL wasn&apos;s correct when it was originally set
                        up or it was linked incorrectly
                    </li>
                    <li>The server malfunctioned or has been shut down</li>
                </ul>
                <button
                    onClick={() => navigate(-1)}
                    className={button.default + button.size.md}
                >
                    Back to previous page
                </button>
            </div>
        </div>
    )
}
