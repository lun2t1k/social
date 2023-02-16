export default function Post(props) {
    return (
        <div id={props.postID} className="post mb-5">
            <div className="w-full bg-white rounded-2xl overflow-hidden p-5">
                <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-[70px] h-[70px] bg-slate-400 rounded-full overflow-hidden mr-3">
                        {props.userPhoto ? (
                            <img
                                src={props.userPhoto}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="white"
                                className="w-[50px] h-[50px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-xl capitalize">{props.userName}</span>
                </div>
                <div className="mb-4">
                    <p className="text-lg">{props.postText}</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center p-2 bg-neutral-300 rounded-xl">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.5 13.5719L12 20.9999L4.50002 13.5719M4.50002 13.5719C3.15131 12.2595 2.65374 10.301 3.2125 8.50398C3.77125 6.70697 5.29167 5.37589 7.14678 5.05965C9.00189 4.7434 10.8774 5.49556 12 7.00595C13.1273 5.50674 14.9988 4.76456 16.8472 5.08377C18.6956 5.40297 20.2098 6.72985 20.769 8.5203C21.3282 10.3108 20.8382 12.2636 19.5 13.5779"
                                fill=""
                            />
                            <path
                                d="M20.2037 14.2825C20.5961 13.8938 20.5992 13.2607 20.2105 12.8683C19.8219 12.4759 19.1887 12.4728 18.7963 12.8614L20.2037 14.2825ZM12 20.9999L11.2963 21.7105C11.6861 22.0964 12.314 22.0964 12.7037 21.7105L12 20.9999ZM5.2037 12.8614C4.8113 12.4728 4.17814 12.4759 3.78951 12.8683C3.40087 13.2607 3.40392 13.8938 3.79633 14.2825L5.2037 12.8614ZM3.80261 14.2886C4.19843 14.6738 4.83153 14.6652 5.2167 14.2693C5.60186 13.8735 5.59323 13.2404 5.19742 12.8553L3.80261 14.2886ZM12 7.00595L11.1974 7.60247C11.3855 7.85553 11.6819 8.00507 11.9972 8.00595C12.3125 8.00682 12.6098 7.85894 12.7993 7.60693L12 7.00595ZM18.7993 12.8645C18.4053 13.2515 18.3996 13.8847 18.7866 14.2787C19.1736 14.6727 19.8067 14.6784 20.2007 14.2914L18.7993 12.8645ZM18.7963 12.8614L11.2963 20.2894L12.7037 21.7105L20.2037 14.2825L18.7963 12.8614ZM12.7037 20.2894L5.2037 12.8614L3.79633 14.2825L11.2963 21.7105L12.7037 20.2894ZM5.19742 12.8553C4.11845 11.8053 3.7204 10.2385 4.1674 8.80089L2.25759 8.20707C1.58709 10.3635 2.18417 12.7137 3.80261 14.2886L5.19742 12.8553ZM4.1674 8.80089C4.6144 7.36329 5.83074 6.29842 7.31483 6.04543L6.97873 4.07387C4.7526 4.45336 2.92809 6.05066 2.25759 8.20707L4.1674 8.80089ZM7.31483 6.04543C8.79891 5.79243 10.2994 6.39416 11.1974 7.60247L12.8026 6.40943C11.4555 4.59696 9.20486 3.69438 6.97873 4.07387L7.31483 6.04543ZM12.7993 7.60693C13.7011 6.40756 15.1983 5.81382 16.677 6.06918L17.0174 4.09835C14.7993 3.71531 12.5535 4.60592 11.2007 6.40497L12.7993 7.60693ZM16.677 6.06918C18.1557 6.32454 19.3671 7.38604 19.8145 8.81841L21.7235 8.22219C21.0525 6.07365 19.2354 4.4814 17.0174 4.09835L16.677 6.06918ZM19.8145 8.81841C20.2618 10.2508 19.8698 11.813 18.7993 12.8645L20.2007 14.2914C21.8066 12.7141 22.3945 10.3707 21.7235 8.22219L19.8145 8.81841Z"
                                fill="black"
                            />
                        </svg>
                        <span className="text-md font-bold ml-1 relative -bottom-[2px]">{props.postLikesAmount}</span>
                    </button>
                    <button className="p-2 bg-neutral-300 rounded-xl">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 20.0001L4.3 16.1001C1.97612 12.6631 2.87388 8.22782 6.39977 5.72638C9.92566 3.22495 14.9902 3.4303 18.2453 6.20667C21.5003 8.98304 21.9401 13.4726 19.2739 16.7072C16.6076 19.9419 11.6592 20.9222 7.7 19.0001L3 20.0001"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 11.9999V12.0099"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 11.9999V12.0099"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 11.9999V12.0099"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="p-2 bg-neutral-300 rounded-xl">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071C14.6834 14.0976 15.3166 14.0976 15.7071 13.7071L14.2929 12.2929ZM19 9L19.7071 9.70711C20.0976 9.31658 20.0976 8.68342 19.7071 8.29289L19 9ZM15.7071 4.29289C15.3166 3.90237 14.6834 3.90237 14.2929 4.29289C13.9024 4.68342 13.9024 5.31658 14.2929 5.70711L15.7071 4.29289ZM19 10C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8V10ZM9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16V18ZM15.7071 13.7071L19.7071 9.70711L18.2929 8.29289L14.2929 12.2929L15.7071 13.7071ZM19.7071 8.29289L15.7071 4.29289L14.2929 5.70711L18.2929 9.70711L19.7071 8.29289ZM19 8H8V10H19V8ZM8 8C5.23858 8 3 10.2386 3 13H5C5 11.3431 6.34315 10 8 10V8ZM3 13C3 15.7614 5.23858 18 8 18V16C6.34315 16 5 14.6569 5 13H3ZM8 18H9V16H8V18Z"
                                fill="black"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
