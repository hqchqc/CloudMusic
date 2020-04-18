import {request} from './request'

// 收藏专辑
export function getCollectAlbum(){
    return request({
        url: '/album/sublist',
    })
}

// 收藏歌手
export function getCollectArtist(){
    return request({
        url: '/artist/sublist'
    })
}

// 收藏视频
export function getCollectMv(){
    return request({
        url: '/mv/sublist'
    })
}