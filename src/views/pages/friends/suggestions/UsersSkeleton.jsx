import { skeleton } from '../../../../helpers/theme'

export default function UsersSkeleton() {
    return (
        <div>
            { Array(5)
                .fill(0)
                .map((item, index) => {
                    return (
                        <div
                            key={ `${index}-user-skeleton` }
                            className='w-full border-b py-2 last:border-b-0 last:pb-0 dark:border-zinc-800'
                        >
                            <div className='flex items-center justify-between'>
                                <div className='flex w-full items-center gap-2'>
                                    <div
                                        className={
                                            skeleton.circle +
                                            'h-[40px] w-[40px]'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.line + 'h-[14px] w-[50%]'
                                        }
                                    ></div>
                                </div>
                                <div className='h-[24px] w-[56px] flex-[1_0_auto] animate-pulse rounded-xl bg-slate-400 dark:bg-zinc-600'></div>
                            </div>
                        </div>
                    )
                }) }
        </div>
    )
}
