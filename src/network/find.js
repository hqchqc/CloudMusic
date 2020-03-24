import {request} from './request'

export function getFindBanner(){
    return request({
        url: '/banner?type=1'
    })
}

export function getRecommendList(){
    return request({
        url: '/personalized?limit=6'
    })
}

export function getRecommendSong(){
    return request({
        url: '/playlist/detail?id=2413406218'
    })
}
