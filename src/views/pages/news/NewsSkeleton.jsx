import { componentWrapper, skeleton } from '../../../helpers/theme'

export default function NewsSkeleton() {
    return (
        <>
            {/* prettier-ignore */}
            {
                Array(5).fill(0).map((item, index) => {
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
