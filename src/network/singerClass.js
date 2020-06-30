import {request} from './request'

// 获取热门歌手
export function getSingerClass(){
    return request({
        url: '/top/artists'
    })
}

// 获取歌手分类列表
// type: 1  男歌手
//       2  女歌手
//       3  乐队
// area  7  华语
//       96 欧美
//       8  日本
//       16 韩国
//       0  其它
// initial: 按首字母索引查找参数
export function getCategory(type,area){
    return request({
        url: '/artist/list?type=' + type + '&area=' + area
    })
} 