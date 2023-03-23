import { NavLink } from 'react-router-dom'
import { linkStyles } from '../../../helpers/theme'

export default function HubLink({ link }) {
    return (
        <li>
            <NavLink
                to={ link.path }
                className={ linkStyles.hub }
            >
                { link.title }
            </NavLink>
        </li>
    )
}
