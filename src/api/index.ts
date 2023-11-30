import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ResultEnum } from "../enums/index";

export interface Result {
  code: string;
  msg: string;
}

interface ResultData<T = any> extends Result {
  data: T;
}
export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  noLoading?: boolean;
}
const config = {
  // 默认地址请求地址，可在 .env.** 文件中修改
  baseURL: "http://127.0.0.1:5000",
  // baseURL: process.env.VITE_API_URL as string,
  // 设置超时时间
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create();

    // 请求拦截器
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截
    this.service.interceptors.response.use((response: AxiosResponse) => {
      const { data } = response;

      // 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
      return data;
    });
  }
  /**
   * @description 常用请求方法封装
   */
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }

  post<T>(
    url: string,
    params?: object | string,
    _object = {}
  ): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new RequestHttp(config);
