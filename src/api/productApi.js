import axiosClient from "./axiosClient";

const productApi = {
    getAll({ type, params = {} }) {

        return axiosClient.get('/product/' + type, { params })
    },
    getItem(id) {
        return axiosClient.get('/product/' + id)
    }
}
export default productApi