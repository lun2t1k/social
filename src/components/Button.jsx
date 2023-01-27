export default function Button(props) {
    return (
        <button
            type={props.type}
            className="px-6 py-3 rounded-lg text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark disabled:bg-gray-500 disabled:hover:bg-gray-500"
            disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}