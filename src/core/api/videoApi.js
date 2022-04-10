import axiosClient from "./axiosClient";

const videoApi = {
    getAll: () => {
        const url = "/videos";
        return axiosClient.get(url);
    },
    getAllVideo: (params) => {
        const url = "https://tiktok-video-no-watermark2.p.rapidapi.com/user/favorite";
        return axiosClient.get(url, { params });
    },
}

export default videoApi;