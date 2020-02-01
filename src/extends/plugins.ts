// 第三方服务 https://uniapp.dcloud.io/api/plugins/provider

export const UniPlugins = {
    /**
     * @description 检查登录状态(sessionKey)是否没有过期
     *
     * @returns {string} true: 未过期, false: 过期
     */
    checkSession(): Promise<string | never> {
        return new Promise((resolve, reject) => {
            uni.checkSession({
                success: () => resolve('sessionkey未过期'),
                fail: () => reject(new Error('sessionKey过期'))
            });
        });
    },

    /**
     * @description 登录
     *
     * @param {LoginOptions} opts
     * @returns
     */
    login(opts: LoginOptions): Promise<any | never> {
        return new Promise((resolve, reject) => {
            const { provider, timeout } = opts;

            uni.login({
                provider,
                // timeout,
                success: (res) => {
                    resolve(res);
                },
                fail: () => reject(new Error('UniPlugins.login运行fail回调函数出现错误'))
            });
        });
    }
};
