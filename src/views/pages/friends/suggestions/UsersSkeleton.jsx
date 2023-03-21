import { skeleton } from '../../../../helpers/theme'

export default function UsersSkeleton() {
    return (
        <div>
            {/* prettier-ignore */}
            {
                Array(5).fill(0).map((item, index) => {
                    return (
                        <div
                            key={ `${index}-user-skeleton` }
                            className="w-full py-2 last:pb-0 border-b last:border-b-0 dark:border-zinc-800"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 w-full">
                                    <div className={ skeleton.circle + 'h-[40px] w-[40px]' }></div>
                                    <div className={ skeleton.line + 'h-[14px] w-[50%]' }></div>
                                </div>
                                <div className="animate-pulse h-[24px] w-[56px] flex-[1_0_auto] rounded-xl bg-slate-400 dark:bg-zinc-600"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
