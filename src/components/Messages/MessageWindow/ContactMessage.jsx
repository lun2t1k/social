export default function ContactMessage(props) {
    return (
        <div className="w-full flex justify-start py-2">
            <div className="max-w-[400px] bg-gray-200 rounded-3xl rounded-bl-none pt-2 pr-4 pb-2 pl-4">
                <span className="">{props.text}</span>
            </div>
        </div>
    );
}
