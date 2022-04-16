import { forwardRef, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMusic,
    faHeart,
    faCommentAlt,
    faShare,
    faCode,
    faPaperPlane,
    faLink,
    faMessage,
    faPause,
    faVolumeHigh,
    faFlag,
    faPlay,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";

import abbrNum from "../../core/helpers/friendlyNumber";
import styles from "./VideoSession.module.scss";
import SubProfile from "../../components/SubProfile/SubProfile";
import FollowButton from "../../components/FollowButton/FollowButton";

const VideoSession = forwardRef(({ video, loading }, ref) => {
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
    // const videoRef = useRef();
    const [isPlay, setIsPlay] = useState(true);
    const [isSound, setIsSound] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    //actionItemIcon--active
    useEffect(() => {
        if (ref.current)
            ref.current.volume = 0.2;
    }, [ref]);
    function HandleVolumeChange(e) {
        var percent = e.target.value / 100;
        ref.current.volume = percent;
    }
    function HandleIsPlayChange() {
        setIsPlay(prev => {
            isPlay ? ref.current.pause() : ref.current.play()
            return !prev;
        });
    }
    function HandleIsSoundChange() {
        setIsSound(prev => {
            isSound ? ref.current.muted = true : ref.current.muted = false
            return !prev;
        });
    }
    function HandleHeartIconClick() {
        setIsLiked(prev => !prev);
    }

    return video && <section className={clsx(styles.videoSection, "mb-8", {
        [styles.videoSectionLoading]: loading,
    })}>
        <div className={clsx(styles.videoAvatar)}>
            <div className={clsx(styles.videoAvatarImg)}>
                <img src={video.author.avatar} alt="author avatar" />
            </div>
        </div>
        <div className={clsx(styles.videoMain)}>
            <div className={clsx(styles.videoAuthor, "mb-4")}>
                <SubProfile nickname={video.author.nickname}
                    avatar={video.author.avatar}
                    unique_id={video.author.unique_id}
                />
                <span>{video.author.unique_id}</span>
            </div>
            <div className={clsx(styles.videoDescription, "mb-4")}>
                <span>{video.title}</span>
                <span className="tag link-tag">#Bikipsongao</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
                <span className="tag link-tag">#Hologramvnn</span>
            </div>
            <div className={clsx(styles.videoMusic, "mb-8")}>
                <FontAwesomeIcon icon={faMusic} />
                <span className="link-tag">nhạc nền - {video.music_info.title} - {video.music_info.author}</span>
            </div>
            <div className={clsx(styles.videoContainer)}>
                <div className={clsx(styles.videoContentLeft)}>
                    <video
                        ref={ref}
                        data-src={video.play}
                        src={video.play}
                        width={280}
                        height="100%"
                        loop
                        muted
                    >
                    </video>
                    <div className={styles.videoOverlay}>
                        <span className={clsx(styles.controlItemIcon)}>
                            <FontAwesomeIcon icon={isPlay ? faPause : faPlay}
                                onClick={HandleIsPlayChange}
                            />
                        </span>
                        <span className={clsx(styles.controlItemIcon)}>
                            <span className={clsx(styles.controlItemSound)}>
                                <FontAwesomeIcon
                                    icon={isSound ? faVolumeHigh : faVolumeMute}
                                    onClick={HandleIsSoundChange}
                                />
                                <span className={clsx(styles.controlItemRange)}>
                                    <input type="range" orient="vertical"
                                        onChange={HandleVolumeChange}
                                    />
                                </span>
                            </span>
                        </span>
                        <span className={clsx(styles.controlItemIcon)}>
                            <FontAwesomeIcon icon={faFlag} /> Report
                        </span>
                    </div>

                </div>
                <div className={clsx(styles.videoContentRight)}>
                    <div className={clsx(styles.videoAction)}>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.actionItemIcon, {
                                [styles.actionItemIconActive]: isLiked
                            })}
                                onClick={HandleHeartIconClick}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span>{abbrNum(video.digg_count, 1)}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.actionItemIcon)}>
                                <FontAwesomeIcon icon={faCommentAlt} />
                            </span>
                            <span>{abbrNum(video.comment_count, 1)}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.actionItemIcon)}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <span>{abbrNum(video.share_count, 1)}</span>
                            <ul className={clsx(styles.shareList)}>
                                {shareList.map(item =>
                                    <li key={item.title}
                                        className={clsx(styles.shareItem)}
                                    >
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
        <FollowButton height="30px" width="90px" />
    </section>
})

// function VideoSession({ video }) {

// }

export default VideoSession;