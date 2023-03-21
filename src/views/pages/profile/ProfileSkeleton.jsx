import { componentWrapper, skeleton } from '../../../helpers/theme'
import styles from './Profile.module.css'

export default function ProfileSkeleton() {
    return (
        <>
            {/* prettier-ignore */}
            <div className={ componentWrapper.default }>
                <div className="animate-pulse h-[250px] w-full bg-slate-400 dark:bg-zinc-600"></div>
                <div className="relative flex p-5">
                    <div className={ styles.userAvatar + " absolute -top-[70px] md:!left-5 border-[5px] border-white dark:border-zinc-900 bg-white dark:bg-zinc-900 rounded-full" }>
                        <div className={ skeleton.circle + 'h-[180px] w-[180px]' }></div>
                    </div>
                    <div className="flex flex-col items-center md:items-start w-full pt-[110px] md:pt-0 md:pl-[200px]">
                        <div className={ skeleton.line + 'h-[24px] w-[70%] mb-2' }></div>
                        <div className={ skeleton.line + 'h-[14px] w-[50%] mb-4' }></div>
                        <div className="flex justify-center md:justify-start w-full gap-2 mb-4">
                            <div className={ skeleton.line + 'h-[14px] w-[15%]' }></div>
                            <div className={ skeleton.line + 'h-[14px] w-[30%]' }></div>
                            <div className={ skeleton.line + 'h-[14px] w-[25%]' }></div>
                            <div className={ skeleton.line + 'h-[14px] w-[20%]' }></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ componentWrapper.default }>
                <div className="p-5 flex flex-auto gap-3">
                    <div className={ skeleton.circle + 'h-[40px] w-[40px]' }></div>
                    <div className='animate-pulse h-[66px] w-full rounded-xl rounded-tl-none border dark:border-zinc-700 bg-transparent'></div>
                </div>
            </div>

            {
                Array(3).fill(0).map((item, index) => {
                    return (
                        <div
                            key={ `${index}-post-skeleton` }
                            className={ componentWrapper.default }>
                            <div className='p-5'>
                                <div className='mb-4 flex items-center gap-3'>
                                    <div className={ skeleton.circle + 'h-[40px] w-[40px]' }></div>
                                    <div className={ skeleton.line + 'h-[14px] w-[50%] md:w-[30%]' }></div>
                                </div>

                                <div className='mb-4'>
                                    <div className={ skeleton.line + 'h-[14px] w-[65%] mb-1' }></div>
                                    <div className={ skeleton.line + 'h-[14px] w-full mb-1' }></div>
                                    <div className={ skeleton.line + 'h-[14px] w-full mb-1' }></div>
                                    <div className={ skeleton.line + 'h-[14px] w-full mb-1' }></div>
                                </div>

                                <div className='flex gap-2'>
                                    <div className={ skeleton.square + 'h-[36px] w-[36px]' }></div>
                                    <div className={ skeleton.square + 'h-[36px] w-[36px]' }></div>
                                    <div className={ skeleton.square + 'h-[36px] w-[36px]' }></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
