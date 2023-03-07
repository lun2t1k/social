export const PrevArrow = (props) => {
    const showPrevPage = () => {
        if (props.currentPage === 1) {
            return;
        } else {
            props.onPageChange(props.currentPage - 1);
        }
    };

    return (
        <li
            id="prevPage"
            onClick={showPrevPage}
            className={
                "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 p-2 text-center transition-all ease-in hover:bg-gray-200 " +
                (props.currentPage === 1
                    ? "cursor-not-allowed bg-gray-200 opacity-50"
                    : null)
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
        </li>
    );
};

export const NextArrow = (props) => {
    const showNextPage = () => {
        if (props.currentPage === props.pagesAmount) {
            return;
        } else {
            props.onPageChange(props.currentPage + 1);
        }
    };

    return (
        <li
            id="nextPage"
            onClick={showNextPage}
            className={
                "flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-xl border-2 p-2 text-center transition-all ease-in hover:bg-gray-200 " +
                (props.currentPage === props.pagesAmount
                    ? "cursor-not-allowed bg-gray-200 opacity-50"
                    : null)
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
            </svg>
        </li>
    );
};
