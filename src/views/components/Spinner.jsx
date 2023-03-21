import { spinner } from '../../helpers/theme'

export default function Spinner({ size, extraClasses }) {
    return (
        <span className={ spinner.default + spinner.size[size] + extraClasses } />
    )
}
