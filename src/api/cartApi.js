import axios from 'axios';
import {CART_URL} from '../utils/Constants';

const cartApi = {
    async addProductToCart(id, amount, token) {
        return (
            await axios.post(CART_URL + '/createCartAndAddProductToCart', null, {
                timeout: 7000,
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                params: {
                    productId: id,
                    productAmount: amount,
                },
            })
        ).data;
    },

    async updateProductAmount(id, amount, token) {
        return (
            await axios.put(CART_URL + '/updateProductAmount', null, {
                timeout: 7000,
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                params: {
                    productId: id,
                    amount: amount,
                },
            })
        ).data;
    },

    async getCart(token) {
        return (
            await axios.get(CART_URL + '/getCartById', {
                timeout: 7000,
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
        ).data;
    },

    async deleteProductInCart(id, token) {
        return (
            await axios.delete(CART_URL + '/removeProductFromCart', {
                timeout: 7000,
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                params: {
                    productId: id,
                },
            })
        ).data;
    },
};
export default cartApi;
