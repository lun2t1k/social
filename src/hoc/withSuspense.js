import { Suspense } from 'react'
import Spinner from '../views/components/Spinner'

const LoadingSpin = () => {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <Spinner
                size='lg'
                extraClasses='border-t-black dark:border-t-white'
            />
        </div>
    )
}

export const withSuspense = Component => props => {
    return (
        <Suspense fallback={ <LoadingSpin /> }>
            <Component { ...props } />
        </Suspense>
    )
}
