import {request} from './request'

// 热搜列表
export function getHotDetail(){
    return request({
        url: '/search/hot/detail'
    })
}

// 根据 keywords 搜索
export function getSing(keywords){
    return request({
        url: '/search?keywords=' + keywords
    })
}