import {request} from './request'

export function getSongItem(idx){
    return request({
        url: '/top/list?idx=' + idx
    })
}

export function getSongsUrl(id){
    return request({
        url: '/song/url?id=' + id
    })
}