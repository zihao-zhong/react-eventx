import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 10000,
  validateStatus: null,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const conf = config;
    return conf;
  },
  (error: Error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    } else {
      // console.log(response);
      return Promise.reject(response);
    }
  },
  (error: Error) => Promise.reject(error),
);

export default instance;
