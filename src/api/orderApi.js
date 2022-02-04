import axiosClient from "./axiosClient";

const orderApi={
    getItem(id){
        const url='/order/'+id
        return axiosClient.get(url)
    }
}
export default orderApi