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
        url: '/top/playlist?limit=3&cat=民谣'
    })
}

export class SongItem{
    constructor(songList){
        this.list = []
        var id = []
        for(var attr in songList){
            id.push(songList[attr].id)
        }
        return request({
            url: '/playlist/detail?id=' + id[Math.floor(Math.random()*3)]
        })
    }
}