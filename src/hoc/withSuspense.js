import { Suspense } from 'react'

const LoadingSpin = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <span className='block h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-black dark:border-t-white' />
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
