import {request} from './request'

export function getSongItem(idx){
    return request({
        url: '/top/list?idx=' + idx
    })
}

// 获得歌曲url
export function getSongsUrl(id){
    return request({
        url: '/song/url?id=' + id
    })
}

// 获得歌曲详情
// export function getSongDetail(id){
//     return request({
//         url: '/song/detail?ids=' + id
//     })
// }