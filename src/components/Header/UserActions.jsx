import Notifications from "./Notifications";
import UserDefaultAvatar from "../UserDefaultAvatar";

export default function UserActions() {
    return (
        <div className="flex items-center">
            <Notifications />
            <UserDefaultAvatar />
        </div>
    );
}
