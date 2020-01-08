/// <reference types="uni-app" />
export declare const UniPlugins: {
    /**
     * @description 检查登录状态(sessionKey)是否没有过期
     *
     * @returns {string} true: 未过期, false: 过期
     */
    checkSession(): Promise<string>;
    /**
     * @description 登录
     *
     * @param {LoginOptions} opts
     * @returns
     */
    login(opts: LoginOptions): Promise<any>;
};
