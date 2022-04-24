import { useEffect, useState } from "react";
import videoApi from "../../core/api/videoApi";
import DetailComponent from "./DetailComponent";


export default function Detail() {
    const [listVideo, setListVideo] = useState([]);
    const [activeVideo, setActiveVideo] = useState(0);

    function HandleNextVideo() {
        setActiveVideo(pre => pre + 1);
    }
    function HandlePrevVideo() {
        setActiveVideo(pre => pre - 1);
    }

    useEffect(() => {
        videoApi.getVideos({ _page: 1, _limit: 4 }).then(res => setListVideo(res))
    }, [])

    return <DetailComponent video={listVideo[activeVideo]} HandleNextVideo={HandleNextVideo} />
}