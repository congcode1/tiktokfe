
import { faCode, faEllipsis, faLink, faMessage, faPaperPlane, faPlay, faShare, faUserAlt, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import NumAndDescription from "../../components/NumAndDescription/NumAndDescription"
import ShareList from "../../components/ShareList/ShareList"
import styles from "./UIProfileSection.module.scss"

export default function UIProfileSection() {
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

    const [listTab] = useState(["Video", "Liked"])
    const [listVideo] = useState([
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list video chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list video chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list video chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list video chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
    ])
    const [listLiked] = useState([
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list liked chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list liked chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list liked chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list liked chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
        {
            src: "https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4",
            likeCount: 2342,
            description: "list liked chào em nha",
            tag: ["tag1", "tag2", "tag3"]
        },
    ])
    const [activeTab, setActiveTab] = useState(listTab[0]);

    const lineRef = useRef();
    const tabItemRef = useRef();

    useEffect(() => {
        if (lineRef.current)
            lineRef.current.style.width = tabItemRef.current.offsetWidth + "px";
    }, [])

    function HandleTabItemClick(e, item) {
        setActiveTab(item)
        lineRef.current.style.left = e.currentTarget.offsetLeft + "px"
    }

    return <div className="grid">
        <div className="row">
            <div className="col c-9">
                <div className={clsx(styles.infor)}>
                    <div className={clsx(styles.inforAvatar)}>
                        <img src="https://res.cloudinary.com/dntsyzdh3/image/upload/v1649772487/Tiktok/images/az_yfnmem.jpg" />
                    </div>
                    <div className={clsx(styles.mainInfor)}>
                        <h3>Name Name</h3>
                        <h4>Signature zz</h4>
                        <div>
                            <button>Tin nhắn</button>
                            <span>
                                <FontAwesomeIcon icon={faUserCheck} />
                            </span>
                        </div>
                    </div>
                    <div className={clsx(styles.shareReport)}>
                        <div>
                            <FontAwesomeIcon icon={faShare} />
                            <ul className={clsx(styles.shareList)}>
                                <ShareList shareList={shareList} />
                            </ul>
                        </div>
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col c-3">

            </div>
        </div>
        <NumAndDescription count={3} className="mt-20" />
        <h4>Like animal abc asdd</h4>
        <div className={clsx(styles.tabsWrapper, "mt-20")}>
            <div className={clsx(styles.tabs)}>
                {listTab.map(item => <div className={clsx(styles.tabItem, {
                    [styles.tabItemActive]: item === activeTab
                })}
                    key={item}
                    ref={tabItemRef}
                    onClick={(e) => HandleTabItemClick(e, item)}
                >
                    {item}
                </div>)}
                <div className={clsx(styles.line)}
                    ref={lineRef}
                ></div>
            </div>
            <div className={clsx(styles.tabContent)}>

            </div>
        </div>
        <div className="grid">
            <div className="row">
                {(activeTab == 'Video' ? listVideo : listLiked).map((item) => <div className="col c-3 mt-20">
                    <div className={clsx(styles.videoItem)}>
                        <div className={clsx(styles.videoContainer)}>
                            <Link to="/detail">
                                <video src={item.src}
                                    onMouseOver={e => e.currentTarget.play()}
                                    onMouseLeave={e => e.currentTarget.pause()}
                                >
                                </video>
                            </Link>
                            <p>
                                <FontAwesomeIcon icon={faPlay} />
                                <span>{item.likeCount}</span>
                            </p>
                        </div>
                        <p>{item.description}<span>#{item.tag.join('#')}</span></p>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
}