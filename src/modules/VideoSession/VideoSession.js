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
                <div className={clsx(styles.videoAuthor)}>
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
                <div className="video-music">
                    <FontAwesomeIcon icon={faMusic} />
                    <span>nhạc nền - hologram - Hologrmvnn</span>
                </div>
                <div className="video-container">
                    <div className="video-content-left">
                        <video
                            src="https://v16-webapp.tiktok.com/6660b0f691e6c18b3200422002377928/624f3bb2/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/6872bbd387014a7483ae5b585ac94cdd/?a=1988&br=2306&bt=1153&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Za8qGwe2N9mhml7Gb&l=202204071329370102440030261D27AC9C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=M2Q3bjo6Zjd2OzMzZjgzM0ApNzszNDhlN2Q8Nzw4PGZlZmdpcy1wcjRvZ3JgLS1kL2Nzc2A1NjNfYDFjXjZeYzFfNWI6Yw%3D%3D&vl=&vr="
                            width="400px"
                            height="200px"
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