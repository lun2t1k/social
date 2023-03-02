import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.userStatus
    }
    setEditMode(boolean) {
        this.setState({editMode: boolean});
    }
    render() {
        return (
            <>
                {this.state.editMode 
                    ? (
                        <input type="text"
                            autoFocus
                            onClick={() => this.setEditMode.bind(this)(true)}
                            onBlur={() => this.setEditMode.bind(this)(false)}
                            className="w-full py-2 px-3 border-2 rounded-xl text-lg mb-4 focus:border-purple-accent"
                        />
                    )
                    : (
                        <h3 
                            onClick={this.setEditMode.bind(this)}
                            className="group mb-4 text-2xl cursor-pointer select-none"
                        >
                            <span>{this.state.status ? this.state.status : 'Edit status'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hidden group-hover:inline-block align-text-top ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </h3>
                    )
                }
            </>
        )
    }
}

export default ProfileStatus;
