// 总体网络模块的封装
import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://47.95.109.144:3000',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })

    instance.interceptors.request.use(config=>{
        let url = config.url
        console.log(url.split('/').pop())
        if(url.split('/').pop() === 'sublist'){
            if(localStorage.getItem('userInfo')){
                config.headers.Authorization = localStorage.getItem('userInfo')
                console.log(localStorage.getItem('userInfo'))
            }
        }
        return config
    },err=>{
        console.log(err)
    })

    return instance(config)
}



