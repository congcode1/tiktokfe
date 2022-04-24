import { createRef, useEffect, useReducer, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListVideo } from "../../core/features/list-video/listVideoSlice";

import useFetch from "../../hooks/useFetch";
import HomeComponent from "./HomeComponent";

export default function Home() {

    const dispatch = useDispatch();
    const video = useSelector(state => state.gListVideo)

    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(page);
    const loader = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                setPage((prev) => prev + 1);
            }
        });

        loader.current && observer.observe(loader.current);

        return () => {
            loader.current && observer.unobserve(loader.current)
        }
    }, []);

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
                        entry.target.volume = 0.2
                        entry.target.play()
                    } else {
                        entry.target.pause()
                    }
                },
                { rootMargin: "-300px 0px -300px 0px" }
            ));

        refs.forEach((ref) =>
            ref.current && observer.observe(ref.current)
        );

        return () => {
            refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
        };
    }, [list]);

    return <button onClick={() => dispatch(fetchListVideo())}>teat</button>
    // return <HomeComponent loading={loading} error={error} list={list} loader={loader} newRef={newRef} />
}