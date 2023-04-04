import {input, button} from '../../../helpers/theme'
import SearchIcon from '../../components/icons/SearchIcon'

export default function FriendsSearch() {
    return (
        <form className='mb-5 flex w-full items-center gap-2'>
            <input
                type='search'
                name=''
                id=''
                placeholder='Search friends'
                className={input.default + input.size.lg}
            />
            <button
                type='submit'
                className={button.default + button.disabled + 'p-2'}
            >
                <SearchIcon />
            </button>
        </form>
    )
}
