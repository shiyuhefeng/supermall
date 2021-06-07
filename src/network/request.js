import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeOut: 5000
  })
  // 拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 拦截处理
    // console.log(config);
    return config
  }, err => {
    // console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    // console.log(err)
  })

  // 发送真正的请求
  return instance(config)
}