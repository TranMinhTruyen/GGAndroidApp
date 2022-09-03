import axios from 'axios';
import {ORDER_URL} from '../utils/Constants';

const orderApi = {
    async createdOrder(listProductId, address, token) {
        const postData = {
            address: address,
            productId: listProductId,
        };
        return (await axios.post(ORDER_URL + '/createOrder', postData, {
            timeout: 7000,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })).data;
    },
    async getUserOrder(pageValue, sizeValue, token) {
        return (await axios.get(ORDER_URL + '/user/getOrder', {
            timeout: 7000,
            headers: {
                Authorization: 'Bearer ' + token,
            },
            params: {
                page: pageValue,
                size: sizeValue,
            },
        }));
    },
    async deleteUserOrder(idValue, token) {
        return (await axios.delete(ORDER_URL + '/deleteOrder', {
            timeout: 7000,
            headers: {
                Authorization: 'Bearer ' + token,
            },
            params: {
                id: idValue,
            },
        })).data;
    },
};
export default orderApi;
