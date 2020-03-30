import {request} from './request'

export function login(account){
    return request({
        url: '/login/cellphone',
        params:{
            phone: account.phone ,
            password: account.password
        }
    })
}