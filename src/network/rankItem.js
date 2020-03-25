import {request} from './request'

export function getSongItem(idx){
    return request({
        url: '/top/list?idx=' + idx
    })
}