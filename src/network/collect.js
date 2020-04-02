import {request} from './request'

export function getCollectAlbum(){
    return request({
        url: '/album/sublist',
    })

}