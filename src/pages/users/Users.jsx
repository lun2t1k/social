import UsersSearch from "./UsersSearch";
import UsersListContainer from "./UsersListContainer";

export default function Friends(props) {
    return (
        <div className="w-full p-5 bg-white rounded-3xl overflow-hidden">
            <UsersSearch />
            <UsersListContainer />
        </div>
    );
}
