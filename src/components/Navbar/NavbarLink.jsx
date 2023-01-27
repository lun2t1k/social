import "./Navbar.css";

export default function NavbarLink(props) {
    return (
        <a
            href={props.linkURL}
            className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
        >
            {props.linkTitle}
        </a>
    );
}
