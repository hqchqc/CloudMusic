import {request} from './request'

// 获取热门歌手
export function getSingerClass(){
    return request({
        url: '/top/artists'
    })
}
