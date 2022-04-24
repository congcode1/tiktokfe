import VideoSectionDetail from "../../modules/VideoSectionDetail";


export default function DetailComponent({ video, HandleNextVideo }) {
    return <VideoSectionDetail video={video} HandleNextVideo={HandleNextVideo} />;
}