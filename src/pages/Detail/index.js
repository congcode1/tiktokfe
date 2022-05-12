import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DetailComponent from "./DetailComponent";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Detail() {
    const gListVideo = useSelector(state => state.gListVideo);
    let query = useQuery();
    const [activeVideo, setActiveVideo] = useState(query.get("id") - 1);

    function HandleNextVideo() {
        if (activeVideo + 1 >= gListVideo.listVideo.length) {
            setActiveVideo(0)
        } else {
            setActiveVideo(pre => pre + 1);
        }
    }
    function HandlePrevVideo() {
        if (activeVideo - 1 <= 0) {
            setActiveVideo(gListVideo.listVideo.length - 1)
        } else {
            setActiveVideo(pre => pre - 1);
        }
    }

    return <DetailComponent video={gListVideo.listVideo[activeVideo]} HandleNextVideo={HandleNextVideo} />
}