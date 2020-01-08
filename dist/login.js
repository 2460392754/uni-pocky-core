import { UniPlugins } from './extends';
import * as final from './final';
export const loginWechat = function () {
    return login({ provider: final.NAME_WECHAT });
};
/**
 * @description 自动判断条件登录
 * @param {string} tokenName ['token']  localstorage中token的名称
 * @returns {Promise<any>}
 */
export const autoLogin = async function (tokenName = 'token') {
    const token = uni.getStorageSync(tokenName);
    if (token === '') {
        return Promise.reject(new Error('login.autoLogin判断为是首次登录(localStorage的token没有值)'));
    }
    else {
        await UniPlugins.checkSession();
        return Promise.resolve();
    }
};
// 登录
const login = async function (opts) {
    try {
        return await autoLogin();
    }
    catch (e) {
        const res = await UniPlugins.login(opts);
    }
};
