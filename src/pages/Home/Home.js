import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import VideoSession from "../../modules/VideoSession/VideoSession";

import styles from "./Home.module.scss";

function HomeComponent({ videoList }) {
    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(page);
    const loader = useRef();

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        console.log("target: ", target.target);
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            // rootMargin: "800px"
            // threshold: 0.5
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

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