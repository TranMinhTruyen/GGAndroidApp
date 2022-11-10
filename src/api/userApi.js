import axios from 'axios';
import {USER_URL} from '../utils/Constants';

const userApi = {
  async login(username, pass, remember) {
    const postData = {
      account: username,
      password: pass,
      deviceInfo: {
        deviceName: 'test1',
        os: 'ANDROID',
      },
      remember: remember
    };
    let response = await axios.post(USER_URL + '/login', postData);
    return response.data;
  },

  async createUser(postData, key) {
    let response = await axios.post(USER_URL + '/createUser', postData, {
      params: {
        confirmKey: key,
      },
    });
    return response.data;
  },

  async getProfile(token) {
    let response = await axios.post(USER_URL + '/getProfileUser', null, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  },

  async sendConfirmKey(userEmail) {
    var checkEmailRequest = {
      email: userEmail,
      confirmKey: '',
    };
    let response = await axios.post(
      USER_URL + '/sendConfirmKey',
      checkEmailRequest,
      {timeout: 7000},
    );
    return response.data;
  },

  async checkConfirmKey(userEmail, key) {
    var checkEmailRequest = {
      email: userEmail,
      conFirmKey: key,
    };
    let response = await axios.post(
      USER_URL + '/checkConfirmKey',
      checkEmailRequest,
      {timeout: 7000},
    );
    return response.data;
  },

  async checkLoginStatus(token) {
    const postData = {
      deviceName: 'test',
      os: 'ANDROID',
    };
    let response = await axios.post(USER_URL + '/checkLoginStatus', postData, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  },

  async getAllUser(pageValue, sizeValue) {
    let response = await axios.get(USER_URL + '/getAllUser', {
      timeout: 7000,
      params: {
        page: pageValue,
        size: sizeValue,
      },
    });
    return response.data;
  },
};
export default userApi;
