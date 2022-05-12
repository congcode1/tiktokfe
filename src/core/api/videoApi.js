import axiosClient from "./axiosClient";

const videoApi = {
    getAll: () => {
        const url = "/videos";
        return axiosClient.get(url);
    },
    getVideos: (params) => {
        const url = "/videos";
        return axiosClient.get(url, { params });
    },
    getVideoDetail: (id) => {
        const url = "/videos/" + id;
        return axiosClient.get(url);
    },
}

export default videoApi;