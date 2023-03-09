import { NavLink } from "react-router-dom";
import ChatUserDefaultPhoto from "./ChatUserDefaultPhoto";

export default function MessageHeader() {
    return (
        <div className="relative flex items-center justify-center p-2 md:justify-between">
            <NavLink
                to="/messages"
                className="absolute left-[4px] flex items-center text-xs md:relative md:-left-[4px] md:text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <span>Back</span>
            </NavLink>
            <span className="text-sm font-semibold md:text-md w-full text-center">User Name</span>
            <ChatUserDefaultPhoto />
        </div>
    );
}
