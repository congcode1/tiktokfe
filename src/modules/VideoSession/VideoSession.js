import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMusic,
    faHeart,
    faCommentAlt,
    faShare,
    faPlane,
    faCode,
    faPaperPlane,
    faLink,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";

import styles from "./VideoSession.module.scss";
import { useEffect, useState } from "react";
import videoApi from "../../core/api/videoApi";




function VideoSession() {
    const [shareList] = useState(() => [
        {
            icon: faCode,
            title: "Nhúng",
            bgColor: "#46484f",
        },
        {
            icon: faPaperPlane,
            title: "Gửi đến bạn bè",
            bgColor: "#e4284c",
        },
        {
            icon: faMessage,
            title: "Chia sẻ với Messenger",
            bgColor: "#0069e1",
        },
        {
            icon: faLink,
            title: "Sao chép liên kết",
            bgColor: "#e4284c",
        },
    ])
    const [pr, setPr] = useState(null);
    useEffect(() => {
        videoApi.getAllVideo({
            unique_id: '@_deadc',
            user_id: '_deadc',
            count: '10',
            cursor: '0'
        })
            .then(response => setPr(response.data.videos[0]))
            .catch(error => console.log(error))
    }, [])


    return pr && <section className={clsx(styles.videoSection, "mb-8")}>
        <div className={clsx(styles.videoAvatar)}>
            <img src={pr.author.avatar} />
        </div>
        <div className={clsx(styles.videoMain)}>
            <div className={clsx(styles.videoAuthor, "mb-4")}>
                <div className={clsx(styles.videoAuthorName)}>
                    <h3 className="link-tag">{pr.author.nickname}</h3>
                    <div className={clsx(styles.breifInfo)}>
                        <div className={clsx(styles.breifInfoTop)}>
                            <img src={pr.author.avatar} />
                            <button>
                                Follow
                            </button>
                        </div>
                        <h3 className="link-tag mb-6">{pr.author.nickname}</h3>
                        <h5 className="mb-6">{pr.author.unique_id}</h5>
                        <span className="d-block mb-10">
                            <span className="b-text">49.2K</span><span>Follow</span>
                            <span className="b-text">49M</span><span>Thích</span>
                        </span>
                        <hr className="mb-8" />
                        <p>
                            một đoạn text mô tả description, asd z zzzzzzzzzzzz
                        </p>
                    </div>
                </div>
                <span>{pr.author.unique_id}</span>
            </div>
            <div className={clsx(styles.videoDescription, "mb-4")}>
                <span>{pr.title}</span>
                <span className="tag link-tag">#Bikipsongao</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
            </div>
            <div className={clsx(styles.videoMusic, "mb-8")}>
                <FontAwesomeIcon icon={faMusic} />
                <span className="link-tag">nhạc nền - {pr.music_info.title} - {pr.music_info.author}</span>
            </div>
            <div className={clsx(styles.videoContainer)}>
                <div className={clsx(styles.videoContentLeft)}>
                    <video
                        src={pr.play}
                        width={280}
                        height="100%"
                        autoPlay
                        muted
                        controls
                    ></video>

                </div>
                <div className={clsx(styles.videoContentRight)}>
                    <div className={clsx(styles.videoAction)}>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.itemIcon)}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span>{pr.digg_count}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.itemIcon)}>
                                <FontAwesomeIcon icon={faCommentAlt} />
                            </span>
                            <span>{pr.comment_count}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.itemIcon)}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <span>{pr.share_count}</span>
                            <ul className={clsx(styles.shareList)}>
                                {shareList.map(item =>
                                    <li className={clsx(styles.shareItem)}>
                                        <span className={clsx(styles.shareItemIcon)} style={{ backgroundColor: item.bgColor }}>
                                            <FontAwesomeIcon icon={item.icon} />
                                        </span>
                                        <span className={clsx(styles.shareItemText)}>
                                            {item.title}
                                        </span>
                                    </li>)}
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(styles.videoFollow)}>
            <button>follow</button>
        </div>
    </section>
}

export default VideoSession;