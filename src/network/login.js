import {request} from './request'

export function login(account){
    return request({
        url: '/login/cellphone',
        params:{
            phone: account.phone ,
            password: account.password
        },
    })
}

export function refresh(){
    return request({
        url: '/login/status'
    })
}