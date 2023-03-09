import ReactPaginate from "react-paginate";
import PrevPage from "./PrevPage";
import NextPage from "./NextPage";

export default function Navigation(props) {
    const pageCount = Math.ceil(props.totalCount / props.pageSize);
    const handlePageClick = (event) => {
        // ! console.log(event.selected);
        props.onPageChange(event.selected)
    };

    return (
        <ReactPaginate
            className="flex gap-2 justify-end mt-5"
            breakLabel=""
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            pageLinkClassName="flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 p-1 text-center transition-all ease-in md:hover:bg-gray-200"
            activeLinkClassName="flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 p-2 text-center transition-all ease-in border-violet-400 bg-violet-400 text-white hover:bg-violet-400"
            disabledLinkClassName="hover:bg-gray-200 bg-gray-200 opacity-50"
            previousLabel={<PrevPage />}
            previousLinkClassName="flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 p-1 text-center transition-all ease-in md:hover:bg-gray-200"
            nextLabel={<NextPage />}
            nextLinkClassName="flex h-[30px] w-[30px] items-center justify-center rounded-xl border-2 p-1 text-center transition-all ease-in md:hover:bg-gray-200"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            forcePage={props.currentPage}
            renderOnZeroPageCount={null}
        />
    );
}
