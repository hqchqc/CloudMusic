// 总体网络模块的封装
import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://47.95.109.144:3000'
    })
    return instance(config)
}