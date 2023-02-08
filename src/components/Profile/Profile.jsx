import User from "./User/User";
import NewPostContainer from "./NewPostContainer";
import PostsContainer from "./PostsContainer";

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
            <NewPostContainer />
            <PostsContainer />
        </>
    );
}
