import clsx from "clsx";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoSession from "../../modules/VideoSession/VideoSession";

import styles from "./Home.module.scss";

function Home() {
    return (
        <>
            <Header />
            <div className={clsx(styles.main)}>
                <Sidebar />
                <VideoSession />
            </div>
        </>
    )
}

export default Home