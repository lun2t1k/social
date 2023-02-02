import User from "./User/User";
import NewPost from "./NewPost";
import Posts from "./Posts";

export default function Profile(props) {
    return (
        <>
            <User
                userName="Dmitry Krutkin"
                userBirthday="25.07.2000"
                userLocation="Russia, Omsk"
                userEducation="College"
                userSite="Telegram"
                userSiteURL="http://t.me/lun2t1k"
            />
            <NewPost
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
            <Posts posts={props.state.posts} />
        </>
    );
}
