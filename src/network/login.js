import {request} from './request'

// 登录
export function login(account){
    return request({
        url: '/login/cellphone',
        method: 'post',
        params:{
            phone: account.phone ,
            password: account.password
        },
        withCredentials: true
    })
}

// 退出登录
export function logout(){
    return request({
        url: '/logout'
    })
}

// 登陆状态
export function status(){
    return request({
        url: '/login/status'
    })
}

// 刷新登录
export function refresh(){
    return request({
        url: '/login/refresh'
    })
}