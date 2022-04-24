import { faArrowDown, faArrowUp, faClose, faCode, faComment, faDotCircle, faEllipsis, faFlag, faHandDots, faHeart, faListDots, faMessage, faMusic, faPaperPlane, faPause, faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ControlItemSound from "../../components/ControlItemSound/ControlItemSound";
import FollowButton from "../../components/FollowButton/FollowButton";
import VideoInforComponent from "../VideoSession/VideoInfor/VideoInforComponent";
import styles from "./VideoSectionDetailComponent.module.scss";

export default function VideoSectionDetailComponent({ video, HandleNextVideo }) {
    const tagList = ["tag1", "tag1", "tag1", "tag1", "tag1"]
    const shareList = [
        { title: "Nhúng", icon: faCode, bg: "#50525a" },
        { title: "Gửi đến bạn bè", icon: faPaperPlane, bg: "#fe2c55" },
        { title: "Gửi đến bạn bè", icon: faPaperPlane, bg: "#0075fa" },
        { title: "Gửi đến bạn bè", icon: faPaperPlane, bg: "#25d366" },
        { title: "Gửi đến bạn bè", icon: faPaperPlane, bg: "#1da1f2" },
    ]

    const videoRef = useRef();
    const progressRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isSound, setIsSound] = useState(true);

    const [timeElapsed, setTimeElapsed] = useState(`00:00`);
    const [duration, setDuration] = useState(0);

    function HandleToggleVideo() {
        if (videoRef.current.paused || videoRef.current.ended) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(pre => !pre);
    }

    function HandleLoadVideoMetadata() {
        setDuration(FormatNumber(videoRef.current.duration));
    }

    function HandleTimeUpdate() {
        var progressPercent = Math.floor(videoRef.current.currentTime / videoRef.current.duration * 100);
        setTimeElapsed(FormatNumber(videoRef.current.currentTime));
        progressRef.current.value = progressPercent;
    }

    function HandleProgressInput(e) {
        const seekTime = ((videoRef.current.duration * e.target.value) / 100);
        videoRef.current.currentTime = seekTime;
    }

    function HandleVideoEnd() {
        videoRef.current.play();
    }

    function FormatNumber(seconds) {
        let minute = Math.floor(seconds / 60);
        let second = seconds - minute * 60;
        second = Math.floor(second);

        if (minute < 10) {
            minute = `0${minute}`
        }
        if (second < 10) {
            second = `0${second}`
        }

        return `${minute}:${second}`;
    }

    function HandleIsSoundChange() {
        setIsSound(prev => {
            isSound ? videoRef.current.muted = true : videoRef.current.muted = false
            return !prev;
        });
    }

    function HandleVolumeChange(e) {
        var percent = e.target.value / 100;
        videoRef.current.volume = percent;
    }

    return video && <article className="grid">
        <div className={clsx(styles.detailContainer, "row", "no-gutter")}>
            <div className={clsx(styles.detailLeft, "col", "c-7")}>
                <div className={clsx(styles.closeAndLogo)}>
                    <Link to="/">
                        <span className={clsx(styles.closeIcon)}>
                            <FontAwesomeIcon icon={faClose} />
                        </span>
                    </Link>
                    <span className={clsx(styles.logo)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="40" height="40" data-e2e="browse-logo" class="tiktok-1ncsqqe-StyledLogo e1oyh2e13"><g fill-rule="evenodd" clip-path="url(#logo-icon_svg__a)" clip-rule="evenodd"><path fill="#000" d="M0 36c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V12c0-6.628-5.373-12-12-12H12C5.373 0 0 5.372 0 12v24z"></path><path fill="#25F4EE" d="M30.636 6.288A9.23 9.23 0 0130.35 4h-6.97v26.133c0 3.014-2.056 5.457-5.062 5.457-3.006 0-5.443-2.443-5.443-5.456 0-3.014 2.437-5.457 5.443-5.457.6 0 .797.098 1.337.278v-7.051c-.562-.079-.754-.12-1.337-.12C11.515 17.785 6 23.315 6 30.135c0 6.82 5.515 12.349 12.318 12.349 6.708 0 12.357-5.375 12.51-12.062V17.049c2.528 1.733 5.395 2.746 8.689 2.746V13.19c-4.275 0-7.866-2.933-8.88-6.902z"></path><path fill="#fff" d="M33.12 8.77a9.23 9.23 0 01-.287-2.288h-6.971v26.134c0 3.014-2.055 5.456-5.061 5.456s-5.443-2.442-5.443-5.456a5.45 5.45 0 015.443-5.456c.6 0 .797.097 1.337.277v-7.05c-.562-.08-.754-.12-1.337-.12-6.803 0-12.318 5.529-12.318 12.349S13.998 44.965 20.8 44.965c6.707 0 12.357-5.374 12.51-12.062V19.531c2.528 1.733 5.395 2.747 8.689 2.747v-6.606c-4.275 0-7.866-2.933-8.88-6.901z"></path><path fill="#FE2C55" d="M15.92 35.033a5.446 5.446 0 01-.562-2.416c0-3.014 2.437-5.457 5.443-5.457.523 0 .739.074 1.143.212l.194.066v-7.051l-.21-.03c-.411-.059-.623-.09-1.127-.09-.386 0-.769.018-1.146.053v4.635l-.194-.066c-.404-.138-.62-.212-1.143-.212-3.006 0-5.443 2.443-5.443 5.457a5.46 5.46 0 003.045 4.9zm-4.972 4.997a12.29 12.29 0 009.853 4.935c6.707 0 12.357-5.374 12.51-12.061V19.532c2.528 1.733 5.395 2.746 8.689 2.746v-6.605a9.2 9.2 0 01-2.483-.341v4.463c-3.294 0-6.161-1.013-8.69-2.746v13.372c-.152 6.688-5.802 12.062-12.509 12.062-2.763 0-5.314-.912-7.37-2.453zm23.455-28.401a9.206 9.206 0 01-3.715-5.146h2.145a9.155 9.155 0 001.57 5.146z"></path></g><defs><clipPath id="logo-icon_svg__a"><rect width="48" height="48" fill="#fff" rx="10.5"></rect></clipPath></defs></svg>
                    </span>
                </div>
                <div className={clsx(styles.videoContainer)}>
                    <div className={clsx(styles.video)}>
                        <video
                            ref={videoRef}
                            onLoadedMetadata={HandleLoadVideoMetadata}
                            onTimeUpdate={HandleTimeUpdate}
                            onEnded={HandleVideoEnd}
                            src={video.play}
                            width={360}
                        >
                        </video>
                        <div className={clsx(styles.videoOverlay)}>
                            <span className={clsx(styles.playPauseIcon)}
                                onClick={HandleToggleVideo}
                            >
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                            </span>
                            <span className={clsx(styles.videoRangeContainer)}>
                                <span className={clsx(styles.videoRange)}>
                                    <input
                                        type="range"
                                        ref={progressRef}
                                        onInput={(e) => HandleProgressInput(e)}
                                        min={0}
                                        max={100}
                                        defaultValue={0}
                                        step={1}
                                    />
                                </span>
                                <span className={clsx(styles.videoMinute)}>{timeElapsed}/{duration}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.reportNavigationVolume)}>
                    <span className={clsx(styles.report)}>
                        <FontAwesomeIcon icon={faFlag} />
                        Report
                    </span>
                    <span className={clsx(styles.navigation)}>
                        <span className={clsx(styles.upIcon)}
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                        <span className={clsx(styles.downIcon)}
                            onClick={HandleNextVideo}
                        >
                            <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </span>
                    <ControlItemSound
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            right: "20px",
                        }}
                        className={clsx(styles.volumeIcon)}
                        isSound={isSound}
                        HandleIsSoundChange={HandleIsSoundChange}
                        HandleVolumeChange={HandleVolumeChange}
                    />
                </div>
            </div>
            <div className={clsx(styles.detailRight, "col", "c-5")}>
                <div className={clsx(styles.top)}>
                    <div className={clsx(styles.userInfor, "mb-20")}>
                        <span className={clsx(styles.userInforImg)}>
                            <img src={video.author.avatar} />
                        </span>
                        <div className={clsx(styles.userInforText)}>
                            <h4>{video.author.unique_id}</h4>
                            <p>{video.author.nickname}</p>
                        </div>
                        <FollowButton width="100px" height="35px" />
                    </div>
                    <div className={clsx(styles.videoDescription, "mb-20")}>
                        <span>{video.title}</span>
                        {tagList.map((item, key) => <span key={key} className="tag link-tag">#{item}</span>)}
                    </div>
                    <div className={clsx(styles.videoMusic, "mb-20")}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span className="link-tag">nhạc nền - {video.music.title} - {video.music.author}</span>
                    </div>
                    <div className={clsx(styles.videoLikeShare, "mt-20")}>
                        <div className={clsx(styles.videoLikeComent)}>
                            <span><FontAwesomeIcon icon={faHeart} /></span>
                            <span>{video.digg_count}</span>
                            <span><FontAwesomeIcon icon={faComment} /></span>
                            <span>{video.comment_count}</span>
                        </div>
                        <div className={clsx(styles.videoShare)}>
                            {shareList.map(item => <span style={{ backgroundColor: item.bg }}><FontAwesomeIcon icon={item.icon} /></span>)}
                        </div>
                    </div>
                    <div className={clsx(styles.videoCopyLink, "mt-20")}>
                        <div>https://www.tiktok.com/@tanphat_77/video/706...</div>
                        <div>Sao chép liên kết</div>
                    </div>
                </div>
                <div className={clsx(styles.bot)}>
                    <div className={clsx(styles.commentContainer)}>
                        {Array(4).fill("z").map(() =>
                            <>
                                <div className={clsx(styles.commentItem)}>
                                    <span className={clsx(styles.commentItemImg)}>
                                        <img src="https://res.cloudinary.com/dntsyzdh3/image/upload/v1649772487/Tiktok/images/az_yfnmem.jpg" />
                                    </span>
                                    <div className={clsx(styles.commentItemContent)}>
                                        <h4>TenTacGia</h4>
                                        <p className="mt-10 mb-6">=)) ơ Nàng đẹp quá</p>
                                        <span>1-24</span>
                                        <span>Trả lời</span>
                                        <p className="mt-10">Xem tất cả bình luận (12)..</p>

                                    </div>
                                    <div className={clsx(styles.commentItemInfor)}>
                                        <span><FontAwesomeIcon icon={faEllipsis} /></span>
                                        <span><FontAwesomeIcon icon={faHeart} /></span>
                                        <span>457</span>
                                    </div>
                                </div>
                                <div style={{ marginLeft: "40px" }}>
                                    {Array(4).fill("z").map(() =>
                                        <div className={clsx(styles.commentItem, styles.commentSubItem)}>
                                            <span className={clsx(styles.commentItemImg)}>
                                                <img src="https://res.cloudinary.com/dntsyzdh3/image/upload/v1649772487/Tiktok/images/az_yfnmem.jpg" />
                                            </span>
                                            <div className={clsx(styles.commentItemContent)}>
                                                <h4>TenTacGia</h4>
                                                <p className="mt-10 mb-6">=)) ơ Nàng đẹp quá</p>
                                                <span>1-24</span>
                                                <span>Trả lời</span>
                                            </div>
                                            <div className={clsx(styles.commentItemInfor)}>
                                                <span><FontAwesomeIcon icon={faHandDots} /></span>
                                                <span><FontAwesomeIcon icon={faHeart} /></span>
                                                <span>457</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className={clsx(styles.giveComment)}>
                        <div className={clsx(styles.giveCommentInput)}>
                            <input type="text" placeholder="Thêm bình luận..." />
                            <span>@</span>
                            <div>&#128512;
                                {/* <div>
                                    asd
                                </div> */}
                            </div>
                        </div>
                        <div className={clsx(styles.giveCommentBtn)}>
                            Đăng
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
}