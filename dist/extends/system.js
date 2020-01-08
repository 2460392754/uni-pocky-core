// 设备 https://uniapp.dcloud.io/api/system/info
export const UniSystem = {
    // 获取系统信息
    getSystemInfo() {
        return new Promise(function (resolve, reject) {
            uni.getSystemInfo({
                success: resolve,
                fail: () => reject(new Error('UniSystem.getSystemInfo运行fail回调函数出现错误'))
            });
        });
    }
};
