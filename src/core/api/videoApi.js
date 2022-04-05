import axiosClient from "./axiosClient";

const videoApi = {
    getAll: () => {
        const url = "/videos";
        return axiosClient.get(url);
    },
}

export default videoApi;