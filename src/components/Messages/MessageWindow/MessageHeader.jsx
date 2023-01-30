import { NavLink } from "react-router-dom";

export default function MessageHeader() {
    return (
        <div className="flex items-center justify-between p-5">
            <NavLink
                to="/messages"
                className="flex items-center text-lg relative -left-[7px]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <span>Back</span>
            </NavLink>
            <span className="text-2xl">User Name</span>
            <div className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden bg-slate-400">
                <img src="" alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
