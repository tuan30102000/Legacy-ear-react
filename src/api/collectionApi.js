import axiosClient from "./axiosClient";

const collectionApi = {
    getAll(params = {}) {
        return axiosClient.get('/collection', { params })
    }
}

export default collectionApi