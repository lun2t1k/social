import {NavLink} from 'react-router-dom'
import {linkStyles} from '../../../helpers/theme'
import WrenchScrewdriverIcon from '../../components/icons/WrenchScrewdriverIcon'

export default function HubLink({link}) {
    return (
        <li>
            <NavLink to={link.path} className={linkStyles.hub}>
                {link.title}
                {link.development && <WrenchScrewdriverIcon />}
            </NavLink>
        </li>
    )
}
