export default function NavbarLink(props) {
    return (
        <a
            href={props.url}
            className="block w-full p-2 rounded-lg text-2xl text-black transition-all ease-in hover:text-purple-accent hover:bg-slate-100"
        >
            {props.title}
        </a>
    );
}
