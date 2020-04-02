// 总体网络模块的封装
import axios from 'axios'
axios.defaults.withCredentials=true
export function request(config){
    const instance = axios.create({
        baseURL: 'http://47.95.109.144:3000',
        withCredentials: true
    })

    // instance.interceptors.request.use(config=>{
    //     let url = config.url
    //     // console.log(url.split('/').pop())
    //     if(url.split('/').pop() === 'sublist' || url.split('/').pop() === 'status'){
    //         config.params = {
    //             ...config.data,
    //             _t: Date.parse(new Date()) / 1000
    //         }    
    //         if(localStorage.getItem('userInfo')){
    //             config.headers.Authorization = JSON.parse(localStorage.getItem('userInfo')).access_token
    //         }
    //     }
    //     return config
    // },err=>{
    //     console.log(err)
    // })



    return instance(config)
}



