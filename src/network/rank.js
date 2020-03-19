import {request} from './request'

export function getRank(){
    return request({
        url: '/toplist/detail'
    })
}