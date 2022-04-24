import { createRef, useEffect, useReducer, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListVideo } from "../../core/features/list-video/listVideoSlice";

import HomeComponent from "./HomeComponent";

export default function Home() {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const gListVideo = useSelector(state => state.gListVideo)

    const loader = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                dispatch(fetchListVideo(page + 1))
                setPage(pre => pre + 1)
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
    }, [gListVideo.listVideo]);

    // return <button onClick={() => dispatch(fetchListVideo(1))}>teat</button>
    return <HomeComponent loading={gListVideo.loading} error={gListVideo.error} listVideo={gListVideo.listVideo} loader={loader} newRef={newRef} />
}