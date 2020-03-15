import {request} from './request'

export function getHomeBanner(){
    return request({
        url: '/banner?type=1'
    })
}