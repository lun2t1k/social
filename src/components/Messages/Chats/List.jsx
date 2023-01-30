import Item from "./Item";

export default function List() {
    return (
        <div className="h-full overflow-scroll rounded-xl">
            <Item userName="Tom Hanks" userID="1" />
            <Item userName="John Doe" userID="2" />
            <Item userName="Bobby Robinson" userID="3" />
        </div>
    );
}
