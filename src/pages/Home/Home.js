import clsx from "clsx";
import LazyLoad from 'react-lazyload';

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
                    {videoList.map(item => <LazyLoad key={item.video_id} height={400}>
                        <VideoSession key={item.video_id} video={item} />
                    </LazyLoad>)}
                </div>
            </div>
        </>
    )
}

export default HomeComponent