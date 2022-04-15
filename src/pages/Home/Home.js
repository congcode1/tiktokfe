import clsx from "clsx";
import { createRef, useEffect } from "react";
import LazyLoad from 'react-lazyload';

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoSession from "../../modules/VideoSession/VideoSession";

import styles from "./Home.module.scss";

function HomeComponent({ loading, error, list, loader }) {
    useEffect(() => {
        var observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    console.log('in the view');
                } else {
                    // console.log('out of view');
                }
            });
        });
    }, [])

    return (
        <>
            <Header />
            <div className={clsx(styles.main)}>
                <Sidebar />
                <div className={clsx(styles.content)}>
                    {list.map(item => <LazyLoad key={item.id} height={400}>
                        <VideoSession key={item.id} video={item} />
                    </LazyLoad>)}
                    {loading && <p>Loading...</p>}
                    {error && <p>Error!</p>}
                    <div ref={loader}>loader</div>
                </div>

            </div>
        </>
    )
}

export default HomeComponent