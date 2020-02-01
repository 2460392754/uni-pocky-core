// 是否有新版本
export const updateCheck = function () {
    return new Promise((resolve) => {
        const updateManager = uni.getUpdateManager();
        updateManager.onCheckForUpdate((res) => {
            resolve(res.hasUpdate);
        });
    });
};
// 下载小程序
export const updateDownload = function () {
    return new Promise((resolve, reject) => {
        const updateManager = uni.getUpdateManager();
        // 下载成功
        updateManager.onUpdateReady(function (res) {
            resolve(res);
        });
        // 下载失败
        updateManager.onUpdateFailed(function (res) {
            reject(res);
        });
    });
};
// 更新小程序并重启
export const updateReload = function () {
    uni.getUpdateManager().applyUpdate();
};
