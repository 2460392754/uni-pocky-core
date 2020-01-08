// 运行平台类型
import * as final from './final';
let _env;
// #ifdef H5
_env = final.NAME_H5;
// #endif
// #ifdef MP-WEIXIN
_env = final.NAME_WECHAT;
// #endif
// #ifdef MP-ALIPAY
_env = final.NAME_ALIPAY;
// #endif
// #ifdef MP-BAIDU
_env = final.NAME_BAIDU;
// #endif
// #ifdef MP-TOUTIAO
_env = final.NAME_TOUTIAO;
// #endif
// #ifdef MP-TOUTIAO
_env = final.NAME_TOUTIAO;
// #endif
// #ifdef MP-QQ
_env = final.NAME_QQ;
// #endif
// #ifdef APP-PLUS
_env = final.NAME_APP_PLUS;
// #endif
// #ifdef APP-PLUS-NVUE
_env = final.NAME_APP_PLUS_NVUE;
// #endif
export const ENV = _env;
