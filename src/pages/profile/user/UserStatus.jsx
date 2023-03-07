import React from "react";

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.userStatus,
    };
    setEditMode = (boolean) => {
        this.setState({ editMode: boolean });
    };
    saveStatus = () => {
        this.setEditMode(false);
        this.props.updateStatus(this.state.status);
    };
    setStatusText = (event) => {
        this.setState({ status: event.currentTarget.value });
    };
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userStatus !== prevProps.userStatus) {
            this.setState({ status: this.props.userStatus });
        }
    }
    render() {
        return (
            <>
                {this.state.editMode ? (
                    <input
                        type="text"
                        autoFocus
                        onClick={() => this.setEditMode(true)}
                        onChange={this.setStatusText}
                        onBlur={() => this.saveStatus()}
                        value={this.state.status}
                        className="focus:border-purple-accent mb-4 w-full rounded-xl border-2 py-2 px-3"
                    />
                ) : (
                    <h3
                        onClick={() => this.setEditMode(true)}
                        className="group mb-4 flex cursor-pointer select-none items-center justify-center md:justify-start"
                    >
                        <span>
                            {this.state.status
                                ? this.state.status
                                : "Set your status"}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="ml-2 hidden h-4 w-4 group-hover:inline-block"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    </h3>
                )}
            </>
        );
    }
}

export default UserStatus;
