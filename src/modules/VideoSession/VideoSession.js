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
        <section className={clsx(styles.videoSection)}>
            <div className={clsx(styles.videoAvatar)}>
                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1649426400&x-signature=wLJo4klCpv6DsRPLD7HOzrzeEMA%3D" />
            </div>
            <div className={clsx(styles.videoMain)}>
                <div className={clsx(styles.videoAuthor, "mb-4")}>
                    <h3>hologramvnn</h3>
                    <span>hologramvnn</span>
                </div>
                <div className={clsx(styles.videoDescription)}>
                    <span className="content">Còn ai thích nữa khum</span>
                    <span className="tag">#Bikipsongao</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                    <span className="tag">#Hologramvnn</span>
                </div>
                <div className={clsx(styles.videoMusic)}>
                    <FontAwesomeIcon icon={faMusic} />
                    <span>nhạc nền - hologram - Hologrmvnn</span>
                </div>
                <div className="video-container">
                    <div className="video-content-left">
                        <video
                            src="https://v16-webapp.tiktok.com/47a2ac57dd6cde8cbbd0c62240e5121b/625110af/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/2592695a68404b768585ca51d06afd13/?a=1988&br=750&bt=375&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZbWRBwe2Nymhml7Gb&l=202204082250330102451292200276B90D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=M2g0eWQ6Zmd2PDMzZjgzM0ApaDs6MzlmaDw4Nzc8ZGY7OGduMHJrcjRvZjBgLS1kL2NzczFiYTUxNjFfNi82YS82XjA6Yw%3D%3D&vl=&vr="
                            width={280}
                        ></video>

                    </div>
                    <div className="video-content-right">
                        <div className="video-action">
                            <FontAwesomeIcon icon={faHeart} />
                            <FontAwesomeIcon icon={faCommentAlt} />
                            <FontAwesomeIcon icon={faShare} />

                        </div>
                    </div>
                </div>
            </div>
            <div className="video-follow">
                <button>follow</button>
            </div>
        </section>
    )
}

export default VideoSession;