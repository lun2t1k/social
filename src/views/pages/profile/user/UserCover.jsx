import { image } from '../../../../helpers/theme'
import styles from '../Profile.module.css'

export default function UserCover({ userCover }) {
    return (
        <div className={ styles.userCover }>
            { userCover ?
                <img
                    src={ userCover }
                    alt=''
                    className={ image.size.full + image.objectFit.cover }
                />
                : null
            }
        </div>
    )
}
