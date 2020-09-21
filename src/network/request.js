// 总体网络模块的封装
import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL: 'http://47.110.147.184:3000',
        withCredentials: true,
    })

    return instance(config)
}



