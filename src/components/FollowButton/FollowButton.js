

import clsx from "clsx"
import styles from "./FollowButton.module.scss"

export default function FollowButton(props) {
    return <div className={clsx(styles.videoFollow)}
        style={props}
    >
        <button>{props.isFollowed ? "Followed" : "Follow"}</button>
    </div>
}