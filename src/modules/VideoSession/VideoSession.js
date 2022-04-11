import { useEffect, useRef, useState } from "react";
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
import LazyLoad from 'react-lazyload';

import abbrNum from "../../core/helpers/friendlyNumber";
import styles from "./VideoSession.module.scss";

function VideoSession({ video }) {
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
    const videoRef = useRef();
    const [isPlay, setIsPlay] = useState(true);
    const [isSound, setIsSound] = useState(true);
    useEffect(() => {
        if (videoRef.current)
            videoRef.current.volume = 0.2;
    }, [videoRef]);
    function HandleVolumeChange(e) {
        var percent = e.target.value / 100;
        videoRef.current.volume = percent;
    }
    function HandleIsPlayChange() {
        setIsPlay(prev => {
            isPlay ? videoRef.current.pause() : videoRef.current.play()
            return !prev;
        });
    }
    function HandleIsSoundChange() {
        setIsSound(prev => {
            isSound ? videoRef.current.muted = true : videoRef.current.muted = false
            return !prev;
        });
    }

    return video && <section className={clsx(styles.videoSection, "mb-8", {
        [styles.videoSectionPlay]: true,
    })}>
        <div className={clsx(styles.videoAvatar)}>
            <img src={video.author.avatar} alt="author avatar" />
        </div>
        <div className={clsx(styles.videoMain)}>
            <div className={clsx(styles.videoAuthor, "mb-4")}>
                <div className={clsx(styles.videoAuthorName)}>
                    <h3 className="link-tag">{video.author.nickname}</h3>
                    <div className={clsx(styles.breifInfo)}>
                        <div className={clsx(styles.breifInfoTop)}>
                            <img src={video.author.avatar} alt="author avatar" />
                            <button>
                                Follow
                            </button>
                        </div>
                        <h3 className="link-tag mb-6">{video.author.nickname}</h3>
                        <h5 className="mb-6">{video.author.unique_id}</h5>
                        <span className="d-block mb-10">
                            <span className="b-text">{abbrNum(492000, 1)}</span><span>Follow</span>
                            <span className="b-text">{abbrNum(23423434, 1)}</span><span>Thích</span>
                        </span>
                        <hr className="mb-8" />
                        <p>
                            một đoạn text mô tả description, asd z zzzzzzzzzzzz
                        </p>
                    </div>
                </div>
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
                    <LazyLoad videoRef={videoRef}>
                        <video ref={videoRef}
                            src={video.play}
                            width={280}
                            height="100%"
                            loop
                        >
                        </video>
                    </LazyLoad>
                    <div className={styles.videoOverlay}>
                        <span className={clsx(styles.controlItemIcon)}>
                            <FontAwesomeIcon icon={isPlay ? faPause : faPlay}
                                onClick={HandleIsPlayChange}
                            />
                        </span>
                        <span className={clsx(styles.controlItemIcon)}>
                            <input type="range" orient="vertical" className={clsx(styles.controlItemRange)}
                                onChange={HandleVolumeChange}
                            />
                            <FontAwesomeIcon icon={isSound ? faVolumeHigh : faVolumeMute}
                                onClick={HandleIsSoundChange}
                            />
                        </span>
                        <span className={clsx(styles.controlItemIcon)}>
                            <FontAwesomeIcon icon={faFlag} /> Report
                        </span>
                    </div>

                </div>
                <div className={clsx(styles.videoContentRight)}>
                    <div className={clsx(styles.videoAction)}>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.actionItemIcon)}>
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
        <div className={clsx(styles.videoFollow)}>
            <button>Follow</button>
        </div>
    </section>
}

export default VideoSession;