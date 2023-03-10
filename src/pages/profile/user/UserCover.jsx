import styles from "./User.module.css"

export default function UserCover(props) {
    return (
        <div
            className={
                styles.userCover +
                " h-[250px] w-full bg-gradient-to-tr from-violet-400 to-fuchsia-400"
            }
        >
            { props.userCover ? (
                <img
                    src="props.userCover"
                    alt=""
                    className="h-full w-full object-cover"
                />
            ) : null }
        </div>
    )
}
