import UserStatus from "./UserStatus";
import BirthdayIcon from './icons/BirthdayIcon';
import LocationIcon from './icons/LocationIcon';
import EducationIcon from './icons/EducationIcon';
import LinkIcon from './icons/LinkIcon';
import UserInfoItem from './UserInfoItem';

export default function UserInfo(props) {
    return (
        <div className="w-full pt-[100px] md:pt-0 md:pl-[200px] text-center md:text-left">
            <h2 className="mb-2 block w-full text-2xl font-semibold capitalize">
                {props.userName}
            </h2>
            <UserStatus
                userStatus={props.userStatus}
                updateStatus={props.updateStatus}
            />
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
                <UserInfoItem icon={<BirthdayIcon />} info={props.userBirthday ? props.userBirthday : "13.10.1999"} />
                <UserInfoItem icon={<LocationIcon />} info={props.userLocation ? props.userLocation : "Russia, Omsk"} />
                <UserInfoItem icon={<EducationIcon />} info={props.userEducation ? props.userEducation : "High School"} />
                <UserInfoItem icon={<LinkIcon />} info={props.userContacts.github ? props.userContacts.github : "@lun2t1k"} />
            </ul>
        </div>
    );
}
