import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

import HomeComponent from "./Home";

export default function Home() {
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
        const observer = new IntersectionObserver(handleObserver);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return <HomeComponent loading={loading} error={error} list={list} loader={loader} />
}