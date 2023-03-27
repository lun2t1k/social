import { componentWrapper, skeleton } from '../../../helpers/theme'
import styles from './Profile.module.css'

export default function ProfileSkeleton() {
    return (
        <>
            <div className={ componentWrapper.default }>
                <div className='h-[250px] w-full animate-pulse bg-slate-400 dark:bg-zinc-600'></div>
                <div className='relative flex p-5'>
                    <div
                        className={
                            styles.userAvatar +
                            ' absolute -top-[70px] rounded-full border-[5px] border-white bg-white dark:border-zinc-900 dark:bg-zinc-900 md:!left-5'
                        }
                    >
                        <div
                            className={ skeleton.circle + 'h-[180px] w-[180px]' }
                        ></div>
                    </div>
                    <div className='flex w-full flex-col items-center pt-[110px] md:items-start md:pt-0 md:pl-[200px]'>
                        <div
                            className={ skeleton.line + 'mb-2 h-[24px] w-[70%]' }
                        ></div>
                        <div
                            className={ skeleton.line + 'mb-4 h-[14px] w-[50%]' }
                        ></div>
                        <div className='mb-4 flex w-full justify-center gap-2 md:justify-start'>
                            <div
                                className={ skeleton.line + 'h-[14px] w-[15%]' }
                            ></div>
                            <div
                                className={ skeleton.line + 'h-[14px] w-[30%]' }
                            ></div>
                            <div
                                className={ skeleton.line + 'h-[14px] w-[25%]' }
                            ></div>
                            <div
                                className={ skeleton.line + 'h-[14px] w-[20%]' }
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ componentWrapper.default }>
                <div className='flex flex-auto gap-3 p-5'>
                    <div
                        className={ skeleton.circle + 'h-[40px] w-[40px]' }
                    ></div>
                    <div className='h-[66px] w-full animate-pulse rounded-xl rounded-tl-none border bg-transparent dark:border-zinc-700'></div>
                </div>
            </div>

            { Array(3)
                .fill(0)
                .map((item, index) => {
                    return (
                        <div
                            key={ `${index}-post-skeleton` }
                            className={ componentWrapper.default }
                        >
                            <div className='p-5'>
                                <div className='mb-4 flex items-center gap-3'>
                                    <div
                                        className={
                                            skeleton.circle +
                                            'h-[40px] w-[40px]'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.line +
                                            'h-[14px] w-[50%] md:w-[30%]'
                                        }
                                    ></div>
                                </div>

                                <div className='mb-4'>
                                    <div
                                        className={
                                            skeleton.line +
                                            'mb-1 h-[14px] w-[65%]'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.line +
                                            'mb-1 h-[14px] w-full'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.line +
                                            'mb-1 h-[14px] w-full'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.line +
                                            'mb-1 h-[14px] w-full'
                                        }
                                    ></div>
                                </div>

                                <div className='flex gap-2'>
                                    <div
                                        className={
                                            skeleton.square +
                                            'h-[36px] w-[36px]'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.square +
                                            'h-[36px] w-[36px]'
                                        }
                                    ></div>
                                    <div
                                        className={
                                            skeleton.square +
                                            'h-[36px] w-[36px]'
                                        }
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )
                }) }
        </>
    )
}
