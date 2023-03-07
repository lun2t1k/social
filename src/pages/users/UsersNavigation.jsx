import { PrevArrow, NextArrow } from "./UsersNavigationArrows";

const UsersNavigation = (props) => {
    let pagesAmount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    return (
        <>
            {props.totalCount <= props.pageSize ? null : (
                <ol className="mt-10 flex select-none justify-end gap-2">
                    <PrevArrow
                        currentPage={props.currentPage}
                        onPageChange={props.onPageChange}
                    />
                    {pages.map((page) => {
                        return (
                            <li
                                key={page}
                                onClick={() => props.onPageChange(page)}
                                className={
                                    "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 p-2 text-center transition-all ease-in hover:bg-gray-200 " +
                                    (props.currentPage === page
                                        ? "border-violet-500 bg-violet-500 text-white hover:bg-violet-500"
                                        : null)
                                }
                            >
                                {page}
                            </li>
                        );
                    })}
                    <NextArrow
                        currentPage={props.currentPage}
                        pagesAmount={pagesAmount}
                        onPageChange={props.onPageChange}
                    />
                </ol>
            )}
        </>
    );
};

export default UsersNavigation;
