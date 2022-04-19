import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import SubProfile from "../../../components/SubProfile/SubProfile"
import styles from "./VideoInforComponent.module.scss"

export default function VideoInforComponent(props) {
    const {
        nickname,
        avatar,
        unique_id,
        title,
        // tagList,
        musicAuthor,
        musicTitle,
    } = props

    const tagList = ["tag1", "tag1", "tag1", "tag1", "tag1"]

    return <>
        <div className={clsx(styles.videoAuthor, "mb-4")}>
            <SubProfile nickname={nickname || "nickname"}
                avatar={avatar || "avatar"}
                unique_id={unique_id || "unique_id"}
            />
            <span>{unique_id || "unique_id"}</span>
        </div>
        <div className={clsx(styles.videoDescription, "mb-4")}>
            <span>{title || "title"}</span>
            {tagList.map((item, key) => <span key={key} className="tag link-tag">#{item}</span>)}
        </div>
        <div className={clsx(styles.videoMusic, "mb-8")}>
            <FontAwesomeIcon icon={faMusic} />
            <span className="link-tag">nhạc nền - {musicTitle || "musicTitle"} - {musicAuthor || "musicAuthor"}</span>
        </div>
    </>
}

/*
<div className={clsx(styles.videoAuthor, "mb-4")}>
            <SubProfile nickname={video.author.nickname}
                avatar={video.author.avatar}
                unique_id={video.author.unique_id}
            />
            <span>{video.author.unique_id}</span>
        </div>
        <div className={clsx(styles.videoDescription, "mb-4")}>
            <span>{video.title}</span>
            {tagList.map((item, key) => <span key={key} className="tag link-tag">#{item}</span>)}
        </div>
        <div className={clsx(styles.videoMusic, "mb-8")}>
            <FontAwesomeIcon icon={faMusic} />
            <span className="link-tag">nhạc nền - {video.music_info.title} - {video.music_info.author}</span>
        </div>
        */