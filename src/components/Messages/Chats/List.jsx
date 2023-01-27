import Item from "./Item";

export default function List() {
    return (
        <div className="h-full overflow-scroll">
            <Item />
            <Item />
            <Item />
        </div>
    );
}
