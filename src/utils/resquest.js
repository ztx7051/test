import { extend } from "umi-request";

const errorHandler = (error) => {
  const { response } = error;
  const status = (response || {}).status || 404;
  // const errorMsg = getLocale

  return { status };
};

const request = extend({
  // 默认错误处理
  errorHandler,
  credentials: "include",
  // prefix: PRE
});

/**
 *  GET 请求
 *  @param {*} url 请求路径
 *  @param {*} params 业务参数
 *  @param {*} options 定制化请求参数
 *  @param {*} options.cancelToken 由const {token , cancel } = CancelToken.source(); 提供， 可用cancel来中断请求
 */

export const get = (url, params = {}, options) =>
  request.get(url, { ...options, params });
