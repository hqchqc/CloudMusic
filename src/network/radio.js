import {request} from './request'

export function radioBanner(){
    return request({
        url: '/dj/banner'
    })
} 