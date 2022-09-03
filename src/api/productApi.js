import axios from 'axios';
import {PRODUCT_URL} from '../utils/Constants';

const productApi = {
    async createProduct(postData, token) {
        return (await axios.post(PRODUCT_URL + '/createProduct', postData, {
            timeout: 7000,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })).data;
    },

    async getAllProduct(pageValue, sizeValue) {
        return (await axios.get(PRODUCT_URL + '/getAllProduct', {
            timeout: 7000,
            params: {
                page: pageValue,
                size: sizeValue,
            },
        })).data;
    },

    async getProductById(productId) {
        return (await axios.get(PRODUCT_URL + '/getProductById', {
            timeout: 7000,
            params: {
                id: productId,
            },
        })).data;
    },

    async getProductByKeyword(pageValue, sizeValue, nameValue, brandValue, categoryValue, priceValue) {
        return (await axios.get(PRODUCT_URL + '/getProductByKeyword', {
            timeout: 7000,
            params: {
                page: pageValue,
                size: sizeValue,
                name: nameValue,
                brand: brandValue,
                category: categoryValue,
                price: priceValue,
            },
        })).data;
    },
    async updateProduct(productId, postData) {
        return (await axios.put(PRODUCT_URL + '/updateProduct', postData, {
            timeout: 7000,
            params: {
                id: productId,
            },
        })).data;
    },
};
export default productApi;
