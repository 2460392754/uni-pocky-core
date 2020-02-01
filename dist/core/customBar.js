import { UniSystem } from '../extends';
import * as final from './final';
import { ENV } from './env';
// 设置 nav
export const setCustomBar = async function () {
    const result = await UniSystem.getSystemInfo();
    const platform = result.platform;
    const statusBar = result.statusBarHeight;
    const customBar = result.titleBarHeight;
    switch (ENV) {
        case final.NAME_WECHAT:
            return TYPE_ACTIONS[final.NAME_WECHAT]({
                statusBar,
                customBar
            });
        case final.NAME_ALIPAY:
            return TYPE_ACTIONS[final.NAME_ALIPAY]({
                statusBar,
                customBar
            });
        default:
            return TYPE_ACTIONS.common({
                statusBar,
                customBar,
                platform
            });
    }
};
const TYPE_ACTIONS = {
    common(opts) {
        let { customBar, statusBar, platform } = opts;
        const isAndroid = platform === 'android';
        customBar = statusBar + (isAndroid ? 50 : 45);
        return {
            statusBar,
            customBar
        };
    },
    [final.NAME_WECHAT](opts) {
        const custom = uni.getMenuButtonBoundingClientRect();
        const top = custom.top;
        const bottom = custom.bottom;
        let { customBar, statusBar } = opts;
        customBar = bottom + top - statusBar;
        return {
            statusBar,
            customBar,
            custom
        };
    },
    [final.NAME_ALIPAY](opts) {
        let { customBar, statusBar } = opts;
        customBar = statusBar + customBar;
        return {
            statusBar,
            customBar
        };
    }
};
