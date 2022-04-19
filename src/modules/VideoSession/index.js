import {
    faCode,
    faLink,
    faMessage,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import { forwardRef, useState } from "react"
import VideoSessionComponent from "./VideoSession"

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
    const [tagList] = useState(() => [
        "Bikipsongao",
        "Hologramvnn",
        "Hologramvnn",
        "Hologramvnn",
        "Hologramvnn",
    ])
    const [isPlay, setIsPlay] = useState(true);
    const [isSound, setIsSound] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

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
    function HandleIsLikedChange() {
        setIsLiked(prev => !prev);
    }
    function HandleVolumeChange(e) {
        var percent = e.target.value / 100;
        ref.current.volume = percent;
    }

    return <VideoSessionComponent video={video}
        loading={loading}
        ref={ref}

        shareList={shareList}
        tagList={tagList}

        isPlay={isPlay}
        HandleIsPlayChange={HandleIsPlayChange}

        isSound={isSound}
        HandleIsSoundChange={HandleIsSoundChange}

        isLiked={isLiked}
        HandleIsLikedChange={HandleIsLikedChange}

        HandleVolumeChange={HandleVolumeChange}
    />
})

export default VideoSession