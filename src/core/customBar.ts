import { UniSystem } from '../extends';
import * as final from './final';
import { ENV } from './env';

// 设置 nav
export const setCustomBar = async function() {
    const result = await UniSystem.getSystemInfo();
    const platform = result.platform as string;
    const statusBar = result.statusBarHeight as number;
    const customBar = result.titleBarHeight as number;

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

interface ICommonOptions {
    readonly statusBar: number;
    readonly customBar: number;
    readonly platform?: string;
}

interface IOtherOptions extends ICommonOptions {
    readonly platform?: undefined;
}

const TYPE_ACTIONS = {
    common(opts: ICommonOptions) {
        let { customBar, statusBar, platform } = opts;
        const isAndroid: boolean = platform === 'android';

        customBar = statusBar + (isAndroid ? 50 : 45);

        return {
            statusBar,
            customBar
        };
    },

    [final.NAME_WECHAT](opts: IOtherOptions) {
        const custom = uni.getMenuButtonBoundingClientRect();
        const top = custom.top as number;
        const bottom = custom.bottom as number;
        let { customBar, statusBar } = opts;

        customBar = bottom + top - statusBar;

        return {
            statusBar,
            customBar,
            custom
        };
    },

    [final.NAME_ALIPAY](opts: IOtherOptions) {
        let { customBar, statusBar } = opts;

        customBar = statusBar + customBar;

        return {
            statusBar,
            customBar
        };
    }
};
