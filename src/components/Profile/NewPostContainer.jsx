import { connect } from "react-redux";
import { addNewPost, updateNewPostText } from "../../redux/profilePageReducer";
import NewPost from "./NewPost";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (postText) => {
            dispatch(updateNewPostText(postText));
        },
        addNewPost: () => {
            dispatch(addNewPost());
        },
    };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
