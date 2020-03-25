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

export function getActionRecommend(){
    return request({
        url: '/top/playlist?limit=6&order=hot&cat=午休'
    })
}

export function getRadioRecommend(){
    return request({
        url: '/dj/recommend?limit=6'
    })
}