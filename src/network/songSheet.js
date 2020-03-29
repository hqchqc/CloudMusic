import {request} from './request'

export function getSongSheet(id){
    return request({
        url: '/playlist/detail?id='+id
    })
}