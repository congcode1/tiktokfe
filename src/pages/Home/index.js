import { useEffect, useState } from "react";

import videoApi from "../../core/api/videoApi";
import HomeComponent from "./Home";

export default function Home() {
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        // videoApi.getAll()
        //     .then(response => setVideoList(response))
        //     .catch(error => console.log(error))
    }, [])

    return <HomeComponent videoList={videoList} />
}