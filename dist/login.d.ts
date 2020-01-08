export declare const loginWechat: () => Promise<void>;
/**
 * @description 自动判断条件登录
 * @param {string} tokenName ['token']  localstorage中token的名称
 * @returns {Promise<any>}
 */
export declare const autoLogin: (tokenName?: string) => Promise<void>;
