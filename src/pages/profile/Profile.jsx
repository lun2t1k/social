import User from './User';
import NewPost from './NewPost';
import Posts from './Posts';

export default function Profile(props) {
    return (
        <>
            <User
                userCover={props.profile.cover}
                userPhoto={props.profile.photos.large}
                userName={props.profile.fullName}
                userStatus={props.status}
                updateStatus={props.updateStatus}
                userBirthday={props.profile.birthday}
                userLocation={props.profile.location}
                userEducation={props.profile.education}
                userContacts={props.profile.contacts}
            />
            <NewPost />
            <Posts userPhoto={props.profile.photos.small} userName={props.profile.fullName} />
        </>
    );
}
