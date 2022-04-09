import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMusic,
    faHeart,
    faCommentAlt,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";

import styles from "./VideoSession.module.scss";
console.log(styles);

function VideoSession() {
    return (
        <section className={clsx(styles.videoSection, "mb-8")}>
            <div className={clsx(styles.videoAvatar)}>
                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/72036937ed55150d2d74c4a95aadf6c4~c5_100x100.jpeg?x-expires=1649545200&x-signature=%2BgNm9QiDL6Exk3aNXbRq4FU3zYg%3D" />
            </div>
            <div className={clsx(styles.videoMain)}>
                <div className={clsx(styles.videoAuthor, "mb-4")}>
                    <h3>hologramvnn</h3>
                    <span>hologramvnn</span>
                </div>
                <div className={clsx(styles.videoDescription, "mb-4")}>
                    <span className="content">Còn ai thích nữa khum</span>
                    <span className="tag">#Bikipsongao</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                </div>
                <div className={clsx(styles.videoMusic, "mb-8")}>
                    <FontAwesomeIcon icon={faMusic} />
                    <span>nhạc nền - hologram - Hologrmvnn</span>
                </div>
                <div className={clsx(styles.videoContainer)}>
                    <div className={clsx(styles.videoContentLeft)}>
                        <video
                            src="https://v16-webapp.tiktok.com/47a2ac57dd6cde8cbbd0c62240e5121b/625110af/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2592695a68404b768585ca51d06afd13/?a=1988&br=750&bt=375&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZbWRBwe2Nymhml7Gb&l=202204082250330102451292200276B90D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=M2g0eWQ6Zmd2PDMzZjgzM0ApaDs6MzlmaDw4Nzc8ZGY7OGduMHJrcjRvZjBgLS1kL2NzczFiYTUxNjFfNi82YS82XjA6Yw%3D%3D&vl=&vr="
                            width={280}
                            height="100%"
                            autoPlay={true}
                        ></video>

                    </div>
                    <div className={clsx(styles.videoContentRight)}>
                        <div className={clsx(styles.videoAction)}>
                            <span className={clsx(styles.actionItem)}>
                                <span className={clsx(styles.itemIcon)}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <span>258.5K</span>
                            </span>
                            <span className={clsx(styles.actionItem)}>
                                <span className={clsx(styles.itemIcon)}>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </span>
                                <span>2322</span>
                            </span>
                            <span className={clsx(styles.actionItem)}>
                                <span className={clsx(styles.itemIcon)}>
                                    <FontAwesomeIcon icon={faShare} />
                                </span>
                                <span>295</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.videoFollow)}>
                <button>follow</button>
            </div>
        </section>
    )
}

export default VideoSession;