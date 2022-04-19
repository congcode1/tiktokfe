import clsx from "clsx";
import { createRef, useEffect } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoSession from "../../modules/VideoSession";

import styles from "./HomeComponent.module.scss";

function HomeComponent({ loading, list, loader, newRef }) {

    return (
        <>
            <Header />
            <div className={clsx(styles.main)}>
                <Sidebar />
                <div className={clsx(styles.content)}>
                    {list.map(item => <VideoSession loading={loading} ref={newRef()} key={item.id} video={item} />)}
                    <div ref={loader}>loader</div>
                </div>

            </div>
        </>
    )
}

export default HomeComponent