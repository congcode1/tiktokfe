import { useCallback, useEffect, useState } from "react";
import axiosClient from "../core/api/axiosClient";
import videoApi from "../core/api/videoApi";


export default function useFetch(page) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    const fetch = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await videoApi.getVideos({ _page: page, _limit: 4 });
            await setList((prev) => [
                ...new Set([...prev, ...res])
            ]);
            setLoading(false);
        } catch (err) {

        }
    }, [page])

    useEffect(() => {
        fetch();
    }, [fetch, page]);

    return { loading, error, list };
}
