import clsx from "clsx";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoSession from "../../modules/VideoSession/VideoSession";

import styles from "./Home.module.scss";

function HomeComponent({ videoList }) {
    return (
        <>
            <Header />
            <div className={clsx(styles.main)}>
                <Sidebar />
                <div className={clsx(styles.content)}>
                    {videoList.map(item => <VideoSession key={item.video_id} video={item} />)}
                </div>
            </div>
        </>
    )
}

export default HomeComponent