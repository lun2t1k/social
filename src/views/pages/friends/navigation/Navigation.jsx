import {button} from '../../../../helpers/theme'
import ReactPaginate from 'react-paginate'
import PrevPage from './PrevPage'
import NextPage from './NextPage'

export default function Navigation({totalCount, pageSize, onPageChange}) {
    const pageCount = Math.ceil(totalCount / pageSize)
    const handlePageClick = event => {
        onPageChange(event.selected)
    }

    return (
        <ReactPaginate
            className='mt-5 flex justify-end gap-2'
            breakLabel=''
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            pageLinkClassName={button.pagination.default}
            activeLinkClassName={button.pagination.active}
            disabledLinkClassName={button.pagination.disabled}
            previousLabel={<PrevPage />}
            previousLinkClassName={button.pagination.default}
            nextLabel={<NextPage />}
            nextLinkClassName={button.pagination.default}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
        />
    )
}
