
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMusic,
    faHeart,
    faCommentAlt,
    faShare,
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
import AvatarComponent from "./Avatar/AvatarComponent";
import VideoInforComponent from "./VideoInfor/VideoInforComponent";
import { Link } from "react-router-dom";
import ShareList from "../../components/ShareList/ShareList";

const VideoSessionComponent = forwardRef((props, ref) => {
    const {
        video,
        loading,
        shareList,
        tagList,
        isPlay,
        HandleIsPlayChange,
        isSound,
        HandleIsSoundChange,
        isLiked,
        HandleIsLikedChange,
        HandleVolumeChange,

    } = props

    return video && <section className={clsx(styles.videoSection, "mb-8", {
        [styles.videoSectionLoading]: loading,
    })}>
        <AvatarComponent styles={styles}
            avatar={video.author.avatar}
        />
        <div className={clsx(styles.videoMain)}>
            <VideoInforComponent
                nickname={video.author.nickname}
                avatar={video.author.avatar}
                unique_id={video.author.unique_id}
                title={video.title}
                tagList={tagList}
                musicAuthor={video.music_info.author}
                musicTitle={video.music_info.title}
            />
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
                                        onChange={(e) => HandleVolumeChange(e)}
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
                                onClick={HandleIsLikedChange}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span>{abbrNum(video.digg_count, 1)}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <Link to="/detail">
                                <span className={clsx(styles.actionItemIcon)}>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </span>
                            </Link>

                            <span>{abbrNum(video.comment_count, 1)}</span>
                        </span>
                        <span className={clsx(styles.actionItem)}>
                            <span className={clsx(styles.actionItemIcon)}>
                                <FontAwesomeIcon icon={faShare} />
                            </span>
                            <span>{abbrNum(video.share_count, 1)}</span>
                            <ul className={clsx(styles.shareList)}>
                                <ShareList shareList={shareList} />
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <FollowButton height="30px" width="90px" />
    </section>
})

export default VideoSessionComponent;