import styles from "./User.module.css";

export default function UserCover(props) {
    return (
        <div
            className={
                styles.userCover +
                " h-[250px] w-full bg-gradient-to-tr from-violet-500 to-fuchsia-500"
            }
        >
            {props.userCover ? (
                <img
                    src="props.userCover"
                    alt=""
                    className="h-full w-full object-cover"
                />
            ) : null}
        </div>
    );
}
