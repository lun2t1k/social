import { NavLink } from 'react-router-dom';

export default function FooterLink(props) {
    return (
        <NavLink to={props.href} className="text-xs text-slate-500 hover:underline hover:underline-offset-2">
            {props.title}
        </NavLink>
    );
}
