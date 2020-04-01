import {request} from './request'

export function getCollectAlbum(){
    return request({
        url: '/album/sublist',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })

}