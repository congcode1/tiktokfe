import clsx from "clsx";
import { createRef, useEffect } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoSession from "../../modules/VideoSession/VideoSession";

import styles from "./Home.module.scss";

function HomeComponent({ loading, error, list, loader }) {
    const refs = [];
    const newRef = () => {
        const ref = createRef();
        refs.push(ref);
        return ref;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(
                entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.videoWidth > entry.target.videoHeight) {
                            entry.target.style.width = "100%";
                            entry.target.style.height = "auto";
                        }
                        entry.target.muted = false
                        entry.target.play()
                    } else {
                        entry.target.pause()
                    }
                },
                { rootMargin: "-300px 0px -300px 0px" }
            ));

        refs.forEach((ref) =>
            observer.observe(ref.current)
        );

        return () => {
            refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
        };
    }, [list]);

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