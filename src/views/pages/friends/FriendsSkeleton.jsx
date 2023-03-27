import { skeleton } from '../../../helpers/theme'

export default function FriendsSkeleton() {
    return (
        <>
            { Array(5)
                .fill(0)
                .map((item, index) => {
                    return (
                        <div
                            key={ `${index}-friend-skeleton` }
                            className='w-full border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800'
                        >
                            <div className='flex w-full'>
                                <div className='flex w-full gap-3'>
                                    <div
                                        className={
                                            skeleton.circle +
                                            'h-[70px] w-[70px]'
                                        }
                                    ></div>
                                    <div className='w-full'>
                                        <div
                                            className={
                                                skeleton.line +
                                                'mb-1 h-[14px] w-[50%]'
                                            }
                                        ></div>
                                        <div
                                            className={
                                                skeleton.line +
                                                'mb-3 h-[12px] w-[40%]'
                                            }
                                        ></div>
                                        <div
                                            className={
                                                skeleton.line +
                                                'h-[12px] w-[30%]'
                                            }
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) }
        </>
    )
}
