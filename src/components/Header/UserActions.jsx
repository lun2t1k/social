import Notifications from "./Notifications";
import UserDefaultAvatar from "../UserDefaultAvatar";
import MobileMenu from './MobileMenu';

export default function UserActions() {
    return (
        <div className="flex items-center">
            <Notifications />
            <MobileMenu />
            <UserDefaultAvatar />
        </div>
    );
}
