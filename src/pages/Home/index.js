import { useEffect, useState } from "react";

import videoApi from "../../core/api/videoApi";
import HomeComponent from "./Home";

export default function Home() {
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        videoApi.getAllVideo({
            unique_id: '@_deadc',
            user_id: '_deadc',
            count: '10',
            cursor: '0'
        })
            .then(response => setVideoList(response.data.videos))
            .catch(error => console.log(error))
    }, [])

    return <HomeComponent videoList={videoList} />
}