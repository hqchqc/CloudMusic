import {request} from './request'

// 获取 mv 排行
export function getMvTop(){
    return request({
        url: '/top/mv?limit=10'
    })
}

// 获取 mv 地址
export function getMv(id){
    return request({
        url: '/mv/url?id=' + id
    })
}