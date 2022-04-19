import clsx from "clsx";

export default function AvatarComponent(props) {
    const {
        styles,
        avatar,
    } = props
    return <div className={clsx(styles.videoAvatar)}>
        <div className={clsx(styles.videoAvatarImg)}>
            <img src={avatar} alt="author avatar" />
        </div>
    </div>
}