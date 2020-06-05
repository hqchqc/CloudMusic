import {request} from './request'

// 获取歌单详情
export function getSongSheet(id){
    return request({
        url: '/playlist/detail?id='+id
    })
}
