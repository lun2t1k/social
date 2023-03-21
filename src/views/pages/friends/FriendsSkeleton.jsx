import { skeleton } from '../../../helpers/theme'

export default function FriendsSkeleton() {
    return (
        <>
            {/* prettier-ignore */}
            {
                Array(5).fill(0).map((item, index) => {
                    return (
                        <div
                            key={ `${index}-friend-skeleton` }
                            className='w-full border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800'
                        >
                            <div className='flex w-full'>
                                <div className='flex gap-3 w-full'>
                                    <div className={ skeleton.circle + 'h-[70px] w-[70px]' }></div>
                                    <div className='w-full'>
                                        <div className={ skeleton.line + 'h-[14px] w-[50%] mb-1' }></div>
                                        <div className={ skeleton.line + 'h-[12px] w-[40%] mb-3' }></div>
                                        <div className={ skeleton.line + 'h-[12px] w-[30%]' }></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
